import * as React from 'react';

export default function KnowledgeBankIcon({ className = '' }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M13 2H3V3.5H13V2Z" />
      <path d="M1.89941 4H13.8994V5.5H1.89941V4Z" />
      <path d="M1 5.99958H15V13.9996H1V5.99958ZM9 8.49958C9 7.9473 8.55228 7.49958 8 7.49958L4 7.49958C3.44772 7.49958 3 7.9473 3 8.49958C3 9.05187 3.44772 9.49958 4 9.49958L8 9.49958C8.55228 9.49958 9 9.05187 9 8.49958ZM12 12.4996C12.5523 12.4996 13 12.0519 13 11.4996C13 10.9473 12.5523 10.4996 12 10.4996L4 10.4996C3.44772 10.4996 3 10.9473 3 11.4996C3 12.0519 3.44772 12.4996 4 12.4996L12 12.4996Z" />
    </svg>
  );
}
