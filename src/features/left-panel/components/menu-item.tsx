import { ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function MenuItem({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <Button
      variant="ghost"
      className="justify-start w-full flex items-center gap-2"
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
      <ChevronRight className="ml-auto" size={16} />
    </Button>
  );
}
