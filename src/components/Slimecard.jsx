function Slimecard(props) {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Palette: {props.palette}</p>
            <img src={props.src} className="h-[150px] w-[150px]"/>
        </div>
    );
}

export default Slimecard