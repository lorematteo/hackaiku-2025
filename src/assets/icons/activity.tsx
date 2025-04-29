import React from 'react';

interface IconProps {
  className?: string;
}

const ActivityIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 4.5C11 4.22386 11.2239 4 11.5 4H17.5C17.7761 4 18 4.22386 18 4.5V10.5C18 10.7761 17.7761 11 17.5 11C17.2239 11 17 10.7761 17 10.5V5.95761L10.7024 14.0569C10.6174 14.1663 10.4908 14.2355 10.3528 14.2479C10.2148 14.2604 10.0778 14.2151 9.9745 14.1228L7.24133 11.68L2.84461 15.8623C2.64453 16.0526 2.32804 16.0447 2.13772 15.8446C1.9474 15.6445 1.95531 15.328 2.15539 15.1377L6.88616 10.6377C7.07487 10.4582 7.36977 10.4536 7.56396 10.6272L10.2416 13.0204L16.4779 5H11.5C11.2239 5 11 4.77614 11 4.5Z"
    />
  </svg>
);

export default ActivityIcon;
