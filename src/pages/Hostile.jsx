import Slimecard from "../components/Slimecard";
import { hostileSlimes } from "../lib/slimedata";
import feral from '../assets/images/hostile/Feral_Slime.png'
import tarr from '../assets/images/hostile/Tarr_Slime.png'

function Hostile() {
    const hostileImgs = [feral, tarr];
    return (
        <> 
            <h1>Hostile Slimes</h1>
            {hostileImgs.map((img, index) => {
                return <Slimecard name={hostileSlimes[index].name} palette={hostileSlimes[index].palette} src={img} key={index}></Slimecard>
            })}
        </>
    );
}

export default Hostile;