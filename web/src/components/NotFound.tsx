import { useNavigate } from "@tanstack/react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-2">Page Not Found</h1>
      <button onClick={() => navigate({ to: "/" })}>Start Over</button>
    </div>
  );
};

export default NotFound;