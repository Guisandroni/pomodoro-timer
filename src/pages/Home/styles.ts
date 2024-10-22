import styled from "styled-components";



export const HomeContainer = styled.div`

    display:flex;
    justify-content:center;
    
    height:100vh;

    form{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap: 2rem;

       div input{
            border:none;
            border-bottom:2px solid ${props=>props.theme["gray-600"]};
            background: ${props=> props.theme["gray-800"]};
            
            text-align:center;
        }

        div{
            display:flex;
            gap:2rem;
        }

        .clock span{
            background-color: ${props => props.theme["gray-700"]};
            height:8rem;
            width:6rem;
            display:flex;
            justify-content:center;
            align-items:center;
            border-radius:4px;

            font-size:6rem;

            font-family: 'Roboto Mono'
        }

        .clock .spar{
            width:2rem;
            background-color: ${props => props.theme["gray-800"]};
            color: ${props => props.theme["green-700"]};

        }

        .clock{
            display:flex;
            gap:1rem;
        }

        button{
            background-color: ${props=> props.theme['green-500']};
            border:none;
            border-radius: 4px;
            padding: 0.7rem 19rem;
            color: ${props => props.theme.white};
            display:flex;
            justify-content:center;
            align-items:center;
            gap:0.5rem;
        }
    }
`