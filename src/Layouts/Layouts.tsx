import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "@chakra-ui/react";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header/>
      <main className="main">
        <Container maxW={{base: "md", "md": "xl", "lg": "4xl", "xl": "7xl"}}>
          <Outlet/>
        </Container>
      </main>
    </>
  );
};

export default MainLayout;