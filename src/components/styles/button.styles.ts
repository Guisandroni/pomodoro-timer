import styled, { css } from "styled-components";

type ButtonVariant =  'primary' | 'secondary' | 'danger' | 'success' | 'neutral'
// define a propriedade da mesma forma em button

interface ButtonContainerProps {
 variant:ButtonVariant
//  passa a propriedade 'tipos' para buttonVariants, dps passa para o component abaixo
}

const buttonVariants = {
    primary: 'purple',
    secondary:'orange',
    danger:'red',
    neutral:'black',
    success:'green',
    // setando cores da propriedade
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    background-color: ${props => props.theme['green-500']};
    color: ${props=> props.theme.white};
    /* props chamando a propriedade do tema e a definição */
    width: 6rem;
    border-radius: 8px;
    border-style:none;
    height: 2rem;
    margin:6px;



    /* ${props => {
        return css`background-color: ${buttonVariants[props.variant]}` 
    }} */
`