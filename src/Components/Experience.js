const Experience = (props) => {

    return (
        <div className="experience">
            <h3>{props.title}</h3>
            <p>{props.type}</p>
            <p>{props.time}</p>
        </div>
    )
}

export default Experience;