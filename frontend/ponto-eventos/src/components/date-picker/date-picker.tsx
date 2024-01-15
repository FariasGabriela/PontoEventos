import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface DatePickerProps {
  value: any;
  title: string;
  onChange: (value: any) => void;
  helperText?: string;
  error?: boolean;
  maxDate?: string | number | Date | Object;
  minDate?: string | number | Date | Object;
}

/**
 * Componente de data com calendario
 */
export default function DatePickerComponent(props: DatePickerProps) {
  const { value, title, onChange, helperText, error, maxDate, minDate } = props;

  return (
    <DatePicker
      value={value}
      label={title}
      maxDate={maxDate}
      minDate={minDate}
      onChange={onChange}
      slotProps={{
        textField: {
          helperText: helperText,
          error: error,
          variant: "standard",
        },
      }}
    />
  );
}
