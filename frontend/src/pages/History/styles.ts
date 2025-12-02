import styled from "styled-components";


export const HistoryContainer = styled.div`
    flex:1;
    padding: 3.5rem;
    background-color: ${(props) => props.theme.white};

    display:flex;
    flex-direction:column;
   
    h1{
        font-size: 1.5rem;
        color: ${props=> props.theme["gray-900"]};
        font-weight: 700;
    }

    @media (max-height: 642px) {
        padding: 1.5rem;
        
        h1 {
            font-size: 1.25rem;
        }
    }

    @media (max-width: 768px) {
        padding: 2rem;
        
        h1 {
            font-size: 1.25rem;
        }
    }

    @media (max-width: 480px) {
        padding: 1rem;
        
        h1 {
            font-size: 1.125rem;
        }
    }
`

export const HistoryTable = styled.div`
    flex:1;
    overflow: auto;
    margin-top:2rem;

    @media (max-height: 642px) {
        margin-top: 1rem;
    }

    @media (max-width: 768px) {
        margin-top: 1.5rem;
    }

    @media (max-width: 480px) {
        margin-top: 1rem;
    }

    table{
        width:100%;
        border-collapse: collapse;
        min-width: 600px;

        @media (max-height: 642px) {
            font-size: 0.875rem;
        }

        @media (max-width: 768px) {
            min-width: 500px;
            font-size: 0.875rem;
        }

        @media (max-width: 480px) {
            min-width: 100%;
            font-size: 0.75rem;
        }

        th{
            background-color: ${(props)=> props.theme["gray-100"]};
            color: ${(props)=> props.theme["gray-900"]};
            padding:1rem;
            text-align:start;
            font-size: 0.89rem;
            line-height: 1.6;

            @media (max-width: 768px) {
                padding: 0.75rem;
                font-size: 0.8125rem;
            }

            @media (max-width: 480px) {
                padding: 0.5rem;
                font-size: 0.75rem;
            }

            &:first-child{
                border-top-left-radius: 8px;
                padding-left: 1.5rem;

                @media (max-width: 480px) {
                    padding-left: 0.75rem;
                }
            }

            &:last-child{
                border-top-right-radius: 8px;
                padding-left: 1.5rem;

                @media (max-width: 480px) {
                    padding-left: 0.75rem;
                }
            }
        }

        td{
            background-color: ${(props)=> props.theme.white};
            color: ${(props)=> props.theme["gray-900"]};
            border-top: 1px solid ${(props)=> props.theme["gray-200"]};
            padding: 1rem;
            font-size: 0.89rem;
            line-height: 1.6;

            @media (max-width: 768px) {
                padding: 0.75rem;
                font-size: 0.8125rem;
            }

            @media (max-width: 480px) {
                padding: 0.5rem;
                font-size: 0.75rem;
                border-top-width: 2px;
            }

            &:first-child{
                width:50%;
                padding-left: 1.5rem;

                @media (max-width: 480px) {
                    padding-left: 0.75rem;
                    width: 40%;
                }
            }

            &:last-child{
                padding-left: 1.5rem;

                @media (max-width: 480px) {
                    padding-left: 0.75rem;
                }
            }
        }
    }
`

const Status_Color = {
    yellow:'yellow-500',
    green: 'green-500',
    red: 'red-500',
} as const

interface StatusProps{
    $statusColor: keyof typeof Status_Color
}


export const AndamentoStyled = styled.span<StatusProps>`
        display:flex;
        align-items:center;
        gap: 0.5rem;

        &::before{
            content:'';
            width:0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            background-color: ${props => props.theme[Status_Color[props.$statusColor]]};
        }
        /* formato para criar um span  */
`