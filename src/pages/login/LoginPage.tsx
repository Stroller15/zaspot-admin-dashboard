import { Layout, Card, Space } from "antd";
import { LockFilled } from "@ant-design/icons";

const LoginPage = () => {
  return (
    <>
      {/* <h1>Sign in</h1>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button>Login</button>
      <label htmlFor="remember-me">Remember me</label>
      <input type="checkbox" id="remember-me" />
      <a href="#">Forgot Password</a> */}

      <Layout
        style={{ display: "grid", placeItems: "center", height: "100vh" }}
      >
        <Card
          bordered={false}
          style={{ width: 300 }}
          title={
            <Space
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                fontSize: 20,
              }}
            >
              <LockFilled /> Sign in
            </Space>
          }
        >
          
        </Card>
      </Layout>
    </>
  );
};

export default LoginPage;
