// //import message file

// import ListGroup from "./components/ListGroup";

// function App () {
//     let items = [
//         'Amerca',
//         'Landon',
//         'France',
//         'Norway',
//         'Cannada'
//     ]
//     const handleSelectItem = (item: string) => {
//         console.log(item);
//     }
// return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>

// }

// export default App;

//import message file

 


//import Alert from "./components/ListGroup";
import Button from "./components/Button";
    function App() {
        
return (
<div>
    {/* <Alert> 
    Hello <span> world </span>
    </Alert>  */}
    <Button color="secondary" onClick ={() => console.log('clicked')}>Button</Button>
</div>
); 
}

export default App;