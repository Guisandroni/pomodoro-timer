import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;

  flex:1;

  
`;

export const DivContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap:wrap;
  font-size: 1.125rem;
  width:100%;
  justify-content:center;
  align-items:center;
  font-weight:bold;


`;

const BaseInput = styled.input`
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme["gray-500"]};
  background: transparent;
    font-weight: 500;
    font-size:1.125rem;
    height:2.5rem;
  text-align: center;
  font-weight:bold;

  
  color: ${props => props.theme["gray-300"]};
`;

export const WorkInput = styled(BaseInput)`
flex:1;

 &::-webkit-calendar-picker-indicator{
  display: none !important;
 }
`

export const MinutesInput = styled(BaseInput)`
    width:4rem;
`


export const ButtonHome = styled.button`
  background-color: ${(props) => props.theme["green-700"]};
  border: none;
  border-radius: 4px;
  width:100%;
  padding:0.7rem 0;
  color: ${(props) => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  &:disabled{
    cursor:not-allowed;
    opacity: 0.7;
  }

  &:not(:disabled):hover{
    background-color: ${props=> props.theme["green-500"]};
  }
`;

export const ClockContainer = styled.div`
  display: flex;
  gap: 1rem;

  flex-wrap:wrap;

`;

const BaseSpan = styled.span`
    display: flex;
  justify-content: center;
  align-items: center;
   
  font-weight:500;
  font-family: "Roboto Mono";

  border-radius: 4px;

  width: 6rem;

`

export const SpanTwoPoints = styled(BaseSpan)`
  height: 6rem;
  background-color:transparent;
  color: ${(props) => props.theme["green-700"]};
  font-size:10rem;

 
`;

export const SpanMinutes = styled(BaseSpan)`
  background-color: ${(props) => props.theme["gray-700"]};
  height: 8rem;
 
  font-size: 6rem;

`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
