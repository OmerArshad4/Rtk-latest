import { Formik } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CustomBtn from "../../../Shared/CustomBtn";
import InputField from "../../../Shared/InputField";
import { useLocation, useNavigate } from "react-router-dom";
import { SET_PASSWORD_API_URL } from "../../../Utils/constant";
import { setNewPassword } from "../../../Redux/features/Auth/authApi";
import { NEW_PASSWORD_INITIAL_VALUES } from "../../../Validations/InitialValues";
import { NEW_PASSWORD_VALIDATION_SCHEMA } from "../../../Validations/Validations";

const SetPasswordForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    // !location?.state?.email && navigate("/");
  }, []);

  const handleSubmit = (values) => {
    const data = {
      apiEndpoint: SET_PASSWORD_API_URL,
      requestData: JSON.stringify(values),
    };

    dispatch(setNewPassword(data)).then((res) => {
      if (res.type === "setNewPassword/fulfilled") {
        navigate("/");
      }
    });
  };

  return (
    <div className="flex items-center justify-center px-4 w-screen  h-full">
      <div className="w-full max-w-[500px] mx-auto p-3">
        <div>
          <p className="font-normal text-center text-[#535862] text-lg mb-2">
            Your new password must be different to <br />
            <span className="font-normal text-[#535862]">previously used passwords. </span>
          </p>
        </div>
        <div className="w-full">
          <Formik
            initialValues={{
              ...NEW_PASSWORD_INITIAL_VALUES,
              email: location?.state?.email,
            }}
            validationSchema={NEW_PASSWORD_VALIDATION_SCHEMA}
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
                    type="password"
                    required={true}
                    name="newPassword"
                    label={"Password"}
                    value={values.newPassword}
                    onBlurHandle={handleBlur}
                    placeholder="Enter new password"
                    onChangeHandle={handleChange}
                    className="w-full mb-0 p-2 border rounded"
                    error={
                      errors.newPassword && touched.newPassword
                        ? errors.newPassword
                        : ""
                    }
                  />
                </div>
                <div className="mb-3">
                  <InputField
                    type="password"
                    required={true}
                    name="confirmPassword"
                    label={"Confirm Password"}
                    value={values.confirmPassword}
                    onBlurHandle={handleBlur}
                    placeholder="Confirm your password"
                    onChangeHandle={handleChange}
                    className="w-full mb-0 p-2 border rounded"
                    error={
                      errors.confirmPassword && touched.confirmPassword
                        ? errors.confirmPassword
                        : ""
                    }
                  />
                </div>

                <div className="mt-6">
                  <CustomBtn
                    text="Reset password"
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
  );
};

export default SetPasswordForm;
