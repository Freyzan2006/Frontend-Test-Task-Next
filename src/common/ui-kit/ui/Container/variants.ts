import { cva } from "class-variance-authority";


export const containerVariants = cva(
  [
    "mx-auto" 
  ],
  {
    variants: {
        size: {
            sm: ["max-w-screen-sm", "px-4"],
            md: ["max-w-6xl", "px-4", "sm:px-6", "lg:px-8"],
            lg: ["max-w-screen-lg", "px-4"],
            xl: ["max-w-screen-xl", "px-4"],
            "2xl": ["max-w-screen-2xl", "px-4"]
        }
    },
    defaultVariants: {
        size: "md"
    }
  }
);