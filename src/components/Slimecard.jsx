import { docileSlimes } from "../lib/slimedata";

function Slimecard(props) {
    return (
        <div>
            <p>Name: {props.name}</p>
            <div className="flex flex-row">Palette: {docileSlimes[props.slimeNum].palette.map((colour, index) => {
                return <div className={`bg-${colour} w-[50px] h-[150px]`} key={index}></div>
            })}</div>
            <img src={props.src} className="h-[150px] w-[150px]"/>
        </div>
    );
}

export default Slimecard