import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user, isLoading, isAuthenticated } = useUser();

  if (isLoading) return <Spinner />;
  if (!isAuthenticated && !isLoading) navigate("/login");

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
