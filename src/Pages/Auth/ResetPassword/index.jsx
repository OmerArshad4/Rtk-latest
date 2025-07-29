import OtpForm from "../../../Shared/Forms/OtpForm";
import AuthWrapper from "../../../Shared/AuthWrapper";
import Images from "../../../HelperMethods/ImgConstants";
import CustomBtn from "../../../Shared/CustomBtn";

const ResetForm = () => {
  const handleSubmit = (pin) => {
    console.log("Entered OTP:", pin);
  };

  return (
    <div className="">

      <AuthWrapper

        OtpHandleSubmit={handleSubmit}
        headingText="Password reset"
        imgSrc={Images.checkLogo}
        subHeading="Your password has been successfully reset. Click below to log in magically."
        imageWidth="28px"
        resetId= {true}
      />
     
        
    </div>
    

  );
};

export default ResetForm;
