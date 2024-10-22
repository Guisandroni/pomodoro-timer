import { Link } from "react-router-dom";

function handleClick(){
    return alert('alo')
}

export function Home(){
    return(

        <>
        <h1>Home</h1>
        <button>
        <Link onClick={handleClick} to='/History'>Link</Link>
        </button>
        
        </>
    )
}