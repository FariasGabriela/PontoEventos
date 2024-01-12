import { Grow } from "@mui/material";

interface TransitionsProps {
    children: JSX.Element;
}

export default function Transitions(props: TransitionsProps) {
  return (
        <Grow
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          {...{ timeout: 1000 }}
        >
          {props.children}
        </Grow>

  );
}
