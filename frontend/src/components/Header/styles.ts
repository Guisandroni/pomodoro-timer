import styled from "styled-components";



export const HeaderContainer = styled.div`
    display:flex;
    justify-content:space-between;

    img{
        height:2rem;
        width:2rem;
        border-radius:50%;
        padding:0;
        margin:0;
    }

    nav{
        display:flex;
        gap:0.5rem;

        @media (max-width: 480px) {
            gap: 0.25rem;
        }

        a{
            width:3rem;
            height:3rem;

            display:flex;
            justify-content:center;
            align-items:center;

            color: ${props => props.theme["gray-100"]};

            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;

            @media (max-width: 480px) {
                width: 2.5rem;
                height: 2.5rem;
                border-top-width: 2px;
                border-bottom-width: 2px;
            }

            &:hover{
                border-bottom: 3px solid ${props => props.theme["green-500"]};

                @media (max-width: 480px) {
                    border-bottom-width: 2px;
                }
            }

            &.active{
                color: ${props => props.theme["green-500"]}
            }
        }
    }
`