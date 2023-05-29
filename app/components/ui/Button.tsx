import { ButtonHTMLAttributes, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "flex flex-1 justify-center items-center rounded-md border border-red-900 w-16 bg-yellow-5 font-serif text-2xl font-bold",
  {
    variants: {
      color: {
        green: "",
        red: "",
      },
    },
    defaultVariants: {
      color: "green",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  color: "green" | "red";
}

const Button: FC<ButtonProps> = ({ className, title, color, ...props }) => {
  return (
    <button className={buttonVariants({ color, className })} {...props}>
      {title}
    </button>
  );
};

export default Button;
