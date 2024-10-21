import { useState } from "react";
import "./Lottery.css";
import {genTicket,sum} from './helper';
import Ticket from './Ticket';
    
function Lottery({n ,win}){
 let [ticket , setTicket] = useState(genTicket(n));
let winTicket = sum(ticket) === win;

let ByeTicket  = () => {
    setTicket(genTicket(n));
}
    return (
      <> 
<h1> Lottery Game!</h1>
    <Ticket  Ticket={ticket}/>
        <br /><br /><b></b>
        <button onClick={ByeTicket}>Bye Ticket</button>
        <h3> {winTicket && "congrat you won the todat lottery"}</h3>
        </> 
    );



}


export default Lottery;







