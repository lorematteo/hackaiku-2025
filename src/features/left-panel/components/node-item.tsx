export function NodeItem({
  label,
  desc,
  type,
  onDragStart,
}: {
  label: string;
  desc: string;
  type: string;
  onDragStart: (event: React.DragEvent, type: string) => void;
}) {
  return (
    <div
      className="border rounded p-2 bg-muted hover:bg-accent cursor-move"
      draggable
      onDragStart={(e) => onDragStart(e, type)}
    >
      <div className="font-medium">{label}</div>
      <div className="text-xs text-muted-foreground">{desc}</div>
    </div>
  );
}
