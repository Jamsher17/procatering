import { ButtonHTMLAttributes, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "flex flex-1 justify-center items-center rounded-md border-2 border-black w-20 font-serif text-2xl font-bold",
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
