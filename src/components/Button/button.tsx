import { ButtonContainer } from "./styles"

interface ButtonProps{
    variant? : 'primary' | 'secondary' | 'danger' | 'success' | 'neutral'
    // propriedades que o componente pode herdar
}

export function Button({variant='neutral' 
                        // passando uma propriedade como padrao
}: ButtonProps){
    return (
       <>
        <ButtonContainer variant={variant}>Enviar</ButtonContainer>
        {/* cria o componente, variant define a propriedade 'color, styles component em ts */}
       </>
    )
}