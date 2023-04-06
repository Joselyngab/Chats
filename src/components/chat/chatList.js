import React, { useEffect, useState } from "react";
import { UserOutlined } from '@ant-design/icons';
import {
    Input,
    Row,
    Col,
    Space,
    Avatar,
    List,
    Tooltip,
    message
} from "antd";
import { useHistory } from "react-router-dom";
import "./chat.less";
import Messages from "./messages";
import ChatService from "../../services/chats"
import moment from "moment";

const ChatList = () => {
    const [isBigScreen, setIsBigScreen] = useState(null);
    const [list, setList] = useState([]);
    const history = useHistory();
    const { Search } = Input;

    const edit = () => {
        console.log("edit");
        history.push("/profile");
    }

    /** get list of chats */

    async function getChats() {
        try {
            let resp = await ChatService.getChats();
            if (resp.status === 200) {
                resp.data && setList(resp.data)
            } else {
                message.error("An error has ocurred. Please try again")
            }

        } catch (error) {
            message.error("An error has ocurred. Please try again")
        }
    }

    useEffect(() => {
        getChats();
        window.innerWidth < 768 ? setIsBigScreen(false) : setIsBigScreen(true)
    }, [])

    return (
        <>
            <Row gutter={[0, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                <Col
                    xs={{ span: 22, offset: 1 }}
                    sm={{ span: 20, offset: 2 }}
                    md={{ span: 20, offset: 2 }}
                    lg={{ span: 20, offset: 2 }}
                    xl={{ span: 18, offset: 3 }}

                >
                    <Space direction="vertical" className="listContainer">
                        <Row style={{ paddingTop: "2%" }}>
                            <Col span={isBigScreen ? 12 : 24} style={{ overflowY: "auto", maxHeight: "80vh", paddingRight: "2%" }}>
                                <List
                                    style={{ overflowY: "auto" }}
                                    header={
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <Tooltip placement="topLeft" title="Edit Profile">
                                                <div style={{ display: "flex", flexDirection: "row", marginBottom: "15px", cursor: "pointer" }} onClick={() => edit()}>
                                                    <div>
                                                        <Avatar
                                                            size={{
                                                                xs: 24,
                                                                sm: 32,
                                                                md: 40,
                                                                lg: 50,
                                                                xl: 50,
                                                                xxl: 50,
                                                            }}
                                                            icon={<UserOutlined />}
                                                        />
                                                    </div>
                                                    <div style={{ padding: "3%" }}>
                                                        <h5>John Doe</h5>
                                                    </div>
                                                </div>
                                            </Tooltip>
                                            <div>
                                                <Search placeholder="Search" style={{ width: "90%" }} />
                                            </div>
                                        </div>
                                    }
                                    itemLayout="horizontal"
                                    dataSource={list}
                                    renderItem={(item, index) => (
                                        <List.Item style={{ cursor: "pointer" }}>
                                            <List.Item.Meta
                                                avatar={<Avatar icon={<UserOutlined />} />}
                                                title={item.destinaraty}
                                                description={
                                                    <div>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        </p><br />
                                                        <p style={{ textAlign: "right" }}>
                                                            {moment(item.lastMessage).format('MMMM Do YYYY, h:mm')}
                                                        </p>

                                                    </div>
                                                }
                                                onClick={() => {
                                                    !isBigScreen && history.push("/messages");
                                                }}
                                            />
                                        </List.Item>
                                    )}
                                />
                            </Col>
                            {
                                isBigScreen &&
                                <Col span={12} style={{ paddingLeft: "2%", overflowY: "auto" }}>
                                    <Messages />
                                </Col>
                            }


                        </Row>

                    </Space>
                </Col>
            </Row>
        </>

    );
};

export default ChatList;