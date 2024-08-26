import React from "react";

type FormContainerProps = {
  children: React.ReactNode;
};

const FormContainer = ({ children }: FormContainerProps) => {
  return <div className="max-w-md w-full mx-auto px-2 sm:px-0">{children}</div>;
};

export default FormContainer;
