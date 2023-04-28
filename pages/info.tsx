import React from "react";
import Layout from "../components/common/Layout";
import Infomation from "../components/info/info";
const TodoList = () => {
  return (
    <Layout>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Infomation />
        </div>
      </section>
    </Layout>
  );
};

export default TodoList;
