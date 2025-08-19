function Slimecard(props) {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Palette: {props.palette}</p>
            <img src={props.src}/>
        </div>
    );
}

export default Slimecard