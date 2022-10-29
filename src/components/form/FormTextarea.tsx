import { Textarea, TTextarea } from "components/textarea";
import { useController } from "react-hook-form";

export const FormTextarea = ({ name, ...rest }: TTextarea) => {
  const { field } = useController({ name: name! });
  return <Textarea {...field} {...rest} />;
};
