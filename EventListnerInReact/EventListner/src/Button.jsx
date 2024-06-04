function printHello(event){
    console.log("Hello Suraj");
    console.log(event);
}

function printHelloP(){
    console.log("Hello kumar");
}

function PrintBy(){
    console.log("Byyy !");
};

export default function Button(){
    return (
        <div>
            <button onClick={printHello}>click me!</button>

            <button onDoubleClick={printHelloP}> Double Click me!</button>


            <p onMouseOver={PrintBy}>this parah is for event demo Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus eos autem impedit aliquid dicta odio dignissimos accusantium possimus necessitatibus?</p>
        </div>
    );
}