import React from "react";
import { Button, ButtonProps } from "./ui/button";
import { Loader2 } from "lucide-react";

type LoadingButtonProps = {
  isLoading?: boolean;
} & ButtonProps;

const LoadingButton = ({
  isLoading,
  children,
  ...buttonProps
}: LoadingButtonProps) => {
  return (
    <Button disabled={isLoading} {...buttonProps}>
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
};

export default LoadingButton;
