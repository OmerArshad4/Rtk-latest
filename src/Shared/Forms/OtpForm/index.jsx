import { Formik, Form } from "formik";
import OtpInput from "react-otp-input";
import CustomBtn from "../../CustomBtn";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyEmailOtp } from "../../../Redux/features/Auth/authApi";
import { VERIFY_OTP_INITIAL_VALUES } from "../../../Validations/InitialValues";
import { VERIFY_OTP_VALIDATION_SCHEMA } from "../../../Validations/Validations";
import { VERIFY_OTP_API_URL } from "../../../Utils/constant";

const OtpForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location?.state?.email || "johndoe@gmail.com";

  const [showResendLink, setShowResendLink] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowResendLink(true), 10000);
    return () => clearTimeout(timer);
  }, []);

const handleOpenEmailApp = () => {
 
  window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
};

  const handleResend = () => {
    alert("Resending email...");
    // Logic to resend OTP email
  };

  return (
    <>
      <div className="flex items-center justify-center px-4 w-screen py-3 h-full">
        <div className="w-full max-w-[500px] mx-auto p-3">

          <div className="mb-2">
              <p className="text-sm text-center text-gray-600 mb-6">
          We sent a password reset link to <br />
          <span className="font-medium text-gray-900">{email}</span>
        </p>
          </div>

          <div className="flex justify-end items-center mb-4">

          </div>
          <CustomBtn
            text="Open email app"
            handleOnClick ={handleOpenEmailApp}
            className="w-full"

          />
        
          <div className="mt-4 text-center text-sm text-gray-600">
            Didn’t receive the email?{" "}
            {showResendLink ? (
              <button
                onClick={handleResend}
                className="text-blue-600 hover:underline font-medium"
              >
                Click to resend
              </button>
            ) : (
              <span className="text-gray-400">Wait a moment...</span>
            )}
          </div>
            <div className="flex items-center justify-center cursor-pointer">
                  <button
                    onClick={() => navigate("/")}
                    className="mt-6 text-sm text-center text-[#535862] hover:text-gray-900 flex items-center gap-1"
                  >
                    {/* SVG Arrow */}
                    <svg
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3334 7.00033H1.66675M1.66675 7.00033L7.50008 12.8337M1.66675 7.00033L7.50008 1.16699"
                        stroke="#535862"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    Back to log in
                  </button>
                </div>


        </div>
      </div>
    </>
  );
};

export default OtpForm;
