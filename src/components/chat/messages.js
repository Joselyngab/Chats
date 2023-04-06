import React from "react";
import { UserOutlined, SendOutlined, CloseOutlined } from '@ant-design/icons';
import {
  Input,
  Button,
  Row,
  message,
  Avatar,
  Comment,
  Col,
  Space,
  Tooltip
} from "antd";
import { useHistory } from "react-router-dom";
import "./chat.less";


const ChatMessages = ({ children }) => (
  <Comment

    content={
      <>
        <div style={{ backgroundColor: "rgba(0,0,0,.25)", borderRadius: "5px", padding: "2%" }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h6 style={{ textAlign: "right" }}>HH:MM</h6>

        </div>

      </>
    }
  >
    {children}
  </Comment>
);

const sendMessage = () => {
  message.success('message sent');
  const inputDOM = document.getElementById('msg-input');
  inputDOM.value = '';

}

const AllMessages = () => {

  const history = useHistory();
  return <>
    <Row>
      <div style={{ display: "flex", flexDirection: "row", marginBottom: "15px", width: "100%", marginTop: window.innerWidth < 768 && "10px" }}>
        <div style={{ width: "10%" }}>
          <Avatar
            size={{
              xs: 24,
              sm: 32,
              md: 40,
              lg: 50,
              xl: 50,
              xxl: 50
            }}
            icon={<UserOutlined />}
          />
        </div>
        <div style={{ padding: window.innerWidth > 768 ? "3%" : "1%", width: "50%" }}>
          <h5>Jane Doe</h5>
        </div>

        {
          window.innerWidth < 768 &&

          <div style={{ width: "40%" }}>
            <Tooltip placement="topLeft" title="Go Back to Chats List">
              <Button
                style={{
                  display: "flex",
                  marginLeft: "auto",
                  alignItems: "center"
                }}
                size={{
                  xs: 24,
                  sm: 32,
                  md: 40,
                  lg: 64,
                  xl: 80,
                  xxl: 100,
                }}
                onClick={() => {

                  history.push("/chats")
                }}
                type="link"
                icon={<CloseOutlined />}
              />
            </Tooltip>
          </div>
        }
      </div>
    </Row>
    <Row style={{ maxHeight: "68vh", overflowY: "auto" }}>
      <ChatMessages>
        <ChatMessages></ChatMessages>
        <ChatMessages></ChatMessages>
        <ChatMessages></ChatMessages>
        <ChatMessages></ChatMessages>
      </ChatMessages>
    </Row>
    <Row style={{ marginTop: "1%" }}>
      <Input
        style={{ width: "100%", margin: "auto" }}
        size="middle"
        id="msg-input"
        placeholder="Write a message here"
        suffix={
          <Button
            type="link"
            onClick={() => sendMessage()}
            icon={<SendOutlined />}
          />
        }
      />
    </Row>
  </>
}


const Messages = () => {
  return (
    <>
      {
        window.innerWidth < 768 ?
          <Row gutter={[0, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
            <Col
              xs={{ span: 22, offset: 1 }}
              sm={{ span: 20, offset: 2 }}
              md={{ span: 20, offset: 2 }}
              lg={{ span: 20, offset: 2 }}
              xl={{ span: 18, offset: 3 }}
            >
              <Space direction="vertical" className="listContainer">
                <AllMessages></AllMessages>
              </Space>
            </Col>
          </Row>
          :

          <AllMessages></AllMessages>

      }

    </>

  );
};

export default Messages;