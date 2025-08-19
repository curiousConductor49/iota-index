function Slimecard(props) {
    return (
        <div>
            <p>Name: {props.name}</p>
            {/* <div>Palette: {props.palette.map((colour, index) => {
                return <div className="bg-docile-pink-1 w-[50px] h-[150px]" key={index}></div>
            })}</div> */}
            <img src={props.src} className="h-[150px] w-[150px]"/>
        </div>
    );
}

export default Slimecard