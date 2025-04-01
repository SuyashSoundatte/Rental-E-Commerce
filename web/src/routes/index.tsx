import { Button } from "@/components/ui/button";
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
      <p className="text-gray-800 mb-3">
        This is a simple example of how to use TanStack React Router.
      </p>

      <div>
        <h1>Shadcn Setup check</h1>
        <Button className="bg-black text-white">Click me</Button>
      </div>
    </div>
  );
}