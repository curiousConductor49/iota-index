import { docileSlimes, harmfulSlimes, specialSlimes, hostileSlimes } from '../lib/slimedata.js'

function Slimecard(props) {
    
    return (
        <div>
            <p>Name: {props.name}</p>
            <div className="flex flex-row">Palette: {docileSlimes[props.slimeNum].palette.map((colour, index) => {
                return <div className="w-[50px] h-[150px]" style={{backgroundColor: colour }} key={index}></div>
            })}</div>
            <img src={props.src} className="h-[150px] w-[150px]"/>
        </div>
    );
}

export default Slimecard