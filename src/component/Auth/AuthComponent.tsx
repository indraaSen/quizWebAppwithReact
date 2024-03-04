import SignInComponent from "./SignInComponent/SignInComponent";
import SignUpComponent from "./SignUpComponent/SignUpComponent";
import { useSelector } from "react-redux";

const AuthComponent = () => {
  const isSignUp = useSelector((state: any) => state.login.isSignUp);
  return <>{isSignUp ? <SignUpComponent /> : <SignInComponent />}</>;
};

export default AuthComponent;
