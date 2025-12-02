import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 74rem;
  min-height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  background-color: ${(props) => props.theme.white};
  border-radius: 8px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.06), 0 8px 18px rgba(0, 0, 0, 0.04);

  display: flex;
  flex-direction: column;

  @media (max-height: 642px) {
    margin: 2rem auto;
    padding: 1.5rem;
    min-height: calc(100vh - 4rem);
    max-height: 100vh;
  }

  @media (max-width: 768px) {
    margin: 2rem auto;
    padding: 1.5rem;
    min-height: calc(100vh - 4rem);
    border-radius: 4px;
  }

  @media (max-width: 480px) {
    margin: 1rem;
    padding: 1rem;
    min-height: calc(100vh - 2rem);
    border-radius: 4px;
  }
`;
