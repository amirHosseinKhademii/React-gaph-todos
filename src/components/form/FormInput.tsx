import { Input, TInput } from "components/input";
import { useController } from "react-hook-form";

export const FormInput = ({ name, ...rest }: TInput) => {
  const { field } = useController({ name: name! });
  return <Input {...field} {...rest} />;
};
