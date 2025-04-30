import { ChevronLeft, Search } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DSSLeftPanelMenus } from '@/const/dss-left-panel';
import { NODES, NodeType } from '@/const/nodes';
import { MenuItem } from '@/features/left-panel/components/menu-item';
import NodeItem from '@/features/left-panel/components/node-item';

export const LeftPanel = () => {
  const [selectedMenu, setSelectedMenu] = useState<null | string>(null);

  const handleDragStart = (event: React.DragEvent, data: NodeType) => {
    const jsonString = JSON.stringify(data);
    event.dataTransfer.setData('application/reactflow', jsonString);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className="min-w-3xs w-3xs h-full border-r bg-white flex flex-col">
      <div className="p-2 flex flex-col gap-2 items-start">
        {selectedMenu && (
          <Button variant="ghost" onClick={() => setSelectedMenu(null)}>
            <ChevronLeft size={16} />
            <span>Back</span>
          </Button>
        )}
        <div className="w-full relative">
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
            {NODES[selectedMenu as keyof typeof NODES].map((node) => (
              <NodeItem key={node.id} data={node} onDragStart={handleDragStart} />
            ))}
          </div>
        </div>
      )}
    </aside>
  );
};
