import "./Product.css";
import Price from "./Price";

function Product({title, idx}){
    let oldPrices = ["12,495", "11,900", "1599", "599"];
    let newPrices = ["8,999", "9,199" ,"899" ,"278"];

    let Description = [
       [ "8,000 DPI","5 Programble buttons"],
        [ "intutive surface","designed for iPad pro" ],
         ["designed for iPad pro", "intutive surface"], 
         ["wireless","optical"],
    ]

    return (
        <div className="Product">
           <h4>{title}</h4>
            <p>{Description[idx][0]}</p>
            <p>{Description[idx][1]}</p>
            <p>{Description[idx][2]}</p>
            <p>{Description[idx][3]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;