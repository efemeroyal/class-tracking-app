import React from "react";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import ActionCards from "./components/ActionCards";
import StatCard from "./components/StatsCard";
import { FaBookOpen, FaRegCalendarAlt, FaUsers } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import StatsCards from "./components/StatsCards";

export default function App() {
  return (
    <>
      <Header role="Lecturer" name="Dr. Ahmad" roleID="STAFF001" />
      <MainContainer>
        <ActionCards />
        <StatsCards />
      </MainContainer>
    </>
  );
}
