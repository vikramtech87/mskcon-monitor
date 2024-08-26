import { useState } from "react";

const useFormHandler = <T>(
  formHander: (formData: T) => Promise<boolean>
): [boolean, (formData: T) => Promise<void>] => {
  const [isBusy, setIsBusy] = useState(false);

  const formHandlerWithBusyState = async (formData: T) => {
    setIsBusy(true);
    const isSuccess = await formHander(formData);
    if (!isSuccess) {
      setIsBusy(false);
    }
  };

  return [isBusy, formHandlerWithBusyState];
};

export default useFormHandler;
