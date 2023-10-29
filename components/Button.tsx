"use client"

type ButtonProp = {
  type: "button" | "submit" | "reset" | undefined;
  label: string;
  onPress?: () => void;
};
const Button = ({ type = "button", label, onPress }: ButtonProp) => {
  return (
    <button
      type={type}
      onClick={onPress}
      className="bg-red-600 w-full hover:bg-red-700 transition cursor-pointer text-white font-medium py-2 px-4 text-sm rounded-md"
    >
      {label}
    </button>
  );
};

export default Button;
