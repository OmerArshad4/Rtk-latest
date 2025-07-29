import Images from "../../../HelperMethods/ImgConstants";
import AuthWrapper from "../../../Shared/AuthWrapper";
import ForgotPasswordForm from "../../../Shared/Forms/ForgetPasswordForm";

const ForgotPassword = () => {
  return (
      <div className="">
        <AuthWrapper
          AuthForm={ForgotPasswordForm}
          headingText="Forgot password?"
          imgSrc = {Images.forgotLogo}
          subHeading = "No worries, we’ll send you reset instructions."
          imageWidth= "28px"
        ></AuthWrapper>
      </div>
 
  );
};

export default ForgotPassword;
