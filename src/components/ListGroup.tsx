
import { MouseEvent} from "react";
import { useState } from "react";

interface Props{
    items: string[];
    heading: string;
    onSelectItem: (items: string) => void; 
} 

function ListGroup ({items,heading, onSelectItem}: Props) {


 //items = []

//type a notation
 const handleClick = (event:MouseEvent) => console.log(event); 
 const [selectedIndex,setSelectedIndex] = useState(-1); 
  
    return (
        <> 
            <h1> {heading}</h1>
         {items.length === 0 ? <p>No item found </p>: null}
            {items.length === 0 && <p>No item found </p>}
            <ul className ="list-group">
            {items.map(item =>
               //certain code needed here
                 <li className="list-group-item active" onClick={handleClick }> {item}</li>)}
               
 
        </ul>
        </>
    );
}
 
export default ListGroup;



// //how query is done in java script

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', () => {
// const div = document.querySelector('#div');
// div.style.display = 'none';
// });
