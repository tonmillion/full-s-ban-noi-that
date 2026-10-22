import { useEffect, useRef } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../redux/actions/userActions";

const AxiosSessionInterceptor: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const isRedirectingRef = useRef(false);

  useEffect(() => {
    const interceptorId = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        const errorMessage = error?.response?.data?.message;
        const isExpiredTokenError =
          errorMessage?.name === "TokenExpiredError" ||
          errorMessage?.message === "jwt expired";

        if (isExpiredTokenError && !isRedirectingRef.current) {
          isRedirectingRef.current = true;

          dispatch(logout());
          localStorage.removeItem("auth_token");
          localStorage.removeItem("user");
          localStorage.removeItem("selectedAddressBookId");

          if (location.pathname !== "/login") {
            toast.warning("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");
            history.replace("/login");
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(interceptorId);
    };
  }, [dispatch, history, location.pathname]);

  useEffect(() => {
    if (location.pathname === "/login") {
      isRedirectingRef.current = false;
    }
  }, [location.pathname]);

  return null;
};

export default AxiosSessionInterceptor;
