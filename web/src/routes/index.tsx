import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-2">
        Welcome to TanStack React Router
      </h1>
      <p>This is home Page</p>
    </div>
  );
}