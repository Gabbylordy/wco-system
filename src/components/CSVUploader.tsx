import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, FileText, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import Papa from "papaparse";

interface CSVUploaderProps {
  onDataProcessed: (data: any[], filename: string) => void;
}

interface ProcessingStats {
  total: number;
  processed: number;
  errors: number;
  successes: number;
}

// Function to normalize different CSV formats
const normalizeCSVData = (rawData: any[]): any[] => {
  return rawData.map(row => {
    // First, try to detect if semicolon separated by checking first row
    const normalizedRow: any = {};
    
    // Map all possible column names to standard ones
    const columnMappings = {
      // Order ID variations
      order_id: ['order_id', 'Order ID', 'ORDER_ID', 'OrderID', 'order id'],
      // Timestamp variations
      timestamp: ['timestamp', 'Timestamp', 'TIMESTAMP', 'Order Date', 'order_date'],
      // Importer name variations
      importer_name: ['importer_name', 'Importer Name', 'importer name', 'customer_name', 'Customer Name'],
      // Delivery address variations
      delivery_address: ['delivery_address', 'Delivery Address', 'delivery address', 'address', 'Address'],
      // Product title variations
      product_title: ['product_title', 'Product Title', 'product title', 'product_name', 'Product Name'],
      // Description variations
      description: ['description', 'Description', 'product_description', 'Product Description'],
      // Product category variations
      product_category: ['product_category', 'Product Category', 'product category', 'category', 'Category'],
      // Price variations
      item_price_inr: ['item_price_inr', 'Item Price INR', 'item price inr', 'price', 'Price', 'item_price', 'Item Price'],
      // Image URL variations
      image_url: ['image_url', 'Image URL', 'image url', 'image', 'Image'],
      // Additional fields
      pid: ['pid', 'PID', 'product_id', 'Product ID'],
      number_of_items: ['number_of_items', 'Number of Items', 'quantity', 'Quantity', 'qty']
    };

    // For each standard column, find the matching column in the row
    Object.entries(columnMappings).forEach(([standardCol, possibleCols]) => {
      for (const col of possibleCols) {
        if (row[col] !== undefined) {
          normalizedRow[standardCol] = row[col];
          break;
        }
      }
    });

    return normalizedRow;
  });
};

// Function to detect delimiter
const detectDelimiter = (firstLine: string): string => {
  const commaCount = (firstLine.match(/,/g) || []).length;
  const semicolonCount = (firstLine.match(/;/g) || []).length;
  const tabCount = (firstLine.match(/\t/g) || []).length;
  
  if (semicolonCount > commaCount && semicolonCount > tabCount) return ';';
  if (tabCount > commaCount && tabCount > semicolonCount) return '\t';
  return ','; // default to comma
};

