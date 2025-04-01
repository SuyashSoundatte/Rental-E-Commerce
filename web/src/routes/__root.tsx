import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from '../components/ui/Navbar';
import NotFound from "../components/ui/NotFound";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <>
      <Navbar />
      <hr className="border-gray-300" />
      <Outlet />
    </>
  );
}