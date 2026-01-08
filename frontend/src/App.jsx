import React from "react";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import ActionCards from "./components/ActionCards";

export default function App() {
  return (
    <>
      <Header role="Lecturer" name="Dr. Ahmad" roleID="STAFF001" />
      <MainContainer>
        <ActionCards />
      </MainContainer>
    </>
  );
}
