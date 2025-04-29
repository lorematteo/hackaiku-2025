export function NodeItem({ label, desc }: { label: string; desc: string }) {
  return (
    <div className="border rounded p-2 bg-muted hover:bg-accent cursor-pointer">
      <div className="font-medium">{label}</div>
      <div className="text-xs text-muted-foreground">{desc}</div>
    </div>
  );
}
