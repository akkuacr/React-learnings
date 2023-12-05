import { useState } from "react";
import { useEffect } from "react";



function PokemonList(){
  
  

    //ye use state tvi re-render jb v component re - render hoga tb yeh logic use hoga
    //dependency array m agr kisi v variable agr change hoga tab yeh use state call hoga
    
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);

  //array m yehi value paas kroge jiske change m use effect call hoga
    useEffect(()=>{
        
        console.log("effect called");

    },[x]
    )


     


    return(

        <div>
            <div>
                X:{x} <button onClick={()=>{setX(x+1)}} >INC</button>
            </div>
            <div>
                Y:{y} <button onClick={()=>{setY(y+1)}} >INC</button>
            </div>


        </div>
         

    )
}

export default PokemonList;
