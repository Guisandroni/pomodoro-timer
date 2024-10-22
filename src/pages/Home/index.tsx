import { Play } from "phosphor-react";
import {  HomeContainer } from "./styles";


export function Home(){
    return(

        <HomeContainer>
        <form action="">
            <div>
                <label htmlFor="task">I work in</label>
                <input id='task' placeholder="Name your project"/>

                <label htmlFor="minutesAmount">During</label>
                <input id="minutesAmount" type="number" placeholder="- 00 +"/>

                <span>Minutos</span>
            </div>

            <div className="clock">
                <span>0</span>
                <span>0</span>

                <span className="spar">:</span>

                <span>0</span>
                <span>0</span>
            </div>

            <button type="submit">
            <Play size={24} />
                Começar
                </button>
        </form>
        </HomeContainer>
    )
}