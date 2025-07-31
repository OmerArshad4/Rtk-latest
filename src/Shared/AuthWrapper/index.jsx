import { memo } from "react";
import Images from "../../HelperMethods/ImgConstants";
import StatusCard from "../StatusCard/Index";
import { FaRegFolderClosed } from "react-icons/fa6";
import CustomBtn from "../CustomBtn";

const AuthWrapper = (props) => {
  const { AuthForm, headingText, subHeading, imgSrc, imageWidth, resetId } = props;

  return (
    <div className="grid sm:grid-cols-1 min-h-screen overflow-hidden">
      <div className="h-full w-full flex  items-center justify-center">

        <div className="flex flex-col  items-center">
          <div className="text-center mx-auto space-y-1">
            <img
              src={imgSrc}
              alt="Logo"
              style={{ width: imageWidth || "200px" }}
              className="h-auto object-contain mx-auto"
            />
            <h1 className="text-[#181D27] mt-2 font-bold text-[24px] sm:text-[28px] md:text-[32px] leading-[48px]">
              {headingText}
            </h1>
            <p className="font-normal text-[#535862] my-2 text-[18px] sm:text-[18px] leading-[24px]">
              {subHeading}
            </p>
          </div>

          {AuthForm && <AuthForm length={5} />}
          {resetId &&
            <CustomBtn
              text="Continue"
              type="submit"
              className="w-full my-3 bg-[#2563EB] hover:bg-[#5c81d1] text-white"
            />
          }
        </div>
      </div>
    </div>

  );
};

export default memo(AuthWrapper);
