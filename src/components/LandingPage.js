import React from 'react';
import { Card, Col, Row } from 'antd';
import { Flex, Layout } from 'antd';

import { headerStyle,layoutStyle, contentStyle, footerStyle } from 'C:/Users/Khushi Thapar/assistantbot/src/styles/app.js';
const { Header, Footer,  Content } = Layout;
const LandingPage = () => (
  <Flex gap="middle" wrap>
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>Slayer BOT</Header>
      <Layout>
        <Content style={contentStyle}>
        <Row gutter={16}>
    <Col span={8}>
      <Card title="Chat with Bot" bordered={false}>
        Click here 
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Chat with Friends" bordered={false}>
        click here
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Video chat with friend " bordered={false}>
        click here
      </Card>
    </Col>
  </Row>
        </Content>
      </Layout>
      <Footer style={footerStyle}>Made by Khushi Thapar</Footer>
    </Layout>
  </Flex>
);


export default LandingPage;