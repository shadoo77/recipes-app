import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="p-5 bg-amber-500 text-blue-800">
      <h3>Welcome Home!</h3>
    </div>
  );
}
