import React from "react";
import FormContainer from "./layout/form-container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type FormCardProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
};

const FormCard = ({ children, title, description }: FormCardProps) => {
  return (
    <FormContainer>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
          <CardContent>{children}</CardContent>
        </Card>
      </div>
    </FormContainer>
  );
};

export default FormCard;
