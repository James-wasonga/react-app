function ListGroup () {

    let items = [
        'Amerca',
        'Landon',
        'France',
        'Norway',
        'Cannada'
    ]


  
    return (
        <>
            <h1> List </h1>
            {items.length === 0 ? <p>No item found</p>:null}
            {items.length === 0 && <p>No item found </p>}
            <ul className ="list-group">
            {items.map(item => <li className="list-group-item"  onClick={(Event) => console.log(Event)}> {item}</li>)}

        </ul>
        </>
    );
}

export default ListGroup;