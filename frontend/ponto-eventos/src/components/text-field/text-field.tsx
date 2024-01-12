import { FormControl, TextField } from "@mui/material";

interface SelectProps {
  id: string;
  value: "" | null | undefined;
  title: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export default function TextFieldComponent(props: SelectProps) {
  const { id, value, title, onChange } = props;

  return (
    <FormControl fullWidth>
      <TextField
        required
        id={id}
        label={title}
        fullWidth
        autoComplete="given-name"
        variant="standard"
        value={value}
        onChange={onChange}
      />
    </FormControl>
  );
}
