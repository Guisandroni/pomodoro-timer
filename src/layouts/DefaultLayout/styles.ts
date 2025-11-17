import styled from "styled-components";


export const LayoutContainer = styled.div`
    max-width: 74rem;
    height: calc(100vh - 10rem);
    margin: 5rem auto;
    padding: 2.5rem;
    background-color: ${props => props.theme["gray-800"]};
    border-radius: 8px;

    display:flex;
    flex-direction:column;

    @media (max-height: 642px) {
        margin: 2rem auto;
        padding: 1.5rem;
        height: calc(100vh - 4rem);
        max-height: 600px;
    }

    @media (max-width: 768px) {
        margin: 2rem auto;
        padding: 1.5rem;
        height: calc(100vh - 4rem);
        border-radius: 4px;
    }

    @media (max-width: 480px) {
        margin: 1rem;
        padding: 1rem;
        height: calc(100vh - 2rem);
        border-radius: 4px;
    }
`