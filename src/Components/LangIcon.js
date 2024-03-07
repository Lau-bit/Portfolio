import {useState} from "react";


const LangIcon = (props) => {


const [hover, setHover] = useState(false);

const onHover = (e) => {
    e.preventDefault();
    setHover(true);
    console.log("hovered");
}

const onHoverOver = (e) => {
    e.preventDefault();
    setHover(false);
}


return (
    <>
    <div className="image-container" onMouseEnter={onHover} onMouseLeave={onHoverOver}>
    <img src={props.img} width={props.width}></img>
    {hover && <div className="text-overlay">{props.name}</div>}
    </div>
    </>

    )
}

export default LangIcon;