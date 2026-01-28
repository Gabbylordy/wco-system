// src/components/modules/AlertModal.tsx
import { Alert } from "@/data/mockData";
import { X } from "lucide-react";

interface AlertModalProps {
  alert: Alert | null;
  onClose: () => void;
}

export const AlertModal = ({ alert, onClose }: AlertModalProps) => {
  if (!alert) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-96 p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="font-bold text-lg mb-2">{alert.title}</h2>
        <p className="text-sm text-muted-foreground mb-4">{alert.description}</p>
        <p className="text-xs mb-2">Severity: {alert.severity}</p>
        <p className="text-xs mb-2">Type: {alert.type}</p>
        <p className="text-xs mb-2">Timestamp: {new Date(alert.timestamp).toLocaleString()}</p>
        {alert.indicators.length > 0 && (
          <div className="mt-2">
            <p className="text-xs font-semibold">Indicators:</p>
            <ul className="list-disc list-inside text-xs">
              {alert.indicators.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
