import { FormControl, TextField } from "@mui/material";

interface SelectProps {
  id: string;
  value: any;
  title: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  helperText: string;
  error: boolean;
}

export default function TextFieldComponent(props: SelectProps) {
  const { id, value, title, onChange, helperText, error } = props;

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
        helperText={helperText}
        error={error}
      />
    </FormControl>
  );
}
