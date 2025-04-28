import { createFileRoute } from '@tanstack/react-router';

import Canva from '../pages/canva';

export const Route = createFileRoute('/canva')({
  component: Canva,
});
