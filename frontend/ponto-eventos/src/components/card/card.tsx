import { Typography, Container, Paper } from "@mui/material";

interface PaperProps {
  title: string;
  children: JSX.Element;
}

export default function PaperComponent(props: PaperProps) {
  const { title } = props;
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center">
          {title}
        </Typography>

        {props.children}
      </Paper>
    </Container>
  );
}
