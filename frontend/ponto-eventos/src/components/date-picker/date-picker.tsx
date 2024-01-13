import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface DatePickerProps {
  value: any;
  title: string;
  onChange: (value: any) => void;
  helperText: string;
  error: boolean;
}

export default function DatePickerComponent(props: DatePickerProps) {
  const { value, title, onChange, helperText, error } = props;

  return (
    <DatePicker
      value={value}
      label={title}
      onChange={onChange}
      slotProps={{
        textField: {
          helperText: helperText,
          error: error,
        },
      }}
    />
  );
}
