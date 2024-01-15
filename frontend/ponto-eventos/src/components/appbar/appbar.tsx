import { Typography, AppBar, Toolbar } from "@mui/material";
import "./appbar.css";

interface AppBarProps {
  title: string;
}

/**
 * Componte que representa a barra no topo da aplicação
 */
export default function AppBarComponent(props: AppBarProps) {
  const { title } = props;

  return (
    <AppBar
      position="absolute"
      color="default"
      elevation={0}
      sx={{
        position: "relative",
        borderBottom: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
