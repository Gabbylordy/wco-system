import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ProcessedParcel, RawParcelData } from '@/utils/parcelProcessor';

interface SharedDataContextType {
  uploadedData: RawParcelData[];
  processedData: ProcessedParcel[];
  setUploadedData: (data: RawParcelData[]) => void;
  setProcessedData: (data: ProcessedParcel[]) => void;
  clearData: () => void;
}

const SharedDataContext = createContext<SharedDataContextType | undefined>(undefined);

export const useSharedData = () => {
  const context = useContext(SharedDataContext);
  if (!context) {
    throw new Error('useSharedData must be used within SharedDataProvider');
  }
  return context;
};

interface SharedDataProviderProps {
  children: ReactNode;
}

export const SharedDataProvider: React.FC<SharedDataProviderProps> = ({ children }) => {
  const [uploadedData, setUploadedData] = useState<RawParcelData[]>([]);
  const [processedData, setProcessedData] = useState<ProcessedParcel[]>([]);

  const clearData = () => {
    setUploadedData([]);
    setProcessedData([]);
  };

  return (
    <SharedDataContext.Provider
      value={{
        uploadedData,
        processedData,
        setUploadedData,
        setProcessedData,
        clearData,
      }}
    >
      {children}
    </SharedDataContext.Provider>
  );
};