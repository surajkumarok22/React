 export default function Price({oldPrice, newPrice}){
        let oldStyle = {
                textDecoration: "line-through"
        };
        let newStyle = {
                fontWeight: "bold"
        };

        let styles = {
                backgroundColor:"#e0c367",
                height:"30px",
                width:"200px",
                borderBottomLeftRadius: "15px",
                borderBottomRightRadius: "15px",

        }
    return (
            <div  style = {styles}>
                   <span style={oldStyle}>{oldPrice}</span>
                   &nbsp;   &nbsp;   &nbsp;   &nbsp;
                   <span style={newStyle}>{newPrice}</span>
            </div>
    );
 }