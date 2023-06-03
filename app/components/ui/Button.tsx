import { ButtonHTMLAttributes, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "flex flex-1 justify-center items-center rounded-xl w-16  font-serif text-2xl font-bold shadow-md bg-lbutton",
  {
    variants: {
      mode: {
        light: "bg-lbutton",
        dark: "bg-dbutton",
      },
    },
    defaultVariants: {},
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  mode?: "light" | "dark";
}

const Button: FC<ButtonProps> = ({ className, title, mode, ...props }) => {
  return (
    <button className={buttonVariants({ mode, className })} {...props}>
      <h1 className="text-white">
        {title}, {mode}
      </h1>
    </button>
  );
};

export default Button;
