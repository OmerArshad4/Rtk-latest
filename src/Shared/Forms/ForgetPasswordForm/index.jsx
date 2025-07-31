import { Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomBtn from "../../../Shared/CustomBtn";
import { HiOutlineEnvelope } from "react-icons/hi2";
import InputField from "../../../Shared/InputField";
import { FORGET_PASSWORD_API_URL } from "../../../Utils/constant";
import { forgotPassword } from "../../../Redux/features/Auth/authApi";
import { FORGOT_PASSWORD_SCHEMA } from "../../../Validations/Validations";
import { FORGOT_PASSWORD_INITIAL_VALUES } from "../../../Validations/InitialValues";

const ForgotPasswordForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values) => {
    navigate("/verifyOtp", { state: { email: values.email } });
    const data = {
      apiEndpoint: FORGET_PASSWORD_API_URL,
      requestData: JSON.stringify(values),
    };

    // dispatch(forgotPassword(data)).then((res) => {
    //      navigate("/verifyOtp", { state: { email: values?.email } });
    //   if (res.type === "forgotPassword/fulfilled") {
    //     console.log(res?.payload?.data);
    //     navigate("/verifyOtp", { state: { email: values?.email } });
    //   }
    // });
  };

  return (
    <>
      <div className="flex items-center justify-center px-4 w-screen py-5 h-full">
        <div className="w-full max-w-[500px] mx-auto p-3">

          <div className="w-full">
            <Formik
              validationSchema={FORGOT_PASSWORD_SCHEMA}
              initialValues={FORGOT_PASSWORD_INITIAL_VALUES}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit} className="">
                  <div className="mb-3">
                    <InputField
                      type="email"
                      name="email"
                      label={"Email"}
                      required={true}
                      value={values.email}
                      placeholder="Enter email"
                      onBlurHandle={handleBlur}
                      onChangeHandle={handleChange}
                      className="w-full mb-0 p-2 border rounded"
                      icon={<HiOutlineEnvelope className="text-gray-600" />}
                      error={errors.email && touched.email ? errors.email : ""}
                    />
                  </div>

                  <div className="mt-6">
                    <CustomBtn
                      text="Send verification"
                      type={"submit"}
                      className="w-full"
                    />
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
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
