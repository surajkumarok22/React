import Product from "./Product";

function ProductTab(){
    let styles = {
        display: "flex",
        flexWrap: "Wrap",
        justifyContent: "center",
        alignItem: "center",
        marginRight: "10px",
    };
    return (
        <div style = {styles}>
            <Product title = "Logitech mx master" idx = {0}/>  

            <Product title= "Apple Pencil 2nd Gen" idx = {1}/> 

            <Product title = "Zebronics Zeb-transformer" idx = {2}/>

            <Product title = "Petronics" idx = {3}/>     

        </div>
    );
}

export default ProductTab;