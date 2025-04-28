import { createContext, useContext, useState } from 'react';

const DnDContext = createContext<[string, (type: string) => void]>(['', () => {}]);

export const DnDProvider = ({ children }: { children: React.ReactNode }) => {
  const [type, setType] = useState('');

  return <DnDContext.Provider value={[type, setType]}>{children}</DnDContext.Provider>;
};

export const useDnD = () => useContext(DnDContext);
