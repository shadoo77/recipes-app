import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

function MyErrorBoundary({ error }: { error: unknown }) {
  return (
    <div>
      <h2 className="text-red-500">Custom error!</h2>
      <pre>{String(error)}</pre>
    </div>
  );
}

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  errorComponent: MyErrorBoundary,
  notFoundComponent: () => (
    <div className="p-5 bg-red-500 text-white">
      <h3>Page Not Found</h3>
      <Link className="underline" to="/">
        Go home
      </Link>
    </div>
  ),
});
