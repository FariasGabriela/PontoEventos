import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import InstituicaoModel from "../../model/instituicao";

interface AutoCompleteProps {
  id: string;
  value: any;
  title: string;
  onChange: any;
  selectList: InstituicaoModel[];
  helperText: string;
  error: boolean;
}

export default function AutoCompleteComponente(props: AutoCompleteProps) {
  const { id, value, title, onChange, selectList, helperText, error } = props;

  const defaultProps = {
    options: selectList,
    getOptionLabel: (option: InstituicaoModel) => option.name || "",
  };

  return (
    <Autocomplete
      {...defaultProps}
      id={id}
      value={value}
      onChange={onChange}
      renderInput={(params) => (
        <TextField
          {...params}
         // onBlur={onChange}
          variant="standard"
          helperText={helperText}
          error={error}
          label={title}
        />
      )}
    />
  );
}
