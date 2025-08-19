import Slimecard from "../components/Slimecard";
import { docileSlimes } from "../lib/slimedata";
import pink from '../assets/images/docile/Pink_Slime.png'

function Docile() {
    return (
        <>
            <h1>Docile Slimes</h1>
            <Slimecard name={docileSlimes[0].name} palette={docileSlimes[0].palette} src={pink}></Slimecard>
        </>
    );
}

export default Docile;