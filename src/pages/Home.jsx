import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import HomeFeed from "../components/HomeFeed";
import ExploreBar from "../components/ExploreBar";

const Home = () => {
  return (
    <div>
      <Layout title="Home / Twitter">
        <div className="h-screen flex flex-row">
          <Sidebar />

          <div className="flex-1">
            <HomeFeed />
          </div>

          <ExploreBar />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
