import { type createRouter, RouterProvider } from '@tanstack/react-router';

type AppProps = { router: ReturnType<typeof createRouter> };

const App = ({ router }: AppProps) => {
  return <RouterProvider router={router} />;
};

export default App;
