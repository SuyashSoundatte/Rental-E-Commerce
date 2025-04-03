import { Outlet, createRootRoute } from "@tanstack/react-router";
// import Navbar from "../components/ui/Navbar";
import NotFound from "../components/NotFound";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <>
      <div className="min-h-screen w-full">
        <Outlet />
      </div>
    </>
  );
}