import { Typography, AppBar, Toolbar } from "@mui/material";

interface AppBarProps {
  title: string;
}

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
