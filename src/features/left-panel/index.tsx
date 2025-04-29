import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { DSSLeftPanelMenus, DSSLeftPanelNodes } from '@/const/dss-left-panel';
import { MenuItem } from '@/features/left-panel/components/menu-item';
import { NodeItem } from '@/features/left-panel/components/node-item';

export const LeftPanel = () => {
  const [selectedMenu, setSelectedMenu] = useState<null | string>(null);

  return (
    <aside className="w-64 h-full border-r bg-white flex flex-col">
      <div className="p-2">
        <Input placeholder="Search" className="mb-2" />
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
          <div className="flex items-center gap-2 p-2">
            <button
              className="mr-2 p-2 rounded hover:bg-accent"
              onClick={() => setSelectedMenu(null)}
            >
              <ChevronLeft size={16} />
            </button>
            <span className="font-semibold">
              {DSSLeftPanelMenus.find((m) => m.id === selectedMenu)?.name}
            </span>
          </div>
          <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-2">
            {DSSLeftPanelNodes[selectedMenu as keyof typeof DSSLeftPanelNodes].map((node) => (
              <NodeItem key={node.id} label={node.name} desc={node.desc} />
            ))}
          </div>
        </div>
      )}
    </aside>
  );
};
