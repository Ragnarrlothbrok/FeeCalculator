import { Layout, Menu } from "antd";
import { feeStructure, coursesList, levelsList } from "./jsonData/feeData";
import FeeCalculator from "./FeesCalculator";

function App() {
  return (
    <Layout>
      <Layout.Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Fees Calculator</Menu.Item>
        </Menu>
      </Layout.Header>
      <Layout.Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <FeeCalculator feeStructure={feeStructure} coursesList={coursesList} levelsList={levelsList} />
        </div>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: "center" }}>
        Fees Calculator ©2023 Created by Apoorv Tiwari
      </Layout.Footer>
    </Layout>
  );
}

export default App;
