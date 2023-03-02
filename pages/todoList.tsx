import React from "react";
import Layout from "../components/common/Layout";
import CoinChart from "../components/todoList/CoinChart";

const TodoList = () => {
  return (
    <Layout>
      <h1>TODO리스트</h1>      
      <CoinChart />
    </Layout>
  );
};

export default TodoList;
