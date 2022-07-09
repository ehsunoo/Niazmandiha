import React, { useState } from "react";
import Cards from "../components/Cards";
import HomeSidebar from "../components/HomeSidebar";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <Layout>
      <Sidebar>
        <HomeSidebar />
      </Sidebar>
      <Cards />
    </Layout>
  );
}

export default Home;
