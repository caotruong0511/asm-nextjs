import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { User } from "../../models/users";
import { RootState } from "../../redux/store";

type PrivateRouteProps = {
  children: any;
  roleAccept?: number;
};

const PrivateRoute = ({ children, roleAccept = 1 }: PrivateRouteProps) => {
  const isLogged = useSelector((state: RootState) => state.auth.isLogged);
  const currentUser = useSelector((state: RootState) => state.auth.currentUser) as User;
  const router = useRouter();

  if (!isLogged) {
    router.push("/signin");
    return;
  } else if (currentUser.role !== 1 && currentUser.role !== roleAccept) {
    router.push("/");
    return;
  }

  return children;
};

export default PrivateRoute;
