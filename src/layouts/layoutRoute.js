import React from "react";
import { Route } from "react-router-dom";
import "antd/dist/antd.less";
import { Layout } from "antd";
const { Content } = Layout;
const PageLayout = ({ children }) => (
  <Layout style={{ minHeight: "100vh" ,background:"#00001e" }}>
    <Content style={{  width: "100%" }}>
      <div>{children}</div>
    </Content>
  </Layout>
);

const LayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <PageLayout>
          <Component {...props} />
        </PageLayout>
      )}
    />
  );
};

export default LayoutRoute;
