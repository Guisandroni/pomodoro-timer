import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 2rem;
  height: 400px;

  @media (max-height: 642px) {
    padding: 1rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

export const DivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  color: ${(props) => props.theme["gray-100"]};
  font-weight: bold;
  font-size: 1.125rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

export const SessionsHeader = styled.span`
  color: ${(props) => props.theme["gray-100"]};
`;

export const SessionTabs = styled.div`
  display: flex;
  gap: 0.75rem;
  width: 100%;
  max-width: 500px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-height: 642px) {
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

export const SessionButton = styled.button<{ $active: boolean }>`
  border: none;
  border-radius: 999px;
  padding: 0.75rem 1.5rem;
  background-color: ${(props) => (props.$active ? props.theme["gray-100"] : props.theme["gray-700"])};
  color: ${(props) => (props.$active ? props.theme["gray-900"] : props.theme["gray-100"])};
  font-weight: bold;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  min-width: 120px;
  transition: transform 0.2s, background-color 0.2s;

  span {
    font-size: 0.75rem;
    font-weight: 500;
    color: ${(props) => (props.$active ? props.theme["gray-600"] : props.theme["gray-300"])};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    transform: translateY(-2px);
  }

  @media (max-height: 642px) {
    padding: 0.5rem 1rem;
  }

  @media (max-width: 480px) {
    min-width: 100px;
  }
`;

interface ButtonHomeProps {
  $variant?: "start" | "stop";
}

export const ButtonHome = styled.button<ButtonHomeProps>`
  background-color: ${(props) => 
    props.$variant === "stop" 
      ? props.theme["red-500"] 
      : props.theme["green-700"]
  };
  &:focus{outline: 0; box-shadow: 0 0 0 2px ${props => props.$variant === "stop" ? props.theme["red-500"] : props.theme["green-500"]}}
  border: none;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  padding: 1rem 0;
  color: ${(props) => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:not(:disabled):hover {
    &:active{outline: none}

    background-color: ${(props) => 
      props.$variant === "stop" 
        ? props.theme["red-700"] 
        : props.theme["green-500"]
    };
  }

  @media (max-width: 768px) {
    padding: 0.875rem 0;
    font-size: 0.9375rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 0;
    font-size: 0.875rem;
    gap: 0.375rem;
  }
`;

export const ClockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

interface ClockFaceProps {
  $progress: number;
}

export const ClockFace = styled.div<ClockFaceProps>`
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: ${(props) => props.theme["gray-700"]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 
    0 0 0 8px ${(props) => props.theme["gray-600"]},
    0 0 0 16px ${(props) => props.theme["gray-800"]},
    inset 0 0 40px rgba(0, 0, 0, 0.3);
  
  /* Anel de progresso */
  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    width: calc(100% + 16px);
    height: calc(100% + 16px);
    border-radius: 50%;
    background: conic-gradient(
      from 0deg,
      ${(props) => props.theme["green-500"]} 0%,
      ${(props) => props.theme["green-500"]} ${(props) => props.$progress}%,
      ${(props) => props.theme["gray-600"]} ${(props) => props.$progress}%,
      ${(props) => props.theme["gray-600"]} 100%
    );
    z-index: -1;
    transition: background 0.3s ease;
  }

  @media (max-height: 642px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 250px;
    height: 250px;
  }
`;

export const PomodoroFace = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .eyes {
    display: flex;
    gap: 40px;
    margin-bottom: 20px;
  }

  .eye {
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme["gray-100"]};
    border-radius: 50%;
    position: relative;
    animation: blink 4s infinite;

    &.left {
      animation-delay: 0s;
    }

    &.right {
      animation-delay: 0.1s;
    }

    @keyframes blink {
      0%, 90%, 100% {
        height: 20px;
      }
      95% {
        height: 2px;
      }
    }
  }

  .mouth {
    width: 60px;
    height: 30px;
    border: 3px solid ${(props) => props.theme["gray-100"]};
    border-top: none;
    border-radius: 0 0 60px 60px;
    margin-top: 10px;
  }

  @media (max-height: 642px) {
    width: 150px;
    height: 150px;

    .eyes {
      gap: 30px;
      margin-bottom: 15px;
    }

    .eye {
      width: 15px;
      height: 15px;
    }

    .mouth {
      width: 45px;
      height: 22px;
    }
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;

    .eyes {
      gap: 30px;
      margin-bottom: 15px;
    }

    .eye {
      width: 15px;
      height: 15px;
    }

    .mouth {
      width: 45px;
      height: 22px;
    }
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;

    .eyes {
      gap: 24px;
      margin-bottom: 12px;
    }

    .eye {
      width: 12px;
      height: 12px;
    }

    .mouth {
      width: 36px;
      height: 18px;
    }
  }
`;

export const ClockTime = styled.div`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: "Roboto Mono", monospace;
  font-size: 5rem;
  font-weight: bold;
  color: ${(props) => props.theme["gray-100"]};

  span {
    display: inline-block;
    min-width: 0.6em;
    text-align: center;
  }

  .separator {
    color: ${(props) => props.theme["green-500"]};
    animation: pulse 1s infinite;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
  }

  @media (max-height: 642px) {
    font-size: 3.5rem;
    bottom: 60px;
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
    bottom: 60px;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
    bottom: 50px;
    gap: 0.25rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  width: 100%;
  max-width: 600px;

  @media (max-height: 642px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;
