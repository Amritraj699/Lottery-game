import { useState } from "react";

function Counter()
{
let  [count, setCount] = useState(0);

  let getcount = () => {
 
    setCount(count+1);



console.log(count);
}


return <>

<h3>count : {count}</h3>
<button onClick={getcount}>Incerase count</button>



</>


}

export default Counter;