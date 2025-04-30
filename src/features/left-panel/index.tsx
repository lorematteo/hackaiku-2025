import { ChevronLeft, Search } from 'lucide-react';
import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { DSSLeftPanelMenus, DSSLeftPanelNodes } from '@/const/dss-left-panel';
import { MenuItem } from '@/features/left-panel/components/menu-item';
import { NodeItem } from '@/features/left-panel/components/node-item';

export const LeftPanel = () => {
  const [selectedMenu, setSelectedMenu] = useState<null | string>(null);

  const handleDragStart = (event: React.DragEvent, type: string) => {
    event.dataTransfer.setData('application/reactflow', type);
    event.dataTransfer.effectAllowed = 'move';
    // Optionnel: setType(type) si tu utilises un context
  };

  return (
    <aside className="w-64 h-full border-r bg-white flex flex-col">
      <div className="p-2">
        {selectedMenu && (
          <button
            className="mb-2 p-1 rounded hover:bg-accent flex items-center gap-2"
            onClick={() => setSelectedMenu(null)}
          >
            <ChevronLeft size={16} />
            <span>Back</span>
          </button>
        )}
        <div className="relative mb-2">
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Search size={16} />
          </span>
          <Input placeholder="Search" className="pl-8" />
        </div>
        {selectedMenu && (
          <div className="font-bold text-base mt-4 ml-1">
            {DSSLeftPanelMenus.find((m) => m.id === selectedMenu)?.name}
          </div>
        )}
      </div>
      {!selectedMenu ? (
        <div className="flex flex-col gap-1 p-2">
          {DSSLeftPanelMenus.map((menu) => (
            <MenuItem
              key={menu.id}
              icon={menu.icon}
              label={menu.name}
              onClick={() => setSelectedMenu(menu.id)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-2">
            {DSSLeftPanelNodes[selectedMenu as keyof typeof DSSLeftPanelNodes].map((node) => (
              <NodeItem
                key={node.id}
                label={node.name}
                desc={node.desc}
                icon={node.icon}
                type={node.id}
                onDragStart={handleDragStart}
              />
            ))}
          </div>
        </div>
      )}
    </aside>
  );
};
