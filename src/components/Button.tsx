interface ButtonProps {
  label?: string;
  bgColor?: string;
  onClick: () => void; //function ko co return
}

function Button({
  label = "Button",
  bgColor = "bg-blue-600",
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} hover:bg-blue-700 text-white`}
    >
      {label}
    </button>
  );
}

export default Button;
