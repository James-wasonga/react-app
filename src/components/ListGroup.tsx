
import {MouseEvent} from "react";
import {useState} from "react";

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
