import { useState } from "react";
export default function LikeButton()
{

let [isLiked ,setIsLiked] = useState(false);
 
     let  Like = () =>{

       setIsLiked(!isLiked);

    };

    let stylelike = {color : "red"};


return (
    <div>
        
 <h3 onClick={Like}  style={stylelike} >{isLiked ? (<i className="fa-sharp fa-regular fa-heart"></i> 
 ) :  (<i className="fa-sharp fa-solid fa-heart"></i> )}  </h3>
     




    </div>
);


}