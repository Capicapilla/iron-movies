import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { profile } from "../services/auth-api";

export function useUser() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    profile()
      .then((user) => {
        setUser(user);
        setLoading(false);
      })
      .catch((err) => {
        if (
          err.status === 401 &&
          location.pathname !== "/login" &&
          location.pathname !== "/register"
        ) {
          navigate("/login");
        }
        setLoading(false);
      });
  }, [navigate, location.pathname]);

  return {
    user,
    loading,
  };
}
