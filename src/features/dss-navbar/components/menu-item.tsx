import React from 'react';

import { DSSFeatureMenu } from '@/const/dss-menu';

interface MenuItemProps {
  item: (typeof DSSFeatureMenu)[number];
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <button
      className={`p-2.5 text-[#CCCCCC] group hover:cursor-pointer ${item.id === 'llm' && 'bg-pink-base text-white'}`}
    >
      {item.icon}
    </button>
  );
};

export default MenuItem;
