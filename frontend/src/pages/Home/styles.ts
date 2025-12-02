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
  color: ${(props) => props.theme["gray-900"]};
  font-weight: 700;
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
  background-color: ${(props) => (props.$active ? props.theme["gray-900"] : props.theme.white)};
  color: ${(props) => (props.$active ? props.theme.white : props.theme["gray-900"])};
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
    color: ${(props) => (props.$active ? props.theme["gray-100"] : props.theme["gray-500"])};
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
      ? props.theme["gray-900"]
      : props.theme["gray-800"]};
  &:focus{
    outline: 0; 
    box-shadow: 0 0 0 2px ${props => props.theme["gray-700"]};
  }
  border: none;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  padding: 1rem 0;
  color: ${(props) => props.theme["gray-100"]};
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
        ? props.theme["gray-800"]
        : props.theme["gray-700"]};
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
  width: 100%;
  max-width: 520px;
  height: 180px;
  border-radius: 16px;
  background: ${(props) => props.theme["gray-900"]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* sombra suave para destacar o timer sem criar sensação de cartão separado do layout */
  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.25),
    0 8px 18px rgba(0, 0, 0, 0.18);

  @media (max-height: 642px) {
    height: 150px;
  }

  @media (max-width: 768px) {
    height: 150px;
  }

  @media (max-width: 480px) {
    height: 130px;
  }
`;

export const ClockTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: "Roboto Mono", monospace;
  font-size: 4.5rem;
  font-weight: bold;
  color: ${(props) => props.theme["gray-100"]};
  text-shadow:
    0 0 5px ${(props) => props.theme["gray-900"]},
    0 0 10px ${(props) => props.theme["gray-900"]},
    0 0 20px ${(props) => props.theme["gray-700"]};

  span {
    display: inline-block;
    min-width: 0.6em;
    text-align: center;
  }

  .separator {
    color: ${(props) => props.theme["gray-300"]};
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
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
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
