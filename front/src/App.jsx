import { useState, useEffect } from "react";
import { Outlet } from "react-dom";
import { Container } from "@mui/material";
import Nav from "./nav";

function App() {
  return (
    <Container>
      <Nav></Nav>
      <Outlet context={{}}></Outlet>
    </Container>
  );
}

export default App;
