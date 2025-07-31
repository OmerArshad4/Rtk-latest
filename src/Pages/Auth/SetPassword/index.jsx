import Images from "../../../HelperMethods/ImgConstants";
import AuthWrapper from "../../../Shared/AuthWrapper";
import SetPasswordForm from "../../../Shared/Forms/SetPasswordForm";

const ResetPassword = () => {
  return (
    <div className="">
      <div className="">
        <AuthWrapper
          AuthForm={SetPasswordForm}

          headingText="Set New Password"
          imgSrc={Images.lockLogo}
       
          imageWidth="28px"
        />
      </div>
    </div>
  );
};

export default ResetPassword;
