import { useDnD } from '../context/DnDContext';

const Sidebar = () => {
  const [, setType] = useDnD();

  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    setType(nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="h-screen w-64 border-l border-gray-200 bg-white p-4">
      <div className="mb-4 text-sm text-gray-500">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className="mb-2 cursor-move rounded border border-gray-200 p-3 hover:bg-gray-50"
        onDragStart={(event) => onDragStart(event, 'input')}
        draggable
      >
        Input Node
      </div>
      <div
        className="mb-2 cursor-move rounded border border-gray-200 p-3 hover:bg-gray-50"
        onDragStart={(event) => onDragStart(event, 'default')}
        draggable
      >
        Default Node
      </div>
      <div
        className="mb-2 cursor-move rounded border border-gray-200 p-3 hover:bg-gray-50"
        onDragStart={(event) => onDragStart(event, 'output')}
        draggable
      >
        Output Node
      </div>
    </div>
  );
};

export default Sidebar;
