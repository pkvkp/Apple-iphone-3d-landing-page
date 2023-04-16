import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import { Model } from "../assets/3D-Model/Scene";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  z-index: 1;
  background-color: transparent;
`;

const PhoneModel = () => {
  return (
    <Container>
      <Canvas>
        <ambientLight intensity={1.2} />
        <directionalLight intensity={0.4} />
        <Environment preset="night" />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        {/* <OrbitControls/> */}
      </Canvas>
    </Container>
  );
};

export default PhoneModel;
