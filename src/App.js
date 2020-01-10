import React, { useRef, useState } from "react";
import { Container, Row, Col, Button } from 'reactstrap';
import { usePosition } from 'use-position';
import Maps from './Maps.js';
import Demo from "./Demo.jsx";

const App = () => {
  const innerRef = useRef();
  // const { latitude, longitude, timestamp, accuracy, error } = usePosition(true, { enableHighAccuracy: true });
  const { latitude, longitude, timestamp, accuracy, error } = usePosition(true);
  const getLocation = () => {
    innerRef.current && innerRef.current.getLocation();
  };

  return (
    <Container>
      <Row>
        <Col xs="6" sm="6"
          style={{
            fontSize: "large",
            fontWeight: "bold",
            marginTop: "2rem",
            textAlign: 'center',
          }}>
          {/* eslint-disable-next-line no-console*/}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Koordinat Memakai GeoLocation
          </div>
          <Demo onError={error => console.log(error)} ref={innerRef} />
          <Button color="danger" onClick={getLocation}>Getlocation</Button>
        </Col>
        <Col xs="6" sm="6"
          style={{
            fontSize: "large",
            fontWeight: "bold",
            marginTop: "2rem",
          }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Koordinat Memakai UsePosition Hook
          </div>
          {!latitude && !error && <><div>Trying to fetch location...</div><br /></>}
          latitude: {latitude}<br />
          longitude: {longitude}<br />
          timestamp: {timestamp}<br />
          accuracy: {accuracy && `${accuracy}m`}<br />
          error: {error}
          <Maps latitude={latitude} longitude={longitude} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
