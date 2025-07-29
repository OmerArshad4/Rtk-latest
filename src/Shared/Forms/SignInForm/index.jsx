import { Formik } from "formik";
import CustomBtn from "../../CustomBtn";
import InputField from "../../InputField";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_API_URL } from "../../../Utils/constant";
import { login } from "../../../Redux/features/Auth/authApi";
import { SIGNIN_INITIAL_VALUES } from "../../../Validations/InitialValues";
import { SIGNIN_VALIDATION_SCHEMA } from "../../../Validations/Validations";
import Images from "../../../HelperMethods/ImgConstants";

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginSubmit = (values) => {
    const dummyUser = {
      email: "admin@gmail.com",
      password: "Password@1",
    }; if (
      values.email === dummyUser.email &&
      values.password === dummyUser.password
    ) {

      navigate("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }

    const data = {
      apiEndpoint: LOGIN_API_URL,
      requestData: JSON.stringify(values),
    };

    // dispatch(login(data)).then((res) => {
    //   if (res?.type === "login/fulfilled") {
    //     navigate("/admin/dashboard");
    //   }
    // });
  };

  return (
    <>
      <div className="flex items-center justify-center px-4 w-screen py-5 h-full">
             <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3 p-3">
        

            <h3 className=" font-semibold text-2xl sm:text-2xl   md:text-[32px]  mb-2  text-[#181D27] text-center">
              Log in to your account
            </h3>
         

          <Formik
            initialValues={SIGNIN_INITIAL_VALUES}
            validationSchema={SIGNIN_VALIDATION_SCHEMA}
            onSubmit={(values) => {
              handleLoginSubmit(values);
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
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <InputField
                    type="email"
                    name="email"
                    label={"Email"}
                    required={true}
                    value={values.email}
                    placeholder="Enter email"
                    onBlurHandle={handleBlur}
                    onChangeHandle={handleChange}
                    className="w-full p-2 border rounded"
                    icon={<HiOutlineEnvelope className="text-gray-600" />}
                    error={errors.email && touched.email ? errors.email : ""}
                  />
                </div>

                <div className="mb-4">
                  <InputField
                    type="password"
                    name="password"
                    required={true}
                    label={"Password"}
                    value={values.password}
                    placeholder="Enter password"
                    onBlurHandle={handleBlur}
                    onChangeHandle={handleChange}
                    className="w-full p-2 border rounded"
                    error={
                      errors.password && touched.password ? errors.password : ""
                    }
                  />
                </div>

                <CustomBtn
                  text="Sign in"
                  type="submit"
                  className="w-full bg-[#2563EB] hover:bg-[#5c81d1] text-white py-3 rounded"
                />
                <div className="flex items-center justify-between my-4 text-sm">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox rounded" />
                    <span className="text-sm font-medium text-[#414651]">Remember me</span>
                  </label>
                  <Link to="/forgotPassword">
                    <p className="text-sm font-semibold text-[#2563EB]">
                      Forgot password?
                    </p>
                  </Link>
                </div>

              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
