import React, { useEffect, useState } from "react";
import { UserOutlined, CameraOutlined, SaveOutlined, EditOutlined, CloseOutlined } from '@ant-design/icons';
import {
    Input,
    Button,
    Row,
    Col,
    Space,
    message,
    Avatar,
    Divider,
    Switch,
    Tooltip,
    Form,
} from "antd";
import WeatherSunny from '@2fd/ant-design-icons/lib/WeatherSunny';
import MoonWaningCrescent from '@2fd/ant-design-icons/lib/MoonWaningCrescent';
import { useHistory } from "react-router-dom";
import ConfigService from "../../services/config"
import "./profile.less";

const Profile = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [form] = Form.useForm();

    const [data, setData] = useState(null);
    const history = useHistory();

    async function handleInput(body) {
        console.log("body p", body);
        setData({
            ...body,
        });

        try {
            let resp = await ConfigService.changeConfig(body);
            resp.status === 200 && message.success("Saved");
            edit()
        } catch (error) {
            message.error("An Error has ocurred. Please try again");
        }
    };

    /** get user config */

    async function getConfig() {
        try {
            let resp = await ConfigService.getConfig();
            if (resp.status === 200) {
                console.log(resp.data);
                resp.data && setData(resp.data)
            } else {
                message.error("An error has ocurred. Please try again")
            }

        } catch (error) {
            message.error("An error has ocurred. Please try again")
        }
    }

    const edit = () => {
        setIsDisabled(!isDisabled);
    }

    const previewFile = () => {
        const preview = document.getElementById('img');
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();
      
        reader.addEventListener("load", function () {
            // convierte la imagen a una cadena en base6
            preview.src = reader.result;
            setData({...data, photo: reader.result });
            let body = {...data, photo: reader.result};
            postConfig(body);
            
        }, false);
      
        if (file) {
            reader.readAsDataURL(file);
        }
      }

    async function postConfig(body){
        try {
            let resp = await ConfigService.changeConfig(body);
            resp.status === 200 && message.success("Saved");
        } catch (error) {
            message.error("An Error has ocurred. Please try again");
        }
    }

    useEffect(() => {
        getConfig()
    }, [])

    return (
        <>
            <Row gutter={[0, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                <Col
                    xs={{ span: 20, offset: 2 }}
                    sm={{ span: 16, offset: 4 }}
                    md={{ span: 14, offset: 5 }}
                    lg={{ span: 10, offset: 7 }}
                    xl={{ span: 10, offset: 7 }}
                >
                    <Row justify="center" align="middle">
                        <Col span={24}>
                            <Space direction="vertical" className="container">
                                <div style={{ width: "100%" }}>
                                    <Tooltip placement="topLeft" title="Go Back to Chats">
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
                                            onClick={() => history.push("/chats")}
                                            type="link"
                                            icon={<CloseOutlined />}
                                        />
                                    </Tooltip>
                                </div>
                                <Avatar
                                    id='img'
                                    size={{
                                        xs: 24,
                                        sm: 32,
                                        md: 40,
                                        lg: 64,
                                        xl: 80,
                                        xxl: 100,
                                    }}
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        alignItems: "center",
                                        marginTop: "10px",
                                        
                                    }}
                                    src={data?.photo !== "" && data?.photo }
                                    icon={data?.photo === "" && <UserOutlined />}
                                />
                                <div style={{ paddingLeft: "15px" }}>
                                    <Button
                                        style={{
                                            display: "flex",
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            alignItems: "center",
                                            borderStyle: "none"

                                        }}
                                        size={{
                                            xs: 24,
                                            sm: 32,
                                            md: 40,
                                            lg: 64,
                                            xl: 80,
                                            xxl: 100,
                                        }}
                                        onClick={() => {document.getElementById('btn').click();}} 
                                        icon={<CameraOutlined />}
                                    />
                                    <input hidden id='btn' type="file" onChange={previewFile} icon={<CameraOutlined />} />
                                </div>
                                {
                                    isDisabled ?
                                        <div style={{ display: "flex", flexDirection: "row", justifyContent:"center" }}>
                                            
                                                <h3>{data?.username}</h3>
                                            
                                                <Button
                                                    size={{
                                                        xs: 24,
                                                        sm: 32,
                                                        md: 40,
                                                        lg: 64,
                                                        xl: 80,
                                                        xxl: 100,
                                                    }}
                                                    type="link"
                                                    onClick={() => edit()}
                                                    icon={<EditOutlined />}
                                                />
                                            
                                        </div>
                                        :
                                        <div style={{ display: "flex", width: "100%", margin: "auto" }}>
                                            <Form form={form} onFinish={handleInput} style={{ width: "100%", margin: "auto" }}>
                                                <Form.Item
                                                    name="username"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: "Username can't be blank",
                                                        }
                                                    ]}
                                                >
                                                    <Input
                                                        size="middle"
                                                        name="username"
                                                        suffix={
                                                            <Button
                                                                type="primary"
                                                                htmlType="submit"
                                                                icon={<SaveOutlined />}
                                                            />
                                                        }
                                                    />
                                                </Form.Item>
                                            </Form>
                                        </div>
                                }
                                <Divider style={{ margin: "0", marginBottom: "20px" }} />
                                <div>
                                    <div>
                                        <h5>Theme</h5>
                                    </div>
                                    <div>
                                        <WeatherSunny style={{ marginRight: "15px" }} />
                                        <Switch defaultChecked style={{ marginRight: "15px", backgroundColor: "rgba(0,0,0,.25)" }} />
                                        <MoonWaningCrescent />
                                    </div>
                                </div>
                                <Divider style={{ margin: "0", marginBottom: "20px" }} />
                            </Space>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>

    );
};

export default Profile;