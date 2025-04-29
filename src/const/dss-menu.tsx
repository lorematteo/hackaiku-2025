import ActivityIcon from '@/assets/icons/activity';
import CodeIcon from '@/assets/icons/code';
import DashboardIcon from '@/assets/icons/dashboard';
import FlowIcon from '@/assets/icons/flow';
import GridDotsIcon from '@/assets/icons/grid-dots';
import HelpIcon from '@/assets/icons/help';
import LLMIcon from '@/assets/icons/llm';
import MenuHorizontalIcon from '@/assets/icons/menu-horizontal';
import MLAnalysisIcon from '@/assets/icons/ml-analysis';
import PlayOutlineIcon from '@/assets/icons/play-outline';
import WikiIcon from '@/assets/icons/wiki';

export const DSSFeatureMenu = [
  {
    id: 'flow',
    name: 'Flow',
    icon: <FlowIcon className="size-5 group-hover:text-cyan-blue-base" />,
    color: 'cyan-blue-base',
    href: '#',
  },
  {
    id: 'visual-ml',
    name: 'Visual ML',
    icon: <MLAnalysisIcon className="size-5 group-hover:text-green-base" />,
    color: 'green-base',
    href: '#',
  },
  {
    id: 'llm',
    name: 'LLM',
    icon: <LLMIcon className="size-5" />,
    color: '#D66F9E',
    href: '#',
  },
  {
    id: 'code',
    name: 'Code',
    icon: <CodeIcon className="size-5 group-hover:text-orange-base" />,
    color: 'orange-base',
    href: '#',
  },
  {
    id: 'playground',
    name: 'Playground',
    icon: <PlayOutlineIcon className="size-5 group-hover:text-purple-base" />,
    color: 'purple-base',
    href: '#',
  },
  {
    id: 'wiki',
    name: 'Wiki',
    icon: <WikiIcon className="size-5 group-hover:text-steel-blue-base" />,
    color: 'steel-blue-base',
    href: '#',
  },
  {
    id: 'dashboard',
    name: 'Dashboard',
    icon: <DashboardIcon className="size-5 group-hover:text-red-base" />,
    color: 'red-base',
    href: '#',
  },
  {
    id: 'menu-horizontal',
    name: 'Menu Horizontal',
    icon: <MenuHorizontalIcon className="size-5 group-hover:text-gray-blue-base" />,
    color: 'gray-blue-base',
    href: '#',
  },
];

export const DSSOptionMenu = [
  {
    id: 'navigation',
    name: 'Navigation',
    icon: <GridDotsIcon className="size-5 group-hover:text-white" />,
    color: 'cyan-blue-base',
    href: '#',
  },
  {
    id: 'help',
    name: 'Help',
    icon: <HelpIcon className="size-5 group-hover:text-white" />,
    color: 'green-base',
    href: '#',
  },
  {
    id: 'activity',
    name: 'Activity',
    icon: <ActivityIcon className="size-5 group-hover:text-white" />,
    color: '#D66F9E',
    href: '#',
  },
];
