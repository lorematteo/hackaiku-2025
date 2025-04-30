import { AlertTriangle, Check, Ellipsis, Loader2, X } from 'lucide-react';

const ProcessStateIcon = ({ state }: { state: string }) => {
  if (state === 'waiting') return <Ellipsis size={16} className="text-gray-400" />;
  if (state === 'processing') return <Loader2 size={16} className="animate-spin text-blue-500" />;
  if (state === 'complete') return <Check size={16} className="text-green-500" />;
  if (state === 'warning') return <AlertTriangle size={16} className="text-yellow-500" />;
  if (state === 'error') return <X size={16} className="text-red-500" />;

  return null;
};

export default ProcessStateIcon;
