import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';

interface Props {
  match?: {
    params: {
      applicationId: string;
    };
  };
}

const ApplicationLandingPage: React.FC<Props> = ({ match }) => {
  const { applicationId } = useParams<{ applicationId: string }>();

  return (
    <Container>
      <Row>
        <Col>
          <h1>Application Landing Page</h1>
          <p>Application ID: {applicationId}</p>
          <Nav variant="tabs" defaultActiveKey="info">
            <Nav.Item>
              <Nav.Link eventKey="info">Info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="settings">Settings</Nav.Link>
            </Nav.Item>
            {/* Add more tabs here */}
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="info">
              {/* Render application info here */}
            </Tab.Pane>
            <Tab.Pane eventKey="settings">
              {/* Render application settings here */}
            </Tab.Pane>
            {/* Add more tabs here */}
          </Tab.Content>
        </Col>
      </Row>
    </Container>
  );
};

export default ApplicationLandingPage;