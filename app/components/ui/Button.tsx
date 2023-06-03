import { ButtonHTMLAttributes, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "flex flex-1 justify-center items-center rounded-xl border border-slate-100 w-16  font-serif text-2xl font-bold shadow-md bg-lbutton",
  {
    variants: {
      color: {
        green: "",
        red: "",
        // green: "bg-green-500 text-white",
        // red: "bg-red-500 text-white",
      },
      mode: {
        light: "bg-lbutton",
        dark: "bg-dbutton",
      },
    },
    defaultVariants: {
      mode: "light",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  color?: "green" | "red";
  mode?: "light" | "dark";
}

const Button: FC<ButtonProps> = ({
  className,
  title,
  mode,
  color,
  ...props
}) => {
  return (
    <button className={buttonVariants({ color, mode, className })} {...props}>
      <h1 className="text-white">{title}</h1>
    </button>
  );
};

export default Button;
