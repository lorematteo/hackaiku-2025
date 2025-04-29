import DataikuLogo from '@/assets/logo/dataiku.svg';
import { DSSFeatureMenu, DSSOptionMenu } from '@/const/dss-menu';

import MenuItem from './components/menu-item';

const DSSNavbar: React.FC = () => {
  return (
    <nav className="flex w-full flex-row pr-2 pl-1 bg-greyscale-grey-base items-center">
      <div className="flex flex-row items-center gap-1">
        <a href="#" className="flex size-10 items-center justify-center">
          <img src={DataikuLogo} alt="" className="size-5 shrink-0" />
        </a>
        <button className="font-source-sans-pro text-white h-10 flex items-center hover:cursor-pointer">
          Sandbox
        </button>
      </div>
      <div className="flex flex-row justify-between ml-4 items-center w-full">
        <div>
          {DSSFeatureMenu.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
        <div className="flex flex-row items-center">
          {DSSOptionMenu.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
          <button className="bg-orange-base rounded-full border border-transparent hover:border-white text-white text-sm size-6 hover:cursor-pointer mx-2.5">
            A
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DSSNavbar;
