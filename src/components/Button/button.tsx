import { ButtonContainer } from "./styles"

interface ButtonProps{
    variant? : 'primary' | 'secondary' | 'danger' | 'success' | 'neutral'
}

export function Button({variant='neutral' 
}: ButtonProps){
    return (
       <>
        <ButtonContainer variant={variant}>Send</ButtonContainer>
       </>
    )
}