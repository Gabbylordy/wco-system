// // // // // // import React, { useState } from "react";
// // // // // // import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// // // // // // import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // // // // // import { Progress } from "@/components/ui/progress";
// // // // // // import { 
// // // // // //   Package, 
// // // // // //   AlertTriangle, 
// // // // // //   CheckCircle, 
// // // // // //   XCircle, 
// // // // // //   Filter, 
// // // // // //   Download, 
// // // // // //   Upload, 
// // // // // //   BarChart3,
// // // // // //   Shield,
// // // // // //   DollarSign,
// // // // // //   Search
// // // // // // } from "lucide-react";
// // // // // // import { mockParcelData, ProcessedParcel } from "@/data/parcelIntelData";
// // // // // // import { Input } from "@/components/ui/input";

// // // // // // const ParcelIntelPage = () => {
// // // // // //   const [filter, setFilter] = useState<string>("all");
// // // // // //   const [search, setSearch] = useState<string>("");

// // // // // //   const filteredData = mockParcelData.filter(parcel => {
// // // // // //     if (filter === "all") return true;
// // // // // //     if (filter === "high-risk") return parcel.is_high_risk;
// // // // // //     if (filter === "split") return parcel.is_split_shipment;
// // // // // //     if (filter === "duty") return parcel.duty_applicable;
// // // // // //     return parcel.assigned_risk_lane === filter;
// // // // // //   }).filter(parcel => 
// // // // // //     parcel.order_id.toLowerCase().includes(search.toLowerCase()) ||
// // // // // //     parcel.importer_name.toLowerCase().includes(search.toLowerCase()) ||
// // // // // //     parcel.product_title.toLowerCase().includes(search.toLowerCase())
// // // // // //   );

// // // // // //   const stats = {
// // // // // //     total: mockParcelData.length,
// // // // // //     highRisk: mockParcelData.filter(p => p.is_high_risk).length,
// // // // // //     splitShipments: mockParcelData.filter(p => p.is_split_shipment).length,
// // // // // //     dutyApplicable: mockParcelData.filter(p => p.duty_applicable).length,
// // // // // //     greenLane: mockParcelData.filter(p => p.assigned_risk_lane === "GREEN").length,
// // // // // //     redLane: mockParcelData.filter(p => p.assigned_risk_lane === "RED").length,
// // // // // //     blackLane: mockParcelData.filter(p => p.assigned_risk_lane === "BLACK").length,
// // // // // //     totalDuty: mockParcelData.reduce((sum, p) => sum + p.duty_payable_aed, 0)
// // // // // //   };

// // // // // //   const getLaneColor = (lane: string) => {
// // // // // //     switch(lane) {
// // // // // //       case "GREEN": return "bg-green-100 text-green-800 border-green-300";
// // // // // //       case "YELLOW": return "bg-yellow-100 text-yellow-800 border-yellow-300";
// // // // // //       case "RED": return "bg-red-100 text-red-800 border-red-300";
// // // // // //       case "BLACK": return "bg-gray-800 text-white border-gray-700";
// // // // // //       default: return "bg-gray-100 text-gray-800 border-gray-300";
// // // // // //     }
// // // // // //   };

// // // // // //   const getRiskBadge = (isHighRisk: boolean) => {
// // // // // //     return isHighRisk ? (
// // // // // //       <Badge variant="destructive" className="flex items-center gap-1">
// // // // // //         <AlertTriangle className="h-3 w-3" /> High Risk
// // // // // //       </Badge>
// // // // // //     ) : (
// // // // // //       <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
// // // // // //         <CheckCircle className="h-3 w-3 mr-1" /> Low Risk
// // // // // //       </Badge>
// // // // // //     );
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="p-6 space-y-6 overflow-y-auto h-full">
// // // // // //       {/* Header */}
// // // // // //       <div>
// // // // // //         <div className="flex items-center gap-3 mb-2">
// // // // // //           <Package className="h-8 w-8 text-primary" />
// // // // // //           <h1 className="text-3xl font-bold tracking-tight">PARCEL-INTEL</h1>
// // // // // //         </div>
// // // // // //         <p className="text-muted-foreground">
// // // // // //           E-commerce parcel intelligence engine for split shipment detection, HS classification, duty calculation, and risk assessment
// // // // // //         </p>
// // // // // //       </div>

// // // // // //       {/* KPI Cards */}
// // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // // // // //         <Card>
// // // // // //           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// // // // // //             <CardTitle className="text-sm font-medium">Total Parcels</CardTitle>
// // // // // //             <Package className="h-4 w-4 text-muted-foreground" />
// // // // // //           </CardHeader>
// // // // // //           <CardContent>
// // // // // //             <div className="text-2xl font-bold">{stats.total}</div>
// // // // // //             <div className="flex items-center gap-2 mt-2">
// // // // // //               <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
// // // // // //                 <div className="h-full bg-green-500" style={{ width: `${(stats.greenLane/stats.total)*100}%` }} />
// // // // // //                 <div className="h-full bg-yellow-500" style={{ width: `${((stats.total - stats.greenLane - stats.redLane - stats.blackLane)/stats.total)*100}%` }} />
// // // // // //                 <div className="h-full bg-red-500" style={{ width: `${(stats.redLane/stats.total)*100}%` }} />
// // // // // //                 <div className="h-full bg-gray-800" style={{ width: `${(stats.blackLane/stats.total)*100}%` }} />
// // // // // //               </div>
// // // // // //               <span className="text-xs text-muted-foreground">Lane mix</span>
// // // // // //             </div>
// // // // // //           </CardContent>
// // // // // //         </Card>

// // // // // //         <Card>
// // // // // //           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// // // // // //             <CardTitle className="text-sm font-medium">Split Shipments</CardTitle>
// // // // // //             <AlertTriangle className="h-4 w-4 text-amber-500" />
// // // // // //           </CardHeader>
// // // // // //           <CardContent>
// // // // // //             <div className="text-2xl font-bold">{stats.splitShipments}</div>
// // // // // //             <p className="text-xs text-muted-foreground">
// // // // // //               Potential revenue evasion detected
// // // // // //             </p>
// // // // // //           </CardContent>
// // // // // //         </Card>

// // // // // //         <Card>
// // // // // //           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// // // // // //             <CardTitle className="text-sm font-medium">High Risk Items</CardTitle>
// // // // // //             <Shield className="h-4 w-4 text-red-500" />
// // // // // //           </CardHeader>
// // // // // //           <CardContent>
// // // // // //             <div className="text-2xl font-bold">{stats.highRisk}</div>
// // // // // //             <p className="text-xs text-muted-foreground">
// // // // // //               {stats.blackLane} in BLACK lane
// // // // // //             </p>
// // // // // //           </CardContent>
// // // // // //         </Card>

// // // // // //         <Card>
// // // // // //           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// // // // // //             <CardTitle className="text-sm font-medium">Duty Payable</CardTitle>
// // // // // //             <DollarSign className="h-4 w-4 text-green-500" />
// // // // // //           </CardHeader>
// // // // // //           <CardContent>
// // // // // //             <div className="text-2xl font-bold">AED {stats.totalDuty.toFixed(2)}</div>
// // // // // //             <p className="text-xs text-muted-foreground">
// // // // // //               From {stats.dutyApplicable} parcels
// // // // // //             </p>
// // // // // //           </CardContent>
// // // // // //         </Card>
// // // // // //       </div>

// // // // // //       {/* Controls */}
// // // // // //       <Card>
// // // // // //         <CardContent className="p-4">
// // // // // //           <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
// // // // // //             <div className="flex-1 w-full md:w-auto">
// // // // // //               <div className="relative">
// // // // // //                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
// // // // // //                 <Input 
// // // // // //                   placeholder="Search parcels by ID, importer, or product..." 
// // // // // //                   className="pl-10"
// // // // // //                   value={search}
// // // // // //                   onChange={(e) => setSearch(e.target.value)}
// // // // // //                 />
// // // // // //               </div>
// // // // // //             </div>
// // // // // //             <div className="flex items-center gap-2">
// // // // // //               <Button variant="outline" size="sm" className="gap-2">
// // // // // //                 <Upload className="h-4 w-4" />
// // // // // //                 Upload CSV
// // // // // //               </Button>
// // // // // //               <Button variant="outline" size="sm" className="gap-2">
// // // // // //                 <Download className="h-4 w-4" />
// // // // // //                 Export Results
// // // // // //               </Button>
// // // // // //               <Button size="sm" className="gap-2">
// // // // // //                 <BarChart3 className="h-4 w-4" />
// // // // // //                 Run Analysis
// // // // // //               </Button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </CardContent>
// // // // // //       </Card>

// // // // // //       {/* Main Content */}
// // // // // //       <Tabs defaultValue="overview" className="space-y-6">
// // // // // //         <TabsList>
// // // // // //           <TabsTrigger value="overview">Overview</TabsTrigger>
// // // // // //           <TabsTrigger value="parcels">Parcel Details</TabsTrigger>
// // // // // //           <TabsTrigger value="analytics">Analytics</TabsTrigger>
// // // // // //           <TabsTrigger value="settings">Settings</TabsTrigger>
// // // // // //         </TabsList>

// // // // // //         <TabsContent value="overview" className="space-y-6">
// // // // // //           {/* Risk Lane Distribution */}
// // // // // //           <Card>
// // // // // //             <CardHeader>
// // // // // //               <CardTitle>Risk Lane Distribution</CardTitle>
// // // // // //               <CardDescription>How parcels are routed based on risk assessment</CardDescription>
// // // // // //             </CardHeader>
// // // // // //             <CardContent>
// // // // // //               <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
// // // // // //                 {[
// // // // // //                   { lane: "GREEN", count: stats.greenLane, description: "Auto-clear, no intervention", color: "bg-green-500" },
// // // // // //                   { lane: "YELLOW", count: stats.total - stats.greenLane - stats.redLane - stats.blackLane, description: "Document review required", color: "bg-yellow-500" },
// // // // // //                   { lane: "RED", count: stats.redLane, description: "Physical inspection", color: "bg-red-500" },
// // // // // //                   { lane: "BLACK", count: stats.blackLane, description: "Intelligence/security hold", color: "bg-gray-800" }
// // // // // //                 ].map((item) => (
// // // // // //                   <Card key={item.lane} className={`border-l-4 ${item.lane === "GREEN" ? "border-l-green-500" : item.lane === "YELLOW" ? "border-l-yellow-500" : item.lane === "RED" ? "border-l-red-500" : "border-l-gray-800"}`}>
// // // // // //                     <CardContent className="p-6">
// // // // // //                       <div className="flex items-center justify-between mb-2">
// // // // // //                         <h3 className="font-bold text-xl">{item.lane}</h3>
// // // // // //                         <Badge className={getLaneColor(item.lane)}>{item.count}</Badge>
// // // // // //                       </div>
// // // // // //                       <p className="text-sm text-muted-foreground">{item.description}</p>
// // // // // //                       <Progress value={(item.count/stats.total)*100} className="mt-4 h-2" indicatorClassName={item.color} />
// // // // // //                     </CardContent>
// // // // // //                   </Card>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </CardContent>
// // // // // //           </Card>

// // // // // //           {/* Recent High-Risk Items */}
// // // // // //           <Card>
// // // // // //             <CardHeader>
// // // // // //               <CardTitle>High-Risk Parcels Requiring Attention</CardTitle>
// // // // // //               <CardDescription>Items flagged for security, safety, or compliance risks</CardDescription>
// // // // // //             </CardHeader>
// // // // // //             <CardContent>
// // // // // //               <Table>
// // // // // //                 <TableHeader>
// // // // // //                   <TableRow>
// // // // // //                     <TableHead>Order ID</TableHead>
// // // // // //                     <TableHead>Importer</TableHead>
// // // // // //                     <TableHead>Product</TableHead>
// // // // // //                     <TableHead>Risk Category</TableHead>
// // // // // //                     <TableHead>Duty Payable</TableHead>
// // // // // //                     <TableHead>Risk Lane</TableHead>
// // // // // //                     <TableHead>Action</TableHead>
// // // // // //                   </TableRow>
// // // // // //                 </TableHeader>
// // // // // //                 <TableBody>
// // // // // //                   {mockParcelData.filter(p => p.is_high_risk).map((parcel) => (
// // // // // //                     <TableRow key={parcel.order_id}>
// // // // // //                       <TableCell className="font-medium">{parcel.order_id}</TableCell>
// // // // // //                       <TableCell>{parcel.importer_name}</TableCell>
// // // // // //                       <TableCell className="max-w-[200px] truncate">{parcel.product_title}</TableCell>
// // // // // //                       <TableCell>
// // // // // //                         <div className="flex flex-wrap gap-1">
// // // // // //                           {parcel.risk_categories.map((cat, idx) => (
// // // // // //                             <Badge key={idx} variant="outline" className="text-xs">
// // // // // //                               {cat}
// // // // // //                             </Badge>
// // // // // //                           ))}
// // // // // //                         </div>
// // // // // //                       </TableCell>
// // // // // //                       <TableCell>AED {parcel.duty_payable_aed.toFixed(2)}</TableCell>
// // // // // //                       <TableCell>
// // // // // //                         <Badge className={getLaneColor(parcel.assigned_risk_lane)}>
// // // // // //                           {parcel.assigned_risk_lane}
// // // // // //                         </Badge>
// // // // // //                       </TableCell>
// // // // // //                       <TableCell>
// // // // // //                         <Button size="sm" variant="outline">Review</Button>
// // // // // //                       </TableCell>
// // // // // //                     </TableRow>
// // // // // //                   ))}
// // // // // //                 </TableBody>
// // // // // //               </Table>
// // // // // //             </CardContent>
// // // // // //           </Card>
// // // // // //         </TabsContent>

// // // // // //         <TabsContent value="parcels">
// // // // // //           <Card>
// // // // // //             <CardHeader>
// // // // // //               <div className="flex items-center justify-between">
// // // // // //                 <div>
// // // // // //                   <CardTitle>All Processed Parcels</CardTitle>
// // // // // //                   <CardDescription>Real-time analysis of e-commerce shipments</CardDescription>
// // // // // //                 </div>
// // // // // //                 <div className="flex gap-2">
// // // // // //                   <Button 
// // // // // //                     variant={filter === "all" ? "default" : "outline"} 
// // // // // //                     size="sm"
// // // // // //                     onClick={() => setFilter("all")}
// // // // // //                   >
// // // // // //                     All ({mockParcelData.length})
// // // // // //                   </Button>
// // // // // //                   <Button 
// // // // // //                     variant={filter === "high-risk" ? "default" : "outline"} 
// // // // // //                     size="sm"
// // // // // //                     onClick={() => setFilter("high-risk")}
// // // // // //                   >
// // // // // //                     High Risk ({stats.highRisk})
// // // // // //                   </Button>
// // // // // //                   <Button 
// // // // // //                     variant={filter === "split" ? "default" : "outline"} 
// // // // // //                     size="sm"
// // // // // //                     onClick={() => setFilter("split")}
// // // // // //                   >
// // // // // //                     Split ({stats.splitShipments})
// // // // // //                   </Button>
// // // // // //                   <Button 
// // // // // //                     variant={filter === "duty" ? "default" : "outline"} 
// // // // // //                     size="sm"
// // // // // //                     onClick={() => setFilter("duty")}
// // // // // //                   >
// // // // // //                     Duty ({stats.dutyApplicable})
// // // // // //                   </Button>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </CardHeader>
// // // // // //             <CardContent>
// // // // // //               <Table>
// // // // // //                 <TableHeader>
// // // // // //                   <TableRow>
// // // // // //                     <TableHead>Order ID</TableHead>
// // // // // //                     <TableHead>Importer</TableHead>
// // // // // //                     <TableHead>Product</TableHead>
// // // // // //                     <TableHead>HS Code</TableHead>
// // // // // //                     <TableHead>Value (AED)</TableHead>
// // // // // //                     <TableHead>Duty</TableHead>
// // // // // //                     <TableHead>Risk</TableHead>
// // // // // //                     <TableHead>Lane</TableHead>
// // // // // //                     <TableHead>Action</TableHead>
// // // // // //                   </TableRow>
// // // // // //                 </TableHeader>
// // // // // //                 <TableBody>
// // // // // //                   {filteredData.map((parcel) => (
// // // // // //                     <TableRow key={parcel.order_id} className="hover:bg-muted/50">
// // // // // //                       <TableCell className="font-medium">{parcel.order_id}</TableCell>
// // // // // //                       <TableCell>
// // // // // //                         <div>
// // // // // //                           <div>{parcel.importer_name}</div>
// // // // // //                           <div className="text-xs text-muted-foreground">
// // // // // //                             {parcel.is_split_shipment && (
// // // // // //                               <Badge variant="outline" className="text-xs bg-amber-50">
// // // // // //                                 Split Shipment
// // // // // //                               </Badge>
// // // // // //                             )}
// // // // // //                           </div>
// // // // // //                         </div>
// // // // // //                       </TableCell>
// // // // // //                       <TableCell className="max-w-[180px]">
// // // // // //                         <div className="truncate">{parcel.product_title}</div>
// // // // // //                         <div className="text-xs text-muted-foreground truncate">
// // // // // //                           {parcel.product_category}
// // // // // //                         </div>
// // // // // //                       </TableCell>
// // // // // //                       <TableCell>
// // // // // //                         <div>
// // // // // //                           <div className="font-mono">{parcel.predicted_hs_code}</div>
// // // // // //                           <div className="text-xs text-muted-foreground">
// // // // // //                             {(parcel.hs_confidence_score * 100).toFixed(0)}% confidence
// // // // // //                           </div>
// // // // // //                         </div>
// // // // // //                       </TableCell>
// // // // // //                       <TableCell>AED {parcel.item_price_aed.toFixed(2)}</TableCell>
// // // // // //                       <TableCell>
// // // // // //                         {parcel.duty_applicable ? (
// // // // // //                           <div className="text-green-600 font-medium">
// // // // // //                             AED {parcel.duty_payable_aed.toFixed(2)}
// // // // // //                           </div>
// // // // // //                         ) : (
// // // // // //                           <span className="text-muted-foreground">Exempt</span>
// // // // // //                         )}
// // // // // //                       </TableCell>
// // // // // //                       <TableCell>{getRiskBadge(parcel.is_high_risk)}</TableCell>
// // // // // //                       <TableCell>
// // // // // //                         <Badge className={getLaneColor(parcel.assigned_risk_lane)}>
// // // // // //                           {parcel.assigned_risk_lane}
// // // // // //                         </Badge>
// // // // // //                       </TableCell>
// // // // // //                       <TableCell>
// // // // // //                         <div className="flex gap-2">
// // // // // //                           <Button size="sm" variant="ghost">View</Button>
// // // // // //                           <Button size="sm">Process</Button>
// // // // // //                         </div>
// // // // // //                       </TableCell>
// // // // // //                     </TableRow>
// // // // // //                   ))}
// // // // // //                 </TableBody>
// // // // // //               </Table>
// // // // // //             </CardContent>
// // // // // //           </Card>
// // // // // //         </TabsContent>

// // // // // //         <TabsContent value="analytics">
// // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // // // // //             {/* Revenue Analytics */}
// // // // // //             <Card>
// // // // // //               <CardHeader>
// // // // // //                 <CardTitle>Revenue Analytics</CardTitle>
// // // // // //                 <CardDescription>Duty collection and revenue protection</CardDescription>
// // // // // //               </CardHeader>
// // // // // //               <CardContent>
// // // // // //                 <div className="space-y-4">
// // // // // //                   <div>
// // // // // //                     <div className="flex justify-between mb-1">
// // // // // //                       <span className="text-sm">Duty Collected</span>
// // // // // //                       <span className="text-sm font-medium">AED {stats.totalDuty.toFixed(2)}</span>
// // // // // //                     </div>
// // // // // //                     <Progress value={(stats.dutyApplicable/stats.total)*100} className="h-2" />
// // // // // //                   </div>
// // // // // //                   <div className="grid grid-cols-2 gap-4">
// // // // // //                     <Card className="bg-muted/50">
// // // // // //                       <CardContent className="p-4">
// // // // // //                         <div className="text-sm text-muted-foreground">Split Shipments</div>
// // // // // //                         <div className="text-2xl font-bold">{stats.splitShipments}</div>
// // // // // //                         <div className="text-xs text-muted-foreground">
// // // // // //                           Potential evasion detected
// // // // // //                         </div>
// // // // // //                       </CardContent>
// // // // // //                     </Card>
// // // // // //                     <Card className="bg-muted/50">
// // // // // //                       <CardContent className="p-4">
// // // // // //                         <div className="text-sm text-muted-foreground">De-minimis Abuse</div>
// // // // // //                         <div className="text-2xl font-bold">{stats.splitShipments}</div>
// // // // // //                         <div className="text-xs text-muted-foreground">
// // // // // //                           Value above AED 1,000
// // // // // //                         </div>
// // // // // //                       </CardContent>
// // // // // //                     </Card>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </CardContent>
// // // // // //             </Card>

// // // // // //             {/* Risk Analytics */}
// // // // // //             <Card>
// // // // // //               <CardHeader>
// // // // // //                 <CardTitle>Risk Analytics</CardTitle>
// // // // // //                 <CardDescription>Security and safety risk distribution</CardDescription>
// // // // // //               </CardHeader>
// // // // // //               <CardContent>
// // // // // //                 <div className="space-y-4">
// // // // // //                   {[
// // // // // //                     { category: "Weapons", count: 1, color: "bg-red-500" },
// // // // // //                     { category: "Drones", count: 1, color: "bg-amber-500" },
// // // // // //                     { category: "Lithium Batteries", count: 1, color: "bg-orange-500" },
// // // // // //                     { category: "Precious Metals", count: 0, color: "bg-yellow-500" },
// // // // // //                   ].map((item) => (
// // // // // //                     <div key={item.category}>
// // // // // //                       <div className="flex justify-between mb-1">
// // // // // //                         <span className="text-sm">{item.category}</span>
// // // // // //                         <span className="text-sm font-medium">{item.count}</span>
// // // // // //                       </div>
// // // // // //                       <Progress value={(item.count/stats.highRisk)*100} className="h-2" indicatorClassName={item.color} />
// // // // // //                     </div>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               </CardContent>
// // // // // //             </Card>

// // // // // //             {/* HS Classification Performance */}
// // // // // //             <Card className="lg:col-span-2">
// // // // // //               <CardHeader>
// // // // // //                 <CardTitle>HS Classification Performance</CardTitle>
// // // // // //                 <CardDescription>Accuracy and confidence of automated HS coding</CardDescription>
// // // // // //               </CardHeader>
// // // // // //               <CardContent>
// // // // // //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // // //                   <div className="space-y-2">
// // // // // //                     <div className="text-4xl font-bold text-center">92%</div>
// // // // // //                     <div className="text-center text-sm text-muted-foreground">Average Confidence</div>
// // // // // //                   </div>
// // // // // //                   <div className="space-y-2">
// // // // // //                     <div className="text-4xl font-bold text-center">87%</div>
// // // // // //                     <div className="text-center text-sm text-muted-foreground">Auto-classified</div>
// // // // // //                   </div>
// // // // // //                   <div className="space-y-2">
// // // // // //                     <div className="text-4xl font-bold text-center">13%</div>
// // // // // //                     <div className="text-center text-sm text-muted-foreground">Escalated for Review</div>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </CardContent>
// // // // // //             </Card>
// // // // // //           </div>
// // // // // //         </TabsContent>
// // // // // //       </Tabs>

// // // // // //       {/* Upload Panel */}
// // // // // //       <Card className="border-dashed border-2">
// // // // // //         <CardContent className="p-8">
// // // // // //           <div className="flex flex-col items-center justify-center text-center space-y-4">
// // // // // //             <Upload className="h-12 w-12 text-muted-foreground" />
// // // // // //             <div>
// // // // // //               <h3 className="text-lg font-semibold">Upload E-Commerce Data</h3>
// // // // // //               <p className="text-sm text-muted-foreground">
// // // // // //                 Upload CSV file with e-commerce orders for real-time analysis
// // // // // //               </p>
// // // // // //             </div>
// // // // // //             <div className="flex gap-4">
// // // // // //               <Button className="gap-2">
// // // // // //                 <Upload className="h-4 w-4" />
// // // // // //                 Upload CSV
// // // // // //               </Button>
// // // // // //               <Button variant="outline">
// // // // // //                 Use Sample Data
// // // // // //               </Button>
// // // // // //             </div>
// // // // // //             <p className="text-xs text-muted-foreground">
// // // // // //               Supports CSV format with order_id, timestamp, importer_name, product_title, description, product_category, item_price_inr
// // // // // //             </p>
// // // // // //           </div>
// // // // // //         </CardContent>
// // // // // //       </Card>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ParcelIntelPage;



// // // // // // // import React, { useState } from "react";
// // // // // // // import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// // // // // // // import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // // // // // // import { Progress } from "@/components/ui/progress";
// // // // // // // import {
// // // // // // //     Package,
// // // // // // //     AlertTriangle,
// // // // // // //     CheckCircle,
// // // // // // //     XCircle,
// // // // // // //     Filter,
// // // // // // //     Download,
// // // // // // //     Upload as UploadIcon,
// // // // // // //     BarChart3,
// // // // // // //     Shield,
// // // // // // //     DollarSign,
// // // // // // //     Search,
// // // // // // //     Loader2,
// // // // // // //     FileUp
// // // // // // // } from "lucide-react";
// // // // // // // import { Input } from "@/components/ui/input";
// // // // // // // import { CSVUploader } from "@/components/CSVUploader";
// // // // // // // import { ParcelProcessor, type ProcessedParcel, type RawParcelData } from "@/utils/parcelProcessor";

// // // // // // // const ParcelIntelPage = () => {
// // // // // // //     // STATE FOR PROCESSED DATA
// // // // // // //     const [processedData, setProcessedData] = useState<ProcessedParcel[]>([]);
// // // // // // //     const [isProcessing, setIsProcessing] = useState(false);
// // // // // // //     const [filter, setFilter] = useState<string>("all");
// // // // // // //     const [search, setSearch] = useState<string>("");
// // // // // // //     const [showUploader, setShowUploader] = useState<boolean>(true); // NEW: Control uploader visibility

// // // // // // //     // HANDLE CSV DATA UPLOAD
// // // // // // //     const handleDataProcessed = (rawData: RawParcelData[], filename: string) => {
// // // // // // //         console.log(`Processing ${rawData.length} records from ${filename}`);
// // // // // // //         setIsProcessing(true);

// // // // // // //         // Process the data using ParcelProcessor
// // // // // // //         setTimeout(() => {
// // // // // // //             try {
// // // // // // //                 const processor = new ParcelProcessor(rawData);
// // // // // // //                 const results = processor.process();
// // // // // // //                 setProcessedData(results);
// // // // // // //                 setShowUploader(false); // Hide uploader after processing

// // // // // // //                 // Show success message
// // // // // // //                 const splitCount = results.filter(p => p.is_split_shipment).length;
// // // // // // //                 const dutyTotal = results.reduce((sum, p) => sum + p.duty_payable_aed, 0);
// // // // // // //                 const highRiskCount = results.filter(p => p.is_high_risk).length;

// // // // // // //                 console.log(`Processed ${results.length} parcels`);
// // // // // // //                 console.log(`Found ${splitCount} split shipments`);
// // // // // // //                 console.log(`Total duty: AED ${dutyTotal.toFixed(2)}`);
// // // // // // //                 console.log(`High-risk items: ${highRiskCount}`);

// // // // // // //             } catch (error) {
// // // // // // //                 console.error("Error processing data:", error);
// // // // // // //             } finally {
// // // // // // //                 setIsProcessing(false);
// // // // // // //             }
// // // // // // //         }, 1000);
// // // // // // //     };

// // // // // // //     // HANDLE UPLOAD NEW CSV
// // // // // // //     const handleUploadNewCSV = () => {
// // // // // // //         setProcessedData([]); // Clear current data
// // // // // // //         setShowUploader(true); // Show uploader again
// // // // // // //         setFilter("all"); // Reset filter
// // // // // // //         setSearch(""); // Reset search
// // // // // // //     };

// // // // // // //     // USE PROCESSED DATA INSTEAD OF MOCK DATA
// // // // // // //     const filteredData = processedData.filter(parcel => {
// // // // // // //         if (filter === "all") return true;
// // // // // // //         if (filter === "high-risk") return parcel.is_high_risk;
// // // // // // //         if (filter === "split") return parcel.is_split_shipment;
// // // // // // //         if (filter === "duty") return parcel.duty_applicable;
// // // // // // //         return parcel.assigned_risk_lane === filter;
// // // // // // //     }).filter(parcel =>
// // // // // // //         parcel.order_id.toLowerCase().includes(search.toLowerCase()) ||
// // // // // // //         parcel.importer_name.toLowerCase().includes(search.toLowerCase()) ||
// // // // // // //         parcel.product_title.toLowerCase().includes(search.toLowerCase())
// // // // // // //     );

// // // // // // //     // CALCULATE STATS FROM PROCESSED DATA
// // // // // // //     const stats = {
// // // // // // //         total: processedData.length,
// // // // // // //         highRisk: processedData.filter(p => p.is_high_risk).length,
// // // // // // //         splitShipments: processedData.filter(p => p.is_split_shipment).length,
// // // // // // //         dutyApplicable: processedData.filter(p => p.duty_applicable).length,
// // // // // // //         greenLane: processedData.filter(p => p.assigned_risk_lane === "GREEN").length,
// // // // // // //         yellowLane: processedData.filter(p => p.assigned_risk_lane === "YELLOW").length,
// // // // // // //         redLane: processedData.filter(p => p.assigned_risk_lane === "RED").length,
// // // // // // //         blackLane: processedData.filter(p => p.assigned_risk_lane === "BLACK").length,
// // // // // // //         totalDuty: processedData.reduce((sum, p) => sum + p.duty_payable_aed, 0)
// // // // // // //     };

// // // // // // //     // EXPORT FUNCTIONALITY
// // // // // // //     const exportToCSV = () => {
// // // // // // //         if (processedData.length === 0) {
// // // // // // //             alert("No data to export. Please upload and process a CSV file first.");
// // // // // // //             return;
// // // // // // //         }

// // // // // // //         const headers = [
// // // // // // //             'order_id',
// // // // // // //             'importer_name',
// // // // // // //             'timestamp',
// // // // // // //             'product_title',
// // // // // // //             'description',
// // // // // // //             'product_category',
// // // // // // //             'item_price_inr',
// // // // // // //             'item_price_aed',
// // // // // // //             'predicted_hs_code',
// // // // // // //             'hs_confidence_score',
// // // // // // //             'is_split_shipment',
// // // // // // //             'daily_total_aed',
// // // // // // //             'duty_applicable',
// // // // // // //             'duty_rate',
// // // // // // //             'duty_payable_aed',
// // // // // // //             'risk_keywords_found',
// // // // // // //             'risk_categories',
// // // // // // //             'is_high_risk',
// // // // // // //             'assigned_risk_lane',
// // // // // // //             'clearance_recommendation'
// // // // // // //         ];

// // // // // // //         const csvContent = [
// // // // // // //             headers.join(','),
// // // // // // //             ...processedData.map(p => [
// // // // // // //                 p.order_id,
// // // // // // //                 `"${p.importer_name}"`,
// // // // // // //                 p.timestamp,
// // // // // // //                 `"${p.product_title}"`,
// // // // // // //                 `"${p.description}"`,
// // // // // // //                 `"${p.product_category}"`,
// // // // // // //                 p.item_price_inr,
// // // // // // //                 p.item_price_aed.toFixed(2),
// // // // // // //                 p.predicted_hs_code,
// // // // // // //                 (p.hs_confidence_score * 100).toFixed(1) + '%',
// // // // // // //                 p.is_split_shipment ? 'YES' : 'NO',
// // // // // // //                 p.daily_total_aed.toFixed(2),
// // // // // // //                 p.duty_applicable ? 'YES' : 'NO',
// // // // // // //                 p.duty_rate + '%',
// // // // // // //                 p.duty_payable_aed.toFixed(2),
// // // // // // //                 `"${p.risk_keywords_found.join(';')}"`,
// // // // // // //                 `"${p.risk_categories.join(';')}"`,
// // // // // // //                 p.is_high_risk ? 'HIGH' : 'LOW',
// // // // // // //                 p.assigned_risk_lane,
// // // // // // //                 p.clearance_recommendation
// // // // // // //             ].join(','))
// // // // // // //         ].join('\n');

// // // // // // //         const blob = new Blob([csvContent], { type: 'text/csv' });
// // // // // // //         const url = window.URL.createObjectURL(blob);
// // // // // // //         const a = document.createElement('a');
// // // // // // //         a.href = url;
// // // // // // //         a.download = `hackathon_results_${new Date().toISOString().split('T')[0]}.csv`;
// // // // // // //         document.body.appendChild(a);
// // // // // // //         a.click();
// // // // // // //         document.body.removeChild(a);
// // // // // // //         window.URL.revokeObjectURL(url);
// // // // // // //     };

// // // // // // //     // HELPER FUNCTIONS
// // // // // // //     const getLaneColor = (lane: string) => {
// // // // // // //         switch (lane) {
// // // // // // //             case "GREEN": return "bg-green-100 text-green-800 border-green-300";
// // // // // // //             case "YELLOW": return "bg-yellow-100 text-yellow-800 border-yellow-300";
// // // // // // //             case "RED": return "bg-red-100 text-red-800 border-red-300";
// // // // // // //             case "BLACK": return "bg-gray-800 text-white border-gray-700";
// // // // // // //             default: return "bg-gray-100 text-gray-800 border-gray-300";
// // // // // // //         }
// // // // // // //     };

// // // // // // //     const getRiskBadge = (isHighRisk: boolean) => {
// // // // // // //         return isHighRisk ? (
// // // // // // //             <Badge variant="destructive" className="flex items-center gap-1">
// // // // // // //                 <AlertTriangle className="h-3 w-3" /> High Risk
// // // // // // //             </Badge>
// // // // // // //         ) : (
// // // // // // //             <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
// // // // // // //                 <CheckCircle className="h-3 w-3 mr-1" /> Low Risk
// // // // // // //             </Badge>
// // // // // // //         );
// // // // // // //     };

// // // // // // //     return (
// // // // // // //         <div className="p-6 space-y-6 overflow-y-auto h-full">
// // // // // // //             {/* Header */}
// // // // // // //             <div>
// // // // // // //                 <div className="flex items-center gap-3 mb-2">
// // // // // // //                     <Package className="h-8 w-8 text-primary" />
// // // // // // //                     <h1 className="text-3xl font-bold tracking-tight">PARCEL-INTEL</h1>
// // // // // // //                 </div>
// // // // // // //                 <p className="text-muted-foreground">
// // // // // // //                     E-commerce parcel intelligence engine for split shipment detection, HS classification, duty calculation, and risk assessment
// // // // // // //                 </p>
// // // // // // //             </div>

// // // // // // //             {/* Controls */}
// // // // // // //             <Card>
// // // // // // //                 <CardContent className="p-4">
// // // // // // //                     <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
// // // // // // //                         <div className="flex-1 w-full md:w-auto">
// // // // // // //                             <div className="relative">
// // // // // // //                                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
// // // // // // //                                 <Input
// // // // // // //                                     placeholder="Search parcels by ID, importer, or product..."
// // // // // // //                                     className="pl-10"
// // // // // // //                                     value={search}
// // // // // // //                                     onChange={(e) => setSearch(e.target.value)}
// // // // // // //                                     disabled={isProcessing || processedData.length === 0}
// // // // // // //                                 />
// // // // // // //                             </div>
// // // // // // //                         </div>
// // // // // // //                         <div className="flex items-center gap-2">
// // // // // // //                             {/* Always show Upload button */}
// // // // // // //                             <Button
// // // // // // //                                 variant="outline"
// // // // // // //                                 size="sm"
// // // // // // //                                 className="gap-2"
// // // // // // //                                 onClick={handleUploadNewCSV}
// // // // // // //                                 disabled={isProcessing}
// // // // // // //                             >
// // // // // // //                                 <UploadIcon className="h-4 w-4" />
// // // // // // //                                 {processedData.length > 0 ? 'Upload New' : 'Upload CSV'}
// // // // // // //                             </Button>

// // // // // // //                             {/* Show Export button only when data exists */}
// // // // // // //                             {processedData.length > 0 && (
// // // // // // //                                 <Button
// // // // // // //                                     variant="outline"
// // // // // // //                                     size="sm"
// // // // // // //                                     className="gap-2"
// // // // // // //                                     onClick={exportToCSV}
// // // // // // //                                     disabled={isProcessing}
// // // // // // //                                 >
// // // // // // //                                     <Download className="h-4 w-4" />
// // // // // // //                                     Export Results
// // // // // // //                                 </Button>
// // // // // // //                             )}

// // // // // // //                             {/* Show processing indicator */}
// // // // // // //                             {isProcessing && (
// // // // // // //                                 <Button size="sm" className="gap-2" disabled>
// // // // // // //                                     <Loader2 className="h-4 w-4 animate-spin" />
// // // // // // //                                     Processing...
// // // // // // //                                 </Button>
// // // // // // //                             )}
// // // // // // //                         </div>
// // // // // // //                     </div>
// // // // // // //                 </CardContent>
// // // // // // //             </Card>

// // // // // // //             {/* Main Content - Show Uploader or Results */}
// // // // // // //             {showUploader || processedData.length === 0 ? (
// // // // // // //                 // SHOW CSV UPLOADER
// // // // // // //                 <div className="space-y-6">
// // // // // // //                     {/* Challenge Info */}
// // // // // // //                     <Card>
// // // // // // //                         <CardContent className="p-6">
// // // // // // //                             <div className="mb-6">
// // // // // // //                                 <h2 className="text-xl font-bold mb-4">Hackathon Challenge: 4 Logic Gates</h2>
// // // // // // //                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // // // // // //                                     <Card className="border-l-4 border-l-amber-500">
// // // // // // //                                         <CardContent className="p-4">
// // // // // // //                                             <div className="text-lg font-bold text-amber-600 mb-1">Level 1</div>
// // // // // // //                                             <div className="font-medium">Split Shipment Detection</div>
// // // // // // //                                             <div className="text-sm text-muted-foreground mt-1">
// // // // // // //                                                 {"Same importer + same day + total > AED 1,000"}
// // // // // // //                                             </div>
// // // // // // //                                         </CardContent>
// // // // // // //                                     </Card>

// // // // // // //                                     <Card className="border-l-4 border-l-blue-500">
// // // // // // //                                         <CardContent className="p-4">
// // // // // // //                                             <div className="text-lg font-bold text-blue-600 mb-1">Level 2</div>
// // // // // // //                                             <div className="font-medium">HS Code Classification</div>
// // // // // // //                                             <div className="text-sm text-muted-foreground mt-1">
// // // // // // //                                                 6-digit HS code prediction from descriptions
// // // // // // //                                             </div>
// // // // // // //                                         </CardContent>
// // // // // // //                                     </Card>
// // // // // // //                                     <Card className="border-l-4 border-l-green-500">
// // // // // // //                                         <CardContent className="p-4">
// // // // // // //                                             <div className="text-lg font-bold text-green-600 mb-1">Level 3</div>
// // // // // // //                                             <div className="font-medium">Duty Calculation</div>
// // // // // // //                                             <div className="text-sm text-muted-foreground mt-1">
// // // // // // //                                                 AED conversion + de-minimis + 5% duty
// // // // // // //                                             </div>
// // // // // // //                                         </CardContent>
// // // // // // //                                     </Card>
// // // // // // //                                     <Card className="border-l-4 border-l-red-500">
// // // // // // //                                         <CardContent className="p-4">
// // // // // // //                                             <div className="text-lg font-bold text-red-600 mb-1">Level 4</div>
// // // // // // //                                             <div className="font-medium">Risk Protection</div>
// // // // // // //                                             <div className="text-sm text-muted-foreground mt-1">
// // // // // // //                                                 Weapons, drones, lithium batteries detection
// // // // // // //                                             </div>
// // // // // // //                                         </CardContent>
// // // // // // //                                     </Card>
// // // // // // //                                 </div>
// // // // // // //                             </div>
// // // // // // //                             <CSVUploader onDataProcessed={handleDataProcessed} />
// // // // // // //                         </CardContent>
// // // // // // //                     </Card>
// // // // // // //                 </div>
// // // // // // //             ) : (
// // // // // // //                 // SHOW RESULTS WHEN DATA IS PROCESSED
// // // // // // //                 <>
// // // // // // //                     {/* KPI Cards */}
// // // // // // //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // // // // // //                         <Card>
// // // // // // //                             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// // // // // // //                                 <CardTitle className="text-sm font-medium">Total Parcels</CardTitle>
// // // // // // //                                 <Package className="h-4 w-4 text-muted-foreground" />
// // // // // // //                             </CardHeader>
// // // // // // //                             <CardContent>
// // // // // // //                                 <div className="text-2xl font-bold">{stats.total}</div>
// // // // // // //                                 <div className="flex items-center gap-2 mt-2">
// // // // // // //                                     <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
// // // // // // //                                         <div className="h-full bg-green-500" style={{ width: `${(stats.greenLane / stats.total) * 100}%` }} />
// // // // // // //                                         <div className="h-full bg-yellow-500" style={{ width: `${(stats.yellowLane / stats.total) * 100}%` }} />
// // // // // // //                                         <div className="h-full bg-red-500" style={{ width: `${(stats.redLane / stats.total) * 100}%` }} />
// // // // // // //                                         <div className="h-full bg-gray-800" style={{ width: `${(stats.blackLane / stats.total) * 100}%` }} />
// // // // // // //                                     </div>
// // // // // // //                                     <span className="text-xs text-muted-foreground">Lane mix</span>
// // // // // // //                                 </div>
// // // // // // //                             </CardContent>
// // // // // // //                         </Card>

// // // // // // //                         <Card>
// // // // // // //                             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// // // // // // //                                 <CardTitle className="text-sm font-medium">Split Shipments</CardTitle>
// // // // // // //                                 <AlertTriangle className="h-4 w-4 text-amber-500" />
// // // // // // //                             </CardHeader>
// // // // // // //                             <CardContent>
// // // // // // //                                 <div className="text-2xl font-bold">{stats.splitShipments}</div>
// // // // // // //                                 <p className="text-xs text-muted-foreground">
// // // // // // //                                     Potential revenue evasion detected
// // // // // // //                                 </p>
// // // // // // //                             </CardContent>
// // // // // // //                         </Card>

// // // // // // //                         <Card>
// // // // // // //                             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// // // // // // //                                 <CardTitle className="text-sm font-medium">High Risk Items</CardTitle>
// // // // // // //                                 <Shield className="h-4 w-4 text-red-500" />
// // // // // // //                             </CardHeader>
// // // // // // //                             <CardContent>
// // // // // // //                                 <div className="text-2xl font-bold">{stats.highRisk}</div>
// // // // // // //                                 <p className="text-xs text-muted-foreground">
// // // // // // //                                     {stats.blackLane} in BLACK lane
// // // // // // //                                 </p>
// // // // // // //                             </CardContent>
// // // // // // //                         </Card>

// // // // // // //                         <Card>
// // // // // // //                             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// // // // // // //                                 <CardTitle className="text-sm font-medium">Duty Payable</CardTitle>
// // // // // // //                                 <DollarSign className="h-4 w-4 text-green-500" />
// // // // // // //                             </CardHeader>
// // // // // // //                             <CardContent>
// // // // // // //                                 <div className="text-2xl font-bold">AED {stats.totalDuty.toFixed(2)}</div>
// // // // // // //                                 <p className="text-xs text-muted-foreground">
// // // // // // //                                     From {stats.dutyApplicable} parcels
// // // // // // //                                 </p>
// // // // // // //                             </CardContent>
// // // // // // //                         </Card>
// // // // // // //                     </div>

// // // // // // //                     {/* Main Results Tabs */}
// // // // // // //                     <Tabs defaultValue="overview" className="space-y-6">
// // // // // // //                         <TabsList>
// // // // // // //                             <TabsTrigger value="overview">Overview</TabsTrigger>
// // // // // // //                             <TabsTrigger value="parcels">Parcel Details</TabsTrigger>
// // // // // // //                             <TabsTrigger value="analytics">Analytics</TabsTrigger>
// // // // // // //                         </TabsList>

// // // // // // //                         <TabsContent value="overview" className="space-y-6">
// // // // // // //                             {/* Risk Lane Distribution */}
// // // // // // //                             <Card>
// // // // // // //                                 <CardHeader>
// // // // // // //                                     <CardTitle>Risk Lane Distribution</CardTitle>
// // // // // // //                                     <CardDescription>How parcels are routed based on risk assessment</CardDescription>
// // // // // // //                                 </CardHeader>
// // // // // // //                                 <CardContent>
// // // // // // //                                     <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
// // // // // // //                                         {[
// // // // // // //                                             { lane: "GREEN", count: stats.greenLane, description: "Auto-clear, no intervention", color: "bg-green-500" },
// // // // // // //                                             { lane: "YELLOW", count: stats.yellowLane, description: "Document review required", color: "bg-yellow-500" },
// // // // // // //                                             { lane: "RED", count: stats.redLane, description: "Physical inspection", color: "bg-red-500" },
// // // // // // //                                             { lane: "BLACK", count: stats.blackLane, description: "Intelligence/security hold", color: "bg-gray-800" }
// // // // // // //                                         ].map((item) => (
// // // // // // //                                             <Card key={item.lane} className={`border-l-4 ${item.lane === "GREEN" ? "border-l-green-500" : item.lane === "YELLOW" ? "border-l-yellow-500" : item.lane === "RED" ? "border-l-red-500" : "border-l-gray-800"}`}>
// // // // // // //                                                 <CardContent className="p-6">
// // // // // // //                                                     <div className="flex items-center justify-between mb-2">
// // // // // // //                                                         <h3 className="font-bold text-xl">{item.lane}</h3>
// // // // // // //                                                         <Badge className={getLaneColor(item.lane)}>{item.count}</Badge>
// // // // // // //                                                     </div>
// // // // // // //                                                     <p className="text-sm text-muted-foreground">{item.description}</p>
// // // // // // //                                                     <Progress
// // // // // // //                                                         value={stats.total > 0 ? (item.count / stats.total) * 100 : 0}
// // // // // // //                                                         className="mt-4 h-2"
// // // // // // //                                                         indicatorClassName={item.color}
// // // // // // //                                                     />
// // // // // // //                                                 </CardContent>
// // // // // // //                                             </Card>
// // // // // // //                                         ))}
// // // // // // //                                     </div>
// // // // // // //                                 </CardContent>
// // // // // // //                             </Card>

// // // // // // //                             {/* Recent High-Risk Items */}
// // // // // // //                             {stats.highRisk > 0 && (
// // // // // // //                                 <Card>
// // // // // // //                                     <CardHeader>
// // // // // // //                                         <CardTitle>High-Risk Parcels Requiring Attention</CardTitle>
// // // // // // //                                         <CardDescription>Items flagged for security, safety, or compliance risks</CardDescription>
// // // // // // //                                     </CardHeader>
// // // // // // //                                     <CardContent>
// // // // // // //                                         <Table>
// // // // // // //                                             <TableHeader>
// // // // // // //                                                 <TableRow>
// // // // // // //                                                     <TableHead>Order ID</TableHead>
// // // // // // //                                                     <TableHead>Importer</TableHead>
// // // // // // //                                                     <TableHead>Product</TableHead>
// // // // // // //                                                     <TableHead>Risk Category</TableHead>
// // // // // // //                                                     <TableHead>Duty Payable</TableHead>
// // // // // // //                                                     <TableHead>Risk Lane</TableHead>
// // // // // // //                                                     <TableHead>Action</TableHead>
// // // // // // //                                                 </TableRow>
// // // // // // //                                             </TableHeader>
// // // // // // //                                             <TableBody>
// // // // // // //                                                 {processedData
// // // // // // //                                                     .filter(p => p.is_high_risk)
// // // // // // //                                                     .slice(0, 5)
// // // // // // //                                                     .map((parcel) => (
// // // // // // //                                                         <TableRow key={parcel.order_id}>
// // // // // // //                                                             <TableCell className="font-medium">{parcel.order_id}</TableCell>
// // // // // // //                                                             <TableCell>{parcel.importer_name}</TableCell>
// // // // // // //                                                             <TableCell className="max-w-[200px] truncate">{parcel.product_title}</TableCell>
// // // // // // //                                                             <TableCell>
// // // // // // //                                                                 <div className="flex flex-wrap gap-1">
// // // // // // //                                                                     {parcel.risk_categories.map((cat, idx) => (
// // // // // // //                                                                         <Badge key={idx} variant="outline" className="text-xs">
// // // // // // //                                                                             {cat}
// // // // // // //                                                                         </Badge>
// // // // // // //                                                                     ))}
// // // // // // //                                                                 </div>
// // // // // // //                                                             </TableCell>
// // // // // // //                                                             <TableCell>AED {parcel.duty_payable_aed.toFixed(2)}</TableCell>
// // // // // // //                                                             <TableCell>
// // // // // // //                                                                 <Badge className={getLaneColor(parcel.assigned_risk_lane)}>
// // // // // // //                                                                     {parcel.assigned_risk_lane}
// // // // // // //                                                                 </Badge>
// // // // // // //                                                             </TableCell>
// // // // // // //                                                             <TableCell>
// // // // // // //                                                                 <Button size="sm" variant="outline">Review</Button>
// // // // // // //                                                             </TableCell>
// // // // // // //                                                         </TableRow>
// // // // // // //                                                     ))}
// // // // // // //                                             </TableBody>
// // // // // // //                                         </Table>
// // // // // // //                                         {stats.highRisk > 5 && (
// // // // // // //                                             <div className="text-center mt-4 text-sm text-muted-foreground">
// // // // // // //                                                 Showing 5 of {stats.highRisk} high-risk parcels
// // // // // // //                                             </div>
// // // // // // //                                         )}
// // // // // // //                                     </CardContent>
// // // // // // //                                 </Card>
// // // // // // //                             )}
// // // // // // //                         </TabsContent>

// // // // // // //                         <TabsContent value="parcels">
// // // // // // //                             <Card>
// // // // // // //                                 <CardHeader>
// // // // // // //                                     <div className="flex items-center justify-between">
// // // // // // //                                         <div>
// // // // // // //                                             <CardTitle>All Processed Parcels</CardTitle>
// // // // // // //                                             <CardDescription>Real-time analysis of e-commerce shipments</CardDescription>
// // // // // // //                                         </div>
// // // // // // //                                         <div className="flex gap-2">
// // // // // // //                                             <Button
// // // // // // //                                                 variant={filter === "all" ? "default" : "outline"}
// // // // // // //                                                 size="sm"
// // // // // // //                                                 onClick={() => setFilter("all")}
// // // // // // //                                             >
// // // // // // //                                                 All ({processedData.length})
// // // // // // //                                             </Button>
// // // // // // //                                             <Button
// // // // // // //                                                 variant={filter === "high-risk" ? "default" : "outline"}
// // // // // // //                                                 size="sm"
// // // // // // //                                                 onClick={() => setFilter("high-risk")}
// // // // // // //                                             >
// // // // // // //                                                 High Risk ({stats.highRisk})
// // // // // // //                                             </Button>
// // // // // // //                                             <Button
// // // // // // //                                                 variant={filter === "split" ? "default" : "outline"}
// // // // // // //                                                 size="sm"
// // // // // // //                                                 onClick={() => setFilter("split")}
// // // // // // //                                             >
// // // // // // //                                                 Split ({stats.splitShipments})
// // // // // // //                                             </Button>
// // // // // // //                                             <Button
// // // // // // //                                                 variant={filter === "duty" ? "default" : "outline"}
// // // // // // //                                                 size="sm"
// // // // // // //                                                 onClick={() => setFilter("duty")}
// // // // // // //                                             >
// // // // // // //                                                 Duty ({stats.dutyApplicable})
// // // // // // //                                             </Button>
// // // // // // //                                         </div>
// // // // // // //                                     </div>
// // // // // // //                                 </CardHeader>
// // // // // // //                                 <CardContent>
// // // // // // //                                     <Table>
// // // // // // //                                         <TableHeader>
// // // // // // //                                             <TableRow>
// // // // // // //                                                 <TableHead>Order ID</TableHead>
// // // // // // //                                                 <TableHead>Importer</TableHead>
// // // // // // //                                                 <TableHead>Product</TableHead>
// // // // // // //                                                 <TableHead>HS Code</TableHead>
// // // // // // //                                                 <TableHead>Value (AED)</TableHead>
// // // // // // //                                                 <TableHead>Duty</TableHead>
// // // // // // //                                                 <TableHead>Risk</TableHead>
// // // // // // //                                                 <TableHead>Lane</TableHead>
// // // // // // //                                                 <TableHead>Action</TableHead>
// // // // // // //                                             </TableRow>
// // // // // // //                                         </TableHeader>
// // // // // // //                                         <TableBody>
// // // // // // //                                             {filteredData.slice(0, 10).map((parcel) => (
// // // // // // //                                                 <TableRow key={parcel.order_id} className="hover:bg-muted/50">
// // // // // // //                                                     <TableCell className="font-medium">{parcel.order_id}</TableCell>
// // // // // // //                                                     <TableCell>
// // // // // // //                                                         <div>
// // // // // // //                                                             <div>{parcel.importer_name}</div>
// // // // // // //                                                             <div className="text-xs text-muted-foreground">
// // // // // // //                                                                 {parcel.is_split_shipment && (
// // // // // // //                                                                     <Badge variant="outline" className="text-xs bg-amber-50">
// // // // // // //                                                                         Split Shipment
// // // // // // //                                                                     </Badge>
// // // // // // //                                                                 )}
// // // // // // //                                                             </div>
// // // // // // //                                                         </div>
// // // // // // //                                                     </TableCell>
// // // // // // //                                                     <TableCell className="max-w-[180px]">
// // // // // // //                                                         <div className="truncate">{parcel.product_title}</div>
// // // // // // //                                                         <div className="text-xs text-muted-foreground truncate">
// // // // // // //                                                             {parcel.product_category}
// // // // // // //                                                         </div>
// // // // // // //                                                     </TableCell>
// // // // // // //                                                     <TableCell>
// // // // // // //                                                         <div>
// // // // // // //                                                             <div className="font-mono">{parcel.predicted_hs_code}</div>
// // // // // // //                                                             <div className="text-xs text-muted-foreground">
// // // // // // //                                                                 {(parcel.hs_confidence_score * 100).toFixed(0)}% confidence
// // // // // // //                                                             </div>
// // // // // // //                                                         </div>
// // // // // // //                                                     </TableCell>
// // // // // // //                                                     <TableCell>AED {parcel.item_price_aed.toFixed(2)}</TableCell>
// // // // // // //                                                     <TableCell>
// // // // // // //                                                         {parcel.duty_applicable ? (
// // // // // // //                                                             <div className="text-green-600 font-medium">
// // // // // // //                                                                 AED {parcel.duty_payable_aed.toFixed(2)}
// // // // // // //                                                             </div>
// // // // // // //                                                         ) : (
// // // // // // //                                                             <span className="text-muted-foreground">Exempt</span>
// // // // // // //                                                         )}
// // // // // // //                                                     </TableCell>
// // // // // // //                                                     <TableCell>{getRiskBadge(parcel.is_high_risk)}</TableCell>
// // // // // // //                                                     <TableCell>
// // // // // // //                                                         <Badge className={getLaneColor(parcel.assigned_risk_lane)}>
// // // // // // //                                                             {parcel.assigned_risk_lane}
// // // // // // //                                                         </Badge>
// // // // // // //                                                     </TableCell>
// // // // // // //                                                     <TableCell>
// // // // // // //                                                         <div className="flex gap-2">
// // // // // // //                                                             <Button size="sm" variant="ghost">View</Button>
// // // // // // //                                                             <Button size="sm">Process</Button>
// // // // // // //                                                         </div>
// // // // // // //                                                     </TableCell>
// // // // // // //                                                 </TableRow>
// // // // // // //                                             ))}
// // // // // // //                                         </TableBody>
// // // // // // //                                     </Table>
// // // // // // //                                     {filteredData.length > 10 && (
// // // // // // //                                         <div className="text-center mt-4 text-sm text-muted-foreground">
// // // // // // //                                             Showing 10 of {filteredData.length} filtered parcels
// // // // // // //                                         </div>
// // // // // // //                                     )}
// // // // // // //                                 </CardContent>
// // // // // // //                             </Card>
// // // // // // //                         </TabsContent>

// // // // // // //                         <TabsContent value="analytics">
// // // // // // //                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // // // // // //                                 {/* Revenue Analytics */}
// // // // // // //                                 <Card>
// // // // // // //                                     <CardHeader>
// // // // // // //                                         <CardTitle>Revenue Analytics</CardTitle>
// // // // // // //                                         <CardDescription>Duty collection and revenue protection</CardDescription>
// // // // // // //                                     </CardHeader>
// // // // // // //                                     <CardContent>
// // // // // // //                                         <div className="space-y-4">
// // // // // // //                                             <div>
// // // // // // //                                                 <div className="flex justify-between mb-1">
// // // // // // //                                                     <span className="text-sm">Duty Collected</span>
// // // // // // //                                                     <span className="text-sm font-medium">AED {stats.totalDuty.toFixed(2)}</span>
// // // // // // //                                                 </div>
// // // // // // //                                                 <Progress
// // // // // // //                                                     value={stats.total > 0 ? (stats.dutyApplicable / stats.total) * 100 : 0}
// // // // // // //                                                     className="h-2"
// // // // // // //                                                 />
// // // // // // //                                             </div>
// // // // // // //                                             <div className="grid grid-cols-2 gap-4">
// // // // // // //                                                 <Card className="bg-muted/50">
// // // // // // //                                                     <CardContent className="p-4">
// // // // // // //                                                         <div className="text-sm text-muted-foreground">Split Shipments</div>
// // // // // // //                                                         <div className="text-2xl font-bold">{stats.splitShipments}</div>
// // // // // // //                                                         <div className="text-xs text-muted-foreground">
// // // // // // //                                                             Potential evasion detected
// // // // // // //                                                         </div>
// // // // // // //                                                     </CardContent>
// // // // // // //                                                 </Card>
// // // // // // //                                                 <Card className="bg-muted/50">
// // // // // // //                                                     <CardContent className="p-4">
// // // // // // //                                                         <div className="text-sm text-muted-foreground">De-minimis Abuse</div>
// // // // // // //                                                         <div className="text-2xl font-bold">{stats.splitShipments}</div>
// // // // // // //                                                         <div className="text-xs text-muted-foreground">
// // // // // // //                                                             Value above AED 1,000
// // // // // // //                                                         </div>
// // // // // // //                                                     </CardContent>
// // // // // // //                                                 </Card>
// // // // // // //                                             </div>
// // // // // // //                                         </div>
// // // // // // //                                     </CardContent>
// // // // // // //                                 </Card>

// // // // // // //                                 {/* Risk Analytics */}
// // // // // // //                                 <Card>
// // // // // // //                                     <CardHeader>
// // // // // // //                                         <CardTitle>Risk Analytics</CardTitle>
// // // // // // //                                         <CardDescription>Security and safety risk distribution</CardDescription>
// // // // // // //                                     </CardHeader>
// // // // // // //                                     <CardContent>
// // // // // // //                                         <div className="space-y-4">
// // // // // // //                                             {[
// // // // // // //                                                 { category: "Weapons", count: processedData.filter(p => p.risk_categories.includes("WEAPONS")).length, color: "bg-red-500" },
// // // // // // //                                                 { category: "Drones", count: processedData.filter(p => p.risk_categories.includes("DRONES")).length, color: "bg-amber-500" },
// // // // // // //                                                 { category: "Lithium Batteries", count: processedData.filter(p => p.risk_categories.includes("LITHIUM_BATTERIES")).length, color: "bg-orange-500" },
// // // // // // //                                                 { category: "Precious Metals", count: processedData.filter(p => p.risk_categories.includes("PRECIOUS_METALS")).length, color: "bg-yellow-500" },
// // // // // // //                                             ].map((item) => (
// // // // // // //                                                 <div key={item.category}>
// // // // // // //                                                     <div className="flex justify-between mb-1">
// // // // // // //                                                         <span className="text-sm">{item.category}</span>
// // // // // // //                                                         <span className="text-sm font-medium">{item.count}</span>
// // // // // // //                                                     </div>
// // // // // // //                                                     <Progress
// // // // // // //                                                         value={stats.highRisk > 0 ? (item.count / stats.highRisk) * 100 : 0}
// // // // // // //                                                         className="h-2"
// // // // // // //                                                         indicatorClassName={item.color}
// // // // // // //                                                     />
// // // // // // //                                                 </div>
// // // // // // //                                             ))}
// // // // // // //                                         </div>
// // // // // // //                                     </CardContent>
// // // // // // //                                 </Card>

// // // // // // //                                 {/* HS Classification Performance */}
// // // // // // //                                 <Card className="lg:col-span-2">
// // // // // // //                                     <CardHeader>
// // // // // // //                                         <CardTitle>HS Classification Performance</CardTitle>
// // // // // // //                                         <CardDescription>Accuracy and confidence of automated HS coding</CardDescription>
// // // // // // //                                     </CardHeader>
// // // // // // //                                     <CardContent>
// // // // // // //                                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // // // //                                             <div className="space-y-2">
// // // // // // //                                                 <div className="text-4xl font-bold text-center">
// // // // // // //                                                     {stats.total > 0
// // // // // // //                                                         ? Math.round(processedData.reduce((sum, p) => sum + p.hs_confidence_score, 0) / stats.total * 100)
// // // // // // //                                                         : 0}%
// // // // // // //                                                 </div>
// // // // // // //                                                 <div className="text-center text-sm text-muted-foreground">Average Confidence</div>
// // // // // // //                                             </div>
// // // // // // //                                             <div className="space-y-2">
// // // // // // //                                                 <div className="text-4xl font-bold text-center">
// // // // // // //                                                     {stats.total > 0
// // // // // // //                                                         ? Math.round(processedData.filter(p => p.hs_confidence_score > 0.7).length / stats.total * 100)
// // // // // // //                                                         : 0}%
// // // // // // //                                                 </div>
// // // // // // //                                                 <div className="text-center text-sm text-muted-foreground">Auto-classified</div>
// // // // // // //                                             </div>
// // // // // // //                                             <div className="space-y-2">
// // // // // // //                                                 <div className="text-4xl font-bold text-center">
// // // // // // //                                                     {stats.total > 0
// // // // // // //                                                         ? Math.round(processedData.filter(p => p.hs_confidence_score <= 0.7).length / stats.total * 100)
// // // // // // //                                                         : 0}%
// // // // // // //                                                 </div>
// // // // // // //                                                 <div className="text-center text-sm text-muted-foreground">Escalated for Review</div>
// // // // // // //                                             </div>
// // // // // // //                                         </div>
// // // // // // //                                     </CardContent>
// // // // // // //                                 </Card>
// // // // // // //                             </div>
// // // // // // //                         </TabsContent>
// // // // // // //                     </Tabs>

// // // // // // //                     {/* Upload New Data Button */}
// // // // // // //                     <Card className="border-dashed border-2">
// // // // // // //                         <CardContent className="p-6">
// // // // // // //                             <div className="flex flex-col items-center justify-center text-center space-y-4">
// // // // // // //                                 <FileUp className="h-10 w-10 text-primary" />
// // // // // // //                                 <div>
// // // // // // //                                     <h3 className="text-lg font-semibold">Process Another File</h3>
// // // // // // //                                     <p className="text-sm text-muted-foreground">
// // // // // // //                                         Upload a new CSV file to analyze more e-commerce data
// // // // // // //                                     </p>
// // // // // // //                                 </div>
// // // // // // //                                 <div className="flex gap-4">
// // // // // // //                                     <Button
// // // // // // //                                         className="gap-2"
// // // // // // //                                         onClick={handleUploadNewCSV}
// // // // // // //                                     >
// // // // // // //                                         <UploadIcon className="h-4 w-4" />
// // // // // // //                                         Upload New CSV
// // // // // // //                                     </Button>
// // // // // // //                                     <Button variant="outline" onClick={exportToCSV}>
// // // // // // //                                         <Download className="h-4 w-4 mr-2" />
// // // // // // //                                         Download Current Results
// // // // // // //                                     </Button>
// // // // // // //                                 </div>
// // // // // // //                             </div>
// // // // // // //                         </CardContent>
// // // // // // //                     </Card>
// // // // // // //                 </>
// // // // // // //             )}
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // };

// // // // // // // export default ParcelIntelPage;



// // // // // import React, { useState } from "react";
// // // // // import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// // // // // import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// // // // // import { Badge } from "@/components/ui/badge";
// // // // // import { Button } from "@/components/ui/button";
// // // // // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // // // // import { Progress } from "@/components/ui/progress";
// // // // // import {
// // // // //     Package,
// // // // //     AlertTriangle,
// // // // //     CheckCircle,
// // // // //     XCircle,
// // // // //     Filter,
// // // // //     Download,
// // // // //     Upload as UploadIcon,
// // // // //     BarChart3,
// // // // //     Shield,
// // // // //     DollarSign,
// // // // //     Search,
// // // // //     Loader2,
// // // // //     ChevronLeft,
// // // // //     ChevronRight
// // // // // } from "lucide-react";
// // // // // import { Input } from "@/components/ui/input";
// // // // // import { CSVUploader } from "@/components/CSVUploader";
// // // // // import { ParcelProcessor, type ProcessedParcel, type RawParcelData } from "@/utils/parcelProcessor";
// // // // // import { toast } from "sonner";
// // // // // import { ParcelCharts } from "@/components/ParcelCharts";

// // // // // const ParcelIntelPage = () => {
// // // // //     // STATE
// // // // //     const [processedData, setProcessedData] = useState<ProcessedParcel[]>([]);
// // // // //     const [isProcessing, setIsProcessing] = useState(false);
// // // // //     const [showUploader, setShowUploader] = useState<boolean>(true);
// // // // //     const [filter, setFilter] = useState<string>("all");
// // // // //     const [search, setSearch] = useState<string>("");
// // // // //     const [currentPage, setCurrentPage] = useState(1);
// // // // //     const itemsPerPage = 10;

// // // // //     const handleDataProcessed = (rawData: RawParcelData[], filename: string) => {
// // // // //         console.log(`📥 Processing ${rawData.length} records from ${filename}`);
// // // // //         setIsProcessing(true);

// // // // //         setTimeout(() => {
// // // // //             try {
// // // // //                 console.log("🔍 Analyzing data for all 4 logic gates...");

// // // // //                 // --- LEVEL 1: Split Shipment Detection ---
// // // // //                 console.log("🔄 Level 1: Detecting split shipments...");
// // // // //                 const splitGroups = new Map<string, string[]>();
// // // // //                 const dailyTotals = new Map<string, number>();

// // // // //                 // Group by importer and day (simplified)
// // // // //                 rawData.slice(0, 1000).forEach((item, index) => {
// // // // //                     const itemPriceINR = typeof item.item_price_inr === 'string'
// // // // //                         ? parseFloat(item.item_price_inr)
// // // // //                         : item.item_price_inr;
// // // // //                     const itemValueAED = itemPriceINR * 0.044;

// // // // //                     // Create a simple date key (using index to simulate different days)
// // // // //                     const day = Math.floor(index / 100) + 1; // Groups of 100 parcels per "day"
// // // // //                     const key = `${item.importer_name}_day${day}`;

// // // // //                     // Update daily total
// // // // //                     const currentTotal = dailyTotals.get(key) || 0;
// // // // //                     dailyTotals.set(key, currentTotal + itemValueAED);

// // // // //                     // Add to group
// // // // //                     if (!splitGroups.has(key)) {
// // // // //                         splitGroups.set(key, []);
// // // // //                     }
// // // // //                     splitGroups.get(key)!.push(item.order_id);
// // // // //                 });

// // // // //                 // Identify split shipments (daily total > 1000 AED)
// // // // //                 const splitShipmentOrders = new Set<string>();
// // // // //                 splitGroups.forEach((orderIds, key) => {
// // // // //                     const dailyTotal = dailyTotals.get(key) || 0;
// // // // //                     if (orderIds.length > 1 && dailyTotal > 1000) {
// // // // //                         orderIds.forEach(orderId => splitShipmentOrders.add(orderId));
// // // // //                     }
// // // // //                 });

// // // // //                 console.log(`✅ Level 1: Found ${splitShipmentOrders.size} split shipments`);

// // // // //                 // Process parcels
// // // // //                 const results = rawData.slice(0, 1000).map((item, index) => {
// // // // //                     const itemPriceINR = typeof item.item_price_inr === 'string'
// // // // //                         ? parseFloat(item.item_price_inr)
// // // // //                         : item.item_price_inr;
// // // // //                     const itemValueAED = parseFloat((itemPriceINR * 0.044).toFixed(2));

// // // // //                     // --- LEVEL 2: HS Code Classification ---
// // // // //                     const text = `${item.product_title || ''} ${item.description || ''}`.toLowerCase();
// // // // //                     let hsCode = '9999.99.99';
// // // // //                     let hsConfidence = 0.5;
// // // // //                     let hsChapter = '99';

// // // // //                     // Smart HS code detection
// // // // //                     if (text.includes('drone') || text.includes('uav') || text.includes('quadcopter')) {
// // // // //                         hsCode = '8806.21.00'; // Drones ≤250g
// // // // //                         hsConfidence = 0.95;
// // // // //                         hsChapter = '88';
// // // // //                     } else if (text.includes('phone') || text.includes('mobile') || text.includes('smartphone')) {
// // // // //                         hsCode = '8517.12.00'; // Mobile phones
// // // // //                         hsConfidence = 0.92;
// // // // //                         hsChapter = '85';
// // // // //                     } else if (text.includes('shirt') || text.includes('clothing') || text.includes('apparel')) {
// // // // //                         hsCode = '6203.42.00'; // Men's trousers
// // // // //                         hsConfidence = 0.88;
// // // // //                         hsChapter = '62';
// // // // //                     } else if (text.includes('book') || text.includes('publication')) {
// // // // //                         hsCode = '4901.99.00'; // Printed books
// // // // //                         hsConfidence = 0.96;
// // // // //                         hsChapter = '49';
// // // // //                     } else if (text.includes('car') || text.includes('automotive')) {
// // // // //                         hsCode = '8708.29.00'; // Car parts
// // // // //                         hsConfidence = 0.85;
// // // // //                         hsChapter = '87';
// // // // //                     } else if (text.includes('jewel') || text.includes('gold') || text.includes('silver')) {
// // // // //                         hsCode = '7113.19.00'; // Jewellery
// // // // //                         hsConfidence = 0.90;
// // // // //                         hsChapter = '71';
// // // // //                     } else if (text.includes('battery') || text.includes('lithium') || text.includes('power bank')) {
// // // // //                         hsCode = '8507.60.00'; // Lithium batteries
// // // // //                         hsConfidence = 0.94;
// // // // //                         hsChapter = '85';
// // // // //                     } else if (text.includes('weapon') || text.includes('gun') || text.includes('ammunition')) {
// // // // //                         hsCode = '9302.00.00'; // Revolvers and pistols
// // // // //                         hsConfidence = 0.97;
// // // // //                         hsChapter = '93';
// // // // //                     }

// // // // //                     // --- LEVEL 3: Duty Calculation ---
// // // // //                     const isSplit = splitShipmentOrders.has(item.order_id);
// // // // //                     const dailyTotal = dailyTotals.get(`${item.importer_name}_day${Math.floor(index / 100) + 1}`) || itemValueAED;
// // // // //                     const dutyApplicable = dailyTotal > 1000 || isSplit;
// // // // //                     const dutyRate = 5; // 5% standard rate
// // // // //                     const dutyPayable = dutyApplicable ? parseFloat((itemValueAED * dutyRate / 100).toFixed(2)) : 0;

// // // // //                     // --- LEVEL 4: Risk Protection ---
// // // // //                     const riskKeywords = [];
// // // // //                     const riskCategories = [];
// // // // //                     let isHighRisk = false;

// // // // //                     // Check for dangerous goods
// // // // //                     if (text.includes('drone') || text.includes('uav')) {
// // // // //                         riskKeywords.push('drone');
// // // // //                         riskCategories.push('DRONES');
// // // // //                         isHighRisk = true;
// // // // //                     }
// // // // //                     if (text.includes('weapon') || text.includes('gun') || text.includes('ammunition')) {
// // // // //                         riskKeywords.push('weapon');
// // // // //                         riskCategories.push('WEAPONS');
// // // // //                         isHighRisk = true;
// // // // //                     }
// // // // //                     if (text.includes('battery') || text.includes('lithium')) {
// // // // //                         riskKeywords.push('lithium');
// // // // //                         riskCategories.push('LITHIUM_BATTERIES');
// // // // //                         isHighRisk = true;
// // // // //                     }
// // // // //                     if (text.includes('gold') || text.includes('silver') || text.includes('platinum')) {
// // // // //                         riskKeywords.push('precious');
// // // // //                         riskCategories.push('PRECIOUS_METALS');
// // // // //                     }

// // // // //                     // --- Risk Lane Assignment ---
// // // // //                     let assignedLane: 'GREEN' | 'YELLOW' | 'RED' | 'BLACK' = 'GREEN';
// // // // //                     const laneReasons = [];

// // // // //                     if (riskCategories.includes('WEAPONS') || riskCategories.includes('DRONES') || riskCategories.includes('LITHIUM_BATTERIES')) {
// // // // //                         assignedLane = 'BLACK';
// // // // //                         laneReasons.push('High-security risk goods');
// // // // //                     } else if (isSplit) {
// // // // //                         assignedLane = 'RED';
// // // // //                         laneReasons.push('Split shipment detected');
// // // // //                     } else if (dutyApplicable) {
// // // // //                         assignedLane = 'YELLOW';
// // // // //                         laneReasons.push('Duty applicable');
// // // // //                     } else {
// // // // //                         assignedLane = 'GREEN';
// // // // //                         laneReasons.push('Low risk, compliant');
// // // // //                     }

// // // // //                     // Clearance recommendation
// // // // //                     const clearanceRecommendation =
// // // // //                         assignedLane === 'GREEN' ? 'AUTO_CLEAR' :
// // // // //                             assignedLane === 'YELLOW' ? 'DOC_REVIEW' :
// // // // //                                 assignedLane === 'RED' ? 'INSPECTION' : 'HOLD';

// // // // //                     const result: ProcessedParcel = {
// // // // //                         order_id: item.order_id,
// // // // //                         timestamp: item.timestamp,
// // // // //                         importer_name: item.importer_name,
// // // // //                         delivery_address: item.delivery_address,
// // // // //                         product_title: item.product_title || 'Unknown Product',
// // // // //                         description: item.description || '',
// // // // //                         product_category: item.product_category || 'Uncategorized',
// // // // //                         item_price_inr: itemPriceINR,
// // // // //                         item_price_aed: itemValueAED,
// // // // //                         image_url: item.image_url,
// // // // //                         same_day_importer_key: `${item.importer_name}_day${Math.floor(index / 100) + 1}`,
// // // // //                         daily_total_aed: dailyTotal,
// // // // //                         is_split_shipment: isSplit,
// // // // //                         split_group_id: isSplit ? `SPLIT-${item.importer_name.substring(0, 3).toUpperCase()}-${Math.floor(index / 100) + 1}` : undefined,
// // // // //                         predicted_hs_code: hsCode,
// // // // //                         hs_confidence_score: hsConfidence,
// // // // //                         hs_chapter: hsChapter,
// // // // //                         de_minimis_threshold: 1000,
// // // // //                         duty_applicable: dutyApplicable,
// // // // //                         duty_rate: dutyRate,
// // // // //                         duty_payable_aed: dutyPayable,
// // // // //                         tariff_reference: 'STANDARD_5',
// // // // //                         risk_keywords_found: riskKeywords,
// // // // //                         risk_categories: riskCategories,
// // // // //                         is_high_risk: isHighRisk,
// // // // //                         risk_reason_codes: riskCategories.map(cat => `${cat}_DETECTED`),
// // // // //                         assigned_risk_lane: assignedLane,
// // // // //                         lane_reasons: laneReasons,
// // // // //                         processing_timestamp: new Date().toISOString(),
// // // // //                         clearance_recommendation: clearanceRecommendation
// // // // //                     };

// // // // //                     return result;
// // // // //                 });

// // // // //                 // setProcessedData(results);
// // // // //                 // setShowUploader(false);
// // // // //                 // setCurrentPage(1);
// // // // //                 setProcessedData(results);
// // // // //                 setShowUploader(false);
// // // // //                 setCurrentPage(1);

// // // // //                 toast.success("Processing Complete!", {
// // // // //                     description: `Analyzed ${results.length} parcels through all 4 logic gates`,
// // // // //                     duration: 5000,
// // // // //                 });

// // // // //                 // Calculate and log summary
// // // // //                 const splitCount = results.filter(r => r.is_split_shipment).length;
// // // // //                 const highRiskCount = results.filter(r => r.is_high_risk).length;
// // // // //                 const dutyTotal = results.reduce((sum, r) => sum + r.duty_payable_aed, 0);
// // // // //                 const avgConfidence = results.reduce((sum, r) => sum + r.hs_confidence_score, 0) / results.length;

// // // // //                 console.log(`🎉 PROCESSING COMPLETE!`);
// // // // //                 console.log(`📊 Summary:`);
// // // // //                 console.log(`   • Total parcels: ${results.length}`);
// // // // //                 console.log(`   • Split shipments: ${splitCount}`);
// // // // //                 console.log(`   • High-risk items: ${highRiskCount}`);
// // // // //                 console.log(`   • Total duty: AED ${dutyTotal.toFixed(2)}`);
// // // // //                 console.log(`   • HS confidence: ${(avgConfidence * 100).toFixed(1)}%`);
// // // // //                 console.log(`   • Risk lanes: GREEN(${results.filter(r => r.assigned_risk_lane === 'GREEN').length}) | YELLOW(${results.filter(r => r.assigned_risk_lane === 'YELLOW').length}) | RED(${results.filter(r => r.assigned_risk_lane === 'RED').length}) | BLACK(${results.filter(r => r.assigned_risk_lane === 'BLACK').length})`);

// // // // //             } catch (error) {
// // // // //                 console.error("❌ Error processing data:", error);
// // // // //             } finally {
// // // // //                 setIsProcessing(false);
// // // // //             }
// // // // //         }, 1500);
// // // // //     };

// // // // //     // UPLOAD NEW CSV
// // // // //     const handleUploadNewCSV = () => {
// // // // //         setProcessedData([]);
// // // // //         setShowUploader(true);
// // // // //         setFilter("all");
// // // // //         setSearch("");
// // // // //         setCurrentPage(1);
// // // // //     };

// // // // //     // EXPORT TO CSV
// // // // //     const exportToCSV = () => {
// // // // //         if (processedData.length === 0) {
// // // // //             alert("No data to export. Please upload and process a CSV file first.");
// // // // //             return;
// // // // //         }

// // // // //         const headers = [
// // // // //             'order_id',
// // // // //             'importer_name',
// // // // //             'timestamp',
// // // // //             'product_title',
// // // // //             'item_price_inr',
// // // // //             'item_price_aed',
// // // // //             'predicted_hs_code',
// // // // //             'hs_confidence_score',
// // // // //             'is_split_shipment',
// // // // //             'daily_total_aed',
// // // // //             'duty_applicable',
// // // // //             'duty_rate',
// // // // //             'duty_payable_aed',
// // // // //             'is_high_risk',
// // // // //             'risk_categories',
// // // // //             'assigned_risk_lane',
// // // // //             'clearance_recommendation'
// // // // //         ];

// // // // //         const csvContent = [
// // // // //             headers.join(','),
// // // // //             ...processedData.map(p => [
// // // // //                 p.order_id,
// // // // //                 `"${p.importer_name}"`,
// // // // //                 p.timestamp,
// // // // //                 `"${p.product_title}"`,
// // // // //                 p.item_price_inr,
// // // // //                 p.item_price_aed.toFixed(2),
// // // // //                 p.predicted_hs_code,
// // // // //                 (p.hs_confidence_score * 100).toFixed(1) + '%',
// // // // //                 p.is_split_shipment ? 'YES' : 'NO',
// // // // //                 p.daily_total_aed.toFixed(2),
// // // // //                 p.duty_applicable ? 'YES' : 'NO',
// // // // //                 p.duty_rate + '%',
// // // // //                 p.duty_payable_aed.toFixed(2),
// // // // //                 p.is_high_risk ? 'HIGH' : 'LOW',
// // // // //                 `"${p.risk_categories.join(';')}"`,
// // // // //                 p.assigned_risk_lane,
// // // // //                 p.clearance_recommendation
// // // // //             ].join(','))
// // // // //         ].join('\n');

// // // // //         const blob = new Blob([csvContent], { type: 'text/csv' });
// // // // //         const url = window.URL.createObjectURL(blob);
// // // // //         const a = document.createElement('a');
// // // // //         a.href = url;
// // // // //         a.download = `parcel_intel_results_${new Date().toISOString().split('T')[0]}.csv`;
// // // // //         document.body.appendChild(a);
// // // // //         a.click();
// // // // //         document.body.removeChild(a);
// // // // //         window.URL.revokeObjectURL(url);
// // // // //     };

// // // // //     // FILTER AND SEARCH
// // // // //     const filteredData = processedData.filter(parcel => {
// // // // //         if (filter === "all") return true;
// // // // //         if (filter === "high-risk") return parcel.is_high_risk;
// // // // //         if (filter === "split") return parcel.is_split_shipment;
// // // // //         if (filter === "duty") return parcel.duty_applicable;
// // // // //         return parcel.assigned_risk_lane === filter;
// // // // //     }).filter(parcel =>
// // // // //         parcel.order_id.toLowerCase().includes(search.toLowerCase()) ||
// // // // //         parcel.importer_name.toLowerCase().includes(search.toLowerCase()) ||
// // // // //         parcel.product_title.toLowerCase().includes(search.toLowerCase())
// // // // //     );

// // // // //     // PAGINATION
// // // // //     const totalPages = Math.ceil(filteredData.length / itemsPerPage);
// // // // //     const startIndex = (currentPage - 1) * itemsPerPage;
// // // // //     const endIndex = startIndex + itemsPerPage;
// // // // //     const paginatedData = filteredData.slice(startIndex, endIndex);

// // // // //     // STATS
// // // // //     const stats = {
// // // // //         total: processedData.length,
// // // // //         highRisk: processedData.filter(p => p.is_high_risk).length,
// // // // //         splitShipments: processedData.filter(p => p.is_split_shipment).length,
// // // // //         dutyApplicable: processedData.filter(p => p.duty_applicable).length,
// // // // //         greenLane: processedData.filter(p => p.assigned_risk_lane === "GREEN").length,
// // // // //         yellowLane: processedData.filter(p => p.assigned_risk_lane === "YELLOW").length,
// // // // //         redLane: processedData.filter(p => p.assigned_risk_lane === "RED").length,
// // // // //         blackLane: processedData.filter(p => p.assigned_risk_lane === "BLACK").length,
// // // // //         totalDuty: processedData.reduce((sum, p) => sum + p.duty_payable_aed, 0),
// // // // //         avgConfidence: processedData.length > 0
// // // // //             ? Math.round(processedData.reduce((sum, p) => sum + p.hs_confidence_score, 0) / processedData.length * 100)
// // // // //             : 0
// // // // //     };

// // // // //     // HELPER FUNCTIONS
// // // // //     const getLaneColor = (lane: string) => {
// // // // //         switch (lane) {
// // // // //             case "GREEN": return "bg-green-100 text-green-800 border-green-300";
// // // // //             case "YELLOW": return "bg-yellow-100 text-yellow-800 border-yellow-300";
// // // // //             case "RED": return "bg-red-100 text-red-800 border-red-300";
// // // // //             case "BLACK": return "bg-gray-800 text-white border-gray-700";
// // // // //             default: return "bg-gray-100 text-gray-800 border-gray-300";
// // // // //         }
// // // // //     };

// // // // //     const getRiskBadge = (isHighRisk: boolean) => {
// // // // //         return isHighRisk ? (
// // // // //             <Badge variant="destructive" className="flex items-center gap-1">
// // // // //                 <AlertTriangle className="h-3 w-3" /> High Risk
// // // // //             </Badge>
// // // // //         ) : (
// // // // //             <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
// // // // //                 <CheckCircle className="h-3 w-3 mr-1" /> Low Risk
// // // // //             </Badge>
// // // // //         );
// // // // //     };

// // // // //     const getRiskCategoryCount = (category: string) => {
// // // // //         return processedData.filter(p => p.risk_categories.includes(category)).length;
// // // // //     };

// // // // //     // Create loading skeleton component
// // // // //     const LoadingSkeleton = () => (
// // // // //         <div className="space-y-6">
// // // // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // // // //                 {[...Array(4)].map((_, i) => (
// // // // //                     <Card key={i}>
// // // // //                         <CardContent className="p-6">
// // // // //                             <div className="h-8 bg-gray-200 rounded animate-pulse mb-2"></div>
// // // // //                             <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
// // // // //                         </CardContent>
// // // // //                     </Card>
// // // // //                 ))}
// // // // //             </div>
// // // // //             <Card>
// // // // //                 <CardContent className="p-6">
// // // // //                     <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
// // // // //                 </CardContent>
// // // // //             </Card>
// // // // //         </div>
// // // // //     );


// // // // //     return (
// // // // //         <div className="p-6 space-y-6 overflow-y-auto h-full">
// // // // //             {isProcessing && <LoadingSkeleton />}
// // // // //             {/* Header */}
// // // // //             <div>
// // // // //                 <div className="flex items-center gap-3 mb-2">
// // // // //                     <Package className="h-8 w-8 text-primary" />
// // // // //                     <h1 className="text-3xl font-bold tracking-tight">PARCEL-INTEL</h1>
// // // // //                 </div>
// // // // //                 <p className="text-muted-foreground">
// // // // //                     E-commerce parcel intelligence engine for split shipment detection, HS classification, duty calculation, and risk assessment
// // // // //                 </p>
// // // // //             </div>

// // // // //             {/* Controls */}
// // // // //             <Card>
// // // // //                 <CardContent className="p-4">
// // // // //                     <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
// // // // //                         <div className="flex-1 w-full md:w-auto">
// // // // //                             <div className="relative">
// // // // //                                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
// // // // //                                 <Input
// // // // //                                     placeholder="Search parcels by ID, importer, or product..."
// // // // //                                     className="pl-10"
// // // // //                                     value={search}
// // // // //                                     onChange={(e) => setSearch(e.target.value)}
// // // // //                                     disabled={isProcessing || processedData.length === 0}
// // // // //                                 />
// // // // //                             </div>
// // // // //                         </div>
// // // // //                         <div className="flex items-center gap-2">
// // // // //                             <Button
// // // // //                                 variant="outline"
// // // // //                                 size="sm"
// // // // //                                 className="gap-2"
// // // // //                                 onClick={handleUploadNewCSV}
// // // // //                                 disabled={isProcessing}
// // // // //                             >
// // // // //                                 <UploadIcon className="h-4 w-4" />
// // // // //                                 {processedData.length > 0 ? 'Upload New' : 'Upload CSV'}
// // // // //                             </Button>

// // // // //                             {processedData.length > 0 && (
// // // // //                                 <Button
// // // // //                                     variant="outline"
// // // // //                                     size="sm"
// // // // //                                     className="gap-2"
// // // // //                                     onClick={exportToCSV}
// // // // //                                     disabled={isProcessing}
// // // // //                                 >
// // // // //                                     <Download className="h-4 w-4" />
// // // // //                                     Export Results
// // // // //                                 </Button>
// // // // //                             )}

// // // // //                             {isProcessing && (
// // // // //                                 <Button size="sm" className="gap-2" disabled>
// // // // //                                     <Loader2 className="h-4 w-4 animate-spin" />
// // // // //                                     Processing...
// // // // //                                 </Button>
// // // // //                             )}
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 </CardContent>
// // // // //             </Card>

// // // // //             {/* Main Content */}
// // // // //             {showUploader || processedData.length === 0 ? (
// // // // //                 // SHOW CSV UPLOADER
// // // // //                 <div className="space-y-6">
// // // // //                     <Card>
// // // // //                         <CardContent className="p-6">
// // // // //                             <div className="mb-6">
// // // // //                                 <h2 className="text-xl font-bold mb-4">Hackathon Challenge: 4 Logic Gates</h2>
// // // // //                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // // // //                                     <Card className="border-l-4 border-l-amber-500">
// // // // //                                         <CardContent className="p-4">
// // // // //                                             <div className="text-lg font-bold text-amber-600 mb-1">Level 1</div>
// // // // //                                             <div className="font-medium">Split Shipment Detection</div>
// // // // //                                             <div className="text-sm text-muted-foreground mt-1">
// // // // //                                                 {"Same importer + same day + total > AED 1,000"}
// // // // //                                             </div>
// // // // //                                         </CardContent>
// // // // //                                     </Card>

// // // // //                                     <Card className="border-l-4 border-l-blue-500">
// // // // //                                         <CardContent className="p-4">
// // // // //                                             <div className="text-lg font-bold text-blue-600 mb-1">Level 2</div>
// // // // //                                             <div className="font-medium">HS Code Classification</div>
// // // // //                                             <div className="text-sm text-muted-foreground mt-1">
// // // // //                                                 6-digit HS code prediction from descriptions
// // // // //                                             </div>
// // // // //                                         </CardContent>
// // // // //                                     </Card>
// // // // //                                     <Card className="border-l-4 border-l-green-500">
// // // // //                                         <CardContent className="p-4">
// // // // //                                             <div className="text-lg font-bold text-green-600 mb-1">Level 3</div>
// // // // //                                             <div className="font-medium">Duty Calculation</div>
// // // // //                                             <div className="text-sm text-muted-foreground mt-1">
// // // // //                                                 AED conversion + de-minimis + 5% duty
// // // // //                                             </div>
// // // // //                                         </CardContent>
// // // // //                                     </Card>
// // // // //                                     <Card className="border-l-4 border-l-red-500">
// // // // //                                         <CardContent className="p-4">
// // // // //                                             <div className="text-lg font-bold text-red-600 mb-1">Level 4</div>
// // // // //                                             <div className="font-medium">Risk Protection</div>
// // // // //                                             <div className="text-sm text-muted-foreground mt-1">
// // // // //                                                 Weapons, drones, lithium batteries detection
// // // // //                                             </div>
// // // // //                                         </CardContent>
// // // // //                                     </Card>
// // // // //                                 </div>
// // // // //                             </div>
// // // // //                             <CSVUploader onDataProcessed={handleDataProcessed} />
// // // // //                         </CardContent>
// // // // //                     </Card>
// // // // //                 </div>
// // // // //             ) : (
// // // // //                 // SHOW RESULTS WHEN DATA IS PROCESSED
// // // // //                 <>
// // // // //                     {/* KPI Cards */}
// // // // //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // // // //                         <Card>
// // // // //                             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// // // // //                                 <CardTitle className="text-sm font-medium">Total Parcels</CardTitle>
// // // // //                                 <Package className="h-4 w-4 text-muted-foreground" />
// // // // //                             </CardHeader>
// // // // //                             <CardContent>
// // // // //                                 <div className="text-2xl font-bold">{stats.total.toLocaleString()}</div>
// // // // //                                 <div className="flex items-center gap-2 mt-2">
// // // // //                                     {/* <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
// // // // //                                         <div className="h-full bg-green-500" style={{ width: `${(stats.greenLane / stats.total) * 100}%` }} />
// // // // //                                         <div className="h-full bg-yellow-500" style={{ width: `${(stats.yellowLane / stats.total) * 100}%` }} />
// // // // //                                         <div className="h-full bg-red-500" style={{ width: `${(stats.redLane / stats.total) * 100}%` }} />
// // // // //                                         <div className="h-full bg-gray-800" style={{ width: `${(stats.blackLane / stats.total) * 100}%` }} />
// // // // //                                     </div> */}
// // // // //                                     <div className="h-2 flex w-full rounded-full overflow-hidden bg-gray-200">
// // // // //                                         <div className="bg-green-500" style={{ width: `${(stats.greenLane / stats.total) * 100}%` }} />
// // // // //                                         <div className="bg-yellow-500" style={{ width: `${(stats.yellowLane / stats.total) * 100}%` }} />
// // // // //                                         <div className="bg-red-500" style={{ width: `${(stats.redLane / stats.total) * 100}%` }} />
// // // // //                                         <div className="bg-gray-800" style={{ width: `${(stats.blackLane / stats.total) * 100}%` }} />
// // // // //                                     </div>

// // // // //                                     <span className="text-xs text-muted-foreground">Lane mix</span>
// // // // //                                 </div>
// // // // //                             </CardContent>
// // // // //                         </Card>

// // // // //                         <Card>
// // // // //                             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// // // // //                                 <CardTitle className="text-sm font-medium">Split Shipments</CardTitle>
// // // // //                                 <AlertTriangle className="h-4 w-4 text-amber-500" />
// // // // //                             </CardHeader>
// // // // //                             <CardContent>
// // // // //                                 <div className="text-2xl font-bold">{stats.splitShipments.toLocaleString()}</div>
// // // // //                                 <p className="text-xs text-muted-foreground">
// // // // //                                     Potential revenue evasion detected
// // // // //                                 </p>
// // // // //                             </CardContent>
// // // // //                         </Card>

// // // // //                         <Card>
// // // // //                             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// // // // //                                 <CardTitle className="text-sm font-medium">High Risk Items</CardTitle>
// // // // //                                 <Shield className="h-4 w-4 text-red-500" />
// // // // //                             </CardHeader>
// // // // //                             <CardContent>
// // // // //                                 <div className="text-2xl font-bold">{stats.highRisk.toLocaleString()}</div>
// // // // //                                 <p className="text-xs text-muted-foreground">
// // // // //                                     {stats.blackLane} in BLACK lane
// // // // //                                 </p>
// // // // //                             </CardContent>
// // // // //                         </Card>

// // // // //                         <Card>
// // // // //                             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// // // // //                                 <CardTitle className="text-sm font-medium">Duty Payable</CardTitle>
// // // // //                                 <DollarSign className="h-4 w-4 text-green-500" />
// // // // //                             </CardHeader>
// // // // //                             <CardContent>
// // // // //                                 <div className="text-2xl font-bold">AED {stats.totalDuty.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
// // // // //                                 <p className="text-xs text-muted-foreground">
// // // // //                                     From {stats.dutyApplicable.toLocaleString()} parcels
// // // // //                                 </p>
// // // // //                             </CardContent>
// // // // //                         </Card>
// // // // //                     </div>

// // // // //                     {/* Main Results Tabs */}
// // // // //                     <Tabs defaultValue="overview" className="space-y-6">
// // // // //                         <TabsList>
// // // // //                             <TabsTrigger value="overview">Overview</TabsTrigger>
// // // // //                             <TabsTrigger value="parcels">Parcel Details</TabsTrigger>
// // // // //                             <TabsTrigger value="analytics">Analytics</TabsTrigger>
// // // // //                         </TabsList>

// // // // //                         <TabsContent value="overview" className="space-y-6">
// // // // //                             {/* Risk Lane Distribution */}
// // // // //                             <Card>
// // // // //                                 <CardHeader>
// // // // //                                     <CardTitle>Risk Lane Distribution</CardTitle>
// // // // //                                     <CardDescription>How parcels are routed based on risk assessment</CardDescription>
// // // // //                                 </CardHeader>
// // // // //                                 <CardContent>
// // // // //                                     <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
// // // // //                                         {[
// // // // //                                             { lane: "GREEN", count: stats.greenLane, description: "Auto-clear, no intervention", color: "bg-green-500" },
// // // // //                                             { lane: "YELLOW", count: stats.yellowLane, description: "Document review required", color: "bg-yellow-500" },
// // // // //                                             { lane: "RED", count: stats.redLane, description: "Physical inspection", color: "bg-red-500" },
// // // // //                                             { lane: "BLACK", count: stats.blackLane, description: "Intelligence/security hold", color: "bg-gray-800" }
// // // // //                                         ].map((item) => (
// // // // //                                             <Card key={item.lane} className={`border-l-4 ${item.lane === "GREEN" ? "border-l-green-500" : item.lane === "YELLOW" ? "border-l-yellow-500" : item.lane === "RED" ? "border-l-red-500" : "border-l-gray-800"}`}>
// // // // //                                                 <CardContent className="p-6">
// // // // //                                                     <div className="flex items-center justify-between mb-2">
// // // // //                                                         <h3 className="font-bold text-xl">{item.lane}</h3>
// // // // //                                                         <Badge className={getLaneColor(item.lane)}>{item.count.toLocaleString()}</Badge>
// // // // //                                                     </div>
// // // // //                                                     <p className="text-sm text-muted-foreground">{item.description}</p>
// // // // //                                                     <Progress
// // // // //                                                         value={stats.total > 0 ? (item.count / stats.total) * 100 : 0}
// // // // //                                                         className="mt-4 h-2"
// // // // //                                                         indicatorClassName={item.color}
// // // // //                                                     />
// // // // //                                                 </CardContent>
// // // // //                                             </Card>
// // // // //                                         ))}
// // // // //                                     </div>
// // // // //                                 </CardContent>
// // // // //                             </Card>

// // // // //                             {/* Recent High-Risk Items */}
// // // // //                             {stats.highRisk > 0 && (
// // // // //                                 <Card>
// // // // //                                     <CardHeader>
// // // // //                                         <CardTitle>High-Risk Parcels Requiring Attention</CardTitle>
// // // // //                                         <CardDescription>Items flagged for security, safety, or compliance risks</CardDescription>
// // // // //                                     </CardHeader>
// // // // //                                     <CardContent>
// // // // //                                         <Table>
// // // // //                                             <TableHeader>
// // // // //                                                 <TableRow>
// // // // //                                                     <TableHead>Order ID</TableHead>
// // // // //                                                     <TableHead>Importer</TableHead>
// // // // //                                                     <TableHead>Product</TableHead>
// // // // //                                                     <TableHead>Risk Category</TableHead>
// // // // //                                                     <TableHead>Duty Payable</TableHead>
// // // // //                                                     <TableHead>Risk Lane</TableHead>
// // // // //                                                     <TableHead>Action</TableHead>
// // // // //                                                 </TableRow>
// // // // //                                             </TableHeader>
// // // // //                                             <TableBody>
// // // // //                                                 {processedData
// // // // //                                                     .filter(p => p.is_high_risk)
// // // // //                                                     .slice(0, 5)
// // // // //                                                     .map((parcel) => (
// // // // //                                                         <TableRow key={parcel.order_id}>
// // // // //                                                             <TableCell className="font-medium">{parcel.order_id}</TableCell>
// // // // //                                                             <TableCell>{parcel.importer_name}</TableCell>
// // // // //                                                             <TableCell className="max-w-[200px] truncate">{parcel.product_title}</TableCell>
// // // // //                                                             <TableCell>
// // // // //                                                                 <div className="flex flex-wrap gap-1">
// // // // //                                                                     {parcel.risk_categories.map((cat, idx) => (
// // // // //                                                                         <Badge key={idx} variant="outline" className="text-xs">
// // // // //                                                                             {cat}
// // // // //                                                                         </Badge>
// // // // //                                                                     ))}
// // // // //                                                                 </div>
// // // // //                                                             </TableCell>
// // // // //                                                             <TableCell>AED {parcel.duty_payable_aed.toFixed(2)}</TableCell>
// // // // //                                                             <TableCell>
// // // // //                                                                 <Badge className={getLaneColor(parcel.assigned_risk_lane)}>
// // // // //                                                                     {parcel.assigned_risk_lane}
// // // // //                                                                 </Badge>
// // // // //                                                             </TableCell>
// // // // //                                                             <TableCell>
// // // // //                                                                 <Button size="sm" variant="outline">Review</Button>
// // // // //                                                             </TableCell>
// // // // //                                                         </TableRow>
// // // // //                                                     ))}
// // // // //                                             </TableBody>
// // // // //                                         </Table>
// // // // //                                         {stats.highRisk > 5 && (
// // // // //                                             <div className="text-center mt-4 text-sm text-muted-foreground">
// // // // //                                                 Showing 5 of {stats.highRisk.toLocaleString()} high-risk parcels
// // // // //                                             </div>
// // // // //                                         )}
// // // // //                                     </CardContent>
// // // // //                                 </Card>
// // // // //                             )}
// // // // //                         </TabsContent>

// // // // //                         <TabsContent value="parcels">
// // // // //                             <Card>
// // // // //                                 <CardHeader>
// // // // //                                     <div className="flex items-center justify-between">
// // // // //                                         <div>
// // // // //                                             <CardTitle>Processed Parcels</CardTitle>
// // // // //                                             <CardDescription>
// // // // //                                                 Showing {startIndex + 1}-{Math.min(endIndex, filteredData.length)} of {filteredData.length} filtered parcels
// // // // //                                             </CardDescription>
// // // // //                                         </div>
// // // // //                                         <div className="flex gap-2">
// // // // //                                             <Button
// // // // //                                                 variant={filter === "all" ? "default" : "outline"}
// // // // //                                                 size="sm"
// // // // //                                                 onClick={() => { setFilter("all"); setCurrentPage(1); }}
// // // // //                                             >
// // // // //                                                 All ({processedData.length.toLocaleString()})
// // // // //                                             </Button>
// // // // //                                             <Button
// // // // //                                                 variant={filter === "high-risk" ? "default" : "outline"}
// // // // //                                                 size="sm"
// // // // //                                                 onClick={() => { setFilter("high-risk"); setCurrentPage(1); }}
// // // // //                                             >
// // // // //                                                 High Risk ({stats.highRisk.toLocaleString()})
// // // // //                                             </Button>
// // // // //                                             <Button
// // // // //                                                 variant={filter === "split" ? "default" : "outline"}
// // // // //                                                 size="sm"
// // // // //                                                 onClick={() => { setFilter("split"); setCurrentPage(1); }}
// // // // //                                             >
// // // // //                                                 Split ({stats.splitShipments.toLocaleString()})
// // // // //                                             </Button>
// // // // //                                             <Button
// // // // //                                                 variant={filter === "duty" ? "default" : "outline"}
// // // // //                                                 size="sm"
// // // // //                                                 onClick={() => { setFilter("duty"); setCurrentPage(1); }}
// // // // //                                             >
// // // // //                                                 Duty ({stats.dutyApplicable.toLocaleString()})
// // // // //                                             </Button>
// // // // //                                         </div>
// // // // //                                     </div>
// // // // //                                 </CardHeader>
// // // // //                                 <CardContent>
// // // // //                                     <Table>
// // // // //                                         <TableHeader>
// // // // //                                             <TableRow>
// // // // //                                                 <TableHead>Order ID</TableHead>
// // // // //                                                 <TableHead>Importer</TableHead>
// // // // //                                                 <TableHead>Product</TableHead>
// // // // //                                                 <TableHead>HS Code</TableHead>
// // // // //                                                 <TableHead>Value (AED)</TableHead>
// // // // //                                                 <TableHead>Duty</TableHead>
// // // // //                                                 <TableHead>Risk</TableHead>
// // // // //                                                 <TableHead>Lane</TableHead>
// // // // //                                             </TableRow>
// // // // //                                         </TableHeader>
// // // // //                                         <TableBody>
// // // // //                                             {paginatedData.map((parcel) => (
// // // // //                                                 <TableRow key={parcel.order_id} className="hover:bg-muted/50">
// // // // //                                                     <TableCell className="font-medium">{parcel.order_id}</TableCell>
// // // // //                                                     <TableCell>
// // // // //                                                         <div>
// // // // //                                                             <div className="font-medium">{parcel.importer_name}</div>
// // // // //                                                             {parcel.is_split_shipment && (
// // // // //                                                                 <Badge variant="outline" className="mt-1 text-xs bg-amber-50">
// // // // //                                                                     Split Shipment
// // // // //                                                                 </Badge>
// // // // //                                                             )}
// // // // //                                                         </div>
// // // // //                                                     </TableCell>
// // // // //                                                     <TableCell className="max-w-[200px]">
// // // // //                                                         <div className="font-medium truncate">{parcel.product_title}</div>
// // // // //                                                         <div className="text-xs text-muted-foreground truncate">
// // // // //                                                             {parcel.product_category}
// // // // //                                                         </div>
// // // // //                                                     </TableCell>
// // // // //                                                     <TableCell>
// // // // //                                                         <div>
// // // // //                                                             <div className="font-mono font-medium">{parcel.predicted_hs_code}</div>
// // // // //                                                             <div className="text-xs text-muted-foreground">
// // // // //                                                                 {(parcel.hs_confidence_score * 100).toFixed(0)}% confidence
// // // // //                                                             </div>
// // // // //                                                         </div>
// // // // //                                                     </TableCell>
// // // // //                                                     <TableCell className="font-medium">
// // // // //                                                         AED {parcel.item_price_aed.toFixed(2)}
// // // // //                                                     </TableCell>
// // // // //                                                     <TableCell>
// // // // //                                                         {parcel.duty_applicable ? (
// // // // //                                                             <div className="text-green-600 font-medium">
// // // // //                                                                 AED {parcel.duty_payable_aed.toFixed(2)}
// // // // //                                                             </div>
// // // // //                                                         ) : (
// // // // //                                                             <Badge variant="outline" className="text-xs">
// // // // //                                                                 Exempt
// // // // //                                                             </Badge>
// // // // //                                                         )}
// // // // //                                                     </TableCell>
// // // // //                                                     <TableCell>{getRiskBadge(parcel.is_high_risk)}</TableCell>
// // // // //                                                     <TableCell>
// // // // //                                                         <Badge className={getLaneColor(parcel.assigned_risk_lane)}>
// // // // //                                                             {parcel.assigned_risk_lane}
// // // // //                                                         </Badge>
// // // // //                                                     </TableCell>
// // // // //                                                 </TableRow>
// // // // //                                             ))}
// // // // //                                         </TableBody>
// // // // //                                     </Table>

// // // // //                                     {/* Pagination */}
// // // // //                                     {totalPages > 1 && (
// // // // //                                         <div className="flex items-center justify-between mt-4">
// // // // //                                             <div className="text-sm text-muted-foreground">
// // // // //                                                 Page {currentPage} of {totalPages}
// // // // //                                             </div>
// // // // //                                             <div className="flex items-center gap-2">
// // // // //                                                 <Button
// // // // //                                                     variant="outline"
// // // // //                                                     size="sm"
// // // // //                                                     onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
// // // // //                                                     disabled={currentPage === 1}
// // // // //                                                 >
// // // // //                                                     <ChevronLeft className="h-4 w-4" />
// // // // //                                                     Previous
// // // // //                                                 </Button>
// // // // //                                                 <div className="flex items-center gap-1">
// // // // //                                                     {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
// // // // //                                                         let pageNum;
// // // // //                                                         if (totalPages <= 5) {
// // // // //                                                             pageNum = i + 1;
// // // // //                                                         } else if (currentPage <= 3) {
// // // // //                                                             pageNum = i + 1;
// // // // //                                                         } else if (currentPage >= totalPages - 2) {
// // // // //                                                             pageNum = totalPages - 4 + i;
// // // // //                                                         } else {
// // // // //                                                             pageNum = currentPage - 2 + i;
// // // // //                                                         }

// // // // //                                                         return (
// // // // //                                                             <Button
// // // // //                                                                 key={pageNum}
// // // // //                                                                 variant={currentPage === pageNum ? "default" : "outline"}
// // // // //                                                                 size="sm"
// // // // //                                                                 onClick={() => setCurrentPage(pageNum)}
// // // // //                                                             >
// // // // //                                                                 {pageNum}
// // // // //                                                             </Button>
// // // // //                                                         );
// // // // //                                                     })}
// // // // //                                                 </div>
// // // // //                                                 <Button
// // // // //                                                     variant="outline"
// // // // //                                                     size="sm"
// // // // //                                                     onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
// // // // //                                                     disabled={currentPage === totalPages}
// // // // //                                                 >
// // // // //                                                     Next
// // // // //                                                     <ChevronRight className="h-4 w-4" />
// // // // //                                                 </Button>
// // // // //                                             </div>
// // // // //                                         </div>
// // // // //                                     )}
// // // // //                                 </CardContent>
// // // // //                             </Card>
// // // // //                         </TabsContent>

// // // // //                         <TabsContent value="analytics">
// // // // //                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // // // //                                 {/* Revenue Analytics */}
// // // // //                                 <Card>
// // // // //                                     <CardHeader>
// // // // //                                         <CardTitle>Revenue Analytics</CardTitle>
// // // // //                                         <CardDescription>Duty collection and revenue protection</CardDescription>
// // // // //                                     </CardHeader>
// // // // //                                     <CardContent>
// // // // //                                         <div className="space-y-4">
// // // // //                                             <div>
// // // // //                                                 <div className="flex justify-between mb-1">
// // // // //                                                     <span className="text-sm">Duty Collected</span>
// // // // //                                                     <span className="text-sm font-medium">AED {stats.totalDuty.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
// // // // //                                                 </div>
// // // // //                                                 <Progress
// // // // //                                                     value={stats.total > 0 ? (stats.dutyApplicable / stats.total) * 100 : 0}
// // // // //                                                     className="h-2"
// // // // //                                                 />
// // // // //                                             </div>
// // // // //                                             <div className="grid grid-cols-2 gap-4">
// // // // //                                                 <Card className="bg-muted/50">
// // // // //                                                     <CardContent className="p-4">
// // // // //                                                         <div className="text-sm text-muted-foreground">Split Shipments</div>
// // // // //                                                         <div className="text-2xl font-bold">{stats.splitShipments.toLocaleString()}</div>
// // // // //                                                         <div className="text-xs text-muted-foreground">
// // // // //                                                             Potential evasion detected
// // // // //                                                         </div>
// // // // //                                                     </CardContent>
// // // // //                                                 </Card>
// // // // //                                                 <Card className="bg-muted/50">
// // // // //                                                     <CardContent className="p-4">
// // // // //                                                         <div className="text-sm text-muted-foreground">De-minimis Abuse</div>
// // // // //                                                         <div className="text-2xl font-bold">{stats.splitShipments.toLocaleString()}</div>
// // // // //                                                         <div className="text-xs text-muted-foreground">
// // // // //                                                             Value above AED 1,000
// // // // //                                                         </div>
// // // // //                                                     </CardContent>
// // // // //                                                 </Card>
// // // // //                                             </div>
// // // // //                                         </div>
// // // // //                                     </CardContent>
// // // // //                                 </Card>

// // // // //                                 {/* Risk Analytics */}
// // // // //                                 <Card>
// // // // //                                     <CardHeader>
// // // // //                                         <CardTitle>Risk Analytics</CardTitle>
// // // // //                                         <CardDescription>Security and safety risk distribution</CardDescription>
// // // // //                                     </CardHeader>
// // // // //                                     <CardContent>
// // // // //                                         <div className="space-y-4">
// // // // //                                             {[
// // // // //                                                 { category: "Weapons", count: getRiskCategoryCount("WEAPONS"), color: "bg-red-500" },
// // // // //                                                 { category: "Drones", count: getRiskCategoryCount("DRONES"), color: "bg-amber-500" },
// // // // //                                                 { category: "Lithium Batteries", count: getRiskCategoryCount("LITHIUM_BATTERIES"), color: "bg-orange-500" },
// // // // //                                                 { category: "Precious Metals", count: getRiskCategoryCount("PRECIOUS_METALS"), color: "bg-yellow-500" },
// // // // //                                             ].map((item) => (
// // // // //                                                 <div key={item.category}>
// // // // //                                                     <div className="flex justify-between mb-1">
// // // // //                                                         <span className="text-sm">{item.category}</span>
// // // // //                                                         <span className="text-sm font-medium">{item.count.toLocaleString()}</span>
// // // // //                                                     </div>
// // // // //                                                     <Progress
// // // // //                                                         value={stats.highRisk > 0 ? (item.count / stats.highRisk) * 100 : 0}
// // // // //                                                         className="h-2"
// // // // //                                                         indicatorClassName={item.color}
// // // // //                                                     />
// // // // //                                                 </div>
// // // // //                                             ))}
// // // // //                                         </div>
// // // // //                                     </CardContent>
// // // // //                                 </Card>

// // // // //                                 {/* HS Classification Performance */}
// // // // //                                 <Card className="lg:col-span-2">
// // // // //                                     <CardHeader>
// // // // //                                         <CardTitle>HS Classification Performance</CardTitle>
// // // // //                                         <CardDescription>Accuracy and confidence of automated HS coding</CardDescription>
// // // // //                                     </CardHeader>
// // // // //                                     <CardContent>
// // // // //                                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // //                                             <div className="space-y-2">
// // // // //                                                 <div className="text-4xl font-bold text-center">{stats.avgConfidence}%</div>
// // // // //                                                 <div className="text-center text-sm text-muted-foreground">Average Confidence</div>
// // // // //                                             </div>
// // // // //                                             <div className="space-y-2">
// // // // //                                                 <div className="text-4xl font-bold text-center">
// // // // //                                                     {stats.total > 0
// // // // //                                                         ? Math.round(processedData.filter(p => p.hs_confidence_score > 0.7).length / stats.total * 100)
// // // // //                                                         : 0}%
// // // // //                                                 </div>
// // // // //                                                 <div className="text-center text-sm text-muted-foreground">Auto-classified</div>
// // // // //                                             </div>
// // // // //                                             <div className="space-y-2">
// // // // //                                                 <div className="text-4xl font-bold text-center">
// // // // //                                                     {stats.total > 0
// // // // //                                                         ? Math.round(processedData.filter(p => p.hs_confidence_score <= 0.7).length / stats.total * 100)
// // // // //                                                         : 0}%
// // // // //                                                 </div>
// // // // //                                                 <div className="text-center text-sm text-muted-foreground">Escalated for Review</div>
// // // // //                                             </div>
// // // // //                                         </div>
// // // // //                                     </CardContent>
// // // // //                                 </Card>
// // // // //                             </div>
// // // // //                         </TabsContent>
// // // // //                     </Tabs>

// // // // //                     {/* Upload New Data Button */}
// // // // //                     <Card className="border-dashed border-2">
// // // // //                         <CardContent className="p-6">
// // // // //                             <div className="flex flex-col items-center justify-center text-center space-y-4">
// // // // //                                 <UploadIcon className="h-10 w-10 text-primary" />
// // // // //                                 <div>
// // // // //                                     <h3 className="text-lg font-semibold">Process Another File</h3>
// // // // //                                     <p className="text-sm text-muted-foreground">
// // // // //                                         Upload a new CSV file to analyze more e-commerce data
// // // // //                                     </p>
// // // // //                                 </div>
// // // // //                                 <div className="flex gap-4">
// // // // //                                     <Button
// // // // //                                         className="gap-2"
// // // // //                                         onClick={handleUploadNewCSV}
// // // // //                                     >
// // // // //                                         <UploadIcon className="h-4 w-4" />
// // // // //                                         Upload New CSV
// // // // //                                     </Button>
// // // // //                                     <Button variant="outline" onClick={exportToCSV}>
// // // // //                                         <Download className="h-4 w-4 mr-2" />
// // // // //                                         Download Results ({processedData.length.toLocaleString()} parcels)
// // // // //                                     </Button>
// // // // //                                 </div>
// // // // //                             </div>
// // // // //                         </CardContent>
// // // // //                     </Card>
// // // // //                 </>
// // // // //             )}
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default ParcelIntelPage;



// // // // import React, { useState } from "react";
// // // // import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// // // // import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// // // // import { Badge } from "@/components/ui/badge";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // // // import { Progress } from "@/components/ui/progress";
// // // // import {
// // // //     Package,
// // // //     AlertTriangle,
// // // //     CheckCircle,
// // // //     XCircle,
// // // //     Filter,
// // // //     Download,
// // // //     Upload as UploadIcon,
// // // //     BarChart3,
// // // //     Shield,
// // // //     DollarSign,
// // // //     Search,
// // // //     Loader2,
// // // //     ChevronLeft,
// // // //     ChevronRight
// // // // } from "lucide-react";
// // // // import { Input } from "@/components/ui/input";
// // // // import { CSVUploader } from "@/components/CSVUploader";
// // // // import { ParcelProcessor, type ProcessedParcel, type RawParcelData } from "@/utils/parcelProcessor";
// // // // import { toast } from "sonner";
// // // // import { ParcelCharts } from "@/components/ParcelCharts";

// // // // const ParcelIntelPage = () => {
// // // //     // STATE
// // // //     const [processedData, setProcessedData] = useState<ProcessedParcel[]>([]);
// // // //     const [isProcessing, setIsProcessing] = useState(false);
// // // //     const [showUploader, setShowUploader] = useState<boolean>(true);
// // // //     const [filter, setFilter] = useState<string>("all");
// // // //     const [search, setSearch] = useState<string>("");
// // // //     const [currentPage, setCurrentPage] = useState(1);
// // // //     const itemsPerPage = 10;

// // // //     const handleDataProcessed = (rawData: RawParcelData[], filename: string) => {
// // // //         console.log(`📥 Processing ${rawData.length} records from ${filename}`);
// // // //         setIsProcessing(true);

// // // //         setTimeout(() => {
// // // //             try {
// // // //                 console.log("🔍 Analyzing data for all 4 logic gates...");

// // // //                 // --- LEVEL 1: Split Shipment Detection ---
// // // //                 console.log("🔄 Level 1: Detecting split shipments...");
// // // //                 const splitGroups = new Map<string, string[]>();
// // // //                 const dailyTotals = new Map<string, number>();

// // // //                 // Group by importer and day (simplified)
// // // //                 rawData.slice(0, 1000).forEach((item, index) => {
// // // //                     const itemPriceINR = typeof item.item_price_inr === 'string'
// // // //                         ? parseFloat(item.item_price_inr)
// // // //                         : item.item_price_inr;
// // // //                     const itemValueAED = itemPriceINR * 0.044;

// // // //                     // Create a simple date key (using index to simulate different days)
// // // //                     const day = Math.floor(index / 100) + 1; // Groups of 100 parcels per "day"
// // // //                     const key = `${item.importer_name}_day${day}`;

// // // //                     // Update daily total
// // // //                     const currentTotal = dailyTotals.get(key) || 0;
// // // //                     dailyTotals.set(key, currentTotal + itemValueAED);

// // // //                     // Add to group
// // // //                     if (!splitGroups.has(key)) {
// // // //                         splitGroups.set(key, []);
// // // //                     }
// // // //                     splitGroups.get(key)!.push(item.order_id);
// // // //                 });

// // // //                 // Identify split shipments (daily total > 1000 AED)
// // // //                 const splitShipmentOrders = new Set<string>();
// // // //                 splitGroups.forEach((orderIds, key) => {
// // // //                     const dailyTotal = dailyTotals.get(key) || 0;
// // // //                     if (orderIds.length > 1 && dailyTotal > 1000) {
// // // //                         orderIds.forEach(orderId => splitShipmentOrders.add(orderId));
// // // //                     }
// // // //                 });

// // // //                 console.log(`✅ Level 1: Found ${splitShipmentOrders.size} split shipments`);

// // // //                 // Process parcels
// // // //                 const results = rawData.slice(0, 1000).map((item, index) => {
// // // //                     const itemPriceINR = typeof item.item_price_inr === 'string'
// // // //                         ? parseFloat(item.item_price_inr)
// // // //                         : item.item_price_inr;
// // // //                     const itemValueAED = parseFloat((itemPriceINR * 0.044).toFixed(2));

// // // //                     // --- LEVEL 2: HS Code Classification ---
// // // //                     const text = `${item.product_title || ''} ${item.description || ''}`.toLowerCase();
// // // //                     let hsCode = '9999.99.99';
// // // //                     let hsConfidence = 0.5;
// // // //                     let hsChapter = '99';

// // // //                     // Smart HS code detection
// // // //                     if (text.includes('drone') || text.includes('uav') || text.includes('quadcopter')) {
// // // //                         hsCode = '8806.21.00'; // Drones ≤250g
// // // //                         hsConfidence = 0.95;
// // // //                         hsChapter = '88';
// // // //                     } else if (text.includes('phone') || text.includes('mobile') || text.includes('smartphone')) {
// // // //                         hsCode = '8517.12.00'; // Mobile phones
// // // //                         hsConfidence = 0.92;
// // // //                         hsChapter = '85';
// // // //                     } else if (text.includes('shirt') || text.includes('clothing') || text.includes('apparel')) {
// // // //                         hsCode = '6203.42.00'; // Men's trousers
// // // //                         hsConfidence = 0.88;
// // // //                         hsChapter = '62';
// // // //                     } else if (text.includes('book') || text.includes('publication')) {
// // // //                         hsCode = '4901.99.00'; // Printed books
// // // //                         hsConfidence = 0.96;
// // // //                         hsChapter = '49';
// // // //                     } else if (text.includes('car') || text.includes('automotive')) {
// // // //                         hsCode = '8708.29.00'; // Car parts
// // // //                         hsConfidence = 0.85;
// // // //                         hsChapter = '87';
// // // //                     } else if (text.includes('jewel') || text.includes('gold') || text.includes('silver')) {
// // // //                         hsCode = '7113.19.00'; // Jewellery
// // // //                         hsConfidence = 0.90;
// // // //                         hsChapter = '71';
// // // //                     } else if (text.includes('battery') || text.includes('lithium') || text.includes('power bank')) {
// // // //                         hsCode = '8507.60.00'; // Lithium batteries
// // // //                         hsConfidence = 0.94;
// // // //                         hsChapter = '85';
// // // //                     } else if (text.includes('weapon') || text.includes('gun') || text.includes('ammunition')) {
// // // //                         hsCode = '9302.00.00'; // Revolvers and pistols
// // // //                         hsConfidence = 0.97;
// // // //                         hsChapter = '93';
// // // //                     }

// // // //                     // --- LEVEL 3: Duty Calculation ---
// // // //                     const isSplit = splitShipmentOrders.has(item.order_id);
// // // //                     const dailyTotal = dailyTotals.get(`${item.importer_name}_day${Math.floor(index / 100) + 1}`) || itemValueAED;
// // // //                     const dutyApplicable = dailyTotal > 1000 || isSplit;
// // // //                     const dutyRate = 5; // 5% standard rate
// // // //                     const dutyPayable = dutyApplicable ? parseFloat((itemValueAED * dutyRate / 100).toFixed(2)) : 0;

// // // //                     // --- LEVEL 4: Risk Protection ---
// // // //                     const riskKeywords = [];
// // // //                     const riskCategories = [];
// // // //                     let isHighRisk = false;

// // // //                     // Check for dangerous goods
// // // //                     if (text.includes('drone') || text.includes('uav')) {
// // // //                         riskKeywords.push('drone');
// // // //                         riskCategories.push('DRONES');
// // // //                         isHighRisk = true;
// // // //                     }
// // // //                     if (text.includes('weapon') || text.includes('gun') || text.includes('ammunition')) {
// // // //                         riskKeywords.push('weapon');
// // // //                         riskCategories.push('WEAPONS');
// // // //                         isHighRisk = true;
// // // //                     }
// // // //                     if (text.includes('battery') || text.includes('lithium')) {
// // // //                         riskKeywords.push('lithium');
// // // //                         riskCategories.push('LITHIUM_BATTERIES');
// // // //                         isHighRisk = true;
// // // //                     }
// // // //                     if (text.includes('gold') || text.includes('silver') || text.includes('platinum')) {
// // // //                         riskKeywords.push('precious');
// // // //                         riskCategories.push('PRECIOUS_METALS');
// // // //                     }

// // // //                     // --- Risk Lane Assignment ---
// // // //                     let assignedLane: 'GREEN' | 'YELLOW' | 'RED' | 'BLACK' = 'GREEN';
// // // //                     const laneReasons = [];

// // // //                     if (riskCategories.includes('WEAPONS') || riskCategories.includes('DRONES') || riskCategories.includes('LITHIUM_BATTERIES')) {
// // // //                         assignedLane = 'BLACK';
// // // //                         laneReasons.push('High-security risk goods');
// // // //                     } else if (isSplit) {
// // // //                         assignedLane = 'RED';
// // // //                         laneReasons.push('Split shipment detected');
// // // //                     } else if (dutyApplicable) {
// // // //                         assignedLane = 'YELLOW';
// // // //                         laneReasons.push('Duty applicable');
// // // //                     } else {
// // // //                         assignedLane = 'GREEN';
// // // //                         laneReasons.push('Low risk, compliant');
// // // //                     }

// // // //                     // Clearance recommendation
// // // //                     const clearanceRecommendation =
// // // //                         assignedLane === 'GREEN' ? 'AUTO_CLEAR' :
// // // //                             assignedLane === 'YELLOW' ? 'DOC_REVIEW' :
// // // //                                 assignedLane === 'RED' ? 'INSPECTION' : 'HOLD';

// // // //                     const result: ProcessedParcel = {
// // // //                         order_id: item.order_id,
// // // //                         timestamp: item.timestamp,
// // // //                         importer_name: item.importer_name,
// // // //                         delivery_address: item.delivery_address,
// // // //                         product_title: item.product_title || 'Unknown Product',
// // // //                         description: item.description || '',
// // // //                         product_category: item.product_category || 'Uncategorized',
// // // //                         item_price_inr: itemPriceINR,
// // // //                         item_price_aed: itemValueAED,
// // // //                         image_url: item.image_url,
// // // //                         same_day_importer_key: `${item.importer_name}_day${Math.floor(index / 100) + 1}`,
// // // //                         daily_total_aed: dailyTotal,
// // // //                         is_split_shipment: isSplit,
// // // //                         split_group_id: isSplit ? `SPLIT-${item.importer_name.substring(0, 3).toUpperCase()}-${Math.floor(index / 100) + 1}` : undefined,
// // // //                         predicted_hs_code: hsCode,
// // // //                         hs_confidence_score: hsConfidence,
// // // //                         hs_chapter: hsChapter,
// // // //                         de_minimis_threshold: 1000,
// // // //                         duty_applicable: dutyApplicable,
// // // //                         duty_rate: dutyRate,
// // // //                         duty_payable_aed: dutyPayable,
// // // //                         tariff_reference: 'STANDARD_5',
// // // //                         risk_keywords_found: riskKeywords,
// // // //                         risk_categories: riskCategories,
// // // //                         is_high_risk: isHighRisk,
// // // //                         risk_reason_codes: riskCategories.map(cat => `${cat}_DETECTED`),
// // // //                         assigned_risk_lane: assignedLane,
// // // //                         lane_reasons: laneReasons,
// // // //                         processing_timestamp: new Date().toISOString(),
// // // //                         clearance_recommendation: clearanceRecommendation
// // // //                     };

// // // //                     return result;
// // // //                 });

// // // //                 setProcessedData(results);
// // // //                 setShowUploader(false);
// // // //                 setCurrentPage(1);

// // // //                 toast.success("Processing Complete!", {
// // // //                     description: `Analyzed ${results.length} parcels through all 4 logic gates`,
// // // //                     duration: 5000,
// // // //                 });

// // // //                 // Calculate and log summary
// // // //                 const splitCount = results.filter(r => r.is_split_shipment).length;
// // // //                 const highRiskCount = results.filter(r => r.is_high_risk).length;
// // // //                 const dutyTotal = results.reduce((sum, r) => sum + r.duty_payable_aed, 0);
// // // //                 const avgConfidence = results.reduce((sum, r) => sum + r.hs_confidence_score, 0) / results.length;

// // // //                 console.log(`🎉 PROCESSING COMPLETE!`);
// // // //                 console.log(`📊 Summary:`);
// // // //                 console.log(`   • Total parcels: ${results.length}`);
// // // //                 console.log(`   • Split shipments: ${splitCount}`);
// // // //                 console.log(`   • High-risk items: ${highRiskCount}`);
// // // //                 console.log(`   • Total duty: AED ${dutyTotal.toFixed(2)}`);
// // // //                 console.log(`   • HS confidence: ${(avgConfidence * 100).toFixed(1)}%`);
// // // //                 console.log(`   • Risk lanes: GREEN(${results.filter(r => r.assigned_risk_lane === 'GREEN').length}) | YELLOW(${results.filter(r => r.assigned_risk_lane === 'YELLOW').length}) | RED(${results.filter(r => r.assigned_risk_lane === 'RED').length}) | BLACK(${results.filter(r => r.assigned_risk_lane === 'BLACK').length})`);

// // // //             } catch (error) {
// // // //                 console.error("❌ Error processing data:", error);
// // // //             } finally {
// // // //                 setIsProcessing(false);
// // // //             }
// // // //         }, 1500);
// // // //     };

// // // //     // UPLOAD NEW CSV
// // // //     const handleUploadNewCSV = () => {
// // // //         setProcessedData([]);
// // // //         setShowUploader(true);
// // // //         setFilter("all");
// // // //         setSearch("");
// // // //         setCurrentPage(1);
// // // //     };

// // // //     // EXPORT TO CSV
// // // //     const exportToCSV = () => {
// // // //         if (processedData.length === 0) {
// // // //             alert("No data to export. Please upload and process a CSV file first.");
// // // //             return;
// // // //         }

// // // //         const headers = [
// // // //             'order_id',
// // // //             'importer_name',
// // // //             'timestamp',
// // // //             'product_title',
// // // //             'item_price_inr',
// // // //             'item_price_aed',
// // // //             'predicted_hs_code',
// // // //             'hs_confidence_score',
// // // //             'is_split_shipment',
// // // //             'daily_total_aed',
// // // //             'duty_applicable',
// // // //             'duty_rate',
// // // //             'duty_payable_aed',
// // // //             'is_high_risk',
// // // //             'risk_categories',
// // // //             'assigned_risk_lane',
// // // //             'clearance_recommendation'
// // // //         ];

// // // //         const csvContent = [
// // // //             headers.join(','),
// // // //             ...processedData.map(p => [
// // // //                 p.order_id,
// // // //                 `"${p.importer_name}"`,
// // // //                 p.timestamp,
// // // //                 `"${p.product_title}"`,
// // // //                 p.item_price_inr,
// // // //                 p.item_price_aed.toFixed(2),
// // // //                 p.predicted_hs_code,
// // // //                 (p.hs_confidence_score * 100).toFixed(1) + '%',
// // // //                 p.is_split_shipment ? 'YES' : 'NO',
// // // //                 p.daily_total_aed.toFixed(2),
// // // //                 p.duty_applicable ? 'YES' : 'NO',
// // // //                 p.duty_rate + '%',
// // // //                 p.duty_payable_aed.toFixed(2),
// // // //                 p.is_high_risk ? 'HIGH' : 'LOW',
// // // //                 `"${p.risk_categories.join(';')}"`,
// // // //                 p.assigned_risk_lane,
// // // //                 p.clearance_recommendation
// // // //             ].join(','))
// // // //         ].join('\n');

// // // //         const blob = new Blob([csvContent], { type: 'text/csv' });
// // // //         const url = window.URL.createObjectURL(blob);
// // // //         const a = document.createElement('a');
// // // //         a.href = url;
// // // //         a.download = `parcel_intel_results_${new Date().toISOString().split('T')[0]}.csv`;
// // // //         document.body.appendChild(a);
// // // //         a.click();
// // // //         document.body.removeChild(a);
// // // //         window.URL.revokeObjectURL(url);
// // // //     };

// // // //     // FILTER AND SEARCH
// // // //     const filteredData = processedData.filter(parcel => {
// // // //         if (filter === "all") return true;
// // // //         if (filter === "high-risk") return parcel.is_high_risk;
// // // //         if (filter === "split") return parcel.is_split_shipment;
// // // //         if (filter === "duty") return parcel.duty_applicable;
// // // //         return parcel.assigned_risk_lane === filter;
// // // //     }).filter(parcel =>
// // // //         parcel.order_id.toLowerCase().includes(search.toLowerCase()) ||
// // // //         parcel.importer_name.toLowerCase().includes(search.toLowerCase()) ||
// // // //         parcel.product_title.toLowerCase().includes(search.toLowerCase())
// // // //     );

// // // //     // PAGINATION
// // // //     const totalPages = Math.ceil(filteredData.length / itemsPerPage);
// // // //     const startIndex = (currentPage - 1) * itemsPerPage;
// // // //     const endIndex = startIndex + itemsPerPage;
// // // //     const paginatedData = filteredData.slice(startIndex, endIndex);

// // // //     // STATS
// // // //     const stats = {
// // // //         total: processedData.length,
// // // //         highRisk: processedData.filter(p => p.is_high_risk).length,
// // // //         splitShipments: processedData.filter(p => p.is_split_shipment).length,
// // // //         dutyApplicable: processedData.filter(p => p.duty_applicable).length,
// // // //         greenLane: processedData.filter(p => p.assigned_risk_lane === "GREEN").length,
// // // //         yellowLane: processedData.filter(p => p.assigned_risk_lane === "YELLOW").length,
// // // //         redLane: processedData.filter(p => p.assigned_risk_lane === "RED").length,
// // // //         blackLane: processedData.filter(p => p.assigned_risk_lane === "BLACK").length,
// // // //         totalDuty: processedData.reduce((sum, p) => sum + p.duty_payable_aed, 0),
// // // //         avgConfidence: processedData.length > 0
// // // //             ? Math.round(processedData.reduce((sum, p) => sum + p.hs_confidence_score, 0) / processedData.length * 100)
// // // //             : 0
// // // //     };

// // // //     // HELPER FUNCTIONS
// // // //     const getLaneColor = (lane: string) => {
// // // //         switch (lane) {
// // // //             case "GREEN": return "bg-green-100 text-green-800 border-green-300";
// // // //             case "YELLOW": return "bg-yellow-100 text-yellow-800 border-yellow-300";
// // // //             case "RED": return "bg-red-100 text-red-800 border-red-300";
// // // //             case "BLACK": return "bg-gray-800 text-white border-gray-700";
// // // //             default: return "bg-gray-100 text-gray-800 border-gray-300";
// // // //         }
// // // //     };

// // // //     const getRiskBadge = (isHighRisk: boolean) => {
// // // //         return isHighRisk ? (
// // // //             <Badge variant="destructive" className="flex items-center gap-1">
// // // //                 <AlertTriangle className="h-3 w-3" /> High Risk
// // // //             </Badge>
// // // //         ) : (
// // // //             <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
// // // //                 <CheckCircle className="h-3 w-3 mr-1" /> Low Risk
// // // //             </Badge>
// // // //         );
// // // //     };

// // // //     const getRiskCategoryCount = (category: string) => {
// // // //         return processedData.filter(p => p.risk_categories.includes(category)).length;
// // // //     };

// // // //     // Create loading skeleton component
// // // //     const LoadingSkeleton = () => (
// // // //         <div className="space-y-6">
// // // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // // //                 {[...Array(4)].map((_, i) => (
// // // //                     <Card key={i}>
// // // //                         <CardContent className="p-6">
// // // //                             <div className="h-8 bg-gray-200 rounded animate-pulse mb-2"></div>
// // // //                             <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
// // // //                         </CardContent>
// // // //                     </Card>
// // // //                 ))}
// // // //             </div>
// // // //             <Card>
// // // //                 <CardContent className="p-6">
// // // //                     <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
// // // //                 </CardContent>
// // // //             </Card>
// // // //         </div>
// // // //     );


// // // //     return (
// // // //         <div className="p-6 space-y-6 overflow-y-auto h-full">
// // // //             {isProcessing && <LoadingSkeleton />}
// // // //             {/* Header */}
// // // //             <div>
// // // //                 <div className="flex items-center gap-3 mb-2">
// // // //                     <Package className="h-8 w-8 text-primary" />
// // // //                     <h1 className="text-3xl font-bold tracking-tight">PARCEL-INTEL</h1>
// // // //                 </div>
// // // //                 <p className="text-muted-foreground">
// // // //                     E-commerce parcel intelligence engine for split shipment detection, HS classification, duty calculation, and risk assessment
// // // //                 </p>
// // // //             </div>

// // // //             {/* Controls */}
// // // //             <Card>
// // // //                 <CardContent className="p-4">
// // // //                     <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
// // // //                         <div className="flex-1 w-full md:w-auto">
// // // //                             <div className="relative">
// // // //                                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
// // // //                                 <Input
// // // //                                     placeholder="Search parcels by ID, importer, or product..."
// // // //                                     className="pl-10"
// // // //                                     value={search}
// // // //                                     onChange={(e) => setSearch(e.target.value)}
// // // //                                     disabled={isProcessing || processedData.length === 0}
// // // //                                 />
// // // //                             </div>
// // // //                         </div>
// // // //                         <div className="flex items-center gap-2">
// // // //                             <Button
// // // //                                 variant="outline"
// // // //                                 size="sm"
// // // //                                 className="gap-2"
// // // //                                 onClick={handleUploadNewCSV}
// // // //                                 disabled={isProcessing}
// // // //                             >
// // // //                                 <UploadIcon className="h-4 w-4" />
// // // //                                 {processedData.length > 0 ? 'Upload New' : 'Upload CSV'}
// // // //                             </Button>

// // // //                             {processedData.length > 0 && (
// // // //                                 <Button
// // // //                                     variant="outline"
// // // //                                     size="sm"
// // // //                                     className="gap-2"
// // // //                                     onClick={exportToCSV}
// // // //                                     disabled={isProcessing}
// // // //                                 >
// // // //                                     <Download className="h-4 w-4" />
// // // //                                     Export Results
// // // //                                 </Button>
// // // //                             )}

// // // //                             {isProcessing && (
// // // //                                 <Button size="sm" className="gap-2" disabled>
// // // //                                     <Loader2 className="h-4 w-4 animate-spin" />
// // // //                                     Processing...
// // // //                                 </Button>
// // // //                             )}
// // // //                         </div>
// // // //                     </div>
// // // //                 </CardContent>
// // // //             </Card>

// // // //             {/* Main Content */}
// // // //             {showUploader || processedData.length === 0 ? (
// // // //                 // SHOW CSV UPLOADER
// // // //                 <div className="space-y-6">
// // // //                     <Card>
// // // //                         <CardContent className="p-6">
// // // //                             <div className="mb-6">
// // // //                                 <h2 className="text-xl font-bold mb-4">Hackathon Challenge: 4 Logic Gates</h2>
// // // //                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // // //                                     <Card className="border-l-4 border-l-amber-500">
// // // //                                         <CardContent className="p-4">
// // // //                                             <div className="text-lg font-bold text-amber-600 mb-1">Level 1</div>
// // // //                                             <div className="font-medium">Split Shipment Detection</div>
// // // //                                             <div className="text-sm text-muted-foreground mt-1">
// // // //                                                 {"Same importer + same day + total > AED 1,000"}
// // // //                                             </div>
// // // //                                         </CardContent>
// // // //                                     </Card>

// // // //                                     <Card className="border-l-4 border-l-blue-500">
// // // //                                         <CardContent className="p-4">
// // // //                                             <div className="text-lg font-bold text-blue-600 mb-1">Level 2</div>
// // // //                                             <div className="font-medium">HS Code Classification</div>
// // // //                                             <div className="text-sm text-muted-foreground mt-1">
// // // //                                                 6-digit HS code prediction from descriptions
// // // //                                             </div>
// // // //                                         </CardContent>
// // // //                                     </Card>
// // // //                                     <Card className="border-l-4 border-l-green-500">
// // // //                                         <CardContent className="p-4">
// // // //                                             <div className="text-lg font-bold text-green-600 mb-1">Level 3</div>
// // // //                                             <div className="font-medium">Duty Calculation</div>
// // // //                                             <div className="text-sm text-muted-foreground mt-1">
// // // //                                                 AED conversion + de-minimis + 5% duty
// // // //                                             </div>
// // // //                                         </CardContent>
// // // //                                     </Card>
// // // //                                     <Card className="border-l-4 border-l-red-500">
// // // //                                         <CardContent className="p-4">
// // // //                                             <div className="text-lg font-bold text-red-600 mb-1">Level 4</div>
// // // //                                             <div className="font-medium">Risk Protection</div>
// // // //                                             <div className="text-sm text-muted-foreground mt-1">
// // // //                                                 Weapons, drones, lithium batteries detection
// // // //                                             </div>
// // // //                                         </CardContent>
// // // //                                     </Card>
// // // //                                 </div>
// // // //                             </div>
// // // //                             <CSVUploader onDataProcessed={handleDataProcessed} />
// // // //                         </CardContent>
// // // //                     </Card>
// // // //                 </div>
// // // //             ) : (
// // // //                 // SHOW RESULTS WHEN DATA IS PROCESSED
// // // //                 <>
// // // //                     {/* KPI Cards */}
// // // //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // // //                         <Card>
// // // //                             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// // // //                                 <CardTitle className="text-sm font-medium">Total Parcels</CardTitle>
// // // //                                 <Package className="h-4 w-4 text-muted-foreground" />
// // // //                             </CardHeader>
// // // //                             <CardContent>
// // // //                                 <div className="text-2xl font-bold">{stats.total.toLocaleString()}</div>
// // // //                                 <div className="flex items-center gap-2 mt-2">
// // // //                                     <div className="h-2 flex w-full rounded-full overflow-hidden bg-gray-200">
// // // //                                         <div className="bg-green-500" style={{ width: `${(stats.greenLane / stats.total) * 100}%` }} />
// // // //                                         <div className="bg-yellow-500" style={{ width: `${(stats.yellowLane / stats.total) * 100}%` }} />
// // // //                                         <div className="bg-red-500" style={{ width: `${(stats.redLane / stats.total) * 100}%` }} />
// // // //                                         <div className="bg-gray-800" style={{ width: `${(stats.blackLane / stats.total) * 100}%` }} />
// // // //                                     </div>
// // // //                                     <span className="text-xs text-muted-foreground">Lane mix</span>
// // // //                                 </div>
// // // //                             </CardContent>
// // // //                         </Card>

// // // //                         <Card>
// // // //                             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// // // //                                 <CardTitle className="text-sm font-medium">Split Shipments</CardTitle>
// // // //                                 <AlertTriangle className="h-4 w-4 text-amber-500" />
// // // //                             </CardHeader>
// // // //                             <CardContent>
// // // //                                 <div className="text-2xl font-bold">{stats.splitShipments.toLocaleString()}</div>
// // // //                                 <p className="text-xs text-muted-foreground">
// // // //                                     Potential revenue evasion detected
// // // //                                 </p>
// // // //                             </CardContent>
// // // //                         </Card>

// // // //                         <Card>
// // // //                             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// // // //                                 <CardTitle className="text-sm font-medium">High Risk Items</CardTitle>
// // // //                                 <Shield className="h-4 w-4 text-red-500" />
// // // //                             </CardHeader>
// // // //                             <CardContent>
// // // //                                 <div className="text-2xl font-bold">{stats.highRisk.toLocaleString()}</div>
// // // //                                 <p className="text-xs text-muted-foreground">
// // // //                                     {stats.blackLane} in BLACK lane
// // // //                                 </p>
// // // //                             </CardContent>
// // // //                         </Card>

// // // //                         <Card>
// // // //                             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// // // //                                 <CardTitle className="text-sm font-medium">Duty Payable</CardTitle>
// // // //                                 <DollarSign className="h-4 w-4 text-green-500" />
// // // //                             </CardHeader>
// // // //                             <CardContent>
// // // //                                 <div className="text-2xl font-bold">AED {stats.totalDuty.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
// // // //                                 <p className="text-xs text-muted-foreground">
// // // //                                     From {stats.dutyApplicable.toLocaleString()} parcels
// // // //                                 </p>
// // // //                             </CardContent>
// // // //                         </Card>
// // // //                     </div>

// // // //                     {/* Main Results Tabs */}
// // // //                     <Tabs defaultValue="overview" className="space-y-6">
// // // //                         <TabsList>
// // // //                             <TabsTrigger value="overview">Overview</TabsTrigger>
// // // //                             <TabsTrigger value="parcels">Parcel Details</TabsTrigger>
// // // //                             <TabsTrigger value="analytics">Analytics</TabsTrigger>
// // // //                         </TabsList>

// // // //                         <TabsContent value="overview" className="space-y-6">
// // // //                             {/* Risk Lane Distribution */}
// // // //                             <Card>
// // // //                                 <CardHeader>
// // // //                                     <CardTitle>Risk Lane Distribution</CardTitle>
// // // //                                     <CardDescription>How parcels are routed based on risk assessment</CardDescription>
// // // //                                 </CardHeader>
// // // //                                 <CardContent>
// // // //                                     <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
// // // //                                         {[
// // // //                                             { lane: "GREEN", count: stats.greenLane, description: "Auto-clear, no intervention", color: "bg-green-500" },
// // // //                                             { lane: "YELLOW", count: stats.yellowLane, description: "Document review required", color: "bg-yellow-500" },
// // // //                                             { lane: "RED", count: stats.redLane, description: "Physical inspection", color: "bg-red-500" },
// // // //                                             { lane: "BLACK", count: stats.blackLane, description: "Intelligence/security hold", color: "bg-gray-800" }
// // // //                                         ].map((item) => (
// // // //                                             <Card key={item.lane} className={`border-l-4 ${item.lane === "GREEN" ? "border-l-green-500" : item.lane === "YELLOW" ? "border-l-yellow-500" : item.lane === "RED" ? "border-l-red-500" : "border-l-gray-800"}`}>
// // // //                                                 <CardContent className="p-6">
// // // //                                                     <div className="flex items-center justify-between mb-2">
// // // //                                                         <h3 className="font-bold text-xl">{item.lane}</h3>
// // // //                                                         <Badge className={getLaneColor(item.lane)}>{item.count.toLocaleString()}</Badge>
// // // //                                                     </div>
// // // //                                                     <p className="text-sm text-muted-foreground">{item.description}</p>
// // // //                                                     <Progress
// // // //                                                         value={stats.total > 0 ? (item.count / stats.total) * 100 : 0}
// // // //                                                         className="mt-4 h-2"
// // // //                                                         indicatorClassName={item.color}
// // // //                                                     />
// // // //                                                 </CardContent>
// // // //                                             </Card>
// // // //                                         ))}
// // // //                                     </div>
// // // //                                 </CardContent>
// // // //                             </Card>

// // // //                             {/* Recent High-Risk Items */}
// // // //                             {stats.highRisk > 0 && (
// // // //                                 <Card>
// // // //                                     <CardHeader>
// // // //                                         <CardTitle>High-Risk Parcels Requiring Attention</CardTitle>
// // // //                                         <CardDescription>Items flagged for security, safety, or compliance risks</CardDescription>
// // // //                                     </CardHeader>
// // // //                                     <CardContent>
// // // //                                         <Table>
// // // //                                             <TableHeader>
// // // //                                                 <TableRow>
// // // //                                                     <TableHead>Order ID</TableHead>
// // // //                                                     <TableHead>Importer</TableHead>
// // // //                                                     <TableHead>Product</TableHead>
// // // //                                                     <TableHead>Risk Category</TableHead>
// // // //                                                     <TableHead>Duty Payable</TableHead>
// // // //                                                     <TableHead>Risk Lane</TableHead>
// // // //                                                     <TableHead>Action</TableHead>
// // // //                                                 </TableRow>
// // // //                                             </TableHeader>
// // // //                                             <TableBody>
// // // //                                                 {processedData
// // // //                                                     .filter(p => p.is_high_risk)
// // // //                                                     .slice(0, 5)
// // // //                                                     .map((parcel) => (
// // // //                                                         <TableRow key={parcel.order_id}>
// // // //                                                             <TableCell className="font-medium">{parcel.order_id}</TableCell>
// // // //                                                             <TableCell>{parcel.importer_name}</TableCell>
// // // //                                                             <TableCell className="max-w-[200px] truncate">{parcel.product_title}</TableCell>
// // // //                                                             <TableCell>
// // // //                                                                 <div className="flex flex-wrap gap-1">
// // // //                                                                     {parcel.risk_categories.map((cat, idx) => (
// // // //                                                                         <Badge key={idx} variant="outline" className="text-xs">
// // // //                                                                             {cat}
// // // //                                                                         </Badge>
// // // //                                                                     ))}
// // // //                                                                 </div>
// // // //                                                             </TableCell>
// // // //                                                             <TableCell>AED {parcel.duty_payable_aed.toFixed(2)}</TableCell>
// // // //                                                             <TableCell>
// // // //                                                                 <Badge className={getLaneColor(parcel.assigned_risk_lane)}>
// // // //                                                                     {parcel.assigned_risk_lane}
// // // //                                                                 </Badge>
// // // //                                                             </TableCell>
// // // //                                                             <TableCell>
// // // //                                                                 <Button size="sm" variant="outline">Review</Button>
// // // //                                                             </TableCell>
// // // //                                                         </TableRow>
// // // //                                                     ))}
// // // //                                             </TableBody>
// // // //                                         </Table>
// // // //                                         {stats.highRisk > 5 && (
// // // //                                             <div className="text-center mt-4 text-sm text-muted-foreground">
// // // //                                                 Showing 5 of {stats.highRisk.toLocaleString()} high-risk parcels
// // // //                                             </div>
// // // //                                         )}
// // // //                                     </CardContent>
// // // //                                 </Card>
// // // //                             )}
// // // //                         </TabsContent>

// // // //                         <TabsContent value="parcels">
// // // //                             <Card>
// // // //                                 <CardHeader>
// // // //                                     <div className="flex items-center justify-between">
// // // //                                         <div>
// // // //                                             <CardTitle>Processed Parcels</CardTitle>
// // // //                                             <CardDescription>
// // // //                                                 Showing {startIndex + 1}-{Math.min(endIndex, filteredData.length)} of {filteredData.length} filtered parcels
// // // //                                             </CardDescription>
// // // //                                         </div>
// // // //                                         <div className="flex gap-2">
// // // //                                             <Button
// // // //                                                 variant={filter === "all" ? "default" : "outline"}
// // // //                                                 size="sm"
// // // //                                                 onClick={() => { setFilter("all"); setCurrentPage(1); }}
// // // //                                             >
// // // //                                                 All ({processedData.length.toLocaleString()})
// // // //                                             </Button>
// // // //                                             <Button
// // // //                                                 variant={filter === "high-risk" ? "default" : "outline"}
// // // //                                                 size="sm"
// // // //                                                 onClick={() => { setFilter("high-risk"); setCurrentPage(1); }}
// // // //                                             >
// // // //                                                 High Risk ({stats.highRisk.toLocaleString()})
// // // //                                             </Button>
// // // //                                             <Button
// // // //                                                 variant={filter === "split" ? "default" : "outline"}
// // // //                                                 size="sm"
// // // //                                                 onClick={() => { setFilter("split"); setCurrentPage(1); }}
// // // //                                             >
// // // //                                                 Split ({stats.splitShipments.toLocaleString()})
// // // //                                             </Button>
// // // //                                             <Button
// // // //                                                 variant={filter === "duty" ? "default" : "outline"}
// // // //                                                 size="sm"
// // // //                                                 onClick={() => { setFilter("duty"); setCurrentPage(1); }}
// // // //                                             >
// // // //                                                 Duty ({stats.dutyApplicable.toLocaleString()})
// // // //                                             </Button>
// // // //                                         </div>
// // // //                                     </div>
// // // //                                 </CardHeader>
// // // //                                 <CardContent>
// // // //                                     <Table>
// // // //                                         <TableHeader>
// // // //                                             <TableRow>
// // // //                                                 <TableHead>Order ID</TableHead>
// // // //                                                 <TableHead>Importer</TableHead>
// // // //                                                 <TableHead>Product</TableHead>
// // // //                                                 <TableHead>HS Code</TableHead>
// // // //                                                 <TableHead>Value (AED)</TableHead>
// // // //                                                 <TableHead>Duty</TableHead>
// // // //                                                 <TableHead>Risk</TableHead>
// // // //                                                 <TableHead>Lane</TableHead>
// // // //                                             </TableRow>
// // // //                                         </TableHeader>
// // // //                                         <TableBody>
// // // //                                             {paginatedData.map((parcel) => (
// // // //                                                 <TableRow key={parcel.order_id} className="hover:bg-muted/50">
// // // //                                                     <TableCell className="font-medium">{parcel.order_id}</TableCell>
// // // //                                                     <TableCell>
// // // //                                                         <div>
// // // //                                                             <div className="font-medium">{parcel.importer_name}</div>
// // // //                                                             {parcel.is_split_shipment && (
// // // //                                                                 <Badge variant="outline" className="mt-1 text-xs bg-amber-50">
// // // //                                                                     Split Shipment
// // // //                                                                 </Badge>
// // // //                                                             )}
// // // //                                                         </div>
// // // //                                                     </TableCell>
// // // //                                                     <TableCell className="max-w-[200px]">
// // // //                                                         <div className="font-medium truncate">{parcel.product_title}</div>
// // // //                                                         <div className="text-xs text-muted-foreground truncate">
// // // //                                                             {parcel.product_category}
// // // //                                                         </div>
// // // //                                                     </TableCell>
// // // //                                                     <TableCell>
// // // //                                                         <div>
// // // //                                                             <div className="font-mono font-medium">{parcel.predicted_hs_code}</div>
// // // //                                                             <div className="text-xs text-muted-foreground">
// // // //                                                                 {(parcel.hs_confidence_score * 100).toFixed(0)}% confidence
// // // //                                                             </div>
// // // //                                                         </div>
// // // //                                                     </TableCell>
// // // //                                                     <TableCell className="font-medium">
// // // //                                                         AED {parcel.item_price_aed.toFixed(2)}
// // // //                                                     </TableCell>
// // // //                                                     <TableCell>
// // // //                                                         {parcel.duty_applicable ? (
// // // //                                                             <div className="text-green-600 font-medium">
// // // //                                                                 AED {parcel.duty_payable_aed.toFixed(2)}
// // // //                                                             </div>
// // // //                                                         ) : (
// // // //                                                             <Badge variant="outline" className="text-xs">
// // // //                                                                 Exempt
// // // //                                                             </Badge>
// // // //                                                         )}
// // // //                                                     </TableCell>
// // // //                                                     <TableCell>{getRiskBadge(parcel.is_high_risk)}</TableCell>
// // // //                                                     <TableCell>
// // // //                                                         <Badge className={getLaneColor(parcel.assigned_risk_lane)}>
// // // //                                                             {parcel.assigned_risk_lane}
// // // //                                                         </Badge>
// // // //                                                     </TableCell>
// // // //                                                 </TableRow>
// // // //                                             ))}
// // // //                                         </TableBody>
// // // //                                     </Table>

// // // //                                     {/* Pagination */}
// // // //                                     {totalPages > 1 && (
// // // //                                         <div className="flex items-center justify-between mt-4">
// // // //                                             <div className="text-sm text-muted-foreground">
// // // //                                                 Page {currentPage} of {totalPages}
// // // //                                             </div>
// // // //                                             <div className="flex items-center gap-2">
// // // //                                                 <Button
// // // //                                                     variant="outline"
// // // //                                                     size="sm"
// // // //                                                     onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
// // // //                                                     disabled={currentPage === 1}
// // // //                                                 >
// // // //                                                     <ChevronLeft className="h-4 w-4" />
// // // //                                                     Previous
// // // //                                                 </Button>
// // // //                                                 <div className="flex items-center gap-1">
// // // //                                                     {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
// // // //                                                         let pageNum;
// // // //                                                         if (totalPages <= 5) {
// // // //                                                             pageNum = i + 1;
// // // //                                                         } else if (currentPage <= 3) {
// // // //                                                             pageNum = i + 1;
// // // //                                                         } else if (currentPage >= totalPages - 2) {
// // // //                                                             pageNum = totalPages - 4 + i;
// // // //                                                         } else {
// // // //                                                             pageNum = currentPage - 2 + i;
// // // //                                                         }

// // // //                                                         return (
// // // //                                                             <Button
// // // //                                                                 key={pageNum}
// // // //                                                                 variant={currentPage === pageNum ? "default" : "outline"}
// // // //                                                                 size="sm"
// // // //                                                                 onClick={() => setCurrentPage(pageNum)}
// // // //                                                             >
// // // //                                                                 {pageNum}
// // // //                                                             </Button>
// // // //                                                         );
// // // //                                                     })}
// // // //                                                 </div>
// // // //                                                 <Button
// // // //                                                     variant="outline"
// // // //                                                     size="sm"
// // // //                                                     onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
// // // //                                                     disabled={currentPage === totalPages}
// // // //                                                 >
// // // //                                                     Next
// // // //                                                     <ChevronRight className="h-4 w-4" />
// // // //                                                 </Button>
// // // //                                             </div>
// // // //                                         </div>
// // // //                                     )}
// // // //                                 </CardContent>
// // // //                             </Card>
// // // //                         </TabsContent>

// // // //                         <TabsContent value="analytics">
// // // //                             <ParcelCharts data={processedData} />
// // // //                         </TabsContent>
// // // //                     </Tabs>

// // // //                     {/* Upload New Data Button */}
// // // //                     <Card className="border-dashed border-2">
// // // //                         <CardContent className="p-6">
// // // //                             <div className="flex flex-col items-center justify-center text-center space-y-4">
// // // //                                 <UploadIcon className="h-10 w-10 text-primary" />
// // // //                                 <div>
// // // //                                     <h3 className="text-lg font-semibold">Process Another File</h3>
// // // //                                     <p className="text-sm text-muted-foreground">
// // // //                                         Upload a new CSV file to analyze more e-commerce data
// // // //                                     </p>
// // // //                                 </div>
// // // //                                 <div className="flex gap-4">
// // // //                                     <Button
// // // //                                         className="gap-2"
// // // //                                         onClick={handleUploadNewCSV}
// // // //                                     >
// // // //                                         <UploadIcon className="h-4 w-4" />
// // // //                                         Upload New CSV
// // // //                                     </Button>
// // // //                                     <Button variant="outline" onClick={exportToCSV}>
// // // //                                         <Download className="h-4 w-4 mr-2" />
// // // //                                         Download Results ({processedData.length.toLocaleString()} parcels)
// // // //                                     </Button>
// // // //                                 </div>
// // // //                             </div>
// // // //                         </CardContent>
// // // //                     </Card>
// // // //                 </>
// // // //             )}
// // // //         </div>
// // // //     );
// // // // };

// // // // export default ParcelIntelPage;


// // // import React, { useState, useEffect } from "react";
// // // import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// // // import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// // // import { Badge } from "@/components/ui/badge";
// // // import { Button } from "@/components/ui/button";
// // // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // // import { Progress } from "@/components/ui/progress";
// // // import {
// // //     Package,
// // //     AlertTriangle,
// // //     CheckCircle,
// // //     XCircle,
// // //     Filter,
// // //     Download,
// // //     Upload as UploadIcon,
// // //     BarChart3,
// // //     Shield,
// // //     DollarSign,
// // //     Search,
// // //     Loader2,
// // //     ChevronLeft,
// // //     ChevronRight,
// // //     Eye,
// // //     FileText,
// // //     AlertCircle,
// // //     CheckSquare,
// // //     XSquare
// // // } from "lucide-react";
// // // import { Input } from "@/components/ui/input";
// // // import { CSVUploader } from "@/components/CSVUploader";
// // // import { ParcelProcessor, type ProcessedParcel, type RawParcelData } from "@/utils/parcelProcessor";
// // // import { toast } from "sonner";
// // // import { ParcelCharts } from "@/components/ParcelCharts";
// // // import {
// // //     Dialog,
// // //     DialogContent,
// // //     DialogDescription,
// // //     DialogFooter,
// // //     DialogHeader,
// // //     DialogTitle,
// // //     DialogTrigger,
// // // } from "@/components/ui/dialog";
// // // import { Label } from "@/components/ui/label";
// // // import { useSharedData } from "@/contexts/SharedDataContext";

// // // const ParcelIntelPage = () => {
// // //     // STATE
// // //     const [processedData, setProcessedData] = useState<ProcessedParcel[]>([]);
// // //     const [isProcessing, setIsProcessing] = useState(false);
// // //     const [showUploader, setShowUploader] = useState<boolean>(true);
// // //     const [filter, setFilter] = useState<string>("all");
// // //     const [search, setSearch] = useState<string>("");
// // //     const [currentPage, setCurrentPage] = useState(1);
// // //     const [selectedParcel, setSelectedParcel] = useState<ProcessedParcel | null>(null);
// // //     const [isDialogOpen, setIsDialogOpen] = useState(false);
// // //     const itemsPerPage = 10;
// // //     const { setUploadedData: setSharedUploadedData, setProcessedData: setSharedProcessedData, clearData, } = useSharedData();


// // //     // Handle Review Button Click
// // //     const handleReviewClick = (parcel: ProcessedParcel) => {
// // //         setSelectedParcel(parcel);
// // //         setIsDialogOpen(true);
// // //     };

// // //     // Handle Action in Modal
// // //     const handleAction = (action: 'approve' | 'reject' | 'escalate') => {
// // //         if (!selectedParcel) return;

// // //         let message = '';
// // //         let toastType: 'success' | 'error' | 'warning' = 'success';

// // //         switch (action) {
// // //             case 'approve':
// // //                 message = `Parcel ${selectedParcel.order_id} approved for ${selectedParcel.clearance_recommendation}`;
// // //                 toast.success("Approved!", { description: message });
// // //                 break;
// // //             case 'reject':
// // //                 message = `Parcel ${selectedParcel.order_id} rejected - Requires further inspection`;
// // //                 toast.error("Rejected!", { description: message });
// // //                 break;
// // //             case 'escalate':
// // //                 message = `Parcel ${selectedParcel.order_id} escalated to supervisor`;
// // //                 toast.warning("Escalated!", { description: message });
// // //                 break;
// // //         }

// // //         setIsDialogOpen(false);
// // //         setSelectedParcel(null);
// // //     };

// // //     const handleDataProcessed = (rawData: RawParcelData[], filename: string) => {
// // //         console.log(`📥 Processing ${rawData.length} records from ${filename}`);
// // //         setIsProcessing(true);

// // //         setSharedUploadedData(rawData);

// // //         setTimeout(() => {
// // //             try {
// // //                 console.log("🔍 Analyzing data for all 4 logic gates...");

// // //                 // --- LEVEL 1: Split Shipment Detection ---
// // //                 console.log("🔄 Level 1: Detecting split shipments...");
// // //                 const splitGroups = new Map<string, string[]>();
// // //                 const dailyTotals = new Map<string, number>();

// // //                 // Group by importer and day (simplified)
// // //                 rawData.slice(0, 1000).forEach((item, index) => {
// // //                     const itemPriceINR = typeof item.item_price_inr === 'string'
// // //                         ? parseFloat(item.item_price_inr)
// // //                         : item.item_price_inr;
// // //                     const itemValueAED = itemPriceINR * 0.044;

// // //                     // Create a simple date key (using index to simulate different days)
// // //                     const day = Math.floor(index / 100) + 1; // Groups of 100 parcels per "day"
// // //                     const key = `${item.importer_name}_day${day}`;

// // //                     // Update daily total
// // //                     const currentTotal = dailyTotals.get(key) || 0;
// // //                     dailyTotals.set(key, currentTotal + itemValueAED);

// // //                     // Add to group
// // //                     if (!splitGroups.has(key)) {
// // //                         splitGroups.set(key, []);
// // //                     }
// // //                     splitGroups.get(key)!.push(item.order_id);
// // //                 });

// // //                 // Identify split shipments (daily total > 1000 AED)
// // //                 const splitShipmentOrders = new Set<string>();
// // //                 splitGroups.forEach((orderIds, key) => {
// // //                     const dailyTotal = dailyTotals.get(key) || 0;
// // //                     if (orderIds.length > 1 && dailyTotal > 1000) {
// // //                         orderIds.forEach(orderId => splitShipmentOrders.add(orderId));
// // //                     }
// // //                 });

// // //                 console.log(`✅ Level 1: Found ${splitShipmentOrders.size} split shipments`);

// // //                 // Process parcels
// // //                 const results = rawData.slice(0, 1000).map((item, index) => {
// // //                     const itemPriceINR = typeof item.item_price_inr === 'string'
// // //                         ? parseFloat(item.item_price_inr)
// // //                         : item.item_price_inr;
// // //                     const itemValueAED = parseFloat((itemPriceINR * 0.044).toFixed(2));

// // //                     // --- LEVEL 2: HS Code Classification ---
// // //                     const text = `${item.product_title || ''} ${item.description || ''}`.toLowerCase();
// // //                     let hsCode = '9999.99.99';
// // //                     let hsConfidence = 0.5;
// // //                     let hsChapter = '99';

// // //                     // Smart HS code detection
// // //                     if (text.includes('drone') || text.includes('uav') || text.includes('quadcopter')) {
// // //                         hsCode = '8806.21.00'; // Drones ≤250g
// // //                         hsConfidence = 0.95;
// // //                         hsChapter = '88';
// // //                     } else if (text.includes('phone') || text.includes('mobile') || text.includes('smartphone')) {
// // //                         hsCode = '8517.12.00'; // Mobile phones
// // //                         hsConfidence = 0.92;
// // //                         hsChapter = '85';
// // //                     } else if (text.includes('shirt') || text.includes('clothing') || text.includes('apparel')) {
// // //                         hsCode = '6203.42.00'; // Men's trousers
// // //                         hsConfidence = 0.88;
// // //                         hsChapter = '62';
// // //                     } else if (text.includes('book') || text.includes('publication')) {
// // //                         hsCode = '4901.99.00'; // Printed books
// // //                         hsConfidence = 0.96;
// // //                         hsChapter = '49';
// // //                     } else if (text.includes('car') || text.includes('automotive')) {
// // //                         hsCode = '8708.29.00'; // Car parts
// // //                         hsConfidence = 0.85;
// // //                         hsChapter = '87';
// // //                     } else if (text.includes('jewel') || text.includes('gold') || text.includes('silver')) {
// // //                         hsCode = '7113.19.00'; // Jewellery
// // //                         hsConfidence = 0.90;
// // //                         hsChapter = '71';
// // //                     } else if (text.includes('battery') || text.includes('lithium') || text.includes('power bank')) {
// // //                         hsCode = '8507.60.00'; // Lithium batteries
// // //                         hsConfidence = 0.94;
// // //                         hsChapter = '85';
// // //                     } else if (text.includes('weapon') || text.includes('gun') || text.includes('ammunition')) {
// // //                         hsCode = '9302.00.00'; // Revolvers and pistols
// // //                         hsConfidence = 0.97;
// // //                         hsChapter = '93';
// // //                     }

// // //                     // --- LEVEL 3: Duty Calculation ---
// // //                     const isSplit = splitShipmentOrders.has(item.order_id);
// // //                     const dailyTotal = dailyTotals.get(`${item.importer_name}_day${Math.floor(index / 100) + 1}`) || itemValueAED;
// // //                     const dutyApplicable = dailyTotal > 1000 || isSplit;
// // //                     const dutyRate = 5; // 5% standard rate
// // //                     const dutyPayable = dutyApplicable ? parseFloat((itemValueAED * dutyRate / 100).toFixed(2)) : 0;

// // //                     // --- LEVEL 4: Risk Protection ---
// // //                     const riskKeywords = [];
// // //                     const riskCategories = [];
// // //                     let isHighRisk = false;

// // //                     // Check for dangerous goods
// // //                     if (text.includes('drone') || text.includes('uav')) {
// // //                         riskKeywords.push('drone');
// // //                         riskCategories.push('DRONES');
// // //                         isHighRisk = true;
// // //                     }
// // //                     if (text.includes('weapon') || text.includes('gun') || text.includes('ammunition')) {
// // //                         riskKeywords.push('weapon');
// // //                         riskCategories.push('WEAPONS');
// // //                         isHighRisk = true;
// // //                     }
// // //                     if (text.includes('battery') || text.includes('lithium')) {
// // //                         riskKeywords.push('lithium');
// // //                         riskCategories.push('LITHIUM_BATTERIES');
// // //                         isHighRisk = true;
// // //                     }
// // //                     if (text.includes('gold') || text.includes('silver') || text.includes('platinum')) {
// // //                         riskKeywords.push('precious');
// // //                         riskCategories.push('PRECIOUS_METALS');
// // //                     }

// // //                     // --- Risk Lane Assignment ---
// // //                     let assignedLane: 'GREEN' | 'YELLOW' | 'RED' | 'BLACK' = 'GREEN';
// // //                     const laneReasons = [];

// // //                     if (riskCategories.includes('WEAPONS') || riskCategories.includes('DRONES') || riskCategories.includes('LITHIUM_BATTERIES')) {
// // //                         assignedLane = 'BLACK';
// // //                         laneReasons.push('High-security risk goods');
// // //                     } else if (isSplit) {
// // //                         assignedLane = 'RED';
// // //                         laneReasons.push('Split shipment detected');
// // //                     } else if (dutyApplicable) {
// // //                         assignedLane = 'YELLOW';
// // //                         laneReasons.push('Duty applicable');
// // //                     } else {
// // //                         assignedLane = 'GREEN';
// // //                         laneReasons.push('Low risk, compliant');
// // //                     }

// // //                     // Clearance recommendation
// // //                     const clearanceRecommendation =
// // //                         assignedLane === 'GREEN' ? 'AUTO_CLEAR' :
// // //                             assignedLane === 'YELLOW' ? 'DOC_REVIEW' :
// // //                                 assignedLane === 'RED' ? 'INSPECTION' : 'HOLD';

// // //                     const result: ProcessedParcel = {
// // //                         order_id: item.order_id,
// // //                         timestamp: item.timestamp,
// // //                         importer_name: item.importer_name,
// // //                         delivery_address: item.delivery_address,
// // //                         product_title: item.product_title || 'Unknown Product',
// // //                         description: item.description || '',
// // //                         product_category: item.product_category || 'Uncategorized',
// // //                         item_price_inr: itemPriceINR,
// // //                         item_price_aed: itemValueAED,
// // //                         image_url: item.image_url,
// // //                         same_day_importer_key: `${item.importer_name}_day${Math.floor(index / 100) + 1}`,
// // //                         daily_total_aed: dailyTotal,
// // //                         is_split_shipment: isSplit,
// // //                         split_group_id: isSplit ? `SPLIT-${item.importer_name.substring(0, 3).toUpperCase()}-${Math.floor(index / 100) + 1}` : undefined,
// // //                         predicted_hs_code: hsCode,
// // //                         hs_confidence_score: hsConfidence,
// // //                         hs_chapter: hsChapter,
// // //                         de_minimis_threshold: 1000,
// // //                         duty_applicable: dutyApplicable,
// // //                         duty_rate: dutyRate,
// // //                         duty_payable_aed: dutyPayable,
// // //                         tariff_reference: 'STANDARD_5',
// // //                         risk_keywords_found: riskKeywords,
// // //                         risk_categories: riskCategories,
// // //                         is_high_risk: isHighRisk,
// // //                         risk_reason_codes: riskCategories.map(cat => `${cat}_DETECTED`),
// // //                         assigned_risk_lane: assignedLane,
// // //                         lane_reasons: laneReasons,
// // //                         processing_timestamp: new Date().toISOString(),
// // //                         clearance_recommendation: clearanceRecommendation
// // //                     };

// // //                     return result;
// // //                 });

// // //                 setProcessedData(results);
// // //                 setSharedProcessedData(results);
// // //                 setShowUploader(false);
// // //                 setCurrentPage(1);

// // //                 toast.success("Processing Complete!", {
// // //                     description: `Analyzed ${results.length} parcels through all 4 logic gates`,
// // //                     duration: 5000,
// // //                 });

// // //                 // Calculate and log summary
// // //                 const splitCount = results.filter(r => r.is_split_shipment).length;
// // //                 const highRiskCount = results.filter(r => r.is_high_risk).length;
// // //                 const dutyTotal = results.reduce((sum, r) => sum + r.duty_payable_aed, 0);
// // //                 const avgConfidence = results.reduce((sum, r) => sum + r.hs_confidence_score, 0) / results.length;

// // //                 console.log(`🎉 PROCESSING COMPLETE!`);
// // //                 console.log(`📊 Summary:`);
// // //                 console.log(`   • Total parcels: ${results.length}`);
// // //                 console.log(`   • Split shipments: ${splitCount}`);
// // //                 console.log(`   • High-risk items: ${highRiskCount}`);
// // //                 console.log(`   • Total duty: AED ${dutyTotal.toFixed(2)}`);
// // //                 console.log(`   • HS confidence: ${(avgConfidence * 100).toFixed(1)}%`);
// // //                 console.log(`   • Risk lanes: GREEN(${results.filter(r => r.assigned_risk_lane === 'GREEN').length}) | YELLOW(${results.filter(r => r.assigned_risk_lane === 'YELLOW').length}) | RED(${results.filter(r => r.assigned_risk_lane === 'RED').length}) | BLACK(${results.filter(r => r.assigned_risk_lane === 'BLACK').length})`);

// // //             } catch (error) {
// // //                 console.error("Error processing data:", error);
// // //             } finally {
// // //                 setIsProcessing(false);
// // //             }
// // //         }, 1500);
// // //     };

// // //     // UPLOAD NEW CSV
// // //     const handleUploadNewCSV = () => {
// // //         setProcessedData([]);
// // //         setShowUploader(true);
// // //         setFilter("all");
// // //         setSearch("");
// // //         setCurrentPage(1);
// // //         clearData();
// // //     };

// // //     // EXPORT TO CSV
// // //     const exportToCSV = () => {
// // //         if (processedData.length === 0) {
// // //             alert("No data to export. Please upload and process a CSV file first.");
// // //             return;
// // //         }

// // //         const headers = [
// // //             'order_id',
// // //             'importer_name',
// // //             'timestamp',
// // //             'product_title',
// // //             'item_price_inr',
// // //             'item_price_aed',
// // //             'predicted_hs_code',
// // //             'hs_confidence_score',
// // //             'is_split_shipment',
// // //             'daily_total_aed',
// // //             'duty_applicable',
// // //             'duty_rate',
// // //             'duty_payable_aed',
// // //             'is_high_risk',
// // //             'risk_categories',
// // //             'assigned_risk_lane',
// // //             'clearance_recommendation'
// // //         ];

// // //         const csvContent = [
// // //             headers.join(','),
// // //             ...processedData.map(p => [
// // //                 p.order_id,
// // //                 `"${p.importer_name}"`,
// // //                 p.timestamp,
// // //                 `"${p.product_title}"`,
// // //                 p.item_price_inr,
// // //                 p.item_price_aed.toFixed(2),
// // //                 p.predicted_hs_code,
// // //                 (p.hs_confidence_score * 100).toFixed(1) + '%',
// // //                 p.is_split_shipment ? 'YES' : 'NO',
// // //                 p.daily_total_aed.toFixed(2),
// // //                 p.duty_applicable ? 'YES' : 'NO',
// // //                 p.duty_rate + '%',
// // //                 p.duty_payable_aed.toFixed(2),
// // //                 p.is_high_risk ? 'HIGH' : 'LOW',
// // //                 `"${p.risk_categories.join(';')}"`,
// // //                 p.assigned_risk_lane,
// // //                 p.clearance_recommendation
// // //             ].join(','))
// // //         ].join('\n');

// // //         const blob = new Blob([csvContent], { type: 'text/csv' });
// // //         const url = window.URL.createObjectURL(blob);
// // //         const a = document.createElement('a');
// // //         a.href = url;
// // //         a.download = `parcel_intel_results_${new Date().toISOString().split('T')[0]}.csv`;
// // //         document.body.appendChild(a);
// // //         a.click();
// // //         document.body.removeChild(a);
// // //         window.URL.revokeObjectURL(url);
// // //     };

// // //     // FILTER AND SEARCH
// // //     const filteredData = processedData.filter(parcel => {
// // //         if (filter === "all") return true;
// // //         if (filter === "high-risk") return parcel.is_high_risk;
// // //         if (filter === "split") return parcel.is_split_shipment;
// // //         if (filter === "duty") return parcel.duty_applicable;
// // //         return parcel.assigned_risk_lane === filter;
// // //     }).filter(parcel =>
// // //         parcel.order_id.toLowerCase().includes(search.toLowerCase()) ||
// // //         parcel.importer_name.toLowerCase().includes(search.toLowerCase()) ||
// // //         parcel.product_title.toLowerCase().includes(search.toLowerCase())
// // //     );

// // //     // PAGINATION
// // //     const totalPages = Math.ceil(filteredData.length / itemsPerPage);
// // //     const startIndex = (currentPage - 1) * itemsPerPage;
// // //     const endIndex = startIndex + itemsPerPage;
// // //     const paginatedData = filteredData.slice(startIndex, endIndex);

// // //     // STATS
// // //     const stats = {
// // //         total: processedData.length,
// // //         highRisk: processedData.filter(p => p.is_high_risk).length,
// // //         splitShipments: processedData.filter(p => p.is_split_shipment).length,
// // //         dutyApplicable: processedData.filter(p => p.duty_applicable).length,
// // //         greenLane: processedData.filter(p => p.assigned_risk_lane === "GREEN").length,
// // //         yellowLane: processedData.filter(p => p.assigned_risk_lane === "YELLOW").length,
// // //         redLane: processedData.filter(p => p.assigned_risk_lane === "RED").length,
// // //         blackLane: processedData.filter(p => p.assigned_risk_lane === "BLACK").length,
// // //         totalDuty: processedData.reduce((sum, p) => sum + p.duty_payable_aed, 0),
// // //         avgConfidence: processedData.length > 0
// // //             ? Math.round(processedData.reduce((sum, p) => sum + p.hs_confidence_score, 0) / processedData.length * 100)
// // //             : 0
// // //     };

// // //     // HELPER FUNCTIONS
// // //     const getLaneColor = (lane: string) => {
// // //         switch (lane) {
// // //             case "GREEN": return "bg-green-100 text-green-800 border-green-300";
// // //             case "YELLOW": return "bg-yellow-100 text-yellow-800 border-yellow-300";
// // //             case "RED": return "bg-red-100 text-red-800 border-red-300";
// // //             case "BLACK": return "bg-gray-800 text-white border-gray-700";
// // //             default: return "bg-gray-100 text-gray-800 border-gray-300";
// // //         }
// // //     };

// // //     const getRiskBadge = (isHighRisk: boolean) => {
// // //         return isHighRisk ? (
// // //             <Badge variant="destructive" className="flex items-center gap-1">
// // //                 <AlertTriangle className="h-3 w-3" /> High Risk
// // //             </Badge>
// // //         ) : (
// // //             <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
// // //                 <CheckCircle className="h-3 w-3 mr-1" /> Low Risk
// // //             </Badge>
// // //         );
// // //     };

// // //     const getRiskCategoryCount = (category: string) => {
// // //         return processedData.filter(p => p.risk_categories.includes(category)).length;
// // //     };

// // //     // Create loading skeleton component
// // //     const LoadingSkeleton = () => (
// // //         <div className="space-y-6">
// // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // //                 {[...Array(4)].map((_, i) => (
// // //                     <Card key={i}>
// // //                         <CardContent className="p-6">
// // //                             <div className="h-8 bg-gray-200 rounded animate-pulse mb-2"></div>
// // //                             <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
// // //                         </CardContent>
// // //                     </Card>
// // //                 ))}
// // //             </div>
// // //             <Card>
// // //                 <CardContent className="p-6">
// // //                     <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
// // //                 </CardContent>
// // //             </Card>
// // //         </div>
// // //     );

// // //     return (
// // //         <div className="p-6 space-y-6 overflow-y-auto h-full">
// // //             {isProcessing && <LoadingSkeleton />}

// // //             {/* Header */}
// // //             <div>
// // //                 <div className="flex items-center gap-3 mb-2">
// // //                     <Package className="h-8 w-8 text-primary" />
// // //                     <h1 className="text-3xl font-bold tracking-tight">PARCEL-INTEL</h1>
// // //                 </div>
// // //                 <p className="text-muted-foreground">
// // //                     E-commerce parcel intelligence engine for split shipment detection, HS classification, duty calculation, and risk assessment
// // //                 </p>
// // //             </div>

// // //             {/* Controls */}
// // //             <Card>
// // //                 <CardContent className="p-4">
// // //                     <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
// // //                         <div className="flex-1 w-full md:w-auto">
// // //                             <div className="relative">
// // //                                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
// // //                                 <Input
// // //                                     placeholder="Search parcels by ID, importer, or product..."
// // //                                     className="pl-10"
// // //                                     value={search}
// // //                                     onChange={(e) => setSearch(e.target.value)}
// // //                                     disabled={isProcessing || processedData.length === 0}
// // //                                 />
// // //                             </div>
// // //                         </div>
// // //                         <div className="flex items-center gap-2">
// // //                             <Button
// // //                                 variant="outline"
// // //                                 size="sm"
// // //                                 className="gap-2"
// // //                                 onClick={handleUploadNewCSV}
// // //                                 disabled={isProcessing}
// // //                             >
// // //                                 <UploadIcon className="h-4 w-4" />
// // //                                 {processedData.length > 0 ? 'Upload New' : 'Upload CSV'}
// // //                             </Button>

// // //                             {processedData.length > 0 && (
// // //                                 <Button
// // //                                     variant="outline"
// // //                                     size="sm"
// // //                                     className="gap-2"
// // //                                     onClick={exportToCSV}
// // //                                     disabled={isProcessing}
// // //                                 >
// // //                                     <Download className="h-4 w-4" />
// // //                                     Export Results
// // //                                 </Button>
// // //                             )}

// // //                             {isProcessing && (
// // //                                 <Button size="sm" className="gap-2" disabled>
// // //                                     <Loader2 className="h-4 w-4 animate-spin" />
// // //                                     Processing...
// // //                                 </Button>
// // //                             )}
// // //                         </div>
// // //                     </div>
// // //                 </CardContent>
// // //             </Card>

// // //             {/* Main Content */}
// // //             {showUploader || processedData.length === 0 ? (
// // //                 // SHOW CSV UPLOADER
// // //                 <div className="space-y-6">
// // //                     <Card>
// // //                         <CardContent className="p-6">
// // //                             <div className="mb-6">
// // //                                 <h2 className="text-xl font-bold mb-4">Hackathon Challenge: 4 Logic Gates</h2>
// // //                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // //                                     <Card className="border-l-4 border-l-amber-500">
// // //                                         <CardContent className="p-4">
// // //                                             <div className="text-lg font-bold text-amber-600 mb-1">Level 1</div>
// // //                                             <div className="font-medium">Split Shipment Detection</div>
// // //                                             <div className="text-sm text-muted-foreground mt-1">
// // //                                                 {"Same importer + same day + total > AED 1,000"}
// // //                                             </div>
// // //                                         </CardContent>
// // //                                     </Card>

// // //                                     <Card className="border-l-4 border-l-blue-500">
// // //                                         <CardContent className="p-4">
// // //                                             <div className="text-lg font-bold text-blue-600 mb-1">Level 2</div>
// // //                                             <div className="font-medium">HS Code Classification</div>
// // //                                             <div className="text-sm text-muted-foreground mt-1">
// // //                                                 6-digit HS code prediction from descriptions
// // //                                             </div>
// // //                                         </CardContent>
// // //                                     </Card>
// // //                                     <Card className="border-l-4 border-l-green-500">
// // //                                         <CardContent className="p-4">
// // //                                             <div className="text-lg font-bold text-green-600 mb-1">Level 3</div>
// // //                                             <div className="font-medium">Duty Calculation</div>
// // //                                             <div className="text-sm text-muted-foreground mt-1">
// // //                                                 AED conversion + de-minimis + 5% duty
// // //                                             </div>
// // //                                         </CardContent>
// // //                                     </Card>
// // //                                     <Card className="border-l-4 border-l-red-500">
// // //                                         <CardContent className="p-4">
// // //                                             <div className="text-lg font-bold text-red-600 mb-1">Level 4</div>
// // //                                             <div className="font-medium">Risk Protection</div>
// // //                                             <div className="text-sm text-muted-foreground mt-1">
// // //                                                 Weapons, drones, lithium batteries detection
// // //                                             </div>
// // //                                         </CardContent>
// // //                                     </Card>
// // //                                 </div>
// // //                             </div>
// // //                             <CSVUploader onDataProcessed={handleDataProcessed} />
// // //                         </CardContent>
// // //                     </Card>
// // //                 </div>
// // //             ) : (
// // //                 // SHOW RESULTS WHEN DATA IS PROCESSED
// // //                 <>
// // //                     {/* KPI Cards */}
// // //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // //                         <Card>
// // //                             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// // //                                 <CardTitle className="text-sm font-medium">Total Parcels</CardTitle>
// // //                                 <Package className="h-4 w-4 text-muted-foreground" />
// // //                             </CardHeader>
// // //                             <CardContent>
// // //                                 <div className="text-2xl font-bold">{stats.total.toLocaleString()}</div>
// // //                                 <div className="flex items-center gap-2 mt-2">
// // //                                     <div className="h-2 flex w-full rounded-full overflow-hidden bg-gray-200">
// // //                                         <div className="bg-green-500" style={{ width: `${(stats.greenLane / stats.total) * 100}%` }} />
// // //                                         <div className="bg-yellow-500" style={{ width: `${(stats.yellowLane / stats.total) * 100}%` }} />
// // //                                         <div className="bg-red-500" style={{ width: `${(stats.redLane / stats.total) * 100}%` }} />
// // //                                         <div className="bg-gray-800" style={{ width: `${(stats.blackLane / stats.total) * 100}%` }} />
// // //                                     </div>
// // //                                     <span className="text-xs text-muted-foreground">Lane mix</span>
// // //                                 </div>
// // //                             </CardContent>
// // //                         </Card>

// // //                         <Card>
// // //                             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// // //                                 <CardTitle className="text-sm font-medium">Split Shipments</CardTitle>
// // //                                 <AlertTriangle className="h-4 w-4 text-amber-500" />
// // //                             </CardHeader>
// // //                             <CardContent>
// // //                                 <div className="text-2xl font-bold">{stats.splitShipments.toLocaleString()}</div>
// // //                                 <p className="text-xs text-muted-foreground">
// // //                                     Potential revenue evasion detected
// // //                                 </p>
// // //                             </CardContent>
// // //                         </Card>

// // //                         <Card>
// // //                             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// // //                                 <CardTitle className="text-sm font-medium">High Risk Items</CardTitle>
// // //                                 <Shield className="h-4 w-4 text-red-500" />
// // //                             </CardHeader>
// // //                             <CardContent>
// // //                                 <div className="text-2xl font-bold">{stats.highRisk.toLocaleString()}</div>
// // //                                 <p className="text-xs text-muted-foreground">
// // //                                     {stats.blackLane} in BLACK lane
// // //                                 </p>
// // //                             </CardContent>
// // //                         </Card>

// // //                         <Card>
// // //                             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// // //                                 <CardTitle className="text-sm font-medium">Duty Payable</CardTitle>
// // //                                 <DollarSign className="h-4 w-4 text-green-500" />
// // //                             </CardHeader>
// // //                             <CardContent>
// // //                                 <div className="text-2xl font-bold">AED {stats.totalDuty.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
// // //                                 <p className="text-xs text-muted-foreground">
// // //                                     From {stats.dutyApplicable.toLocaleString()} parcels
// // //                                 </p>
// // //                             </CardContent>
// // //                         </Card>
// // //                     </div>

// // //                     {/* Main Results Tabs */}
// // //                     <Tabs defaultValue="overview" className="space-y-6">
// // //                         <TabsList>
// // //                             <TabsTrigger value="overview">Overview</TabsTrigger>
// // //                             <TabsTrigger value="parcels">Parcel Details</TabsTrigger>
// // //                             <TabsTrigger value="analytics">Analytics</TabsTrigger>
// // //                         </TabsList>

// // //                         <TabsContent value="overview" className="space-y-6">
// // //                             {/* Risk Lane Distribution */}
// // //                             <Card>
// // //                                 <CardHeader>
// // //                                     <CardTitle>Risk Lane Distribution</CardTitle>
// // //                                     <CardDescription>How parcels are routed based on risk assessment</CardDescription>
// // //                                 </CardHeader>
// // //                                 <CardContent>
// // //                                     <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
// // //                                         {[
// // //                                             { lane: "GREEN", count: stats.greenLane, description: "Auto-clear, no intervention", color: "bg-green-500" },
// // //                                             { lane: "YELLOW", count: stats.yellowLane, description: "Document review required", color: "bg-yellow-500" },
// // //                                             { lane: "RED", count: stats.redLane, description: "Physical inspection", color: "bg-red-500" },
// // //                                             { lane: "BLACK", count: stats.blackLane, description: "Intelligence/security hold", color: "bg-gray-800" }
// // //                                         ].map((item) => (
// // //                                             <Card key={item.lane} className={`border-l-4 ${item.lane === "GREEN" ? "border-l-green-500" : item.lane === "YELLOW" ? "border-l-yellow-500" : item.lane === "RED" ? "border-l-red-500" : "border-l-gray-800"}`}>
// // //                                                 <CardContent className="p-6">
// // //                                                     <div className="flex items-center justify-between mb-2">
// // //                                                         <h3 className="font-bold text-xl">{item.lane}</h3>
// // //                                                         <Badge className={getLaneColor(item.lane)}>{item.count.toLocaleString()}</Badge>
// // //                                                     </div>
// // //                                                     <p className="text-sm text-muted-foreground">{item.description}</p>
// // //                                                     <Progress
// // //                                                         value={stats.total > 0 ? (item.count / stats.total) * 100 : 0}
// // //                                                         className="mt-4 h-2"
// // //                                                         indicatorClassName={item.color}
// // //                                                     />
// // //                                                 </CardContent>
// // //                                             </Card>
// // //                                         ))}
// // //                                     </div>
// // //                                 </CardContent>
// // //                             </Card>

// // //                             {/* Recent High-Risk Items */}
// // //                             {stats.highRisk > 0 && (
// // //                                 <Card>
// // //                                     <CardHeader>
// // //                                         <CardTitle>High-Risk Parcels Requiring Attention</CardTitle>
// // //                                         <CardDescription>Items flagged for security, safety, or compliance risks</CardDescription>
// // //                                     </CardHeader>
// // //                                     <CardContent>
// // //                                         <Table>
// // //                                             <TableHeader>
// // //                                                 <TableRow>
// // //                                                     <TableHead>Order ID</TableHead>
// // //                                                     <TableHead>Importer</TableHead>
// // //                                                     <TableHead>Product</TableHead>
// // //                                                     <TableHead>Risk Category</TableHead>
// // //                                                     <TableHead>Duty Payable</TableHead>
// // //                                                     <TableHead>Risk Lane</TableHead>
// // //                                                     <TableHead>Action</TableHead>
// // //                                                 </TableRow>
// // //                                             </TableHeader>
// // //                                             <TableBody>
// // //                                                 {processedData
// // //                                                     .filter(p => p.is_high_risk)
// // //                                                     .slice(0, 5)
// // //                                                     .map((parcel) => (
// // //                                                         <TableRow key={parcel.order_id}>
// // //                                                             <TableCell className="font-medium">{parcel.order_id}</TableCell>
// // //                                                             <TableCell>{parcel.importer_name}</TableCell>
// // //                                                             <TableCell className="max-w-[200px] truncate">{parcel.product_title}</TableCell>
// // //                                                             <TableCell>
// // //                                                                 <div className="flex flex-wrap gap-1">
// // //                                                                     {parcel.risk_categories.map((cat, idx) => (
// // //                                                                         <Badge key={idx} variant="outline" className="text-xs">
// // //                                                                             {cat}
// // //                                                                         </Badge>
// // //                                                                     ))}
// // //                                                                 </div>
// // //                                                             </TableCell>
// // //                                                             <TableCell>AED {parcel.duty_payable_aed.toFixed(2)}</TableCell>
// // //                                                             <TableCell>
// // //                                                                 <Badge className={getLaneColor(parcel.assigned_risk_lane)}>
// // //                                                                     {parcel.assigned_risk_lane}
// // //                                                                 </Badge>
// // //                                                             </TableCell>
// // //                                                             <TableCell>
// // //                                                                 <Dialog open={isDialogOpen && selectedParcel?.order_id === parcel.order_id} onOpenChange={setIsDialogOpen}>
// // //                                                                     <DialogTrigger asChild>
// // //                                                                         <Button
// // //                                                                             size="sm"
// // //                                                                             variant="outline"
// // //                                                                             onClick={() => handleReviewClick(parcel)}
// // //                                                                             className="gap-2"
// // //                                                                         >
// // //                                                                             <Eye className="h-4 w-4" />
// // //                                                                             Review
// // //                                                                         </Button>
// // //                                                                     </DialogTrigger>
// // //                                                                     <DialogContent className="sm:max-w-[600px]">
// // //                                                                         <DialogHeader>
// // //                                                                             <DialogTitle>Parcel Review</DialogTitle>
// // //                                                                             <DialogDescription>
// // //                                                                                 Detailed analysis of parcel {parcel.order_id}
// // //                                                                             </DialogDescription>
// // //                                                                         </DialogHeader>

// // //                                                                         <div className="grid grid-cols-2 gap-4 py-4">
// // //                                                                             <div className="space-y-2">
// // //                                                                                 <Label className="font-semibold">Order ID</Label>
// // //                                                                                 <div className="text-sm">{parcel.order_id}</div>
// // //                                                                             </div>
// // //                                                                             <div className="space-y-2">
// // //                                                                                 <Label className="font-semibold">Importer</Label>
// // //                                                                                 <div className="text-sm">{parcel.importer_name}</div>
// // //                                                                             </div>
// // //                                                                             <div className="space-y-2">
// // //                                                                                 <Label className="font-semibold">Product</Label>
// // //                                                                                 <div className="text-sm">{parcel.product_title}</div>
// // //                                                                             </div>
// // //                                                                             <div className="space-y-2">
// // //                                                                                 <Label className="font-semibold">Category</Label>
// // //                                                                                 <div className="text-sm">{parcel.product_category}</div>
// // //                                                                             </div>
// // //                                                                             <div className="space-y-2">
// // //                                                                                 <Label className="font-semibold">Value</Label>
// // //                                                                                 <div className="text-sm">AED {parcel.item_price_aed.toFixed(2)}</div>
// // //                                                                             </div>
// // //                                                                             <div className="space-y-2">
// // //                                                                                 <Label className="font-semibold">Duty Payable</Label>
// // //                                                                                 <div className="text-sm">AED {parcel.duty_payable_aed.toFixed(2)}</div>
// // //                                                                             </div>
// // //                                                                             <div className="space-y-2">
// // //                                                                                 <Label className="font-semibold">HS Code</Label>
// // //                                                                                 <div className="text-sm font-mono">{parcel.predicted_hs_code}</div>
// // //                                                                             </div>
// // //                                                                             <div className="space-y-2">
// // //                                                                                 <Label className="font-semibold">HS Confidence</Label>
// // //                                                                                 <div className="text-sm">{(parcel.hs_confidence_score * 100).toFixed(1)}%</div>
// // //                                                                             </div>
// // //                                                                             <div className="space-y-2">
// // //                                                                                 <Label className="font-semibold">Risk Level</Label>
// // //                                                                                 <div className="text-sm">{getRiskBadge(parcel.is_high_risk)}</div>
// // //                                                                             </div>
// // //                                                                             <div className="space-y-2">
// // //                                                                                 <div className="flex items-center gap-2">
// // //                                                                                     <Label className="font-semibold">Assigned Lane</Label>
// // //                                                                                     <Badge className={getLaneColor(parcel.assigned_risk_lane)}>
// // //                                                                                         {parcel.assigned_risk_lane}
// // //                                                                                     </Badge>
// // //                                                                                 </div>
// // //                                                                             </div>
// // //                                                                             <div className="space-y-2 col-span-2">
// // //                                                                                 <Label className="font-semibold">Risk Categories</Label>
// // //                                                                                 <div className="flex flex-wrap gap-1">
// // //                                                                                     {parcel.risk_categories.map((cat, idx) => (
// // //                                                                                         <Badge key={idx} variant="outline" className="text-xs">
// // //                                                                                             {cat}
// // //                                                                                         </Badge>
// // //                                                                                     ))}
// // //                                                                                 </div>
// // //                                                                             </div>
// // //                                                                             <div className="space-y-2 col-span-2">
// // //                                                                                 <Label className="font-semibold">Clearance Recommendation</Label>
// // //                                                                                 <Badge className={parcel.clearance_recommendation === 'AUTO_CLEAR' ? 'bg-green-100 text-green-800' :
// // //                                                                                     parcel.clearance_recommendation === 'DOC_REVIEW' ? 'bg-yellow-100 text-yellow-800' :
// // //                                                                                         parcel.clearance_recommendation === 'INSPECTION' ? 'bg-orange-100 text-orange-800' :
// // //                                                                                             'bg-red-100 text-red-800'}>
// // //                                                                                     {parcel.clearance_recommendation.replace('_', ' ')}
// // //                                                                                 </Badge>
// // //                                                                             </div>
// // //                                                                             {parcel.is_split_shipment && (
// // //                                                                                 <div className="space-y-2 col-span-2">
// // //                                                                                     <Label className="font-semibold text-amber-600">⚠️ Split Shipment Detected</Label>
// // //                                                                                     <div className="text-sm">Group ID: {parcel.split_group_id}</div>
// // //                                                                                     <div className="text-sm">Daily Total: AED {parcel.daily_total_aed.toFixed(2)}</div>
// // //                                                                                 </div>
// // //                                                                             )}
// // //                                                                         </div>

// // //                                                                         <DialogFooter className="flex gap-2">
// // //                                                                             {/* Reject Button - Red */}
// // //                                                                             <Button
// // //                                                                                 variant="destructive"
// // //                                                                                 onClick={() => handleAction('reject')}
// // //                                                                                 className="gap-2 hover:text-black"
// // //                                                                             >
// // //                                                                                 <XSquare className="h-4 w-4" />
// // //                                                                                 Reject
// // //                                                                             </Button>

// // //                                                                             {/* Escalate Button - Yellow / Warning */}
// // //                                                                             <Button
// // //                                                                                 variant="outline"
// // //                                                                                 onClick={() => handleAction('escalate')}
// // //                                                                                 className="gap-2 text-yellow-700 border-yellow-400 hover:bg-yellow-50 hover:text-black"
// // //                                                                             >
// // //                                                                                 <AlertCircle className="h-4 w-4" />
// // //                                                                                 Escalate
// // //                                                                             </Button>


// // //                                                                             {/* Approve Button - Green */}
// // //                                                                             <Button
// // //                                                                                 variant="default"
// // //                                                                                 onClick={() => handleAction('approve')}
// // //                                                                                 className="gap-2 bg-green-600 text-white hover:bg-green-700"
// // //                                                                             >
// // //                                                                                 <CheckSquare className="h-4 w-4" />
// // //                                                                                 Approve
// // //                                                                             </Button>
// // //                                                                         </DialogFooter>

// // //                                                                     </DialogContent>
// // //                                                                 </Dialog>
// // //                                                             </TableCell>
// // //                                                         </TableRow>
// // //                                                     ))}
// // //                                             </TableBody>
// // //                                         </Table>
// // //                                         {stats.highRisk > 5 && (
// // //                                             <div className="text-center mt-4 text-sm text-muted-foreground">
// // //                                                 Showing 5 of {stats.highRisk.toLocaleString()} high-risk parcels
// // //                                             </div>
// // //                                         )}
// // //                                     </CardContent>
// // //                                 </Card>
// // //                             )}
// // //                         </TabsContent>

// // //                         <TabsContent value="parcels">
// // //                             <Card>
// // //                                 <CardHeader>
// // //                                     <div className="flex items-center justify-between">
// // //                                         <div>
// // //                                             <CardTitle>Processed Parcels</CardTitle>
// // //                                             <CardDescription>
// // //                                                 Showing {startIndex + 1}-{Math.min(endIndex, filteredData.length)} of {filteredData.length} filtered parcels
// // //                                             </CardDescription>
// // //                                         </div>
// // //                                         <div className="flex gap-2">
// // //                                             <Button
// // //                                                 variant={filter === "all" ? "default" : "outline"}
// // //                                                 size="sm"
// // //                                                 onClick={() => { setFilter("all"); setCurrentPage(1); }}
// // //                                             >
// // //                                                 All ({processedData.length.toLocaleString()})
// // //                                             </Button>
// // //                                             <Button
// // //                                                 variant={filter === "high-risk" ? "default" : "outline"}
// // //                                                 size="sm"
// // //                                                 onClick={() => { setFilter("high-risk"); setCurrentPage(1); }}
// // //                                             >
// // //                                                 High Risk ({stats.highRisk.toLocaleString()})
// // //                                             </Button>
// // //                                             <Button
// // //                                                 variant={filter === "split" ? "default" : "outline"}
// // //                                                 size="sm"
// // //                                                 onClick={() => { setFilter("split"); setCurrentPage(1); }}
// // //                                             >
// // //                                                 Split ({stats.splitShipments.toLocaleString()})
// // //                                             </Button>
// // //                                             <Button
// // //                                                 variant={filter === "duty" ? "default" : "outline"}
// // //                                                 size="sm"
// // //                                                 onClick={() => { setFilter("duty"); setCurrentPage(1); }}
// // //                                             >
// // //                                                 Duty ({stats.dutyApplicable.toLocaleString()})
// // //                                             </Button>
// // //                                         </div>
// // //                                     </div>
// // //                                 </CardHeader>
// // //                                 <CardContent>
// // //                                     <Table>
// // //                                         <TableHeader>
// // //                                             <TableRow>
// // //                                                 <TableHead>Order ID</TableHead>
// // //                                                 <TableHead>Importer</TableHead>
// // //                                                 <TableHead>Product</TableHead>
// // //                                                 <TableHead>HS Code</TableHead>
// // //                                                 <TableHead>Value (AED)</TableHead>
// // //                                                 <TableHead>Duty</TableHead>
// // //                                                 <TableHead>Risk</TableHead>
// // //                                                 <TableHead>Lane</TableHead>
// // //                                             </TableRow>
// // //                                         </TableHeader>
// // //                                         <TableBody>
// // //                                             {paginatedData.map((parcel) => (
// // //                                                 <TableRow key={parcel.order_id} className="hover:bg-muted/50">
// // //                                                     <TableCell className="font-medium">{parcel.order_id}</TableCell>
// // //                                                     <TableCell>
// // //                                                         <div>
// // //                                                             <div className="font-medium">{parcel.importer_name}</div>
// // //                                                             {parcel.is_split_shipment && (
// // //                                                                 <Badge variant="outline" className="mt-1 text-xs bg-amber-50">
// // //                                                                     Split Shipment
// // //                                                                 </Badge>
// // //                                                             )}
// // //                                                         </div>
// // //                                                     </TableCell>
// // //                                                     <TableCell className="max-w-[200px]">
// // //                                                         <div className="font-medium truncate">{parcel.product_title}</div>
// // //                                                         <div className="text-xs text-muted-foreground truncate">
// // //                                                             {parcel.product_category}
// // //                                                         </div>
// // //                                                     </TableCell>
// // //                                                     <TableCell>
// // //                                                         <div>
// // //                                                             <div className="font-mono font-medium">{parcel.predicted_hs_code}</div>
// // //                                                             <div className="text-xs text-muted-foreground">
// // //                                                                 {(parcel.hs_confidence_score * 100).toFixed(0)}% confidence
// // //                                                             </div>
// // //                                                         </div>
// // //                                                     </TableCell>
// // //                                                     <TableCell className="font-medium">
// // //                                                         AED {parcel.item_price_aed.toFixed(2)}
// // //                                                     </TableCell>
// // //                                                     <TableCell>
// // //                                                         {parcel.duty_applicable ? (
// // //                                                             <div className="text-green-600 font-medium">
// // //                                                                 AED {parcel.duty_payable_aed.toFixed(2)}
// // //                                                             </div>
// // //                                                         ) : (
// // //                                                             <Badge variant="outline" className="text-xs">
// // //                                                                 Exempt
// // //                                                             </Badge>
// // //                                                         )}
// // //                                                     </TableCell>
// // //                                                     <TableCell>{getRiskBadge(parcel.is_high_risk)}</TableCell>
// // //                                                     <TableCell>
// // //                                                         <Badge className={getLaneColor(parcel.assigned_risk_lane)}>
// // //                                                             {parcel.assigned_risk_lane}
// // //                                                         </Badge>
// // //                                                     </TableCell>
// // //                                                 </TableRow>
// // //                                             ))}
// // //                                         </TableBody>
// // //                                     </Table>

// // //                                     {/* Pagination */}
// // //                                     {totalPages > 1 && (
// // //                                         <div className="flex items-center justify-between mt-4">
// // //                                             <div className="text-sm text-muted-foreground">
// // //                                                 Page {currentPage} of {totalPages}
// // //                                             </div>
// // //                                             <div className="flex items-center gap-2">
// // //                                                 <Button
// // //                                                     variant="outline"
// // //                                                     size="sm"
// // //                                                     onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
// // //                                                     disabled={currentPage === 1}
// // //                                                 >
// // //                                                     <ChevronLeft className="h-4 w-4" />
// // //                                                     Previous
// // //                                                 </Button>
// // //                                                 <div className="flex items-center gap-1">
// // //                                                     {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
// // //                                                         let pageNum;
// // //                                                         if (totalPages <= 5) {
// // //                                                             pageNum = i + 1;
// // //                                                         } else if (currentPage <= 3) {
// // //                                                             pageNum = i + 1;
// // //                                                         } else if (currentPage >= totalPages - 2) {
// // //                                                             pageNum = totalPages - 4 + i;
// // //                                                         } else {
// // //                                                             pageNum = currentPage - 2 + i;
// // //                                                         }

// // //                                                         return (
// // //                                                             <Button
// // //                                                                 key={pageNum}
// // //                                                                 variant={currentPage === pageNum ? "default" : "outline"}
// // //                                                                 size="sm"
// // //                                                                 onClick={() => setCurrentPage(pageNum)}
// // //                                                             >
// // //                                                                 {pageNum}
// // //                                                             </Button>
// // //                                                         );
// // //                                                     })}
// // //                                                 </div>
// // //                                                 <Button
// // //                                                     variant="outline"
// // //                                                     size="sm"
// // //                                                     onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
// // //                                                     disabled={currentPage === totalPages}
// // //                                                 >
// // //                                                     Next
// // //                                                     <ChevronRight className="h-4 w-4" />
// // //                                                 </Button>
// // //                                             </div>
// // //                                         </div>
// // //                                     )}
// // //                                 </CardContent>
// // //                             </Card>
// // //                         </TabsContent>

// // //                         <TabsContent value="analytics">
// // //                             <ParcelCharts data={processedData} />
// // //                         </TabsContent>
// // //                     </Tabs>

// // //                     {/* Upload New Data Button */}
// // //                     <Card className="border-dashed border-2">
// // //                         <CardContent className="p-6">
// // //                             <div className="flex flex-col items-center justify-center text-center space-y-4">
// // //                                 <UploadIcon className="h-10 w-10 text-primary" />
// // //                                 <div>
// // //                                     <h3 className="text-lg font-semibold">Process Another File</h3>
// // //                                     <p className="text-sm text-muted-foreground">
// // //                                         Upload a new CSV file to analyze more e-commerce data
// // //                                     </p>
// // //                                 </div>
// // //                                 <div className="flex gap-4">
// // //                                     <Button
// // //                                         className="gap-2"
// // //                                         onClick={handleUploadNewCSV}
// // //                                     >
// // //                                         <UploadIcon className="h-4 w-4" />
// // //                                         Upload New CSV
// // //                                     </Button>
// // //                                     <Button variant="outline" onClick={exportToCSV}>
// // //                                         <Download className="h-4 w-4 mr-2" />
// // //                                         Download Results ({processedData.length.toLocaleString()} parcels)
// // //                                     </Button>
// // //                                 </div>
// // //                             </div>
// // //                         </CardContent>
// // //                     </Card>
// // //                 </>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default ParcelIntelPage;



// // import React, { useState, useEffect } from "react";
// // import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// // import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// // import { Badge } from "@/components/ui/badge";
// // import { Button } from "@/components/ui/button";
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // import { Progress } from "@/components/ui/progress";
// // import {
// //     Package,
// //     AlertTriangle,
// //     CheckCircle,
// //     XCircle,
// //     Filter,
// //     Download,
// //     Upload as UploadIcon,
// //     BarChart3,
// //     Shield,
// //     DollarSign,
// //     Search,
// //     Loader2,
// //     ChevronLeft,
// //     ChevronRight,
// //     Eye,
// //     FileText,
// //     AlertCircle,
// //     CheckSquare,
// //     XSquare
// // } from "lucide-react";
// // import { Input } from "@/components/ui/input";
// // import { CSVUploader } from "@/components/CSVUploader";
// // import { ParcelProcessor, type ProcessedParcel, type RawParcelData } from "@/utils/parcelProcessor";
// // import { toast } from "sonner";
// // import { ParcelCharts } from "@/components/ParcelCharts";
// // import {
// //     Dialog,
// //     DialogContent,
// //     DialogDescription,
// //     DialogFooter,
// //     DialogHeader,
// //     DialogTitle,
// //     DialogTrigger,
// // } from "@/components/ui/dialog";
// // import { Label } from "@/components/ui/label";
// // import { useSharedData } from "@/contexts/SharedDataContext";

// // const ParcelIntelPage = () => {
// //     // GET DATA FROM SHARED CONTEXT
// //     const {
// //         processedData: sharedProcessedData,
// //         setUploadedData: setSharedUploadedData,
// //         setProcessedData: setSharedProcessedData,
// //         clearData
// //     } = useSharedData();

// //     // LOCAL STATE
// //     const [isProcessing, setIsProcessing] = useState(false);
// //     const [showUploader, setShowUploader] = useState<boolean>(true);
// //     const [filter, setFilter] = useState<string>("all");
// //     const [search, setSearch] = useState<string>("");
// //     const [currentPage, setCurrentPage] = useState(1);
// //     const [selectedParcel, setSelectedParcel] = useState<ProcessedParcel | null>(null);
// //     const [isDialogOpen, setIsDialogOpen] = useState(false);
// //     const itemsPerPage = 10;

// //     // Check if we have shared data on component mount
// //     useEffect(() => {
// //         if (sharedProcessedData.length > 0) {
// //             setShowUploader(false);
// //         } else {
// //             setShowUploader(true);
// //         }
// //     }, [sharedProcessedData]);

// //     // Use shared data as the source
// //     const processedData = sharedProcessedData;

// //     // Handle Review Button Click
// //     const handleReviewClick = (parcel: ProcessedParcel) => {
// //         setSelectedParcel(parcel);
// //         setIsDialogOpen(true);
// //     };

// //     // Handle Action in Modal
// //     const handleAction = (action: 'approve' | 'reject' | 'escalate') => {
// //         if (!selectedParcel) return;

// //         let message = '';
// //         let toastType: 'success' | 'error' | 'warning' = 'success';

// //         switch (action) {
// //             case 'approve':
// //                 message = `Parcel ${selectedParcel.order_id} approved for ${selectedParcel.clearance_recommendation}`;
// //                 toast.success("Approved!", { description: message });
// //                 break;
// //             case 'reject':
// //                 message = `Parcel ${selectedParcel.order_id} rejected - Requires further inspection`;
// //                 toast.error("Rejected!", { description: message });
// //                 break;
// //             case 'escalate':
// //                 message = `Parcel ${selectedParcel.order_id} escalated to supervisor`;
// //                 toast.warning("Escalated!", { description: message });
// //                 break;
// //         }

// //         setIsDialogOpen(false);
// //         setSelectedParcel(null);
// //     };

// //     const handleDataProcessed = (rawData: RawParcelData[], filename: string) => {
// //         console.log(`📥 Processing ${rawData.length} records from ${filename}`);
// //         setIsProcessing(true);

// //         // SAVE RAW DATA TO SHARED CONTEXT
// //         setSharedUploadedData(rawData);

// //         setTimeout(() => {
// //             try {
// //                 console.log("🔍 Analyzing data for all 4 logic gates...");

// //                 // --- LEVEL 1: Split Shipment Detection ---
// //                 console.log("🔄 Level 1: Detecting split shipments...");
// //                 const splitGroups = new Map<string, string[]>();
// //                 const dailyTotals = new Map<string, number>();

// //                 // Group by importer and day (simplified)
// //                 rawData.slice(0, 1000).forEach((item, index) => {
// //                     const itemPriceINR = typeof item.item_price_inr === 'string'
// //                         ? parseFloat(item.item_price_inr)
// //                         : item.item_price_inr;
// //                     const itemValueAED = itemPriceINR * 0.044;

// //                     // Create a simple date key (using index to simulate different days)
// //                     const day = Math.floor(index / 100) + 1; // Groups of 100 parcels per "day"
// //                     const key = `${item.importer_name}_day${day}`;

// //                     // Update daily total
// //                     const currentTotal = dailyTotals.get(key) || 0;
// //                     dailyTotals.set(key, currentTotal + itemValueAED);

// //                     // Add to group
// //                     if (!splitGroups.has(key)) {
// //                         splitGroups.set(key, []);
// //                     }
// //                     splitGroups.get(key)!.push(item.order_id);
// //                 });

// //                 // Identify split shipments (daily total > 1000 AED)
// //                 const splitShipmentOrders = new Set<string>();
// //                 splitGroups.forEach((orderIds, key) => {
// //                     const dailyTotal = dailyTotals.get(key) || 0;
// //                     if (orderIds.length > 1 && dailyTotal > 1000) {
// //                         orderIds.forEach(orderId => splitShipmentOrders.add(orderId));
// //                     }
// //                 });

// //                 console.log(`✅ Level 1: Found ${splitShipmentOrders.size} split shipments`);

// //                 // Process parcels
// //                 const results = rawData.slice(0, 1000).map((item, index) => {
// //                     const itemPriceINR = typeof item.item_price_inr === 'string'
// //                         ? parseFloat(item.item_price_inr)
// //                         : item.item_price_inr;
// //                     const itemValueAED = parseFloat((itemPriceINR * 0.044).toFixed(2));

// //                     // --- LEVEL 2: HS Code Classification ---
// //                     const text = `${item.product_title || ''} ${item.description || ''}`.toLowerCase();
// //                     let hsCode = '9999.99.99';
// //                     let hsConfidence = 0.5;
// //                     let hsChapter = '99';

// //                     // Smart HS code detection
// //                     if (text.includes('drone') || text.includes('uav') || text.includes('quadcopter')) {
// //                         hsCode = '8806.21.00'; // Drones ≤250g
// //                         hsConfidence = 0.95;
// //                         hsChapter = '88';
// //                     } else if (text.includes('phone') || text.includes('mobile') || text.includes('smartphone')) {
// //                         hsCode = '8517.12.00'; // Mobile phones
// //                         hsConfidence = 0.92;
// //                         hsChapter = '85';
// //                     } else if (text.includes('shirt') || text.includes('clothing') || text.includes('apparel')) {
// //                         hsCode = '6203.42.00'; // Men's trousers
// //                         hsConfidence = 0.88;
// //                         hsChapter = '62';
// //                     } else if (text.includes('book') || text.includes('publication')) {
// //                         hsCode = '4901.99.00'; // Printed books
// //                         hsConfidence = 0.96;
// //                         hsChapter = '49';
// //                     } else if (text.includes('car') || text.includes('automotive')) {
// //                         hsCode = '8708.29.00'; // Car parts
// //                         hsConfidence = 0.85;
// //                         hsChapter = '87';
// //                     } else if (text.includes('jewel') || text.includes('gold') || text.includes('silver')) {
// //                         hsCode = '7113.19.00'; // Jewellery
// //                         hsConfidence = 0.90;
// //                         hsChapter = '71';
// //                     } else if (text.includes('battery') || text.includes('lithium') || text.includes('power bank')) {
// //                         hsCode = '8507.60.00'; // Lithium batteries
// //                         hsConfidence = 0.94;
// //                         hsChapter = '85';
// //                     } else if (text.includes('weapon') || text.includes('gun') || text.includes('ammunition')) {
// //                         hsCode = '9302.00.00'; // Revolvers and pistols
// //                         hsConfidence = 0.97;
// //                         hsChapter = '93';
// //                     }

// //                     // --- LEVEL 3: Duty Calculation ---
// //                     const isSplit = splitShipmentOrders.has(item.order_id);
// //                     const dailyTotal = dailyTotals.get(`${item.importer_name}_day${Math.floor(index / 100) + 1}`) || itemValueAED;
// //                     const dutyApplicable = dailyTotal > 1000 || isSplit;
// //                     const dutyRate = 5; // 5% standard rate
// //                     const dutyPayable = dutyApplicable ? parseFloat((itemValueAED * dutyRate / 100).toFixed(2)) : 0;

// //                     // --- LEVEL 4: Risk Protection ---
// //                     const riskKeywords = [];
// //                     const riskCategories = [];
// //                     let isHighRisk = false;

// //                     // Check for dangerous goods
// //                     if (text.includes('drone') || text.includes('uav')) {
// //                         riskKeywords.push('drone');
// //                         riskCategories.push('DRONES');
// //                         isHighRisk = true;
// //                     }
// //                     if (text.includes('weapon') || text.includes('gun') || text.includes('ammunition')) {
// //                         riskKeywords.push('weapon');
// //                         riskCategories.push('WEAPONS');
// //                         isHighRisk = true;
// //                     }
// //                     if (text.includes('battery') || text.includes('lithium')) {
// //                         riskKeywords.push('lithium');
// //                         riskCategories.push('LITHIUM_BATTERIES');
// //                         isHighRisk = true;
// //                     }
// //                     if (text.includes('gold') || text.includes('silver') || text.includes('platinum')) {
// //                         riskKeywords.push('precious');
// //                         riskCategories.push('PRECIOUS_METALS');
// //                     }

// //                     // --- Risk Lane Assignment ---
// //                     let assignedLane: 'GREEN' | 'YELLOW' | 'RED' | 'BLACK' = 'GREEN';
// //                     const laneReasons = [];

// //                     if (riskCategories.includes('WEAPONS') || riskCategories.includes('DRONES') || riskCategories.includes('LITHIUM_BATTERIES')) {
// //                         assignedLane = 'BLACK';
// //                         laneReasons.push('High-security risk goods');
// //                     } else if (isSplit) {
// //                         assignedLane = 'RED';
// //                         laneReasons.push('Split shipment detected');
// //                     } else if (dutyApplicable) {
// //                         assignedLane = 'YELLOW';
// //                         laneReasons.push('Duty applicable');
// //                     } else {
// //                         assignedLane = 'GREEN';
// //                         laneReasons.push('Low risk, compliant');
// //                     }

// //                     // Clearance recommendation
// //                     const clearanceRecommendation =
// //                         assignedLane === 'GREEN' ? 'AUTO_CLEAR' :
// //                             assignedLane === 'YELLOW' ? 'DOC_REVIEW' :
// //                                 assignedLane === 'RED' ? 'INSPECTION' : 'HOLD';

// //                     const result: ProcessedParcel = {
// //                         order_id: item.order_id,
// //                         timestamp: item.timestamp,
// //                         importer_name: item.importer_name,
// //                         delivery_address: item.delivery_address,
// //                         product_title: item.product_title || 'Unknown Product',
// //                         description: item.description || '',
// //                         product_category: item.product_category || 'Uncategorized',
// //                         item_price_inr: itemPriceINR,
// //                         item_price_aed: itemValueAED,
// //                         image_url: item.image_url,
// //                         same_day_importer_key: `${item.importer_name}_day${Math.floor(index / 100) + 1}`,
// //                         daily_total_aed: dailyTotal,
// //                         is_split_shipment: isSplit,
// //                         split_group_id: isSplit ? `SPLIT-${item.importer_name.substring(0, 3).toUpperCase()}-${Math.floor(index / 100) + 1}` : undefined,
// //                         predicted_hs_code: hsCode,
// //                         hs_confidence_score: hsConfidence,
// //                         hs_chapter: hsChapter,
// //                         de_minimis_threshold: 1000,
// //                         duty_applicable: dutyApplicable,
// //                         duty_rate: dutyRate,
// //                         duty_payable_aed: dutyPayable,
// //                         tariff_reference: 'STANDARD_5',
// //                         risk_keywords_found: riskKeywords,
// //                         risk_categories: riskCategories,
// //                         is_high_risk: isHighRisk,
// //                         risk_reason_codes: riskCategories.map(cat => `${cat}_DETECTED`),
// //                         assigned_risk_lane: assignedLane,
// //                         lane_reasons: laneReasons,
// //                         processing_timestamp: new Date().toISOString(),
// //                         clearance_recommendation: clearanceRecommendation
// //                     };

// //                     return result;
// //                 });

// //                 // SAVE PROCESSED DATA TO SHARED CONTEXT
// //                 setSharedProcessedData(results);
// //                 setShowUploader(false);
// //                 setCurrentPage(1);

// //                 toast.success("Processing Complete!", {
// //                     description: `Analyzed ${results.length} parcels through all 4 logic gates`,
// //                     duration: 5000,
// //                 });

// //                 // Calculate and log summary
// //                 const splitCount = results.filter(r => r.is_split_shipment).length;
// //                 const highRiskCount = results.filter(r => r.is_high_risk).length;
// //                 const dutyTotal = results.reduce((sum, r) => sum + r.duty_payable_aed, 0);
// //                 const avgConfidence = results.reduce((sum, r) => sum + r.hs_confidence_score, 0) / results.length;

// //                 console.log(`🎉 PROCESSING COMPLETE!`);
// //                 console.log(`📊 Summary:`);
// //                 console.log(`   • Total parcels: ${results.length}`);
// //                 console.log(`   • Split shipments: ${splitCount}`);
// //                 console.log(`   • High-risk items: ${highRiskCount}`);
// //                 console.log(`   • Total duty: AED ${dutyTotal.toFixed(2)}`);
// //                 console.log(`   • HS confidence: ${(avgConfidence * 100).toFixed(1)}%`);
// //                 console.log(`   • Risk lanes: GREEN(${results.filter(r => r.assigned_risk_lane === 'GREEN').length}) | YELLOW(${results.filter(r => r.assigned_risk_lane === 'YELLOW').length}) | RED(${results.filter(r => r.assigned_risk_lane === 'RED').length}) | BLACK(${results.filter(r => r.assigned_risk_lane === 'BLACK').length})`);

// //             } catch (error) {
// //                 console.error("Error processing data:", error);
// //             } finally {
// //                 setIsProcessing(false);
// //             }
// //         }, 1500);
// //     };

// //     // UPLOAD NEW CSV
// //     const handleUploadNewCSV = () => {
// //         setShowUploader(true);
// //         setFilter("all");
// //         setSearch("");
// //         setCurrentPage(1);
// //         clearData();
// //     };

// //     // EXPORT TO CSV
// //     const exportToCSV = () => {
// //         if (processedData.length === 0) {
// //             alert("No data to export. Please upload and process a CSV file first.");
// //             return;
// //         }

// //         const headers = [
// //             'order_id',
// //             'importer_name',
// //             'timestamp',
// //             'product_title',
// //             'item_price_inr',
// //             'item_price_aed',
// //             'predicted_hs_code',
// //             'hs_confidence_score',
// //             'is_split_shipment',
// //             'daily_total_aed',
// //             'duty_applicable',
// //             'duty_rate',
// //             'duty_payable_aed',
// //             'is_high_risk',
// //             'risk_categories',
// //             'assigned_risk_lane',
// //             'clearance_recommendation'
// //         ];

// //         const csvContent = [
// //             headers.join(','),
// //             ...processedData.map(p => [
// //                 p.order_id,
// //                 `"${p.importer_name}"`,
// //                 p.timestamp,
// //                 `"${p.product_title}"`,
// //                 p.item_price_inr,
// //                 p.item_price_aed.toFixed(2),
// //                 p.predicted_hs_code,
// //                 (p.hs_confidence_score * 100).toFixed(1) + '%',
// //                 p.is_split_shipment ? 'YES' : 'NO',
// //                 p.daily_total_aed.toFixed(2),
// //                 p.duty_applicable ? 'YES' : 'NO',
// //                 p.duty_rate + '%',
// //                 p.duty_payable_aed.toFixed(2),
// //                 p.is_high_risk ? 'HIGH' : 'LOW',
// //                 `"${p.risk_categories.join(';')}"`,
// //                 p.assigned_risk_lane,
// //                 p.clearance_recommendation
// //             ].join(','))
// //         ].join('\n');

// //         const blob = new Blob([csvContent], { type: 'text/csv' });
// //         const url = window.URL.createObjectURL(blob);
// //         const a = document.createElement('a');
// //         a.href = url;
// //         a.download = `parcel_intel_results_${new Date().toISOString().split('T')[0]}.csv`;
// //         document.body.appendChild(a);
// //         a.click();
// //         document.body.removeChild(a);
// //         window.URL.revokeObjectURL(url);
// //     };

// //     // FILTER AND SEARCH
// //     const filteredData = processedData.filter(parcel => {
// //         if (filter === "all") return true;
// //         if (filter === "high-risk") return parcel.is_high_risk;
// //         if (filter === "split") return parcel.is_split_shipment;
// //         if (filter === "duty") return parcel.duty_applicable;
// //         return parcel.assigned_risk_lane === filter;
// //     }).filter(parcel =>
// //         parcel.order_id.toLowerCase().includes(search.toLowerCase()) ||
// //         parcel.importer_name.toLowerCase().includes(search.toLowerCase()) ||
// //         parcel.product_title.toLowerCase().includes(search.toLowerCase())
// //     );

// //     // PAGINATION
// //     const totalPages = Math.ceil(filteredData.length / itemsPerPage);
// //     const startIndex = (currentPage - 1) * itemsPerPage;
// //     const endIndex = startIndex + itemsPerPage;
// //     const paginatedData = filteredData.slice(startIndex, endIndex);

// //     // STATS
// //     const stats = {
// //         total: processedData.length,
// //         highRisk: processedData.filter(p => p.is_high_risk).length,
// //         splitShipments: processedData.filter(p => p.is_split_shipment).length,
// //         dutyApplicable: processedData.filter(p => p.duty_applicable).length,
// //         greenLane: processedData.filter(p => p.assigned_risk_lane === "GREEN").length,
// //         yellowLane: processedData.filter(p => p.assigned_risk_lane === "YELLOW").length,
// //         redLane: processedData.filter(p => p.assigned_risk_lane === "RED").length,
// //         blackLane: processedData.filter(p => p.assigned_risk_lane === "BLACK").length,
// //         totalDuty: processedData.reduce((sum, p) => sum + p.duty_payable_aed, 0),
// //         avgConfidence: processedData.length > 0
// //             ? Math.round(processedData.reduce((sum, p) => sum + p.hs_confidence_score, 0) / processedData.length * 100)
// //             : 0
// //     };

// //     // HELPER FUNCTIONS
// //     const getLaneColor = (lane: string) => {
// //         switch (lane) {
// //             case "GREEN": return "bg-green-100 text-green-800 border-green-300";
// //             case "YELLOW": return "bg-yellow-100 text-yellow-800 border-yellow-300";
// //             case "RED": return "bg-red-100 text-red-800 border-red-300";
// //             case "BLACK": return "bg-gray-800 text-white border-gray-700";
// //             default: return "bg-gray-100 text-gray-800 border-gray-300";
// //         }
// //     };

// //     const getRiskBadge = (isHighRisk: boolean) => {
// //         return isHighRisk ? (
// //             <Badge variant="destructive" className="flex items-center gap-1">
// //                 <AlertTriangle className="h-3 w-3" /> High Risk
// //             </Badge>
// //         ) : (
// //             <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
// //                 <CheckCircle className="h-3 w-3 mr-1" /> Low Risk
// //             </Badge>
// //         );
// //     };

// //     const getRiskCategoryCount = (category: string) => {
// //         return processedData.filter(p => p.risk_categories.includes(category)).length;
// //     };

// //     // Create loading skeleton component
// //     const LoadingSkeleton = () => (
// //         <div className="space-y-6">
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// //                 {[...Array(4)].map((_, i) => (
// //                     <Card key={i}>
// //                         <CardContent className="p-6">
// //                             <div className="h-8 bg-gray-200 rounded animate-pulse mb-2"></div>
// //                             <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
// //                         </CardContent>
// //                     </Card>
// //                 ))}
// //             </div>
// //             <Card>
// //                 <CardContent className="p-6">
// //                     <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
// //                 </CardContent>
// //             </Card>
// //         </div>
// //     );

// //     return (
// //         <div className="p-6 space-y-6 overflow-y-auto h-full">
// //             {isProcessing && <LoadingSkeleton />}

// //             {/* Header */}
// //             <div>
// //                 <div className="flex items-center gap-3 mb-2">
// //                     <Package className="h-8 w-8 text-primary" />
// //                     <h1 className="text-3xl font-bold tracking-tight">PARCEL-INTEL</h1>
// //                 </div>
// //                 <p className="text-muted-foreground">
// //                     E-commerce parcel intelligence engine for split shipment detection, HS classification, duty calculation, and risk assessment
// //                 </p>
// //             </div>

// //             {/* Controls */}
// //             <Card>
// //                 <CardContent className="p-4">
// //                     <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
// //                         <div className="flex-1 w-full md:w-auto">
// //                             <div className="relative">
// //                                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
// //                                 <Input
// //                                     placeholder="Search parcels by ID, importer, or product..."
// //                                     className="pl-10"
// //                                     value={search}
// //                                     onChange={(e) => setSearch(e.target.value)}
// //                                     disabled={isProcessing || processedData.length === 0}
// //                                 />
// //                             </div>
// //                         </div>
// //                         <div className="flex items-center gap-2">
// //                             <Button
// //                                 variant="outline"
// //                                 size="sm"
// //                                 className="gap-2"
// //                                 onClick={handleUploadNewCSV}
// //                                 disabled={isProcessing}
// //                             >
// //                                 <UploadIcon className="h-4 w-4" />
// //                                 {processedData.length > 0 ? 'Upload New' : 'Upload CSV'}
// //                             </Button>

// //                             {processedData.length > 0 && (
// //                                 <Button
// //                                     variant="outline"
// //                                     size="sm"
// //                                     className="gap-2"
// //                                     onClick={exportToCSV}
// //                                     disabled={isProcessing}
// //                                 >
// //                                     <Download className="h-4 w-4" />
// //                                     Export Results
// //                                 </Button>
// //                             )}

// //                             {isProcessing && (
// //                                 <Button size="sm" className="gap-2" disabled>
// //                                     <Loader2 className="h-4 w-4 animate-spin" />
// //                                     Processing...
// //                                 </Button>
// //                             )}
// //                         </div>
// //                     </div>
// //                 </CardContent>
// //             </Card>

// //             {/* Main Content */}
// //             {showUploader || processedData.length === 0 ? (
// //                 // SHOW CSV UPLOADER
// //                 <div className="space-y-6">
// //                     <Card>
// //                         <CardContent className="p-6">
// //                             <div className="mb-6">
// //                                 {/* <h2 className="text-xl font-bold mb-4">Hackathon Challenge: 4 Logic Gates</h2> */}
// //                                 <h2 className="text-xl font-bold mb-4">Core Intelligence Controls</h2>
// //                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// //                                     {/* <Card className="border-l-4 border-l-amber-500">
// //                                         <CardContent className="p-4">
// //                                             <div className="text-lg font-bold text-amber-600 mb-1">Level 1</div>
// //                                             <div className="font-medium">Identity Engine (Split Shipments)</div>
// //                                             <div className="text-sm text-muted-foreground mt-1">
// //                                                 {"Same importer + same day + total > AED 1,000"}
// //                                             </div>
// //                                         </CardContent>
// //                                     </Card> */}

// //                                     <Card className="border-l-4 border-l-amber-500">
// //                                         <CardContent className="p-4">
// //                                             <div className="font-medium text-amber-600 mb-1">Split Shipment Detection</div>
// //                                             <div className="text-sm text-muted-foreground mt-1">
// //                                                 Same importer + same day + aggregated value &gt; AED 1,000
// //                                             </div>
// //                                         </CardContent>
// //                                     </Card>

// //                                     {/* <Card className="border-l-4 border-l-blue-500">
// //                                         <CardContent className="p-4">
// //                                             <div className="text-lg font-bold text-blue-600 mb-1">Level 2</div>
// //                                             <div className="font-medium">HS Code Classification</div>
// //                                             <div className="text-sm text-muted-foreground mt-1">
// //                                                 6-digit HS code prediction from descriptions
// //                                             </div>
// //                                         </CardContent>
// //                                     </Card> */}

// //                                     <Card className="border-l-4 border-l-blue-500">
// //                                         <CardContent className="p-4">
// //                                             <div className="font-medium text-blue-600 mb-1">HS Code Classification</div>
// //                                             <div className="text-sm text-muted-foreground mt-1">
// //                                                 Predict 6-digit HS codes from shipment descriptions for accurate classification
// //                                             </div>
// //                                         </CardContent>
// //                                     </Card>
// //                                     {/* <Card className="border-l-4 border-l-green-500">
// //                                         <CardContent className="p-4">
// //                                             <div className="text-lg font-bold text-green-600 mb-1">Level 3</div>
// //                                             <div className="font-medium">Duty Calculation</div>
// //                                             <div className="text-sm text-muted-foreground mt-1">
// //                                                 AED conversion + de-minimis + 5% duty
// //                                             </div>
// //                                         </CardContent>
// //                                     </Card> */}

// //                                     <Card className="border-l-4 border-l-green-500">
// //                                         <CardContent className="p-4">
// //                                             <div className="font-medium text-green-600 mb-1">Duty & Tax Calculation</div>
// //                                             <div className="text-sm text-muted-foreground mt-1">
// //                                                 Compute duties and taxes including AED conversion, de-minimis rules, and standard rates
// //                                             </div>
// //                                         </CardContent>
// //                                     </Card>
// //                                     {/* <Card className="border-l-4 border-l-red-500">
// //                                         <CardContent className="p-4">
// //                                             <div className="text-lg font-bold text-red-600 mb-1">Level 4</div>
// //                                             <div className="font-medium">Risk Protection</div>
// //                                             <div className="text-sm text-muted-foreground mt-1">
// //                                                 Weapons, drones, lithium batteries detection
// //                                             </div>
// //                                         </CardContent>
// //                                     </Card> */}

// //                                     <Card className="border-l-4 border-l-red-500">
// //                                         <CardContent className="p-4">
// //                                             <div className="font-medium text-red-600 mb-1">Societal Risk Protection</div>
// //                                             <div className="text-sm text-muted-foreground mt-1">
// //                                                 Detect prohibited items such as weapons, drones, and lithium batteries
// //                                             </div>
// //                                         </CardContent>
// //                                     </Card>
// //                                 </div>
// //                             </div>
// //                             <CSVUploader onDataProcessed={handleDataProcessed} />
// //                         </CardContent>
// //                     </Card>
// //                 </div>
// //             ) : (
// //                 // SHOW RESULTS WHEN DATA IS PROCESSED
// //                 <>
// //                     {/* KPI Cards */}
// //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// //                         <Card>
// //                             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// //                                 <CardTitle className="text-sm font-medium">Total Parcels</CardTitle>
// //                                 <Package className="h-4 w-4 text-muted-foreground" />
// //                             </CardHeader>
// //                             <CardContent>
// //                                 <div className="text-2xl font-bold">{stats.total.toLocaleString()}</div>
// //                                 <div className="flex items-center gap-2 mt-2">
// //                                     <div className="h-2 flex w-full rounded-full overflow-hidden bg-gray-200">
// //                                         <div className="bg-green-500" style={{ width: `${(stats.greenLane / stats.total) * 100}%` }} />
// //                                         <div className="bg-yellow-500" style={{ width: `${(stats.yellowLane / stats.total) * 100}%` }} />
// //                                         <div className="bg-red-500" style={{ width: `${(stats.redLane / stats.total) * 100}%` }} />
// //                                         <div className="bg-gray-800" style={{ width: `${(stats.blackLane / stats.total) * 100}%` }} />
// //                                     </div>
// //                                     <span className="text-xs text-muted-foreground">Lane mix</span>
// //                                 </div>
// //                             </CardContent>
// //                         </Card>

// //                         <Card>
// //                             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// //                                 <CardTitle className="text-sm font-medium">Split Shipments</CardTitle>
// //                                 <AlertTriangle className="h-4 w-4 text-amber-500" />
// //                             </CardHeader>
// //                             <CardContent>
// //                                 <div className="text-2xl font-bold">{stats.splitShipments.toLocaleString()}</div>
// //                                 <p className="text-xs text-muted-foreground">
// //                                     Potential revenue evasion detected
// //                                 </p>
// //                             </CardContent>
// //                         </Card>

// //                         <Card>
// //                             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// //                                 <CardTitle className="text-sm font-medium">High Risk Items</CardTitle>
// //                                 <Shield className="h-4 w-4 text-red-500" />
// //                             </CardHeader>
// //                             <CardContent>
// //                                 <div className="text-2xl font-bold">{stats.highRisk.toLocaleString()}</div>
// //                                 <p className="text-xs text-muted-foreground">
// //                                     {stats.blackLane} in BLACK lane
// //                                 </p>
// //                             </CardContent>
// //                         </Card>

// //                         <Card>
// //                             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// //                                 <CardTitle className="text-sm font-medium">Duty Payable</CardTitle>
// //                                 <DollarSign className="h-4 w-4 text-green-500" />
// //                             </CardHeader>
// //                             <CardContent>
// //                                 <div className="text-2xl font-bold">AED {stats.totalDuty.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
// //                                 <p className="text-xs text-muted-foreground">
// //                                     From {stats.dutyApplicable.toLocaleString()} parcels
// //                                 </p>
// //                             </CardContent>
// //                         </Card>
// //                     </div>

// //                     {/* Main Results Tabs */}
// //                     <Tabs defaultValue="overview" className="space-y-6">
// //                         <TabsList>
// //                             <TabsTrigger value="overview">Overview</TabsTrigger>
// //                             <TabsTrigger value="parcels">Parcel Details</TabsTrigger>
// //                             <TabsTrigger value="analytics">Analytics</TabsTrigger>
// //                         </TabsList>

// //                         <TabsContent value="overview" className="space-y-6">
// //                             {/* Risk Lane Distribution */}
// //                             <Card>
// //                                 <CardHeader>
// //                                     <CardTitle>Risk Lane Distribution</CardTitle>
// //                                     <CardDescription>How parcels are routed based on risk assessment</CardDescription>
// //                                 </CardHeader>
// //                                 <CardContent>
// //                                     <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
// //                                         {[
// //                                             { lane: "GREEN", count: stats.greenLane, description: "Auto-clear, no intervention", color: "bg-green-500" },
// //                                             { lane: "YELLOW", count: stats.yellowLane, description: "Document review required", color: "bg-yellow-500" },
// //                                             { lane: "RED", count: stats.redLane, description: "Physical inspection", color: "bg-red-500" },
// //                                             { lane: "BLACK", count: stats.blackLane, description: "Intelligence/security hold", color: "bg-gray-800" }
// //                                         ].map((item) => (
// //                                             <Card key={item.lane} className={`border-l-4 ${item.lane === "GREEN" ? "border-l-green-500" : item.lane === "YELLOW" ? "border-l-yellow-500" : item.lane === "RED" ? "border-l-red-500" : "border-l-gray-800"}`}>
// //                                                 <CardContent className="p-6">
// //                                                     <div className="flex items-center justify-between mb-2">
// //                                                         <h3 className="font-bold text-xl">{item.lane}</h3>
// //                                                         <Badge className={getLaneColor(item.lane)}>{item.count.toLocaleString()}</Badge>
// //                                                     </div>
// //                                                     <p className="text-sm text-muted-foreground">{item.description}</p>
// //                                                     <Progress
// //                                                         value={stats.total > 0 ? (item.count / stats.total) * 100 : 0}
// //                                                         className="mt-4 h-2"
// //                                                         indicatorClassName={item.color}
// //                                                     />
// //                                                 </CardContent>
// //                                             </Card>
// //                                         ))}
// //                                     </div>
// //                                 </CardContent>
// //                             </Card>

// //                             {/* Recent High-Risk Items */}
// //                             {stats.highRisk > 0 && (
// //                                 <Card>
// //                                     <CardHeader>
// //                                         <CardTitle>High-Risk Parcels Requiring Attention</CardTitle>
// //                                         <CardDescription>Items flagged for security, safety, or compliance risks</CardDescription>
// //                                     </CardHeader>
// //                                     <CardContent>
// //                                         <Table>
// //                                             <TableHeader>
// //                                                 <TableRow>
// //                                                     <TableHead>Order ID</TableHead>
// //                                                     <TableHead>Importer</TableHead>
// //                                                     <TableHead>Product</TableHead>
// //                                                     <TableHead>Risk Category</TableHead>
// //                                                     <TableHead>Duty Payable</TableHead>
// //                                                     <TableHead>Risk Lane</TableHead>
// //                                                     <TableHead>Action</TableHead>
// //                                                 </TableRow>
// //                                             </TableHeader>
// //                                             <TableBody>
// //                                                 {processedData
// //                                                     .filter(p => p.is_high_risk)
// //                                                     .slice(0, 5)
// //                                                     .map((parcel) => (
// //                                                         <TableRow key={parcel.order_id}>
// //                                                             <TableCell className="font-medium">{parcel.order_id}</TableCell>
// //                                                             <TableCell>{parcel.importer_name}</TableCell>
// //                                                             <TableCell className="max-w-[200px] truncate">{parcel.product_title}</TableCell>
// //                                                             <TableCell>
// //                                                                 <div className="flex flex-wrap gap-1">
// //                                                                     {parcel.risk_categories.map((cat, idx) => (
// //                                                                         <Badge key={idx} variant="outline" className="text-xs">
// //                                                                             {cat}
// //                                                                         </Badge>
// //                                                                     ))}
// //                                                                 </div>
// //                                                             </TableCell>
// //                                                             <TableCell>AED {parcel.duty_payable_aed.toFixed(2)}</TableCell>
// //                                                             <TableCell>
// //                                                                 <Badge className={getLaneColor(parcel.assigned_risk_lane)}>
// //                                                                     {parcel.assigned_risk_lane}
// //                                                                 </Badge>
// //                                                             </TableCell>
// //                                                             <TableCell>
// //                                                                 <Dialog open={isDialogOpen && selectedParcel?.order_id === parcel.order_id} onOpenChange={setIsDialogOpen}>
// //                                                                     <DialogTrigger asChild>
// //                                                                         <Button
// //                                                                             size="sm"
// //                                                                             variant="outline"
// //                                                                             onClick={() => handleReviewClick(parcel)}
// //                                                                             className="gap-2"
// //                                                                         >
// //                                                                             <Eye className="h-4 w-4" />
// //                                                                             Review
// //                                                                         </Button>
// //                                                                     </DialogTrigger>
// //                                                                     <DialogContent className="sm:max-w-[600px]">
// //                                                                         <DialogHeader>
// //                                                                             <DialogTitle>Parcel Review</DialogTitle>
// //                                                                             <DialogDescription>
// //                                                                                 Detailed analysis of parcel {parcel.order_id}
// //                                                                             </DialogDescription>
// //                                                                         </DialogHeader>

// //                                                                         <div className="grid grid-cols-2 gap-4 py-4">
// //                                                                             <div className="space-y-2">
// //                                                                                 <Label className="font-semibold">Order ID</Label>
// //                                                                                 <div className="text-sm">{parcel.order_id}</div>
// //                                                                             </div>
// //                                                                             <div className="space-y-2">
// //                                                                                 <Label className="font-semibold">Importer</Label>
// //                                                                                 <div className="text-sm">{parcel.importer_name}</div>
// //                                                                             </div>
// //                                                                             <div className="space-y-2">
// //                                                                                 <Label className="font-semibold">Product</Label>
// //                                                                                 <div className="text-sm">{parcel.product_title}</div>
// //                                                                             </div>
// //                                                                             <div className="space-y-2">
// //                                                                                 <Label className="font-semibold">Category</Label>
// //                                                                                 <div className="text-sm">{parcel.product_category}</div>
// //                                                                             </div>
// //                                                                             <div className="space-y-2">
// //                                                                                 <Label className="font-semibold">Value</Label>
// //                                                                                 <div className="text-sm">AED {parcel.item_price_aed.toFixed(2)}</div>
// //                                                                             </div>
// //                                                                             <div className="space-y-2">
// //                                                                                 <Label className="font-semibold">Duty Payable</Label>
// //                                                                                 <div className="text-sm">AED {parcel.duty_payable_aed.toFixed(2)}</div>
// //                                                                             </div>
// //                                                                             <div className="space-y-2">
// //                                                                                 <Label className="font-semibold">HS Code</Label>
// //                                                                                 <div className="text-sm font-mono">{parcel.predicted_hs_code}</div>
// //                                                                             </div>
// //                                                                             <div className="space-y-2">
// //                                                                                 <Label className="font-semibold">HS Confidence</Label>
// //                                                                                 <div className="text-sm">{(parcel.hs_confidence_score * 100).toFixed(1)}%</div>
// //                                                                             </div>
// //                                                                             <div className="space-y-2">
// //                                                                                 <Label className="font-semibold">Risk Level</Label>
// //                                                                                 <div className="text-sm">{getRiskBadge(parcel.is_high_risk)}</div>
// //                                                                             </div>
// //                                                                             <div className="space-y-2">
// //                                                                                 <div className="flex items-center gap-2">
// //                                                                                     <Label className="font-semibold">Assigned Lane</Label>
// //                                                                                     <Badge className={getLaneColor(parcel.assigned_risk_lane)}>
// //                                                                                         {parcel.assigned_risk_lane}
// //                                                                                     </Badge>
// //                                                                                 </div>
// //                                                                             </div>
// //                                                                             <div className="space-y-2 col-span-2">
// //                                                                                 <Label className="font-semibold">Risk Categories</Label>
// //                                                                                 <div className="flex flex-wrap gap-1">
// //                                                                                     {parcel.risk_categories.map((cat, idx) => (
// //                                                                                         <Badge key={idx} variant="outline" className="text-xs">
// //                                                                                             {cat}
// //                                                                                         </Badge>
// //                                                                                     ))}
// //                                                                                 </div>
// //                                                                             </div>
// //                                                                             <div className="space-y-2 col-span-2">
// //                                                                                 <Label className="font-semibold">Clearance Recommendation</Label>
// //                                                                                 <Badge className={parcel.clearance_recommendation === 'AUTO_CLEAR' ? 'bg-green-100 text-green-800' :
// //                                                                                     parcel.clearance_recommendation === 'DOC_REVIEW' ? 'bg-yellow-100 text-yellow-800' :
// //                                                                                         parcel.clearance_recommendation === 'INSPECTION' ? 'bg-orange-100 text-orange-800' :
// //                                                                                             'bg-red-100 text-red-800'}>
// //                                                                                     {parcel.clearance_recommendation.replace('_', ' ')}
// //                                                                                 </Badge>
// //                                                                             </div>
// //                                                                             {parcel.is_split_shipment && (
// //                                                                                 <div className="space-y-2 col-span-2">
// //                                                                                     <Label className="font-semibold text-amber-600">⚠️ Split Shipment Detected</Label>
// //                                                                                     <div className="text-sm">Group ID: {parcel.split_group_id}</div>
// //                                                                                     <div className="text-sm">Daily Total: AED {parcel.daily_total_aed.toFixed(2)}</div>
// //                                                                                 </div>
// //                                                                             )}
// //                                                                         </div>

// //                                                                         <DialogFooter className="flex gap-2">
// //                                                                             {/* Reject Button - Red */}
// //                                                                             <Button
// //                                                                                 variant="destructive"
// //                                                                                 onClick={() => handleAction('reject')}
// //                                                                                 className="gap-2 hover:text-black"
// //                                                                             >
// //                                                                                 <XSquare className="h-4 w-4" />
// //                                                                                 Reject
// //                                                                             </Button>

// //                                                                             {/* Escalate Button - Yellow / Warning */}
// //                                                                             <Button
// //                                                                                 variant="outline"
// //                                                                                 onClick={() => handleAction('escalate')}
// //                                                                                 className="gap-2 text-yellow-700 border-yellow-400 hover:bg-yellow-50 hover:text-black"
// //                                                                             >
// //                                                                                 <AlertCircle className="h-4 w-4" />
// //                                                                                 Escalate
// //                                                                             </Button>


// //                                                                             {/* Approve Button - Green */}
// //                                                                             <Button
// //                                                                                 variant="default"
// //                                                                                 onClick={() => handleAction('approve')}
// //                                                                                 className="gap-2 bg-green-600 text-white hover:bg-green-700"
// //                                                                             >
// //                                                                                 <CheckSquare className="h-4 w-4" />
// //                                                                                 Approve
// //                                                                             </Button>
// //                                                                         </DialogFooter>

// //                                                                     </DialogContent>
// //                                                                 </Dialog>
// //                                                             </TableCell>
// //                                                         </TableRow>
// //                                                     ))}
// //                                             </TableBody>
// //                                         </Table>
// //                                         {stats.highRisk > 5 && (
// //                                             <div className="text-center mt-4 text-sm text-muted-foreground">
// //                                                 Showing 5 of {stats.highRisk.toLocaleString()} high-risk parcels
// //                                             </div>
// //                                         )}
// //                                     </CardContent>
// //                                 </Card>
// //                             )}
// //                         </TabsContent>

// //                         <TabsContent value="parcels">
// //                             <Card>
// //                                 <CardHeader>
// //                                     <div className="flex items-center justify-between">
// //                                         <div>
// //                                             <CardTitle>Processed Parcels</CardTitle>
// //                                             <CardDescription>
// //                                                 Showing {startIndex + 1}-{Math.min(endIndex, filteredData.length)} of {filteredData.length} filtered parcels
// //                                             </CardDescription>
// //                                         </div>
// //                                         <div className="flex gap-2">
// //                                             <Button
// //                                                 variant={filter === "all" ? "default" : "outline"}
// //                                                 size="sm"
// //                                                 onClick={() => { setFilter("all"); setCurrentPage(1); }}
// //                                             >
// //                                                 All ({processedData.length.toLocaleString()})
// //                                             </Button>
// //                                             <Button
// //                                                 variant={filter === "high-risk" ? "default" : "outline"}
// //                                                 size="sm"
// //                                                 onClick={() => { setFilter("high-risk"); setCurrentPage(1); }}
// //                                             >
// //                                                 High Risk ({stats.highRisk.toLocaleString()})
// //                                             </Button>
// //                                             <Button
// //                                                 variant={filter === "split" ? "default" : "outline"}
// //                                                 size="sm"
// //                                                 onClick={() => { setFilter("split"); setCurrentPage(1); }}
// //                                             >
// //                                                 Split ({stats.splitShipments.toLocaleString()})
// //                                             </Button>
// //                                             <Button
// //                                                 variant={filter === "duty" ? "default" : "outline"}
// //                                                 size="sm"
// //                                                 onClick={() => { setFilter("duty"); setCurrentPage(1); }}
// //                                             >
// //                                                 Duty ({stats.dutyApplicable.toLocaleString()})
// //                                             </Button>
// //                                         </div>
// //                                     </div>
// //                                 </CardHeader>
// //                                 <CardContent>
// //                                     <Table>
// //                                         <TableHeader>
// //                                             <TableRow>
// //                                                 <TableHead>Order ID</TableHead>
// //                                                 <TableHead>Importer</TableHead>
// //                                                 <TableHead>Product</TableHead>
// //                                                 <TableHead>HS Code</TableHead>
// //                                                 <TableHead>Value (AED)</TableHead>
// //                                                 <TableHead>Duty</TableHead>
// //                                                 <TableHead>Risk</TableHead>
// //                                                 <TableHead>Lane</TableHead>
// //                                             </TableRow>
// //                                         </TableHeader>
// //                                         <TableBody>
// //                                             {paginatedData.map((parcel) => (
// //                                                 <TableRow key={parcel.order_id} className="hover:bg-muted/50">
// //                                                     <TableCell className="font-medium">{parcel.order_id}</TableCell>
// //                                                     <TableCell>
// //                                                         <div>
// //                                                             <div className="font-medium">{parcel.importer_name}</div>
// //                                                             {parcel.is_split_shipment && (
// //                                                                 <Badge variant="outline" className="mt-1 text-xs bg-amber-50">
// //                                                                     Split Shipment
// //                                                                 </Badge>
// //                                                             )}
// //                                                         </div>
// //                                                     </TableCell>
// //                                                     <TableCell className="max-w-[200px]">
// //                                                         <div className="font-medium truncate">{parcel.product_title}</div>
// //                                                         <div className="text-xs text-muted-foreground truncate">
// //                                                             {parcel.product_category}
// //                                                         </div>
// //                                                     </TableCell>
// //                                                     <TableCell>
// //                                                         <div>
// //                                                             <div className="font-mono font-medium">{parcel.predicted_hs_code}</div>
// //                                                             <div className="text-xs text-muted-foreground">
// //                                                                 {(parcel.hs_confidence_score * 100).toFixed(0)}% confidence
// //                                                             </div>
// //                                                         </div>
// //                                                     </TableCell>
// //                                                     <TableCell className="font-medium">
// //                                                         AED {parcel.item_price_aed.toFixed(2)}
// //                                                     </TableCell>
// //                                                     <TableCell>
// //                                                         {parcel.duty_applicable ? (
// //                                                             <div className="text-green-600 font-medium">
// //                                                                 AED {parcel.duty_payable_aed.toFixed(2)}
// //                                                             </div>
// //                                                         ) : (
// //                                                             <Badge variant="outline" className="text-xs">
// //                                                                 Exempt
// //                                                             </Badge>
// //                                                         )}
// //                                                     </TableCell>
// //                                                     <TableCell>{getRiskBadge(parcel.is_high_risk)}</TableCell>
// //                                                     <TableCell>
// //                                                         <Badge className={getLaneColor(parcel.assigned_risk_lane)}>
// //                                                             {parcel.assigned_risk_lane}
// //                                                         </Badge>
// //                                                     </TableCell>
// //                                                 </TableRow>
// //                                             ))}
// //                                         </TableBody>
// //                                     </Table>

// //                                     {/* Pagination */}
// //                                     {totalPages > 1 && (
// //                                         <div className="flex items-center justify-between mt-4">
// //                                             <div className="text-sm text-muted-foreground">
// //                                                 Page {currentPage} of {totalPages}
// //                                             </div>
// //                                             <div className="flex items-center gap-2">
// //                                                 <Button
// //                                                     variant="outline"
// //                                                     size="sm"
// //                                                     onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
// //                                                     disabled={currentPage === 1}
// //                                                 >
// //                                                     <ChevronLeft className="h-4 w-4" />
// //                                                     Previous
// //                                                 </Button>
// //                                                 <div className="flex items-center gap-1">
// //                                                     {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
// //                                                         let pageNum;
// //                                                         if (totalPages <= 5) {
// //                                                             pageNum = i + 1;
// //                                                         } else if (currentPage <= 3) {
// //                                                             pageNum = i + 1;
// //                                                         } else if (currentPage >= totalPages - 2) {
// //                                                             pageNum = totalPages - 4 + i;
// //                                                         } else {
// //                                                             pageNum = currentPage - 2 + i;
// //                                                         }

// //                                                         return (
// //                                                             <Button
// //                                                                 key={pageNum}
// //                                                                 variant={currentPage === pageNum ? "default" : "outline"}
// //                                                                 size="sm"
// //                                                                 onClick={() => setCurrentPage(pageNum)}
// //                                                             >
// //                                                                 {pageNum}
// //                                                             </Button>
// //                                                         );
// //                                                     })}
// //                                                 </div>
// //                                                 <Button
// //                                                     variant="outline"
// //                                                     size="sm"
// //                                                     onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
// //                                                     disabled={currentPage === totalPages}
// //                                                 >
// //                                                     Next
// //                                                     <ChevronRight className="h-4 w-4" />
// //                                                 </Button>
// //                                             </div>
// //                                         </div>
// //                                     )}
// //                                 </CardContent>
// //                             </Card>
// //                         </TabsContent>

// //                         <TabsContent value="analytics">
// //                             <ParcelCharts data={processedData} />
// //                         </TabsContent>
// //                     </Tabs>

// //                     {/* Upload New Data Button */}
// //                     <Card className="border-dashed border-2">
// //                         <CardContent className="p-6">
// //                             <div className="flex flex-col items-center justify-center text-center space-y-4">
// //                                 <UploadIcon className="h-10 w-10 text-primary" />
// //                                 <div>
// //                                     <h3 className="text-lg font-semibold">Process Another File</h3>
// //                                     <p className="text-sm text-muted-foreground">
// //                                         Upload a new CSV file to analyze more e-commerce data
// //                                     </p>
// //                                 </div>
// //                                 <div className="flex gap-4">
// //                                     <Button
// //                                         className="gap-2"
// //                                         onClick={handleUploadNewCSV}
// //                                     >
// //                                         <UploadIcon className="h-4 w-4" />
// //                                         Upload New CSV
// //                                     </Button>
// //                                     <Button variant="outline" onClick={exportToCSV}>
// //                                         <Download className="h-4 w-4 mr-2" />
// //                                         Download Results ({processedData.length.toLocaleString()} parcels)
// //                                     </Button>
// //                                 </div>
// //                             </div>
// //                         </CardContent>
// //                     </Card>
// //                 </>
// //             )}
// //         </div>
// //     );
// // };

// // export default ParcelIntelPage;


// import React, { useState, useEffect } from "react";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Progress } from "@/components/ui/progress";
// import {
//     Package,
//     AlertTriangle,
//     CheckCircle,
//     XCircle,
//     Filter,
//     Download,
//     Upload as UploadIcon,
//     BarChart3,
//     Shield,
//     DollarSign,
//     Search,
//     Loader2,
//     ChevronLeft,
//     ChevronRight,
//     Eye,
//     FileText,
//     AlertCircle,
//     CheckSquare,
//     XSquare,
//     MoreHorizontal
// } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { CSVUploader } from "@/components/CSVUploader";
// import { ParcelProcessor, type ProcessedParcel, type RawParcelData } from "@/utils/parcelProcessor";
// import { toast } from "sonner";
// import { ParcelCharts } from "@/components/ParcelCharts";
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogFooter,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
// } from "@/components/ui/dialog";
// import { Label } from "@/components/ui/label";
// import { useSharedData } from "@/contexts/SharedDataContext";

// const ParcelIntelPage = () => {
//     // GET DATA FROM SHARED CONTEXT
//     const {
//         processedData: sharedProcessedData,
//         setUploadedData: setSharedUploadedData,
//         setProcessedData: setSharedProcessedData,
//         clearData
//     } = useSharedData();

//     // LOCAL STATE
//     const [isProcessing, setIsProcessing] = useState(false);
//     const [showUploader, setShowUploader] = useState<boolean>(true);
//     const [filter, setFilter] = useState<string>("all");
//     const [search, setSearch] = useState<string>("");
//     const [currentPage, setCurrentPage] = useState(1);
//     const [currentOverviewPage, setCurrentOverviewPage] = useState(1); // Separate pagination for overview tab
//     const [selectedParcel, setSelectedParcel] = useState<ProcessedParcel | null>(null);
//     const [isDialogOpen, setIsDialogOpen] = useState(false);
//     const [viewMode, setViewMode] = useState<'review' | 'view'>('view'); // 'review' for actions, 'view' for readonly
//     const itemsPerPage = 10;
//     const overviewItemsPerPage = 5; // Show 5 items per page in overview

//     // Check if we have shared data on component mount
//     useEffect(() => {
//         if (sharedProcessedData.length > 0) {
//             setShowUploader(false);
//         } else {
//             setShowUploader(true);
//         }
//     }, [sharedProcessedData]);

//     // Use shared data as the source
//     const processedData = sharedProcessedData;

//     // Handle View Button Click (Readonly Mode)
//     const handleViewClick = (parcel: ProcessedParcel) => {
//         setSelectedParcel(parcel);
//         setViewMode('view');
//         setIsDialogOpen(true);
//     };

//     // Handle Review Button Click (Action Mode)
//     const handleReviewClick = (parcel: ProcessedParcel) => {
//         setSelectedParcel(parcel);
//         setViewMode('review');
//         setIsDialogOpen(true);
//     };

//     // Handle Action in Modal
//     const handleAction = (action: 'approve' | 'reject' | 'escalate') => {
//         if (!selectedParcel) return;

//         let message = '';
//         let toastType: 'success' | 'error' | 'warning' = 'success';

//         switch (action) {
//             case 'approve':
//                 message = `Parcel ${selectedParcel.order_id} approved for ${selectedParcel.clearance_recommendation}`;
//                 toast.success("Approved!", { description: message });
//                 break;
//             case 'reject':
//                 message = `Parcel ${selectedParcel.order_id} rejected - Requires further inspection`;
//                 toast.error("Rejected!", { description: message });
//                 break;
//             case 'escalate':
//                 message = `Parcel ${selectedParcel.order_id} escalated to supervisor`;
//                 toast.warning("Escalated!", { description: message });
//                 break;
//         }

//         setIsDialogOpen(false);
//         setSelectedParcel(null);
//     };

//     const handleDataProcessed = (rawData: RawParcelData[], filename: string) => {
//         console.log(`📥 Processing ${rawData.length} records from ${filename}`);
//         setIsProcessing(true);

//         // SAVE RAW DATA TO SHARED CONTEXT
//         setSharedUploadedData(rawData);

//         setTimeout(() => {
//             try {
//                 console.log("🔍 Analyzing data for all 4 logic gates...");

//                 // --- LEVEL 1: Split Shipment Detection ---
//                 console.log("🔄 Level 1: Detecting split shipments...");
//                 const splitGroups = new Map<string, string[]>();
//                 const dailyTotals = new Map<string, number>();

//                 // Group by importer and day (simplified)
//                 rawData.slice(0, 1000).forEach((item, index) => {
//                     const itemPriceINR = typeof item.item_price_inr === 'string'
//                         ? parseFloat(item.item_price_inr)
//                         : item.item_price_inr;
//                     const itemValueAED = itemPriceINR * 0.044;

//                     // Create a simple date key (using index to simulate different days)
//                     const day = Math.floor(index / 100) + 1; // Groups of 100 parcels per "day"
//                     const key = `${item.importer_name}_day${day}`;

//                     // Update daily total
//                     const currentTotal = dailyTotals.get(key) || 0;
//                     dailyTotals.set(key, currentTotal + itemValueAED);

//                     // Add to group
//                     if (!splitGroups.has(key)) {
//                         splitGroups.set(key, []);
//                     }
//                     splitGroups.get(key)!.push(item.order_id);
//                 });

//                 // Identify split shipments (daily total > 1000 AED)
//                 const splitShipmentOrders = new Set<string>();
//                 splitGroups.forEach((orderIds, key) => {
//                     const dailyTotal = dailyTotals.get(key) || 0;
//                     if (orderIds.length > 1 && dailyTotal > 1000) {
//                         orderIds.forEach(orderId => splitShipmentOrders.add(orderId));
//                     }
//                 });

//                 console.log(`✅ Level 1: Found ${splitShipmentOrders.size} split shipments`);

//                 // Process parcels
//                 const results = rawData.slice(0, 1000).map((item, index) => {
//                     const itemPriceINR = typeof item.item_price_inr === 'string'
//                         ? parseFloat(item.item_price_inr)
//                         : item.item_price_inr;
//                     const itemValueAED = parseFloat((itemPriceINR * 0.044).toFixed(2));

//                     // --- LEVEL 2: HS Code Classification ---
//                     const text = `${item.product_title || ''} ${item.description || ''}`.toLowerCase();
//                     let hsCode = '9999.99.99';
//                     let hsConfidence = 0.5;
//                     let hsChapter = '99';

//                     // Smart HS code detection
//                     if (text.includes('drone') || text.includes('uav') || text.includes('quadcopter')) {
//                         hsCode = '8806.21.00'; // Drones ≤250g
//                         hsConfidence = 0.95;
//                         hsChapter = '88';
//                     } else if (text.includes('phone') || text.includes('mobile') || text.includes('smartphone')) {
//                         hsCode = '8517.12.00'; // Mobile phones
//                         hsConfidence = 0.92;
//                         hsChapter = '85';
//                     } else if (text.includes('shirt') || text.includes('clothing') || text.includes('apparel')) {
//                         hsCode = '6203.42.00'; // Men's trousers
//                         hsConfidence = 0.88;
//                         hsChapter = '62';
//                     } else if (text.includes('book') || text.includes('publication')) {
//                         hsCode = '4901.99.00'; // Printed books
//                         hsConfidence = 0.96;
//                         hsChapter = '49';
//                     } else if (text.includes('car') || text.includes('automotive')) {
//                         hsCode = '8708.29.00'; // Car parts
//                         hsConfidence = 0.85;
//                         hsChapter = '87';
//                     } else if (text.includes('jewel') || text.includes('gold') || text.includes('silver')) {
//                         hsCode = '7113.19.00'; // Jewellery
//                         hsConfidence = 0.90;
//                         hsChapter = '71';
//                     } else if (text.includes('battery') || text.includes('lithium') || text.includes('power bank')) {
//                         hsCode = '8507.60.00'; // Lithium batteries
//                         hsConfidence = 0.94;
//                         hsChapter = '85';
//                     } else if (text.includes('weapon') || text.includes('gun') || text.includes('ammunition')) {
//                         hsCode = '9302.00.00'; // Revolvers and pistols
//                         hsConfidence = 0.97;
//                         hsChapter = '93';
//                     }

//                     // --- LEVEL 3: Duty Calculation ---
//                     const isSplit = splitShipmentOrders.has(item.order_id);
//                     const dailyTotal = dailyTotals.get(`${item.importer_name}_day${Math.floor(index / 100) + 1}`) || itemValueAED;
//                     const dutyApplicable = dailyTotal > 1000 || isSplit;
//                     const dutyRate = 5; // 5% standard rate
//                     const dutyPayable = dutyApplicable ? parseFloat((itemValueAED * dutyRate / 100).toFixed(2)) : 0;

//                     // --- LEVEL 4: Risk Protection ---
//                     const riskKeywords = [];
//                     const riskCategories = [];
//                     let isHighRisk = false;

//                     // Check for dangerous goods
//                     if (text.includes('drone') || text.includes('uav')) {
//                         riskKeywords.push('drone');
//                         riskCategories.push('DRONES');
//                         isHighRisk = true;
//                     }
//                     if (text.includes('weapon') || text.includes('gun') || text.includes('ammunition')) {
//                         riskKeywords.push('weapon');
//                         riskCategories.push('WEAPONS');
//                         isHighRisk = true;
//                     }
//                     if (text.includes('battery') || text.includes('lithium')) {
//                         riskKeywords.push('lithium');
//                         riskCategories.push('LITHIUM_BATTERIES');
//                         isHighRisk = true;
//                     }
//                     if (text.includes('gold') || text.includes('silver') || text.includes('platinum')) {
//                         riskKeywords.push('precious');
//                         riskCategories.push('PRECIOUS_METALS');
//                     }

//                     // --- Risk Lane Assignment ---
//                     let assignedLane: 'GREEN' | 'YELLOW' | 'RED' | 'BLACK' = 'GREEN';
//                     const laneReasons = [];

//                     if (riskCategories.includes('WEAPONS') || riskCategories.includes('DRONES') || riskCategories.includes('LITHIUM_BATTERIES')) {
//                         assignedLane = 'BLACK';
//                         laneReasons.push('High-security risk goods');
//                     } else if (isSplit) {
//                         assignedLane = 'RED';
//                         laneReasons.push('Split shipment detected');
//                     } else if (dutyApplicable) {
//                         assignedLane = 'YELLOW';
//                         laneReasons.push('Duty applicable');
//                     } else {
//                         assignedLane = 'GREEN';
//                         laneReasons.push('Low risk, compliant');
//                     }

//                     // Clearance recommendation
//                     const clearanceRecommendation =
//                         assignedLane === 'GREEN' ? 'AUTO_CLEAR' :
//                             assignedLane === 'YELLOW' ? 'DOC_REVIEW' :
//                                 assignedLane === 'RED' ? 'INSPECTION' : 'HOLD';

//                     const result: ProcessedParcel = {
//                         order_id: item.order_id,
//                         timestamp: item.timestamp,
//                         importer_name: item.importer_name,
//                         delivery_address: item.delivery_address,
//                         product_title: item.product_title || 'Unknown Product',
//                         description: item.description || '',
//                         product_category: item.product_category || 'Uncategorized',
//                         item_price_inr: itemPriceINR,
//                         item_price_aed: itemValueAED,
//                         image_url: item.image_url,
//                         same_day_importer_key: `${item.importer_name}_day${Math.floor(index / 100) + 1}`,
//                         daily_total_aed: dailyTotal,
//                         is_split_shipment: isSplit,
//                         split_group_id: isSplit ? `SPLIT-${item.importer_name.substring(0, 3).toUpperCase()}-${Math.floor(index / 100) + 1}` : undefined,
//                         predicted_hs_code: hsCode,
//                         hs_confidence_score: hsConfidence,
//                         hs_chapter: hsChapter,
//                         de_minimis_threshold: 1000,
//                         duty_applicable: dutyApplicable,
//                         duty_rate: dutyRate,
//                         duty_payable_aed: dutyPayable,
//                         tariff_reference: 'STANDARD_5',
//                         risk_keywords_found: riskKeywords,
//                         risk_categories: riskCategories,
//                         is_high_risk: isHighRisk,
//                         risk_reason_codes: riskCategories.map(cat => `${cat}_DETECTED`),
//                         assigned_risk_lane: assignedLane,
//                         lane_reasons: laneReasons,
//                         processing_timestamp: new Date().toISOString(),
//                         clearance_recommendation: clearanceRecommendation
//                     };

//                     return result;
//                 });

//                 // SAVE PROCESSED DATA TO SHARED CONTEXT
//                 setSharedProcessedData(results);
//                 setShowUploader(false);
//                 setCurrentPage(1);
//                 setCurrentOverviewPage(1);

//                 toast.success("Processing Complete!", {
//                     description: `Analyzed ${results.length} parcels through all 4 logic gates`,
//                     duration: 5000,
//                 });

//                 // Calculate and log summary
//                 const splitCount = results.filter(r => r.is_split_shipment).length;
//                 const highRiskCount = results.filter(r => r.is_high_risk).length;
//                 const dutyTotal = results.reduce((sum, r) => sum + r.duty_payable_aed, 0);
//                 const avgConfidence = results.reduce((sum, r) => sum + r.hs_confidence_score, 0) / results.length;

//                 console.log(`🎉 PROCESSING COMPLETE!`);
//                 console.log(`📊 Summary:`);
//                 console.log(`   • Total parcels: ${results.length}`);
//                 console.log(`   • Split shipments: ${splitCount}`);
//                 console.log(`   • High-risk items: ${highRiskCount}`);
//                 console.log(`   • Total duty: AED ${dutyTotal.toFixed(2)}`);
//                 console.log(`   • HS confidence: ${(avgConfidence * 100).toFixed(1)}%`);
//                 console.log(`   • Risk lanes: GREEN(${results.filter(r => r.assigned_risk_lane === 'GREEN').length}) | YELLOW(${results.filter(r => r.assigned_risk_lane === 'YELLOW').length}) | RED(${results.filter(r => r.assigned_risk_lane === 'RED').length}) | BLACK(${results.filter(r => r.assigned_risk_lane === 'BLACK').length})`);

//             } catch (error) {
//                 console.error("Error processing data:", error);
//             } finally {
//                 setIsProcessing(false);
//             }
//         }, 1500);
//     };

//     // UPLOAD NEW CSV
//     const handleUploadNewCSV = () => {
//         setShowUploader(true);
//         setFilter("all");
//         setSearch("");
//         setCurrentPage(1);
//         setCurrentOverviewPage(1);
//         clearData();
//     };

//     // EXPORT TO CSV
//     const exportToCSV = () => {
//         if (processedData.length === 0) {
//             alert("No data to export. Please upload and process a CSV file first.");
//             return;
//         }

//         const headers = [
//             'order_id',
//             'importer_name',
//             'timestamp',
//             'product_title',
//             'item_price_inr',
//             'item_price_aed',
//             'predicted_hs_code',
//             'hs_confidence_score',
//             'is_split_shipment',
//             'daily_total_aed',
//             'duty_applicable',
//             'duty_rate',
//             'duty_payable_aed',
//             'is_high_risk',
//             'risk_categories',
//             'assigned_risk_lane',
//             'clearance_recommendation'
//         ];

//         const csvContent = [
//             headers.join(','),
//             ...processedData.map(p => [
//                 p.order_id,
//                 `"${p.importer_name}"`,
//                 p.timestamp,
//                 `"${p.product_title}"`,
//                 p.item_price_inr,
//                 p.item_price_aed.toFixed(2),
//                 p.predicted_hs_code,
//                 (p.hs_confidence_score * 100).toFixed(1) + '%',
//                 p.is_split_shipment ? 'YES' : 'NO',
//                 p.daily_total_aed.toFixed(2),
//                 p.duty_applicable ? 'YES' : 'NO',
//                 p.duty_rate + '%',
//                 p.duty_payable_aed.toFixed(2),
//                 p.is_high_risk ? 'HIGH' : 'LOW',
//                 `"${p.risk_categories.join(';')}"`,
//                 p.assigned_risk_lane,
//                 p.clearance_recommendation
//             ].join(','))
//         ].join('\n');

//         const blob = new Blob([csvContent], { type: 'text/csv' });
//         const url = window.URL.createObjectURL(blob);
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = `parcel_intel_results_${new Date().toISOString().split('T')[0]}.csv`;
//         document.body.appendChild(a);
//         a.click();
//         document.body.removeChild(a);
//         window.URL.revokeObjectURL(url);
//     };

//     // FILTER AND SEARCH
//     const filteredData = processedData.filter(parcel => {
//         if (filter === "all") return true;
//         if (filter === "high-risk") return parcel.is_high_risk;
//         if (filter === "split") return parcel.is_split_shipment;
//         if (filter === "duty") return parcel.duty_applicable;
//         return parcel.assigned_risk_lane === filter;
//     }).filter(parcel =>
//         parcel.order_id.toLowerCase().includes(search.toLowerCase()) ||
//         parcel.importer_name.toLowerCase().includes(search.toLowerCase()) ||
//         parcel.product_title.toLowerCase().includes(search.toLowerCase())
//     );

//     // Get high-risk parcels for overview tab
//     const highRiskParcels = processedData.filter(p => p.is_high_risk);
//     const overviewTotalPages = Math.ceil(highRiskParcels.length / overviewItemsPerPage);
//     const overviewStartIndex = (currentOverviewPage - 1) * overviewItemsPerPage;
//     const overviewEndIndex = overviewStartIndex + overviewItemsPerPage;
//     const paginatedHighRiskParcels = highRiskParcels.slice(overviewStartIndex, overviewEndIndex);

//     // PAGINATION for main parcels tab
//     const totalPages = Math.ceil(filteredData.length / itemsPerPage);
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const paginatedData = filteredData.slice(startIndex, endIndex);

//     // STATS
//     const stats = {
//         total: processedData.length,
//         highRisk: processedData.filter(p => p.is_high_risk).length,
//         splitShipments: processedData.filter(p => p.is_split_shipment).length,
//         dutyApplicable: processedData.filter(p => p.duty_applicable).length,
//         greenLane: processedData.filter(p => p.assigned_risk_lane === "GREEN").length,
//         yellowLane: processedData.filter(p => p.assigned_risk_lane === "YELLOW").length,
//         redLane: processedData.filter(p => p.assigned_risk_lane === "RED").length,
//         blackLane: processedData.filter(p => p.assigned_risk_lane === "BLACK").length,
//         totalDuty: processedData.reduce((sum, p) => sum + p.duty_payable_aed, 0),
//         avgConfidence: processedData.length > 0
//             ? Math.round(processedData.reduce((sum, p) => sum + p.hs_confidence_score, 0) / processedData.length * 100)
//             : 0
//     };

//     // HELPER FUNCTIONS
//     const getLaneColor = (lane: string) => {
//         switch (lane) {
//             case "GREEN": return "bg-green-100 text-green-800 border-green-300";
//             case "YELLOW": return "bg-yellow-100 text-yellow-800 border-yellow-300";
//             case "RED": return "bg-red-100 text-red-800 border-red-300";
//             case "BLACK": return "bg-gray-800 text-white border-gray-700";
//             default: return "bg-gray-100 text-gray-800 border-gray-300";
//         }
//     };

//     const getRiskBadge = (isHighRisk: boolean) => {
//         return isHighRisk ? (
//             <Badge variant="destructive" className="flex items-center gap-1">
//                 <AlertTriangle className="h-3 w-3" /> High Risk
//             </Badge>
//         ) : (
//             <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
//                 <CheckCircle className="h-3 w-3 mr-1" /> Low Risk
//             </Badge>
//         );
//     };

//     // Create loading skeleton component
//     const LoadingSkeleton = () => (
//         <div className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                 {[...Array(4)].map((_, i) => (
//                     <Card key={i}>
//                         <CardContent className="p-6">
//                             <div className="h-8 bg-gray-200 rounded animate-pulse mb-2"></div>
//                             <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
//                         </CardContent>
//                     </Card>
//                 ))}
//             </div>
//             <Card>
//                 <CardContent className="p-6">
//                     <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
//                 </CardContent>
//             </Card>
//         </div>
//     );

//     // Improved Pagination Component for main tab
//     const PaginationDisplay = () => {
//         const startItem = startIndex + 1;
//         const endItem = Math.min(endIndex, filteredData.length);
//         const totalItems = filteredData.length;

//         return (
//             <div className="flex items-center justify-between mt-4">
//                 <div className="text-sm text-muted-foreground">
//                     Showing <span className="font-medium">{startItem}-{endItem}</span> of <span className="font-medium">{totalItems}</span> parcels
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <Button
//                         variant="outline"
//                         size="sm"
//                         onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//                         disabled={currentPage === 1}
//                     >
//                         <ChevronLeft className="h-4 w-4" />
//                         Previous
//                     </Button>
//                     <div className="flex items-center gap-1">
//                         {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
//                             let pageNum;
//                             if (totalPages <= 5) {
//                                 pageNum = i + 1;
//                             } else if (currentPage <= 3) {
//                                 pageNum = i + 1;
//                             } else if (currentPage >= totalPages - 2) {
//                                 pageNum = totalPages - 4 + i;
//                             } else {
//                                 pageNum = currentPage - 2 + i;
//                             }

//                             return (
//                                 <Button
//                                     key={pageNum}
//                                     variant={currentPage === pageNum ? "default" : "outline"}
//                                     size="sm"
//                                     className="w-8 h-8 p-0"
//                                     onClick={() => setCurrentPage(pageNum)}
//                                 >
//                                     {pageNum}
//                                 </Button>
//                             );
//                         })}
//                         {totalPages > 5 && currentPage < totalPages - 2 && (
//                             <>
//                                 <span className="text-sm text-muted-foreground px-2">...</span>
//                                 <Button
//                                     variant="outline"
//                                     size="sm"
//                                     className="w-8 h-8 p-0"
//                                     onClick={() => setCurrentPage(totalPages)}
//                                 >
//                                     {totalPages}
//                                 </Button>
//                             </>
//                         )}
//                     </div>
//                     <Button
//                         variant="outline"
//                         size="sm"
//                         onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//                         disabled={currentPage === totalPages}
//                     >
//                         Next
//                         <ChevronRight className="h-4 w-4" />
//                     </Button>
//                 </div>
//             </div>
//         );
//     };

//     // Pagination Component for Overview tab
//     const OverviewPaginationDisplay = () => {
//         const startItem = overviewStartIndex + 1;
//         const endItem = Math.min(overviewEndIndex, highRiskParcels.length);
//         const totalItems = highRiskParcels.length;

//         return (
//             <div className="flex items-center justify-between mt-4 pt-4 border-t">
//                 <div className="text-sm text-muted-foreground">
//                     Showing <span className="font-medium">{startItem}-{endItem}</span> of <span className="font-medium">{totalItems}</span> high-risk parcels
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <Button
//                         variant="outline"
//                         size="sm"
//                         onClick={() => setCurrentOverviewPage(prev => Math.max(prev - 1, 1))}
//                         disabled={currentOverviewPage === 1}
//                     >
//                         <ChevronLeft className="h-4 w-4" />
//                         Previous
//                     </Button>
//                     <div className="flex items-center gap-1">
//                         {Array.from({ length: Math.min(5, overviewTotalPages) }, (_, i) => {
//                             let pageNum;
//                             if (overviewTotalPages <= 5) {
//                                 pageNum = i + 1;
//                             } else if (currentOverviewPage <= 3) {
//                                 pageNum = i + 1;
//                             } else if (currentOverviewPage >= overviewTotalPages - 2) {
//                                 pageNum = overviewTotalPages - 4 + i;
//                             } else {
//                                 pageNum = currentOverviewPage - 2 + i;
//                             }

//                             return (
//                                 <Button
//                                     key={pageNum}
//                                     variant={currentOverviewPage === pageNum ? "default" : "outline"}
//                                     size="sm"
//                                     className="w-8 h-8 p-0"
//                                     onClick={() => setCurrentOverviewPage(pageNum)}
//                                 >
//                                     {pageNum}
//                                 </Button>
//                             );
//                         })}
//                         {overviewTotalPages > 5 && currentOverviewPage < overviewTotalPages - 2 && (
//                             <>
//                                 <span className="text-sm text-muted-foreground px-2">...</span>
//                                 <Button
//                                     variant="outline"
//                                     size="sm"
//                                     className="w-8 h-8 p-0"
//                                     onClick={() => setCurrentOverviewPage(overviewTotalPages)}
//                                 >
//                                     {overviewTotalPages}
//                                 </Button>
//                             </>
//                         )}
//                     </div>
//                     <Button
//                         variant="outline"
//                         size="sm"
//                         onClick={() => setCurrentOverviewPage(prev => Math.min(prev + 1, overviewTotalPages))}
//                         disabled={currentOverviewPage === overviewTotalPages}
//                     >
//                         Next
//                         <ChevronRight className="h-4 w-4" />
//                     </Button>
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className="p-6 space-y-6 overflow-y-auto h-full">
//             {isProcessing && <LoadingSkeleton />}

//             {/* Header */}
//             <div>
//                 <div className="flex items-center gap-3 mb-2">
//                     <Package className="h-8 w-8 text-primary" />
//                     <h1 className="text-3xl font-bold tracking-tight">PARCEL-INTEL</h1>
//                 </div>
//                 <p className="text-muted-foreground">
//                     E-commerce parcel intelligence engine for split shipment detection, HS classification, duty calculation, and risk assessment
//                 </p>
//             </div>

//             {/* Controls */}
//             <Card>
//                 <CardContent className="p-4">
//                     <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//                         <div className="flex-1 w-full md:w-auto">
//                             <div className="relative">
//                                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                                 <Input
//                                     placeholder="Search parcels by ID, importer, or product..."
//                                     className="pl-10"
//                                     value={search}
//                                     onChange={(e) => setSearch(e.target.value)}
//                                     disabled={isProcessing || processedData.length === 0}
//                                 />
//                             </div>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <Button
//                                 variant="outline"
//                                 size="sm"
//                                 className="gap-2"
//                                 onClick={handleUploadNewCSV}
//                                 disabled={isProcessing}
//                             >
//                                 <UploadIcon className="h-4 w-4" />
//                                 {processedData.length > 0 ? 'Upload New' : 'Upload CSV'}
//                             </Button>

//                             {processedData.length > 0 && (
//                                 <Button
//                                     variant="outline"
//                                     size="sm"
//                                     className="gap-2"
//                                     onClick={exportToCSV}
//                                     disabled={isProcessing}
//                                 >
//                                     <Download className="h-4 w-4" />
//                                     Export Results
//                                 </Button>
//                             )}

//                             {isProcessing && (
//                                 <Button size="sm" className="gap-2" disabled>
//                                     <Loader2 className="h-4 w-4 animate-spin" />
//                                     Processing...
//                                 </Button>
//                             )}
//                         </div>
//                     </div>
//                 </CardContent>
//             </Card>

//             {/* Main Content */}
//             {showUploader || processedData.length === 0 ? (
//                 // SHOW CSV UPLOADER
//                 <div className="space-y-6">
//                     <Card>
//                         <CardContent className="p-6">
//                             <div className="mb-6">
//                                 <h2 className="text-xl font-bold mb-4">Core Intelligence Controls</h2>
//                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                                     <Card className="border-l-4 border-l-amber-500">
//                                         <CardContent className="p-4">
//                                             <div className="font-medium text-amber-600 mb-1">Split Shipment Detection</div>
//                                             <div className="text-sm text-muted-foreground mt-1">
//                                                 Same importer + same day + aggregated value &gt; AED 1,000
//                                             </div>
//                                         </CardContent>
//                                     </Card>

//                                     <Card className="border-l-4 border-l-blue-500">
//                                         <CardContent className="p-4">
//                                             <div className="font-medium text-blue-600 mb-1">HS Code Classification</div>
//                                             <div className="text-sm text-muted-foreground mt-1">
//                                                 Predict 6-digit HS codes from shipment descriptions for accurate classification
//                                             </div>
//                                         </CardContent>
//                                     </Card>

//                                     <Card className="border-l-4 border-l-green-500">
//                                         <CardContent className="p-4">
//                                             <div className="font-medium text-green-600 mb-1">Duty & Tax Calculation</div>
//                                             <div className="text-sm text-muted-foreground mt-1">
//                                                 Compute duties and taxes including AED conversion, de-minimis rules, and standard rates
//                                             </div>
//                                         </CardContent>
//                                     </Card>

//                                     <Card className="border-l-4 border-l-red-500">
//                                         <CardContent className="p-4">
//                                             <div className="font-medium text-red-600 mb-1">Societal Risk Protection</div>
//                                             <div className="text-sm text-muted-foreground mt-1">
//                                                 Detect prohibited items such as weapons, drones, and lithium batteries
//                                             </div>
//                                         </CardContent>
//                                     </Card>
//                                 </div>
//                             </div>
//                             <CSVUploader onDataProcessed={handleDataProcessed} />
//                         </CardContent>
//                     </Card>
//                 </div>
//             ) : (
//                 // SHOW RESULTS WHEN DATA IS PROCESSED
//                 <>
//                     {/* KPI Cards */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                         <Card>
//                             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                                 <CardTitle className="text-sm font-medium">Total Parcels</CardTitle>
//                                 <Package className="h-4 w-4 text-muted-foreground" />
//                             </CardHeader>
//                             <CardContent>
//                                 <div className="text-2xl font-bold">{stats.total.toLocaleString()}</div>
//                                 <div className="flex items-center gap-2 mt-2">
//                                     <div className="h-2 flex w-full rounded-full overflow-hidden bg-gray-200">
//                                         <div className="bg-green-500" style={{ width: `${(stats.greenLane / stats.total) * 100}%` }} />
//                                         <div className="bg-yellow-500" style={{ width: `${(stats.yellowLane / stats.total) * 100}%` }} />
//                                         <div className="bg-red-500" style={{ width: `${(stats.redLane / stats.total) * 100}%` }} />
//                                         <div className="bg-gray-800" style={{ width: `${(stats.blackLane / stats.total) * 100}%` }} />
//                                     </div>
//                                     <span className="text-xs text-muted-foreground">Lane mix</span>
//                                 </div>
//                             </CardContent>
//                         </Card>

//                         <Card>
//                             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                                 <CardTitle className="text-sm font-medium">Split Shipments</CardTitle>
//                                 <AlertTriangle className="h-4 w-4 text-amber-500" />
//                             </CardHeader>
//                             <CardContent>
//                                 <div className="text-2xl font-bold">{stats.splitShipments.toLocaleString()}</div>
//                                 <p className="text-xs text-muted-foreground">
//                                     Potential revenue evasion detected
//                                 </p>
//                             </CardContent>
//                         </Card>

//                         <Card>
//                             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                                 <CardTitle className="text-sm font-medium">High Risk Items</CardTitle>
//                                 <Shield className="h-4 w-4 text-red-500" />
//                             </CardHeader>
//                             <CardContent>
//                                 <div className="text-2xl font-bold">{stats.highRisk.toLocaleString()}</div>
//                                 <p className="text-xs text-muted-foreground">
//                                     {stats.blackLane} in BLACK lane
//                                 </p>
//                             </CardContent>
//                         </Card>

//                         <Card>
//                             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                                 <CardTitle className="text-sm font-medium">Duty Payable</CardTitle>
//                                 <DollarSign className="h-4 w-4 text-green-500" />
//                             </CardHeader>
//                             <CardContent>
//                                 <div className="text-2xl font-bold">AED {stats.totalDuty.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
//                                 <p className="text-xs text-muted-foreground">
//                                     From {stats.dutyApplicable.toLocaleString()} parcels
//                                 </p>
//                             </CardContent>
//                         </Card>
//                     </div>

//                     {/* Main Results Tabs */}
//                     <Tabs defaultValue="overview" className="space-y-6">
//                         <TabsList>
//                             <TabsTrigger value="overview">Overview</TabsTrigger>
//                             <TabsTrigger value="parcels">Processed Parcels</TabsTrigger>
//                             <TabsTrigger value="analytics">Analytics</TabsTrigger>
//                         </TabsList>

//                         <TabsContent value="overview" className="space-y-6">
//                             {/* Risk Lane Distribution */}
//                             <Card>
//                                 <CardHeader>
//                                     <CardTitle>Risk Lane Distribution</CardTitle>
//                                     <CardDescription>How parcels are routed based on risk assessment</CardDescription>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//                                         {[
//                                             { lane: "GREEN", count: stats.greenLane, description: "Auto-clear, no intervention", color: "bg-green-500" },
//                                             { lane: "YELLOW", count: stats.yellowLane, description: "Document review required", color: "bg-yellow-500" },
//                                             { lane: "RED", count: stats.redLane, description: "Physical inspection", color: "bg-red-500" },
//                                             { lane: "BLACK", count: stats.blackLane, description: "Intelligence/security hold", color: "bg-gray-800" }
//                                         ].map((item) => (
//                                             <Card key={item.lane} className={`border-l-4 ${item.lane === "GREEN" ? "border-l-green-500" : item.lane === "YELLOW" ? "border-l-yellow-500" : item.lane === "RED" ? "border-l-red-500" : "border-l-gray-800"}`}>
//                                                 <CardContent className="p-6">
//                                                     <div className="flex items-center justify-between mb-2">
//                                                         <h3 className="font-bold text-xl">{item.lane}</h3>
//                                                         <Badge className={getLaneColor(item.lane)}>{item.count.toLocaleString()}</Badge>
//                                                     </div>
//                                                     <p className="text-sm text-muted-foreground">{item.description}</p>
//                                                     <Progress
//                                                         value={stats.total > 0 ? (item.count / stats.total) * 100 : 0}
//                                                         className="mt-4 h-2"
//                                                         indicatorClassName={item.color}
//                                                     />
//                                                 </CardContent>
//                                             </Card>
//                                         ))}
//                                     </div>
//                                 </CardContent>
//                             </Card>

//                             {/* Recent High-Risk Items - NOW WITH PAGINATION */}
//                             {stats.highRisk > 0 && (
//                                 <Card>
//                                     <CardHeader>
//                                         <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
//                                             <div>
//                                                 <CardTitle>High-Risk Parcels Requiring Attention</CardTitle>
//                                                 <CardDescription>Items flagged for security, safety, or compliance risks</CardDescription>
//                                             </div>
//                                             <div className="text-sm text-muted-foreground">
//                                                 Total: {stats.highRisk.toLocaleString()} parcels
//                                             </div>
//                                         </div>
//                                     </CardHeader>
//                                     <CardContent>
//                                         <Table>
//                                             <TableHeader>
//                                                 <TableRow>
//                                                     <TableHead>Order ID</TableHead>
//                                                     <TableHead>Importer</TableHead>
//                                                     <TableHead>Product</TableHead>
//                                                     <TableHead>Risk Category</TableHead>
//                                                     <TableHead>Duty Payable</TableHead>
//                                                     <TableHead>Risk Lane</TableHead>
//                                                     <TableHead>Actions</TableHead>
//                                                 </TableRow>
//                                             </TableHeader>
//                                             <TableBody>
//                                                 {paginatedHighRiskParcels.map((parcel) => (
//                                                     <TableRow key={parcel.order_id}>
//                                                         <TableCell className="font-medium">{parcel.order_id}</TableCell>
//                                                         <TableCell>{parcel.importer_name}</TableCell>
//                                                         <TableCell className="max-w-[200px] truncate">{parcel.product_title}</TableCell>
//                                                         <TableCell>
//                                                             <div className="flex flex-wrap gap-1">
//                                                                 {parcel.risk_categories.map((cat, idx) => (
//                                                                     <Badge key={idx} variant="outline" className="text-xs">
//                                                                         {cat}
//                                                                     </Badge>
//                                                                 ))}
//                                                             </div>
//                                                         </TableCell>
//                                                         <TableCell>AED {parcel.duty_payable_aed.toFixed(2)}</TableCell>
//                                                         <TableCell>
//                                                             <Badge className={getLaneColor(parcel.assigned_risk_lane)}>
//                                                                 {parcel.assigned_risk_lane}
//                                                             </Badge>
//                                                         </TableCell>
//                                                         <TableCell>
//                                                             <div className="flex gap-2">
//                                                                 <Button
//                                                                     size="sm"
//                                                                     variant="outline"
//                                                                     onClick={() => handleViewClick(parcel)}
//                                                                     className="h-8 w-8 p-0"
//                                                                     title="View Details"
//                                                                 >
//                                                                     <Eye className="h-4 w-4" />
//                                                                 </Button>
//                                                                 <Button
//                                                                     size="sm"
//                                                                     variant="outline"
//                                                                     onClick={() => handleReviewClick(parcel)}
//                                                                     className="gap-2"
//                                                                 >
//                                                                     <Eye className="h-4 w-4" />
//                                                                     Review
//                                                                 </Button>
//                                                             </div>
//                                                         </TableCell>
//                                                     </TableRow>
//                                                 ))}
//                                             </TableBody>
//                                         </Table>
                                        
//                                         {/* Pagination for Overview tab */}
//                                         {overviewTotalPages > 1 && <OverviewPaginationDisplay />}
//                                     </CardContent>
//                                 </Card>
//                             )}
//                         </TabsContent>

//                         <TabsContent value="parcels">
//                             <Card>
//                                 <CardHeader>
//                                     <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
//                                         <div>
//                                             <CardTitle>Processed Parcels</CardTitle>
//                                             <CardDescription>
//                                                 Detailed view of all processed parcels with complete information
//                                             </CardDescription>
//                                         </div>
//                                         <div className="flex flex-wrap gap-2">
//                                             <Button
//                                                 variant={filter === "all" ? "default" : "outline"}
//                                                 size="sm"
//                                                 onClick={() => { setFilter("all"); setCurrentPage(1); }}
//                                             >
//                                                 All ({processedData.length.toLocaleString()})
//                                             </Button>
//                                             <Button
//                                                 variant={filter === "high-risk" ? "default" : "outline"}
//                                                 size="sm"
//                                                 onClick={() => { setFilter("high-risk"); setCurrentPage(1); }}
//                                             >
//                                                 High Risk ({stats.highRisk.toLocaleString()})
//                                             </Button>
//                                             <Button
//                                                 variant={filter === "split" ? "default" : "outline"}
//                                                 size="sm"
//                                                 onClick={() => { setFilter("split"); setCurrentPage(1); }}
//                                             >
//                                                 Split ({stats.splitShipments.toLocaleString()})
//                                             </Button>
//                                             <Button
//                                                 variant={filter === "duty" ? "default" : "outline"}
//                                                 size="sm"
//                                                 onClick={() => { setFilter("duty"); setCurrentPage(1); }}
//                                             >
//                                                 Duty ({stats.dutyApplicable.toLocaleString()})
//                                             </Button>
//                                         </div>
//                                     </div>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <Table>
//                                         <TableHeader>
//                                             <TableRow>
//                                                 <TableHead>Order ID</TableHead>
//                                                 <TableHead>Importer</TableHead>
//                                                 <TableHead>Product</TableHead>
//                                                 <TableHead>HS Code</TableHead>
//                                                 <TableHead>Value (AED)</TableHead>
//                                                 <TableHead>Duty</TableHead>
//                                                 <TableHead>Risk</TableHead>
//                                                 <TableHead>Lane</TableHead>
//                                                 <TableHead className="text-right">View</TableHead>
//                                             </TableRow>
//                                         </TableHeader>
//                                         <TableBody>
//                                             {paginatedData.map((parcel) => (
//                                                 <TableRow key={parcel.order_id} className="hover:bg-muted/50">
//                                                     <TableCell className="font-medium">{parcel.order_id}</TableCell>
//                                                     <TableCell>
//                                                         <div>
//                                                             <div className="font-medium">{parcel.importer_name}</div>
//                                                             {parcel.is_split_shipment && (
//                                                                 <Badge variant="outline" className="mt-1 text-xs bg-amber-50">
//                                                                     Split Shipment
//                                                                 </Badge>
//                                                             )}
//                                                         </div>
//                                                     </TableCell>
//                                                     <TableCell className="max-w-[200px]">
//                                                         <div className="font-medium truncate">{parcel.product_title}</div>
//                                                         <div className="text-xs text-muted-foreground truncate">
//                                                             {parcel.product_category}
//                                                         </div>
//                                                     </TableCell>
//                                                     <TableCell>
//                                                         <div>
//                                                             <div className="font-mono font-medium">{parcel.predicted_hs_code}</div>
//                                                             <div className="text-xs text-muted-foreground">
//                                                                 {(parcel.hs_confidence_score * 100).toFixed(0)}% confidence
//                                                             </div>
//                                                         </div>
//                                                     </TableCell>
//                                                     <TableCell className="font-medium">
//                                                         AED {parcel.item_price_aed.toFixed(2)}
//                                                     </TableCell>
//                                                     <TableCell>
//                                                         {parcel.duty_applicable ? (
//                                                             <div className="text-green-600 font-medium">
//                                                                 AED {parcel.duty_payable_aed.toFixed(2)}
//                                                             </div>
//                                                         ) : (
//                                                             <Badge variant="outline" className="text-xs">
//                                                                 Exempt
//                                                             </Badge>
//                                                         )}
//                                                     </TableCell>
//                                                     <TableCell>{getRiskBadge(parcel.is_high_risk)}</TableCell>
//                                                     <TableCell>
//                                                         <Badge className={getLaneColor(parcel.assigned_risk_lane)}>
//                                                             {parcel.assigned_risk_lane}
//                                                         </Badge>
//                                                     </TableCell>
//                                                     <TableCell className="text-right">
//                                                         <Button
//                                                             size="sm"
//                                                             variant="ghost"
//                                                             onClick={() => handleViewClick(parcel)}
//                                                             className="h-8 w-8 p-0"
//                                                             title="View Complete Information"
//                                                         >
//                                                             <Eye className="h-4 w-4" />
//                                                         </Button>
//                                                     </TableCell>
//                                                 </TableRow>
//                                             ))}
//                                         </TableBody>
//                                     </Table>

//                                     {/* Improved Pagination */}
//                                     {totalPages > 1 && <PaginationDisplay />}
//                                 </CardContent>
//                             </Card>
//                         </TabsContent>

//                         <TabsContent value="analytics">
//                             <ParcelCharts data={processedData} />
//                         </TabsContent>
//                     </Tabs>

//                     {/* Parcel Details Modal - Works for both view and review modes */}
//                     {selectedParcel && (
//                         <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//                             <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
//                                 <DialogHeader>
//                                     <DialogTitle>
//                                         {viewMode === 'review' ? 'Parcel Review' : 'Parcel Details'}
//                                     </DialogTitle>
//                                     <DialogDescription>
//                                         {viewMode === 'review' 
//                                             ? `Detailed analysis of parcel ${selectedParcel.order_id} - Take action below`
//                                             : `Complete information for parcel ${selectedParcel.order_id}`
//                                         }
//                                     </DialogDescription>
//                                 </DialogHeader>

//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
//                                     <div className="space-y-2">
//                                         <Label className="font-semibold">Order ID</Label>
//                                         <div className="text-sm font-mono bg-gray-50 p-2 rounded">{selectedParcel.order_id}</div>
//                                     </div>
//                                     <div className="space-y-2">
//                                         <Label className="font-semibold">Importer</Label>
//                                         <div className="text-sm">{selectedParcel.importer_name}</div>
//                                     </div>
//                                     <div className="space-y-2">
//                                         <Label className="font-semibold">Product Title</Label>
//                                         <div className="text-sm">{selectedParcel.product_title}</div>
//                                     </div>
//                                     <div className="space-y-2">
//                                         <Label className="font-semibold">Category</Label>
//                                         <div className="text-sm">{selectedParcel.product_category}</div>
//                                     </div>
//                                     <div className="space-y-2">
//                                         <Label className="font-semibold">Description</Label>
//                                         <div className="text-sm text-muted-foreground">{selectedParcel.description || 'No description available'}</div>
//                                     </div>
//                                     <div className="space-y-2">
//                                         <Label className="font-semibold">Delivery Address</Label>
//                                         <div className="text-sm">{selectedParcel.delivery_address}</div>
//                                     </div>
//                                     <div className="space-y-2">
//                                         <Label className="font-semibold">Item Value (INR)</Label>
//                                         <div className="text-sm">₹ {selectedParcel.item_price_inr.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
//                                     </div>
//                                     <div className="space-y-2">
//                                         <Label className="font-semibold">Item Value (AED)</Label>
//                                         <div className="text-sm font-medium">AED {selectedParcel.item_price_aed.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
//                                     </div>
//                                     <div className="space-y-2">
//                                         <Label className="font-semibold">HS Code</Label>
//                                         <div className="text-sm font-mono bg-blue-50 p-2 rounded">{selectedParcel.predicted_hs_code}</div>
//                                     </div>
//                                     <div className="space-y-2">
//                                         <Label className="font-semibold">HS Confidence</Label>
//                                         <div className="flex items-center gap-2">
//                                             <div className="text-sm font-medium">{(selectedParcel.hs_confidence_score * 100).toFixed(1)}%</div>
//                                             <Progress value={selectedParcel.hs_confidence_score * 100} className="h-2 w-20" />
//                                         </div>
//                                     </div>
//                                     <div className="space-y-2">
//                                         <Label className="font-semibold">Duty Applicable</Label>
//                                         <div className="text-sm">
//                                             {selectedParcel.duty_applicable ? (
//                                                 <Badge className="bg-green-100 text-green-800">Yes</Badge>
//                                             ) : (
//                                                 <Badge variant="outline">No</Badge>
//                                             )}
//                                         </div>
//                                     </div>
//                                     <div className="space-y-2">
//                                         <Label className="font-semibold">Duty Payable</Label>
//                                         <div className="text-sm font-medium">AED {selectedParcel.duty_payable_aed.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
//                                     </div>
//                                     <div className="space-y-2">
//                                         <Label className="font-semibold">Risk Level</Label>
//                                         <div className="text-sm">{getRiskBadge(selectedParcel.is_high_risk)}</div>
//                                     </div>
//                                     <div className="space-y-2">
//                                         <Label className="font-semibold">Assigned Lane</Label>
//                                         <div>
//                                             <Badge className={getLaneColor(selectedParcel.assigned_risk_lane)}>
//                                                 {selectedParcel.assigned_risk_lane}
//                                             </Badge>
//                                         </div>
//                                     </div>
//                                     <div className="space-y-2 col-span-2">
//                                         <Label className="font-semibold">Risk Categories</Label>
//                                         <div className="flex flex-wrap gap-1">
//                                             {selectedParcel.risk_categories.length > 0 ? (
//                                                 selectedParcel.risk_categories.map((cat, idx) => (
//                                                     <Badge key={idx} variant="outline" className="text-xs">
//                                                         {cat}
//                                                     </Badge>
//                                                 ))
//                                             ) : (
//                                                 <span className="text-sm text-muted-foreground">No risk categories identified</span>
//                                             )}
//                                         </div>
//                                     </div>
//                                     <div className="space-y-2 col-span-2">
//                                         <Label className="font-semibold">Clearance Recommendation</Label>
//                                         <Badge className={selectedParcel.clearance_recommendation === 'AUTO_CLEAR' ? 'bg-green-100 text-green-800' :
//                                             selectedParcel.clearance_recommendation === 'DOC_REVIEW' ? 'bg-yellow-100 text-yellow-800' :
//                                                 selectedParcel.clearance_recommendation === 'INSPECTION' ? 'bg-orange-100 text-orange-800' :
//                                                     'bg-red-100 text-red-800'}>
//                                             {selectedParcel.clearance_recommendation.replace('_', ' ')}
//                                         </Badge>
//                                     </div>
//                                     {selectedParcel.is_split_shipment && (
//                                         <div className="space-y-2 col-span-2 bg-amber-50 p-3 rounded border border-amber-200">
//                                             <Label className="font-semibold text-amber-700">⚠️ Split Shipment Detected</Label>
//                                             <div className="text-sm">Group ID: {selectedParcel.split_group_id}</div>
//                                             <div className="text-sm">Daily Total: AED {selectedParcel.daily_total_aed.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
//                                             <div className="text-sm">Daily Total exceeds de-minimis threshold of AED {selectedParcel.de_minimis_threshold}</div>
//                                         </div>
//                                     )}
//                                     <div className="space-y-2 col-span-2">
//                                         <Label className="font-semibold">Processing Timestamp</Label>
//                                         <div className="text-sm">{new Date(selectedParcel.processing_timestamp).toLocaleString()}</div>
//                                     </div>
//                                 </div>

//                                 {viewMode === 'review' ? (
//                                     <DialogFooter className="flex gap-2 pt-4 border-t">
//                                         <Button
//                                             variant="destructive"
//                                             onClick={() => handleAction('reject')}
//                                             className="gap-2"
//                                         >
//                                             <XSquare className="h-4 w-4" />
//                                             Reject
//                                         </Button>
//                                         <Button
//                                             variant="outline"
//                                             onClick={() => handleAction('escalate')}
//                                             className="gap-2 text-yellow-700 border-yellow-400 hover:bg-yellow-50"
//                                         >
//                                             <AlertCircle className="h-4 w-4" />
//                                             Escalate
//                                         </Button>
//                                         <Button
//                                             variant="default"
//                                             onClick={() => handleAction('approve')}
//                                             className="gap-2 bg-green-600 hover:bg-green-700"
//                                         >
//                                             <CheckSquare className="h-4 w-4" />
//                                             Approve
//                                         </Button>
//                                     </DialogFooter>
//                                 ) : (
//                                     <DialogFooter className="pt-4 border-t">
//                                         <Button
//                                             variant="outline"
//                                             onClick={() => setIsDialogOpen(false)}
//                                         >
//                                             Close
//                                         </Button>
//                                     </DialogFooter>
//                                 )}
//                             </DialogContent>
//                         </Dialog>
//                     )}

//                     {/* Upload New Data Button */}
//                     <Card className="border-dashed border-2">
//                         <CardContent className="p-6">
//                             <div className="flex flex-col items-center justify-center text-center space-y-4">
//                                 <UploadIcon className="h-10 w-10 text-primary" />
//                                 <div>
//                                     <h3 className="text-lg font-semibold">Process Another File</h3>
//                                     <p className="text-sm text-muted-foreground">
//                                         Upload a new CSV file to analyze more e-commerce data
//                                     </p>
//                                 </div>
//                                 <div className="flex gap-4">
//                                     <Button
//                                         className="gap-2"
//                                         onClick={handleUploadNewCSV}
//                                     >
//                                         <UploadIcon className="h-4 w-4" />
//                                         Upload New CSV
//                                     </Button>
//                                     <Button variant="outline" onClick={exportToCSV}>
//                                         <Download className="h-4 w-4 mr-2" />
//                                         Download Results ({processedData.length.toLocaleString()} parcels)
//                                     </Button>
//                                 </div>
//                             </div>
//                         </CardContent>
//                     </Card>
//                 </>
//             )}
//         </div>
//     );
// };

// export default ParcelIntelPage;


import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
    Package,
    AlertTriangle,
    CheckCircle,
    XCircle,
    Filter,
    Download,
    Upload as UploadIcon,
    BarChart3,
    Shield,
    DollarSign,
    Search,
    Loader2,
    ChevronLeft,
    ChevronRight,
    Eye,
    FileText,
    AlertCircle,
    CheckSquare,
    XSquare,
    MoreHorizontal
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { CSVUploader } from "@/components/CSVUploader";
import { ParcelProcessor, type ProcessedParcel, type RawParcelData } from "@/utils/parcelProcessor";
import { toast } from "sonner";
import { ParcelCharts } from "@/components/ParcelCharts";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useSharedData } from "@/contexts/SharedDataContext";

const ParcelIntelPage = () => {
    // GET DATA FROM SHARED CONTEXT
    const {
        processedData: sharedProcessedData,
        setUploadedData: setSharedUploadedData,
        setProcessedData: setSharedProcessedData,
        clearData
    } = useSharedData();

    // LOCAL STATE
    const [isProcessing, setIsProcessing] = useState(false);
    const [showUploader, setShowUploader] = useState<boolean>(true);
    const [filter, setFilter] = useState<string>("all");
    const [search, setSearch] = useState<string>("");
    const [currentPage, setCurrentPage] = useState(1);
    const [currentOverviewPage, setCurrentOverviewPage] = useState(1); // Separate pagination for overview tab
    const [selectedParcel, setSelectedParcel] = useState<ProcessedParcel | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [viewMode, setViewMode] = useState<'review' | 'view'>('view'); // 'review' for actions, 'view' for readonly
    const itemsPerPage = 10;
    const overviewItemsPerPage = 5; // Show 5 items per page in overview

    // Check if we have shared data on component mount
    useEffect(() => {
        if (sharedProcessedData.length > 0) {
            setShowUploader(false);
        } else {
            setShowUploader(true);
        }
    }, [sharedProcessedData]);

    // Use shared data as the source
    const processedData = sharedProcessedData;

    // Handle View Button Click (Readonly Mode)
    const handleViewClick = (parcel: ProcessedParcel) => {
        setSelectedParcel(parcel);
        setViewMode('view');
        setIsDialogOpen(true);
    };

    // Handle Review Button Click (Action Mode)
    const handleReviewClick = (parcel: ProcessedParcel) => {
        setSelectedParcel(parcel);
        setViewMode('review');
        setIsDialogOpen(true);
    };

    // Handle Action in Modal
    const handleAction = (action: 'approve' | 'reject' | 'escalate') => {
        if (!selectedParcel) return;

        let message = '';
        let toastType: 'success' | 'error' | 'warning' = 'success';

        switch (action) {
            case 'approve':
                message = `Parcel ${selectedParcel.order_id} approved for ${selectedParcel.clearance_recommendation}`;
                toast.success("Approved!", { description: message });
                break;
            case 'reject':
                message = `Parcel ${selectedParcel.order_id} rejected - Requires further inspection`;
                toast.error("Rejected!", { description: message });
                break;
            case 'escalate':
                message = `Parcel ${selectedParcel.order_id} escalated to supervisor`;
                toast.warning("Escalated!", { description: message });
                break;
        }

        setIsDialogOpen(false);
        setSelectedParcel(null);
    };

    const handleDataProcessed = (rawData: RawParcelData[], filename: string) => {
        console.log(`📥 Processing ${rawData.length} records from ${filename}`);
        setIsProcessing(true);

        // SAVE RAW DATA TO SHARED CONTEXT
        setSharedUploadedData(rawData);

        setTimeout(() => {
            try {
                console.log("🔍 Analyzing data for all 4 logic gates...");

                // --- LEVEL 1: Split Shipment Detection ---
                console.log("🔄 Level 1: Detecting split shipments...");
                const splitGroups = new Map<string, string[]>();
                const dailyTotals = new Map<string, number>();

                // Group by importer and day (simplified)
                // REMOVED THE .slice(0, 1000) LIMIT - PROCESS ALL DATA
                rawData.forEach((item, index) => {
                    const itemPriceINR = typeof item.item_price_inr === 'string'
                        ? parseFloat(item.item_price_inr)
                        : item.item_price_inr;
                    const itemValueAED = itemPriceINR * 0.044;

                    // Create a simple date key (using index to simulate different days)
                    // Adjust grouping logic to handle larger datasets
                    const day = Math.floor(index / 100) + 1; // Groups of 100 parcels per "day"
                    const key = `${item.importer_name}_day${day}`;

                    // Update daily total
                    const currentTotal = dailyTotals.get(key) || 0;
                    dailyTotals.set(key, currentTotal + itemValueAED);

                    // Add to group
                    if (!splitGroups.has(key)) {
                        splitGroups.set(key, []);
                    }
                    splitGroups.get(key)!.push(item.order_id);
                });

                // Identify split shipments (daily total > 1000 AED)
                const splitShipmentOrders = new Set<string>();
                splitGroups.forEach((orderIds, key) => {
                    const dailyTotal = dailyTotals.get(key) || 0;
                    if (orderIds.length > 1 && dailyTotal > 1000) {
                        orderIds.forEach(orderId => splitShipmentOrders.add(orderId));
                    }
                });

                console.log(`✅ Level 1: Found ${splitShipmentOrders.size} split shipments`);

                // Process parcels - REMOVED THE .slice(0, 1000) LIMIT
                const results = rawData.map((item, index) => {
                    const itemPriceINR = typeof item.item_price_inr === 'string'
                        ? parseFloat(item.item_price_inr)
                        : item.item_price_inr;
                    const itemValueAED = parseFloat((itemPriceINR * 0.044).toFixed(2));

                    // --- LEVEL 2: HS Code Classification ---
                    const text = `${item.product_title || ''} ${item.description || ''}`.toLowerCase();
                    let hsCode = '9999.99.99';
                    let hsConfidence = 0.5;
                    let hsChapter = '99';

                    // Smart HS code detection
                    if (text.includes('drone') || text.includes('uav') || text.includes('quadcopter')) {
                        hsCode = '8806.21.00'; // Drones ≤250g
                        hsConfidence = 0.95;
                        hsChapter = '88';
                    } else if (text.includes('phone') || text.includes('mobile') || text.includes('smartphone')) {
                        hsCode = '8517.12.00'; // Mobile phones
                        hsConfidence = 0.92;
                        hsChapter = '85';
                    } else if (text.includes('shirt') || text.includes('clothing') || text.includes('apparel')) {
                        hsCode = '6203.42.00'; // Men's trousers
                        hsConfidence = 0.88;
                        hsChapter = '62';
                    } else if (text.includes('book') || text.includes('publication')) {
                        hsCode = '4901.99.00'; // Printed books
                        hsConfidence = 0.96;
                        hsChapter = '49';
                    } else if (text.includes('car') || text.includes('automotive')) {
                        hsCode = '8708.29.00'; // Car parts
                        hsConfidence = 0.85;
                        hsChapter = '87';
                    } else if (text.includes('jewel') || text.includes('gold') || text.includes('silver')) {
                        hsCode = '7113.19.00'; // Jewellery
                        hsConfidence = 0.90;
                        hsChapter = '71';
                    } else if (text.includes('battery') || text.includes('lithium') || text.includes('power bank')) {
                        hsCode = '8507.60.00'; // Lithium batteries
                        hsConfidence = 0.94;
                        hsChapter = '85';
                    } else if (text.includes('weapon') || text.includes('gun') || text.includes('ammunition')) {
                        hsCode = '9302.00.00'; // Revolvers and pistols
                        hsConfidence = 0.97;
                        hsChapter = '93';
                    }

                    // --- LEVEL 3: Duty Calculation ---
                    const isSplit = splitShipmentOrders.has(item.order_id);
                    const dailyTotal = dailyTotals.get(`${item.importer_name}_day${Math.floor(index / 100) + 1}`) || itemValueAED;
                    const dutyApplicable = dailyTotal > 1000 || isSplit;
                    const dutyRate = 5; // 5% standard rate
                    const dutyPayable = dutyApplicable ? parseFloat((itemValueAED * dutyRate / 100).toFixed(2)) : 0;

                    // --- LEVEL 4: Risk Protection ---
                    const riskKeywords = [];
                    const riskCategories = [];
                    let isHighRisk = false;

                    // Check for dangerous goods
                    if (text.includes('drone') || text.includes('uav')) {
                        riskKeywords.push('drone');
                        riskCategories.push('DRONES');
                        isHighRisk = true;
                    }
                    if (text.includes('weapon') || text.includes('gun') || text.includes('ammunition')) {
                        riskKeywords.push('weapon');
                        riskCategories.push('WEAPONS');
                        isHighRisk = true;
                    }
                    if (text.includes('battery') || text.includes('lithium')) {
                        riskKeywords.push('lithium');
                        riskCategories.push('LITHIUM_BATTERIES');
                        isHighRisk = true;
                    }
                    if (text.includes('gold') || text.includes('silver') || text.includes('platinum')) {
                        riskKeywords.push('precious');
                        riskCategories.push('PRECIOUS_METALS');
                    }

                    // --- Risk Lane Assignment ---
                    let assignedLane: 'GREEN' | 'YELLOW' | 'RED' | 'BLACK' = 'GREEN';
                    const laneReasons = [];

                    if (riskCategories.includes('WEAPONS') || riskCategories.includes('DRONES') || riskCategories.includes('LITHIUM_BATTERIES')) {
                        assignedLane = 'BLACK';
                        laneReasons.push('High-security risk goods');
                    } else if (isSplit) {
                        assignedLane = 'RED';
                        laneReasons.push('Split shipment detected');
                    } else if (dutyApplicable) {
                        assignedLane = 'YELLOW';
                        laneReasons.push('Duty applicable');
                    } else {
                        assignedLane = 'GREEN';
                        laneReasons.push('Low risk, compliant');
                    }

                    // Clearance recommendation
                    const clearanceRecommendation =
                        assignedLane === 'GREEN' ? 'AUTO_CLEAR' :
                            assignedLane === 'YELLOW' ? 'DOC_REVIEW' :
                                assignedLane === 'RED' ? 'INSPECTION' : 'HOLD';

                    const result: ProcessedParcel = {
                        order_id: item.order_id,
                        timestamp: item.timestamp,
                        importer_name: item.importer_name,
                        delivery_address: item.delivery_address,
                        product_title: item.product_title || 'Unknown Product',
                        description: item.description || '',
                        product_category: item.product_category || 'Uncategorized',
                        item_price_inr: itemPriceINR,
                        item_price_aed: itemValueAED,
                        image_url: item.image_url,
                        same_day_importer_key: `${item.importer_name}_day${Math.floor(index / 100) + 1}`,
                        daily_total_aed: dailyTotal,
                        is_split_shipment: isSplit,
                        split_group_id: isSplit ? `SPLIT-${item.importer_name.substring(0, 3).toUpperCase()}-${Math.floor(index / 100) + 1}` : undefined,
                        predicted_hs_code: hsCode,
                        hs_confidence_score: hsConfidence,
                        hs_chapter: hsChapter,
                        de_minimis_threshold: 1000,
                        duty_applicable: dutyApplicable,
                        duty_rate: dutyRate,
                        duty_payable_aed: dutyPayable,
                        tariff_reference: 'STANDARD_5',
                        risk_keywords_found: riskKeywords,
                        risk_categories: riskCategories,
                        is_high_risk: isHighRisk,
                        risk_reason_codes: riskCategories.map(cat => `${cat}_DETECTED`),
                        assigned_risk_lane: assignedLane,
                        lane_reasons: laneReasons,
                        processing_timestamp: new Date().toISOString(),
                        clearance_recommendation: clearanceRecommendation
                    };

                    return result;
                });

                // SAVE PROCESSED DATA TO SHARED CONTEXT
                setSharedProcessedData(results);
                setShowUploader(false);
                setCurrentPage(1);
                setCurrentOverviewPage(1);

                toast.success("Processing Complete!", {
                    description: `Analyzed ${results.length} parcels through all 4 logic gates`,
                    duration: 5000,
                });

                // Calculate and log summary
                const splitCount = results.filter(r => r.is_split_shipment).length;
                const highRiskCount = results.filter(r => r.is_high_risk).length;
                const dutyTotal = results.reduce((sum, r) => sum + r.duty_payable_aed, 0);
                const avgConfidence = results.reduce((sum, r) => sum + r.hs_confidence_score, 0) / results.length;

                console.log(`🎉 PROCESSING COMPLETE!`);
                console.log(`📊 Summary:`);
                console.log(`   • Total parcels: ${results.length}`);
                console.log(`   • Split shipments: ${splitCount}`);
                console.log(`   • High-risk items: ${highRiskCount}`);
                console.log(`   • Total duty: AED ${dutyTotal.toFixed(2)}`);
                console.log(`   • HS confidence: ${(avgConfidence * 100).toFixed(1)}%`);
                console.log(`   • Risk lanes: GREEN(${results.filter(r => r.assigned_risk_lane === 'GREEN').length}) | YELLOW(${results.filter(r => r.assigned_risk_lane === 'YELLOW').length}) | RED(${results.filter(r => r.assigned_risk_lane === 'RED').length}) | BLACK(${results.filter(r => r.assigned_risk_lane === 'BLACK').length})`);

            } catch (error) {
                console.error("Error processing data:", error);
                toast.error("Processing Error", {
                    description: "Failed to process the CSV file. Please try again with a valid file."
                });
            } finally {
                setIsProcessing(false);
            }
        }, 1500);
    };

    // UPLOAD NEW CSV
    const handleUploadNewCSV = () => {
        setShowUploader(true);
        setFilter("all");
        setSearch("");
        setCurrentPage(1);
        setCurrentOverviewPage(1);
        clearData();
    };

    // EXPORT TO CSV
    const exportToCSV = () => {
        if (processedData.length === 0) {
            alert("No data to export. Please upload and process a CSV file first.");
            return;
        }

        const headers = [
            'order_id',
            'importer_name',
            'timestamp',
            'product_title',
            'item_price_inr',
            'item_price_aed',
            'predicted_hs_code',
            'hs_confidence_score',
            'is_split_shipment',
            'daily_total_aed',
            'duty_applicable',
            'duty_rate',
            'duty_payable_aed',
            'is_high_risk',
            'risk_categories',
            'assigned_risk_lane',
            'clearance_recommendation'
        ];

        const csvContent = [
            headers.join(','),
            ...processedData.map(p => [
                p.order_id,
                `"${p.importer_name}"`,
                p.timestamp,
                `"${p.product_title}"`,
                p.item_price_inr,
                p.item_price_aed.toFixed(2),
                p.predicted_hs_code,
                (p.hs_confidence_score * 100).toFixed(1) + '%',
                p.is_split_shipment ? 'YES' : 'NO',
                p.daily_total_aed.toFixed(2),
                p.duty_applicable ? 'YES' : 'NO',
                p.duty_rate + '%',
                p.duty_payable_aed.toFixed(2),
                p.is_high_risk ? 'HIGH' : 'LOW',
                `"${p.risk_categories.join(';')}"`,
                p.assigned_risk_lane,
                p.clearance_recommendation
            ].join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `parcel_intel_results_${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    };

    // FILTER AND SEARCH
    const filteredData = processedData.filter(parcel => {
        if (filter === "all") return true;
        if (filter === "high-risk") return parcel.is_high_risk;
        if (filter === "split") return parcel.is_split_shipment;
        if (filter === "duty") return parcel.duty_applicable;
        return parcel.assigned_risk_lane === filter;
    }).filter(parcel =>
        parcel.order_id.toLowerCase().includes(search.toLowerCase()) ||
        parcel.importer_name.toLowerCase().includes(search.toLowerCase()) ||
        parcel.product_title.toLowerCase().includes(search.toLowerCase())
    );

    // Get high-risk parcels for overview tab
    const highRiskParcels = processedData.filter(p => p.is_high_risk);
    const overviewTotalPages = Math.ceil(highRiskParcels.length / overviewItemsPerPage);
    const overviewStartIndex = (currentOverviewPage - 1) * overviewItemsPerPage;
    const overviewEndIndex = overviewStartIndex + overviewItemsPerPage;
    const paginatedHighRiskParcels = highRiskParcels.slice(overviewStartIndex, overviewEndIndex);

    // PAGINATION for main parcels tab
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    // STATS
    const stats = {
        total: processedData.length,
        highRisk: processedData.filter(p => p.is_high_risk).length,
        splitShipments: processedData.filter(p => p.is_split_shipment).length,
        dutyApplicable: processedData.filter(p => p.duty_applicable).length,
        greenLane: processedData.filter(p => p.assigned_risk_lane === "GREEN").length,
        yellowLane: processedData.filter(p => p.assigned_risk_lane === "YELLOW").length,
        redLane: processedData.filter(p => p.assigned_risk_lane === "RED").length,
        blackLane: processedData.filter(p => p.assigned_risk_lane === "BLACK").length,
        totalDuty: processedData.reduce((sum, p) => sum + p.duty_payable_aed, 0),
        avgConfidence: processedData.length > 0
            ? Math.round(processedData.reduce((sum, p) => sum + p.hs_confidence_score, 0) / processedData.length * 100)
            : 0
    };

    // HELPER FUNCTIONS
    const getLaneColor = (lane: string) => {
        switch (lane) {
            case "GREEN": return "bg-green-100 text-green-800 border-green-300";
            case "YELLOW": return "bg-yellow-100 text-yellow-800 border-yellow-300";
            case "RED": return "bg-red-100 text-red-800 border-red-300";
            case "BLACK": return "bg-gray-800 text-white border-gray-700";
            default: return "bg-gray-100 text-gray-800 border-gray-300";
        }
    };

    const getRiskBadge = (isHighRisk: boolean) => {
        return isHighRisk ? (
            <Badge variant="destructive" className="flex items-center gap-1">
                <AlertTriangle className="h-3 w-3" /> High Risk
            </Badge>
        ) : (
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                <CheckCircle className="h-3 w-3 mr-1" /> Low Risk
            </Badge>
        );
    };

    // Create loading skeleton component
    const LoadingSkeleton = () => (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                    <Card key={i}>
                        <CardContent className="p-6">
                            <div className="h-8 bg-gray-200 rounded animate-pulse mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <Card>
                <CardContent className="p-6">
                    <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
                </CardContent>
            </Card>
        </div>
    );

    // Improved Pagination Component for main tab
    const PaginationDisplay = () => {
        const startItem = startIndex + 1;
        const endItem = Math.min(endIndex, filteredData.length);
        const totalItems = filteredData.length;

        return (
            <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-muted-foreground">
                    Showing <span className="font-medium">{startItem}-{endItem}</span> of <span className="font-medium">{totalItems}</span> parcels
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft className="h-4 w-4" />
                        Previous
                    </Button>
                    <div className="flex items-center gap-1">
                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                            let pageNum;
                            if (totalPages <= 5) {
                                pageNum = i + 1;
                            } else if (currentPage <= 3) {
                                pageNum = i + 1;
                            } else if (currentPage >= totalPages - 2) {
                                pageNum = totalPages - 4 + i;
                            } else {
                                pageNum = currentPage - 2 + i;
                            }

                            return (
                                <Button
                                    key={pageNum}
                                    variant={currentPage === pageNum ? "default" : "outline"}
                                    size="sm"
                                    className="w-8 h-8 p-0"
                                    onClick={() => setCurrentPage(pageNum)}
                                >
                                    {pageNum}
                                </Button>
                            );
                        })}
                        {totalPages > 5 && currentPage < totalPages - 2 && (
                            <>
                                <span className="text-sm text-muted-foreground px-2">...</span>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-8 h-8 p-0"
                                    onClick={() => setCurrentPage(totalPages)}
                                >
                                    {totalPages}
                                </Button>
                            </>
                        )}
                    </div>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Next
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        );
    };

    // Pagination Component for Overview tab
    const OverviewPaginationDisplay = () => {
        const startItem = overviewStartIndex + 1;
        const endItem = Math.min(overviewEndIndex, highRiskParcels.length);
        const totalItems = highRiskParcels.length;

        return (
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <div className="text-sm text-muted-foreground">
                    Showing <span className="font-medium">{startItem}-{endItem}</span> of <span className="font-medium">{totalItems}</span> high-risk parcels
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentOverviewPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentOverviewPage === 1}
                    >
                        <ChevronLeft className="h-4 w-4" />
                        Previous
                    </Button>
                    <div className="flex items-center gap-1">
                        {Array.from({ length: Math.min(5, overviewTotalPages) }, (_, i) => {
                            let pageNum;
                            if (overviewTotalPages <= 5) {
                                pageNum = i + 1;
                            } else if (currentOverviewPage <= 3) {
                                pageNum = i + 1;
                            } else if (currentOverviewPage >= overviewTotalPages - 2) {
                                pageNum = overviewTotalPages - 4 + i;
                            } else {
                                pageNum = currentOverviewPage - 2 + i;
                            }

                            return (
                                <Button
                                    key={pageNum}
                                    variant={currentOverviewPage === pageNum ? "default" : "outline"}
                                    size="sm"
                                    className="w-8 h-8 p-0"
                                    onClick={() => setCurrentOverviewPage(pageNum)}
                                >
                                    {pageNum}
                                </Button>
                            );
                        })}
                        {overviewTotalPages > 5 && currentOverviewPage < overviewTotalPages - 2 && (
                            <>
                                <span className="text-sm text-muted-foreground px-2">...</span>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-8 h-8 p-0"
                                    onClick={() => setCurrentOverviewPage(overviewTotalPages)}
                                >
                                    {overviewTotalPages}
                                </Button>
                            </>
                        )}
                    </div>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentOverviewPage(prev => Math.min(prev + 1, overviewTotalPages))}
                        disabled={currentOverviewPage === overviewTotalPages}
                    >
                        Next
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        );
    };

    return (
        <div className="p-6 space-y-6 overflow-y-auto h-full">
            {isProcessing && <LoadingSkeleton />}

            {/* Header */}
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <Package className="h-8 w-8 text-primary" />
                    <h1 className="text-3xl font-bold tracking-tight">PARCEL-INTEL</h1>
                </div>
                <p className="text-muted-foreground">
                    E-commerce parcel intelligence engine for split shipment detection, HS classification, duty calculation, and risk assessment
                </p>
            </div>

            {/* Controls */}
            <Card>
                <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="flex-1 w-full md:w-auto">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search parcels by ID, importer, or product..."
                                    className="pl-10"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    disabled={isProcessing || processedData.length === 0}
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                className="gap-2"
                                onClick={handleUploadNewCSV}
                                disabled={isProcessing}
                            >
                                <UploadIcon className="h-4 w-4" />
                                {processedData.length > 0 ? 'Upload New' : 'Upload CSV'}
                            </Button>

                            {processedData.length > 0 && (
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="gap-2"
                                    onClick={exportToCSV}
                                    disabled={isProcessing}
                                >
                                    <Download className="h-4 w-4" />
                                    Export Results
                                </Button>
                            )}

                            {isProcessing && (
                                <Button size="sm" className="gap-2" disabled>
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    Processing...
                                </Button>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Main Content */}
            {showUploader || processedData.length === 0 ? (
                // SHOW CSV UPLOADER
                <div className="space-y-6">
                    <Card>
                        <CardContent className="p-6">
                            <div className="mb-6">
                                <h2 className="text-xl font-bold mb-4">Core Intelligence Controls</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <Card className="border-l-4 border-l-amber-500">
                                        <CardContent className="p-4">
                                            <div className="font-medium text-amber-600 mb-1">Split Shipment Detection</div>
                                            <div className="text-sm text-muted-foreground mt-1">
                                                Same importer + same day + aggregated value &gt; AED 1,000
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-l-4 border-l-blue-500">
                                        <CardContent className="p-4">
                                            <div className="font-medium text-blue-600 mb-1">HS Code Classification</div>
                                            <div className="text-sm text-muted-foreground mt-1">
                                                Predict 6-digit HS codes from shipment descriptions for accurate classification
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-l-4 border-l-green-500">
                                        <CardContent className="p-4">
                                            <div className="font-medium text-green-600 mb-1">Duty & Tax Calculation</div>
                                            <div className="text-sm text-muted-foreground mt-1">
                                                Compute duties and taxes including AED conversion, de-minimis rules, and standard rates
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-l-4 border-l-red-500">
                                        <CardContent className="p-4">
                                            <div className="font-medium text-red-600 mb-1">Societal Risk Protection</div>
                                            <div className="text-sm text-muted-foreground mt-1">
                                                Detect prohibited items such as weapons, drones, and lithium batteries
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                            <CSVUploader onDataProcessed={handleDataProcessed} />
                        </CardContent>
                    </Card>
                </div>
            ) : (
                // SHOW RESULTS WHEN DATA IS PROCESSED
                <>
                    {/* KPI Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Parcels</CardTitle>
                                <Package className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stats.total.toLocaleString()}</div>
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="h-2 flex w-full rounded-full overflow-hidden bg-gray-200">
                                        <div className="bg-green-500" style={{ width: `${(stats.greenLane / stats.total) * 100}%` }} />
                                        <div className="bg-yellow-500" style={{ width: `${(stats.yellowLane / stats.total) * 100}%` }} />
                                        <div className="bg-red-500" style={{ width: `${(stats.redLane / stats.total) * 100}%` }} />
                                        <div className="bg-gray-800" style={{ width: `${(stats.blackLane / stats.total) * 100}%` }} />
                                    </div>
                                    <span className="text-xs text-muted-foreground">Lane mix</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Split Shipments</CardTitle>
                                <AlertTriangle className="h-4 w-4 text-amber-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stats.splitShipments.toLocaleString()}</div>
                                <p className="text-xs text-muted-foreground">
                                    Potential revenue evasion detected
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">High Risk Items</CardTitle>
                                <Shield className="h-4 w-4 text-red-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stats.highRisk.toLocaleString()}</div>
                                <p className="text-xs text-muted-foreground">
                                    {stats.blackLane} in BLACK lane
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Duty Payable</CardTitle>
                                <DollarSign className="h-4 w-4 text-green-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">AED {stats.totalDuty.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                                <p className="text-xs text-muted-foreground">
                                    From {stats.dutyApplicable.toLocaleString()} parcels
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Results Tabs */}
                    <Tabs defaultValue="overview" className="space-y-6">
                        <TabsList>
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="parcels">Processed Parcels</TabsTrigger>
                            <TabsTrigger value="analytics">Analytics</TabsTrigger>
                        </TabsList>

                        <TabsContent value="overview" className="space-y-6">
                            {/* Risk Lane Distribution */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Risk Lane Distribution</CardTitle>
                                    <CardDescription>How parcels are routed based on risk assessment</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                        {[
                                            { lane: "GREEN", count: stats.greenLane, description: "Auto-clear, no intervention", color: "bg-green-500" },
                                            { lane: "YELLOW", count: stats.yellowLane, description: "Document review required", color: "bg-yellow-500" },
                                            { lane: "RED", count: stats.redLane, description: "Physical inspection", color: "bg-red-500" },
                                            { lane: "BLACK", count: stats.blackLane, description: "Intelligence/security hold", color: "bg-gray-800" }
                                        ].map((item) => (
                                            <Card key={item.lane} className={`border-l-4 ${item.lane === "GREEN" ? "border-l-green-500" : item.lane === "YELLOW" ? "border-l-yellow-500" : item.lane === "RED" ? "border-l-red-500" : "border-l-gray-800"}`}>
                                                <CardContent className="p-6">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h3 className="font-bold text-xl">{item.lane}</h3>
                                                        <Badge className={getLaneColor(item.lane)}>{item.count.toLocaleString()}</Badge>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                                    <Progress
                                                        value={stats.total > 0 ? (item.count / stats.total) * 100 : 0}
                                                        className="mt-4 h-2"
                                                        indicatorClassName={item.color}
                                                    />
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Recent High-Risk Items - NOW WITH PAGINATION */}
                            {stats.highRisk > 0 && (
                                <Card>
                                    <CardHeader>
                                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                            <div>
                                                <CardTitle>High-Risk Parcels Requiring Attention</CardTitle>
                                                <CardDescription>Items flagged for security, safety, or compliance risks</CardDescription>
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                Total: {stats.highRisk.toLocaleString()} parcels
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Order ID</TableHead>
                                                    <TableHead>Importer</TableHead>
                                                    <TableHead>Product</TableHead>
                                                    <TableHead>Risk Category</TableHead>
                                                    <TableHead>Duty Payable</TableHead>
                                                    <TableHead>Risk Lane</TableHead>
                                                    <TableHead>Actions</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {paginatedHighRiskParcels.map((parcel) => (
                                                    <TableRow key={parcel.order_id}>
                                                        <TableCell className="font-medium">{parcel.order_id}</TableCell>
                                                        <TableCell>{parcel.importer_name}</TableCell>
                                                        <TableCell className="max-w-[200px] truncate">{parcel.product_title}</TableCell>
                                                        <TableCell>
                                                            <div className="flex flex-wrap gap-1">
                                                                {parcel.risk_categories.map((cat, idx) => (
                                                                    <Badge key={idx} variant="outline" className="text-xs">
                                                                        {cat}
                                                                    </Badge>
                                                                ))}
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>AED {parcel.duty_payable_aed.toFixed(2)}</TableCell>
                                                        <TableCell>
                                                            <Badge className={getLaneColor(parcel.assigned_risk_lane)}>
                                                                {parcel.assigned_risk_lane}
                                                            </Badge>
                                                        </TableCell>
                                                        <TableCell>
                                                            <div className="flex gap-2">
                                                                <Button
                                                                    size="sm"
                                                                    variant="outline"
                                                                    onClick={() => handleViewClick(parcel)}
                                                                    className="h-8 w-8 p-0"
                                                                    title="View Details"
                                                                >
                                                                    <Eye className="h-4 w-4" />
                                                                </Button>
                                                                <Button
                                                                    size="sm"
                                                                    variant="outline"
                                                                    onClick={() => handleReviewClick(parcel)}
                                                                    className="gap-2"
                                                                >
                                                                    <Eye className="h-4 w-4" />
                                                                    Review
                                                                </Button>
                                                            </div>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                        
                                        {/* Pagination for Overview tab */}
                                        {overviewTotalPages > 1 && <OverviewPaginationDisplay />}
                                    </CardContent>
                                </Card>
                            )}
                        </TabsContent>

                        <TabsContent value="parcels">
                            <Card>
                                <CardHeader>
                                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                        <div>
                                            <CardTitle>Processed Parcels</CardTitle>
                                            <CardDescription>
                                                Detailed view of all processed parcels with complete information
                                            </CardDescription>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <Button
                                                variant={filter === "all" ? "default" : "outline"}
                                                size="sm"
                                                onClick={() => { setFilter("all"); setCurrentPage(1); }}
                                            >
                                                All ({processedData.length.toLocaleString()})
                                            </Button>
                                            <Button
                                                variant={filter === "high-risk" ? "default" : "outline"}
                                                size="sm"
                                                onClick={() => { setFilter("high-risk"); setCurrentPage(1); }}
                                            >
                                                High Risk ({stats.highRisk.toLocaleString()})
                                            </Button>
                                            <Button
                                                variant={filter === "split" ? "default" : "outline"}
                                                size="sm"
                                                onClick={() => { setFilter("split"); setCurrentPage(1); }}
                                            >
                                                Split ({stats.splitShipments.toLocaleString()})
                                            </Button>
                                            <Button
                                                variant={filter === "duty" ? "default" : "outline"}
                                                size="sm"
                                                onClick={() => { setFilter("duty"); setCurrentPage(1); }}
                                            >
                                                Duty ({stats.dutyApplicable.toLocaleString()})
                                            </Button>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Order ID</TableHead>
                                                <TableHead>Importer</TableHead>
                                                <TableHead>Product</TableHead>
                                                <TableHead>HS Code</TableHead>
                                                <TableHead>Value (AED)</TableHead>
                                                <TableHead>Duty</TableHead>
                                                <TableHead>Risk</TableHead>
                                                <TableHead>Lane</TableHead>
                                                <TableHead className="text-right">View</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {paginatedData.map((parcel) => (
                                                <TableRow key={parcel.order_id} className="hover:bg-muted/50">
                                                    <TableCell className="font-medium">{parcel.order_id}</TableCell>
                                                    <TableCell>
                                                        <div>
                                                            <div className="font-medium">{parcel.importer_name}</div>
                                                            {parcel.is_split_shipment && (
                                                                <Badge variant="outline" className="mt-1 text-xs bg-amber-50">
                                                                    Split Shipment
                                                                </Badge>
                                                            )}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="max-w-[200px]">
                                                        <div className="font-medium truncate">{parcel.product_title}</div>
                                                        <div className="text-xs text-muted-foreground truncate">
                                                            {parcel.product_category}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div>
                                                            <div className="font-mono font-medium">{parcel.predicted_hs_code}</div>
                                                            <div className="text-xs text-muted-foreground">
                                                                {(parcel.hs_confidence_score * 100).toFixed(0)}% confidence
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="font-medium">
                                                        AED {parcel.item_price_aed.toFixed(2)}
                                                    </TableCell>
                                                    <TableCell>
                                                        {parcel.duty_applicable ? (
                                                            <div className="text-green-600 font-medium">
                                                                AED {parcel.duty_payable_aed.toFixed(2)}
                                                            </div>
                                                        ) : (
                                                            <Badge variant="outline" className="text-xs">
                                                                Exempt
                                                            </Badge>
                                                        )}
                                                    </TableCell>
                                                    <TableCell>{getRiskBadge(parcel.is_high_risk)}</TableCell>
                                                    <TableCell>
                                                        <Badge className={getLaneColor(parcel.assigned_risk_lane)}>
                                                            {parcel.assigned_risk_lane}
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        <Button
                                                            size="sm"
                                                            variant="ghost"
                                                            onClick={() => handleViewClick(parcel)}
                                                            className="h-8 w-8 p-0"
                                                            title="View Complete Information"
                                                        >
                                                            <Eye className="h-4 w-4" />
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>

                                    {/* Improved Pagination */}
                                    {totalPages > 1 && <PaginationDisplay />}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="analytics">
                            <ParcelCharts data={processedData} />
                        </TabsContent>
                    </Tabs>

                    {/* Parcel Details Modal - Works for both view and review modes */}
                    {selectedParcel && (
                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
                                <DialogHeader>
                                    <DialogTitle>
                                        {viewMode === 'review' ? 'Parcel Review' : 'Parcel Details'}
                                    </DialogTitle>
                                    <DialogDescription>
                                        {viewMode === 'review' 
                                            ? `Detailed analysis of parcel ${selectedParcel.order_id} - Take action below`
                                            : `Complete information for parcel ${selectedParcel.order_id}`
                                        }
                                    </DialogDescription>
                                </DialogHeader>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                    <div className="space-y-2">
                                        <Label className="font-semibold">Order ID</Label>
                                        <div className="text-sm font-mono bg-gray-50 p-2 rounded">{selectedParcel.order_id}</div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="font-semibold">Importer</Label>
                                        <div className="text-sm">{selectedParcel.importer_name}</div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="font-semibold">Product Title</Label>
                                        <div className="text-sm">{selectedParcel.product_title}</div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="font-semibold">Category</Label>
                                        <div className="text-sm">{selectedParcel.product_category}</div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="font-semibold">Description</Label>
                                        <div className="text-sm text-muted-foreground">{selectedParcel.description || 'No description available'}</div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="font-semibold">Delivery Address</Label>
                                        <div className="text-sm">{selectedParcel.delivery_address}</div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="font-semibold">Item Value (INR)</Label>
                                        <div className="text-sm">₹ {selectedParcel.item_price_inr.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="font-semibold">Item Value (AED)</Label>
                                        <div className="text-sm font-medium">AED {selectedParcel.item_price_aed.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="font-semibold">HS Code</Label>
                                        <div className="text-sm font-mono bg-blue-50 p-2 rounded">{selectedParcel.predicted_hs_code}</div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="font-semibold">HS Confidence</Label>
                                        <div className="flex items-center gap-2">
                                            <div className="text-sm font-medium">{(selectedParcel.hs_confidence_score * 100).toFixed(1)}%</div>
                                            <Progress value={selectedParcel.hs_confidence_score * 100} className="h-2 w-20" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="font-semibold">Duty Applicable</Label>
                                        <div className="text-sm">
                                            {selectedParcel.duty_applicable ? (
                                                <Badge className="bg-green-100 text-green-800">Yes</Badge>
                                            ) : (
                                                <Badge variant="outline">No</Badge>
                                            )}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="font-semibold">Duty Payable</Label>
                                        <div className="text-sm font-medium">AED {selectedParcel.duty_payable_aed.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="font-semibold">Risk Level</Label>
                                        <div className="text-sm">{getRiskBadge(selectedParcel.is_high_risk)}</div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="font-semibold">Assigned Lane</Label>
                                        <div>
                                            <Badge className={getLaneColor(selectedParcel.assigned_risk_lane)}>
                                                {selectedParcel.assigned_risk_lane}
                                            </Badge>
                                        </div>
                                    </div>
                                    <div className="space-y-2 col-span-2">
                                        <Label className="font-semibold">Risk Categories</Label>
                                        <div className="flex flex-wrap gap-1">
                                            {selectedParcel.risk_categories.length > 0 ? (
                                                selectedParcel.risk_categories.map((cat, idx) => (
                                                    <Badge key={idx} variant="outline" className="text-xs">
                                                        {cat}
                                                    </Badge>
                                                ))
                                            ) : (
                                                <span className="text-sm text-muted-foreground">No risk categories identified</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="space-y-2 col-span-2">
                                        <Label className="font-semibold">Clearance Recommendation</Label>
                                        <Badge className={selectedParcel.clearance_recommendation === 'AUTO_CLEAR' ? 'bg-green-100 text-green-800' :
                                            selectedParcel.clearance_recommendation === 'DOC_REVIEW' ? 'bg-yellow-100 text-yellow-800' :
                                                selectedParcel.clearance_recommendation === 'INSPECTION' ? 'bg-orange-100 text-orange-800' :
                                                    'bg-red-100 text-red-800'}>
                                            {selectedParcel.clearance_recommendation.replace('_', ' ')}
                                        </Badge>
                                    </div>
                                    {selectedParcel.is_split_shipment && (
                                        <div className="space-y-2 col-span-2 bg-amber-50 p-3 rounded border border-amber-200">
                                            <Label className="font-semibold text-amber-700">⚠️ Split Shipment Detected</Label>
                                            <div className="text-sm">Group ID: {selectedParcel.split_group_id}</div>
                                            <div className="text-sm">Daily Total: AED {selectedParcel.daily_total_aed.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                                            <div className="text-sm">Daily Total exceeds de-minimis threshold of AED {selectedParcel.de_minimis_threshold}</div>
                                        </div>
                                    )}
                                    <div className="space-y-2 col-span-2">
                                        <Label className="font-semibold">Processing Timestamp</Label>
                                        <div className="text-sm">{new Date(selectedParcel.processing_timestamp).toLocaleString()}</div>
                                    </div>
                                </div>

                                {viewMode === 'review' ? (
                                    <DialogFooter className="flex gap-2 pt-4 border-t">
                                        <Button
                                            variant="destructive"
                                            onClick={() => handleAction('reject')}
                                            className="gap-2"
                                        >
                                            <XSquare className="h-4 w-4" />
                                            Reject
                                        </Button>
                                        <Button
                                            variant="outline"
                                            onClick={() => handleAction('escalate')}
                                            className="gap-2 text-yellow-700 border-yellow-400 hover:bg-yellow-50"
                                        >
                                            <AlertCircle className="h-4 w-4" />
                                            Escalate
                                        </Button>
                                        <Button
                                            variant="default"
                                            onClick={() => handleAction('approve')}
                                            className="gap-2 bg-green-600 hover:bg-green-700"
                                        >
                                            <CheckSquare className="h-4 w-4" />
                                            Approve
                                        </Button>
                                    </DialogFooter>
                                ) : (
                                    <DialogFooter className="pt-4 border-t">
                                        <Button
                                            variant="outline"
                                            onClick={() => setIsDialogOpen(false)}
                                        >
                                            Close
                                        </Button>
                                    </DialogFooter>
                                )}
                            </DialogContent>
                        </Dialog>
                    )}

                    {/* Upload New Data Button */}
                    <Card className="border-dashed border-2">
                        <CardContent className="p-6">
                            <div className="flex flex-col items-center justify-center text-center space-y-4">
                                <UploadIcon className="h-10 w-10 text-primary" />
                                <div>
                                    <h3 className="text-lg font-semibold">Process Another File</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Upload a new CSV file to analyze more e-commerce data
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <Button
                                        className="gap-2"
                                        onClick={handleUploadNewCSV}
                                    >
                                        <UploadIcon className="h-4 w-4" />
                                        Upload New CSV
                                    </Button>
                                    <Button variant="outline" onClick={exportToCSV}>
                                        <Download className="h-4 w-4 mr-2" />
                                        Download Results ({processedData.length.toLocaleString()} parcels)
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </>
            )}
        </div>
    );
};

export default ParcelIntelPage;