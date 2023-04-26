import React from "react";
import styled from "styled-components";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <Container>
      <Title></Title>
      <Text>
        <div>404</div>
        <div>Error al cargar la pagina</div>
      </Text>
      {error && <ErrorText>{error.statusText || error.message}</ErrorText>}
    </Container>
  );
};

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2em;
  background: var(--color5);
`;

const Title = styled.h1`
  width: 160px;
  height: 185px;
  position: relative;
  background: #fff;
  border-radius: 100px 100px 0 0;

  &:after {
    content: "";
    position: absolute;
    width: 100px;
    height: 125px;
    left: 50%;
    top: 25px;
    transform: translateX(-50%);
    background-image: radial-gradient(circle, #000 48%, transparent 55%),
      radial-gradient(circle, #000 48%, transparent 55%),
      radial-gradient(circle, #fff 30%, transparent 45%),
      radial-gradient(circle, #000 48%, transparent 51%),
      linear-gradient(#000 20px, transparent 0),
      linear-gradient(#cfecf9 60px, transparent 0),
      radial-gradient(circle, #cfecf9 50%, transparent 51%),
      radial-gradient(circle, #cfecf9 50%, transparent 51%);
    background-repeat: no-repeat;
    background-size: 16px 16px, 16px 16px, 10px 10px, 42px 42px, 12px 3px,
      50px 25px, 70px 70px, 70px 70px;
    background-position: 25px 10px, 55px 10px, 36px 44px, 50% 30px, 50% 85px,
      50% 50px, 50% 22px, 50% 45px;
    animation: faceLift 3s linear infinite alternate;
  }

  &:before {
    content: "";
    position: absolute;
    width: 140%;
    height: 125px;
    left: -20%;
    top: 0;
    background-image: radial-gradient(circle, #fff 48%, transparent 50%),
      radial-gradient(circle, #fff 48%, transparent 50%);
    background-repeat: no-repeat;
    background-size: 65px 65px;
    background-position: 0px 12px, 145px 12px;
    animation: earLift 3s linear infinite alternate;
  }

  @keyframes faceLift {
    0% {
      transform: translateX(-60%);
    }

    100% {
      transform: translateX(-30%);
    }
  }

  @keyframes earLift {
    0% {
      transform: translateX(10px);
    }

    100% {
      transform: translateX(0px);
    }
  }
`;

const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  font-size: 2em;
  font-weight: bold;
  color: #ffff;
`;

const ErrorText = styled(Text)`
  text-transform: uppercase;
  font-weight: bold;
  color: var(--color1);
`;

export default NotFound;