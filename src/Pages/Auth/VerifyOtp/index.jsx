import OtpForm from "../../../Shared/Forms/OtpForm";
import AuthWrapper from "../../../Shared/AuthWrapper";
import Images from "../../../HelperMethods/ImgConstants";

const VerifyOtp = () => {
  const handleSubmit = (pin) => {
    console.log("Entered OTP:", pin);
  };

  return (
    <div className="">
   
        <AuthWrapper
          AuthForm={OtpForm}
          OtpHandleSubmit={handleSubmit}
          headingText="Check your email"
          imgSrc = {Images.emailLogo}
          subHeading = "We sent a password reset link to johndoe@gmail.com"
          imageWidth= "28px"
        />
      </div>
    
  );
};

export default VerifyOtp;
