import React from "react";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import Chart from "../components/CoinChart";

const TodoList = () => {
  return (
    <Layout>
      <h1>TODO리스트</h1>
      <Profile />
      <Chart />
    </Layout>
  );
};

export default TodoList;
