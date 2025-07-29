import AuthWrapper from "../../../Shared/AuthWrapper";
import SignInForm from "../../../Shared/Forms/SignInForm";
import Images from "../../../HelperMethods/ImgConstants";
const SignIn = () => {
  return (
    <div>
      <AuthWrapper imgSrc={Images.botLogo} AuthForm={SignInForm} />
    </div>
  );
};

export default SignIn;
