import clsx from 'clsx';

export function NodeItem({
  label,
  desc,
  icon,
  type,
  onDragStart,
}: {
  label: string;
  desc: string;
  icon?: React.ReactNode;
  type: string;
  onDragStart: (event: React.DragEvent, type: string) => void;
}) {
  return (
    <div
      className={clsx(
        'group flex flex-col rounded-lg border border-dashed border-gray-base bg-white p-3 shadow-sm',
        'hover:bg-accent cursor-move transition-colors'
      )}
      draggable
      onDragStart={(e) => onDragStart(e, type)}
    >
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">{icon}</div>
        <div className="font-semibold text-sm text-foreground">{label}</div>
      </div>
      <div className="text-xs text-muted-foreground mt-2">{desc}</div>
    </div>
  );
}
