import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormHelperText,
} from "@mui/material";
import TipoModel from "../../model/tipo";

interface SelectProps {
  id: string;
  value: any;
  title: string;
  onChange: (event: SelectChangeEvent<null>, child: React.ReactNode) => void;
  selectList: TipoModel[];
  helperText: string;
  error: boolean;
}

/**
 * Componente de select
 */
export default function SelectComponent(props: SelectProps): JSX.Element {
  const { id, value, title, onChange, selectList, helperText, error } = props;

  return (
    <FormControl fullWidth error={error}>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        {title}
      </InputLabel>
      <Select id={id} value={value} onChange={onChange} variant="standard">
        {selectList.map((item) => (
          <MenuItem key={item.sigla} value={item.sigla}>
            {item.descricao}
          </MenuItem>
        ))}
      </Select>

      {error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}
