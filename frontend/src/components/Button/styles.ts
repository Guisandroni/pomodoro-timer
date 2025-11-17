import styled, { css } from "styled-components";

type ButtonVariant =  'primary' | 'secondary' | 'danger' | 'success' | 'neutral'

interface ButtonContainerProps {
 variant:ButtonVariant
}

const buttonVariants = {
    primary: 'purple',
    secondary:'orange',
    danger:'red',
    neutral:'black',
    success:'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    background-color: ${props => props.theme['green-500']};
    color: ${props=> props.theme.white};
    width: 6rem;
    border-radius: 8px;
    border-style:none;
    height: 2rem;
    margin:6px;



    /* ${props => {
        return css`background-color: ${buttonVariants[props.variant]}` 
    }} */
`