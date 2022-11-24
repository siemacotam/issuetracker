import styled, { keyframes } from "styled-components";

export const AnimationWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  z-index: 1000;
`;

const rotateCircle = keyframes`
0% {
    transform: rotate(-45deg);
}
5% {
    transform: rotate(-45deg);
}
12% {
    transform: rotate(-405deg);
}
100% {
    transform: rotate(-405deg);
}
`;

const iconLineTip = keyframes`
0% {
    width: 0;
    left: 1px;
    top: 19px;
}
54% {
    width: 0;
    left: 1px;
    top: 19px;
}
70% {
    width: 50px;
    left: -8px;
    top: 37px;
}
84% {
    width: 17px;
    left: 21px;
    top: 48px;
}
100% {
    width: 25px;
    left: 14px;
    top: 45px;
}
`;

const iconLineLong = keyframes`
0% {
    width: 0;
    right: 46px;
    top: 54px;
}
65% {
    width: 0;
    right: 46px;
    top: 54px;
}
84% {
    width: 55px;
    right: 0px;
    top: 35px;
}
100% {
    width: 47px;
    right: 8px;
    top: 38px;
}
`;

export const SuccessCheckmark = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto;
  position: absolute;
  left: calc(50% - 40px);
  top: calc(50% - 57.5px);
`;

export const CheckIcon = styled.div`
  margin-top: 10px;
  width: 80px;
  height: 80px;
  position: relative;
  border-radius: 50%;
  box-sizing: content-box;
  border: 4px solid #4caf50;

  &::before {
    top: 3px;
    left: -2px;
    width: 30px;
    transform-origin: 100% 50%;
    border-radius: 100px 0 0 100px;
  }

  &::after {
    top: 0;
    left: 30px;
    width: 60px;
    transform-origin: 0 50%;
    border-radius: 0 100px 100px 0;
    animation: ${rotateCircle} 11.25s ease-in;
  }

  &::before,
  &::after {
    content: "";
    height: 100px;
    position: absolute;
    background: #ffffff;
    transform: rotate(-45deg);
  }
`;

export const IconLineTip = styled.span`
  height: 5px;
  background-color: #4caf50;
  display: block;
  border-radius: 2px;
  position: absolute;
  z-index: 10;
  top: 46px;
  left: 14px;
  width: 25px;
  transform: rotate(45deg);
  animation: ${iconLineTip} 2s;
`;

export const IconLineLong = styled.span`
  height: 5px;
  background-color: #4caf50;
  display: block;
  border-radius: 2px;
  position: absolute;
  z-index: 10;
  top: 38px;
  right: 8px;
  width: 47px;
  transform: rotate(-45deg);
  animation: ${iconLineLong} 2s;
`;

export const IconCircle = styled.div`
  top: -4px;
  left: -4px;
  z-index: 10;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  box-sizing: content-box;
  border: 4px solid rgba(76, 175, 80, 0.5);
`;

export const IconFix = styled.div`
  top: 8px;
  width: 5px;
  left: 26px;
  z-index: 1;
  height: 85px;
  position: absolute;
  transform: rotate(-45deg);
  background-color: #ffffff;
`;
