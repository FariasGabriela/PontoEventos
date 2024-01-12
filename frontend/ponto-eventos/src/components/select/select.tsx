import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

interface SelectProps {
  id: string;
  value: "" | null | undefined;
  title: string;
  onChange: (event: SelectChangeEvent<null>, child: React.ReactNode) => void;
  selectList: string[];
}

export default function SelectComponent(props: SelectProps) {
  const { id, value, title, onChange, selectList } = props;

  return (
    <FormControl fullWidth>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Tipo *
      </InputLabel>
      <Select
        id={id}
        value={value}
        label={title}
        onChange={onChange}
        variant="standard"
      >
        {selectList.map((item) => (
          <MenuItem value={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
