import { Play } from "phosphor-react";
import {  ButtonHome, ClockContainer, HomeContainer, SpanTwoPoints, SpanMinutes, FormContainer, DivContainer, MinutesInput, WorkInput } from "./styles";


export function Home(){
    return(

        <HomeContainer>
        <FormContainer action="">
            <DivContainer>
                <label htmlFor="task">I work in </label>
                <WorkInput id="task" list="Suggestions" placeholder="de um nome para o seu projeto"/>

                <datalist id="Suggestions">
                    <option value="">Projeto</option>
                    <option value="">Projeto</option>
                </datalist>

                <label htmlFor="minutesAmount">During</label>
                <MinutesInput id="minutesAmount" type="number" placeholder="00" step={5} min={5} max={60}/>

                <span>Minutos</span>
            </DivContainer>

            <ClockContainer>
                <SpanMinutes>0</SpanMinutes>
                <SpanMinutes>0</SpanMinutes>

                <SpanTwoPoints>:</SpanTwoPoints>

                <SpanMinutes>0</SpanMinutes>
                <SpanMinutes>0</SpanMinutes>
            </ClockContainer>

            <ButtonHome type="submit" >
            <Play size={24} />
                Começar
                </ButtonHome>
        </FormContainer>
        </HomeContainer>
    )
}