import { memo } from "react";

const FillBtn = (props) => {
  const {
    text,
    className,
    handleOnClick,
    type = "button",
    disabled = false,
  } = props;

  return (
    <button
      type={type}
      disabled={disabled} 
      onClick={handleOnClick}
      className={`bg-[#2563EB] hover:bg-[#5c81d1] text-white cursor-pointer rounded-md font-semibold md:py-3 py-2 md:px-6 px-4  shadow-md
          disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-300 ease-in-out ${className} rounded-lg`}
    >
      {text}
    </button>
  );
};

export default memo(FillBtn);
