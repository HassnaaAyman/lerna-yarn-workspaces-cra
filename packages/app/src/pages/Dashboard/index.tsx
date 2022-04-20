/** @format */

import React from 'react';
import { Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Container, StyledCard, StyledRow } from './style';
import { Typography } from 'antd';

const { Title } = Typography;

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>
        Picksell Operations <Title level={5}> Administrative Dashboard</Title>
      </Title>
      <StyledRow gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className='gutter-row' span={8}>
          <StyledCard bordered onClick={() => navigate('/orders')}>
            Orders
          </StyledCard>
        </Col>
        <Col className='gutter-row' span={8}>
          <StyledCard bordered onClick={() => navigate('/dropshippers')}>
            Drop Shippers
          </StyledCard>
        </Col>
        <Col
          className='gutter-row'
          span={8}
          onClick={() => navigate('/shipping')}>
          <StyledCard bordered>Shipping</StyledCard>
        </Col>
      </StyledRow>

      <StyledRow gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className='gutter-row' span={8}>
          <StyledCard bordered onClick={() => navigate('/profile')}>
            Profile Configration
          </StyledCard>
        </Col>
        <Col className='gutter-row' span={8}>
          <StyledCard bordered onClick={() => navigate('/transactions')}>
            Financial Transaction
          </StyledCard>
        </Col>
        <Col className='gutter-row' span={8}>
          <StyledCard bordered onClick={() => navigate('/access-management')}>
            Access Management
          </StyledCard>
        </Col>
      </StyledRow>
    </Container>
  );
};

export default Dashboard;