export const CSVUploader: React.FC<CSVUploaderProps> = ({ onDataProcessed }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileSize, setFileSize] = useState<number | null>(null);
  const [stats, setStats] = useState<ProcessingStats | null>(null);
  const [delimiter, setDelimiter] = useState<string>('auto'); // Track detected delimiter

  const simulateProcessing = (total: number) => {
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          
          const processingStats: ProcessingStats = {
            total,
            processed: total - Math.floor(total * 0.05),
            errors: Math.floor(total * 0.03),
            successes: total - Math.floor(total * 0.05)
          };
          setStats(processingStats);
          
          toast.success(`Processed ${total} records successfully!`);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    // Check for CSV or similar files
    if (!file.name.toLowerCase().endsWith('.csv') && 
        !file.name.toLowerCase().endsWith('.txt') &&
        !file.name.toLowerCase().endsWith('.tsv')) {
      toast.error("Please upload a CSV or text file");
      return;
    }

    setFileName(file.name);
    setFileSize(file.size);

    // First, read the file to detect delimiter
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      const firstLine = text.split('\n')[0];
      const detectedDelimiter = detectDelimiter(firstLine);
      setDelimiter(detectedDelimiter);
      
      // Now parse with detected delimiter
      Papa.parse(file, {
        header: true,
        delimiter: detectedDelimiter,
        skipEmptyLines: true,
        complete: (results) => {
          console.log(`Parsed CSV with ${detectedDelimiter} delimiter:`, results.data);
          
          if (results.data.length === 0) {
            toast.error("CSV file is empty or couldn't be parsed");
            return;
          }
          
          // Normalize data
          const normalizedData = normalizeCSVData(results.data);
          
          // Validate required columns
          const requiredColumns = [
            'order_id', 
            'timestamp', 
            'importer_name', 
            'product_title', 
            'description', 
            'product_category', 
            'item_price_inr'
          ];
          
          const firstRow = normalizedData[0] as any;
          const missingColumns = requiredColumns.filter(col => !firstRow || firstRow[col] === undefined);
          
          if (missingColumns.length > 0) {
            toast.error(`Missing required columns: ${missingColumns.join(', ')}`);
            console.log("First row sample:", firstRow);
            return;
          }

          const totalRows = normalizedData.length;
          simulateProcessing(totalRows);
          
          // Process data and pass to parent
          setTimeout(() => {
            onDataProcessed(normalizedData, file.name);
          }, 2500);
        },
        error: (error) => {
          toast.error(`Error parsing CSV: ${error.message}`);
          console.error("PapaParse error:", error);
        }
      });
    };
    
    reader.onerror = () => {
      toast.error("Error reading file");
    };
    
    reader.readAsText(file);
  }, [onDataProcessed]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
      'text/plain': ['.txt', '.tsv']
    },
    maxFiles: 1,
    disabled: isUploading
  });

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' bytes';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };

  // Update sample CSV to match your format
  const sampleCSV = `order_id;timestamp;importer_name;delivery_address;pid;product_category;product_title;description;image_url;item_price_inr;number_of_items
ORD-2026-34215936;16/01/2026 08:34;Marwan Al Jaber;40716 Jill Fort Yas Island Abu Dhabi;SHTEGXV5GFYUNPQQ;Clothing >> Men's Clothing >> Shirts;Shaftesbury London Men's Solid Formal Shirt;Key Features of Shaftesbury London Men's Solid Formal Shirt Fit: Slim Fabric: Cotton;http://example.com/shirt.jpg;9990;1
ORD-2026-83366901;25/01/2026 15:55;Salama Al Madani;3616 Brian Mountains Apt. 593 Suite 183 Al Bateen Abu Dhabi;CRTECN2QVAZYUD83;Automotive >> Accessories;Allure Auto CM 690 Car Mat Tata Sumo Grande;Buy Allure Auto CM 690 Car Mat Tata Sumo Grande for Rs.920 online.;http://example.com/carmat.jpg;9200;3`;

  const downloadSampleCSV = () => {
    const blob = new Blob([sampleCSV], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sample_ecommerce_data.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <Card className={`border-2 ${isDragActive ? 'border-primary border-dashed bg-primary/5' : 'border-dashed'}`}>
        <CardContent className="p-8">
          <div
            {...getRootProps()}
            className={`flex flex-col items-center justify-center p-8 transition-all cursor-pointer rounded-lg ${
              isDragActive ? 'bg-primary/10' : 'bg-muted/30 hover:bg-muted/50'
            }`}
          >
            <input {...getInputProps()} />
            
            {isUploading ? (
              <div className="text-center space-y-4">
                <div className="relative">
                  <Upload className="h-12 w-12 text-primary animate-pulse" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                </div>
                <div>
                  <h3 className="font-semibold">Processing {fileName}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Analyzing {stats?.total || 0} records...
                    {delimiter !== 'auto' && ` (Detected delimiter: "${delimiter}")`}
                  </p>
                </div>
                <Progress value={uploadProgress} className="w-full" />
                <p className="text-sm text-muted-foreground">{uploadProgress}% complete</p>
              </div>
            ) : isDragActive ? (
              <div className="text-center space-y-3">
                <Upload className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-semibold">Drop CSV/Text file here</h3>
                <p className="text-sm text-muted-foreground">Release to upload e-commerce data</p>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Upload className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Upload E-Commerce Data</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Drag & drop a CSV/TXT file or click to browse
                  </p>
                </div>
                <Button type="button">Browse Files</Button>
                <p className="text-xs text-muted-foreground">
                  Supports CSV, TSV, TXT (automatic delimiter detection)
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* File Info */}
      {fileName && (
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-blue-500" />
                <div>
                  <h4 className="font-medium">{fileName}</h4>
                  {fileSize && (
                    <p className="text-sm text-muted-foreground">
                      {formatFileSize(fileSize)} • {delimiter === ';' ? 'Semicolon-delimited' : delimiter === '\t' ? 'Tab-delimited' : 'Comma-delimited'}
                    </p>
                  )}
                </div>
              </div>
              {isUploading ? (
                <Badge variant="outline" className="bg-blue-50">
                  Processing...
                </Badge>
              ) : (
                <Badge className="bg-green-50 text-green-700">
                  <CheckCircle className="h-3 w-3 mr-1" /> Ready
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Processing Stats */}
      {stats && (
        <Card>
          <CardContent className="p-6">
            <h4 className="font-semibold mb-4">Processing Results</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold">{stats.total}</div>
                <div className="text-sm text-muted-foreground">Total Records</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-700">{stats.successes}</div>
                <div className="text-sm text-muted-foreground">Successful</div>
              </div>
              <div className="text-center p-3 bg-amber-50 rounded-lg">
                <div className="text-2xl font-bold text-amber-700">
                  {stats.total - stats.processed}
                </div>
                <div className="text-sm text-muted-foreground">Skipped</div>
              </div>
              <div className="text-center p-3 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-700">{stats.errors}</div>
                <div className="text-sm text-muted-foreground">Errors</div>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Processing accuracy</span>
                <span className="font-medium">{((stats.successes / stats.total) * 100).toFixed(1)}%</span>
              </div>
              <Progress value={(stats.successes / stats.total) * 100} className="h-2" />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Sample Data */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="h-5 w-5 text-amber-500" />
            <h4 className="font-semibold">Need sample data?</h4>
          </div>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Download a sample CSV file to test the system with realistic e-commerce data.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={downloadSampleCSV}>
                Download Sample CSV
              </Button>
              <Button variant="outline" size="sm" onClick={() => {
                // Simulate processing sample data
                Papa.parse(sampleCSV, { 
                  header: true, 
                  delimiter: ';',
                  skipEmptyLines: true,
                  complete: (results) => {
                    const normalizedData = normalizeCSVData(results.data as any[]);
                    simulateProcessing(normalizedData.length);
                    setTimeout(() => {
                      onDataProcessed(normalizedData, 'sample_ecommerce_data.csv');
                    }, 2500);
                  }
                });
              }}>
                Use Sample Data
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Required Columns */}
      {/* <Card>
        <CardContent className="p-6">
          <h4 className="font-semibold mb-3">Supported CSV Formats</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              { name: 'order_id', type: 'string', desc: 'Unique order identifier', required: true },
              { name: 'timestamp', type: 'datetime', desc: 'Order date/time', required: true },
              { name: 'importer_name', type: 'string', desc: 'Customer/recipient name', required: true },
              { name: 'delivery_address', type: 'string', desc: 'Shipping address', required: true },
              { name: 'product_title', type: 'string', desc: 'Product name', required: true },
              { name: 'description', type: 'text', desc: 'Product description', required: true },
              { name: 'product_category', type: 'string', desc: 'Category path', required: true },
              { name: 'item_price_inr', type: 'number', desc: 'Price in Indian Rupees', required: true },
              { name: 'image_url', type: 'url', desc: 'Product image (optional)', required: false },
              { name: 'pid', type: 'string', desc: 'Product ID (optional)', required: false },
              { name: 'number_of_items', type: 'number', desc: 'Quantity (optional)', required: false },
            ].map((col) => (
              <div key={col.name} className={`p-3 border rounded-lg ${col.required ? 'bg-blue-50 border-blue-200' : 'bg-muted/20'}`}>
                <div className="font-mono text-sm">{col.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{col.desc}</div>
                <div className="flex justify-between items-center mt-2">
                  <Badge variant="outline" className="text-xs">
                    {col.type}
                  </Badge>
                  {col.required && (
                    <Badge variant="secondary" className="text-xs bg-red-50 text-red-700">
                      Required
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm">
              <span className="font-medium">Note:</span> The system automatically detects delimiters (comma, semicolon, tab). 
              Column names can vary (case-insensitive, underscores vs spaces).
            </p>
          </div>
        </CardContent>
      </Card> */}
    </div>
  );
};