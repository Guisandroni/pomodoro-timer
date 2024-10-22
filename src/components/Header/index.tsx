import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import { Scroll, Timer } from "phosphor-react";

export function Header(){
    return(
        
        <HeaderContainer>
           <img src="https://github.com/Guisandroni.png" alt="" />
            <nav>
                <NavLink to='/' title="Timer">
                    <Timer size={24} />
                </NavLink>

                <NavLink to='/history' title="Historic">
                    <Scroll size={24}/>
                </NavLink>

               
            </nav>
        </HeaderContainer>
    )
}