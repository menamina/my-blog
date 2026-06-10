import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Nav from "./nav";

interface ViewContext {
  view: string;
  setView: (view: string) => void;
}

function App() {
  const [view, setView] = useState<string>("home");

  return (
    <Container>
      <Nav setView={setView} />
      <Outlet context={{ view, setView } satisfies ViewContext} />
    </Container>
  );
}

export default App;
