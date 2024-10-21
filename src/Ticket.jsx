import TicketNum from "./TicketNum";
import './Ticket.css'

export default function Ticket({Ticket}){

return (
      <>
    
    <div className="Ticket">
    <b> <p color="black">Ticket number</p></b>
 {Ticket.map((num,idx) =>(


 <TicketNum  num= {num} key={idx} />


 ))}


    </div>
    </>
);



}