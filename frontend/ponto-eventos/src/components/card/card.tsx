import { Typography, Container, Paper } from "@mui/material";
import "./card.css";
import Transitions from "../transitions/transitions";

interface PaperProps {
  title: string;
  children: JSX.Element;
}

/**
 * Componente de card
 */
export default function CardComponent(props: PaperProps) {
  const { title } = props;
  return (
    <Container
      component="main"
      maxWidth="sm"
      style={{ margin: "0 !important" }}
    >
      <Transitions>
        <Paper
          variant="outlined"
          className="card-style"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            {title}
          </Typography>

          {props.children}
        </Paper>
      </Transitions>
    </Container>
  );
}
