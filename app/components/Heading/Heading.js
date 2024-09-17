import "./heading.css";

function Heading(props){
    let title = "This is the Heading!";
    return(
        <div>
            <h1>{title}</h1>
            <h2>Hello there {props.firstName}</h2>

        </div>
    );
};

export default Heading;
