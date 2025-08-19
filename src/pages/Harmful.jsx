import Slimecard from "../components/Slimecard";
import { harmfulSlimes } from "../lib/slimedata";
import rock from '../assets/images/harmful/Rock_Slime.png'
import rad from '../assets/images/harmful/Rad_Slime.png'
import boom from '../assets/images/harmful/Boom_Slime.png'
import crystal from '../assets/images/harmful/Crystal_Slime.png'
import fire from '../assets/images/harmful/Fire_Slime.png'
import mosaic from '../assets/images/harmful/Mosaic_Slime.png'

function Harmful() {
    const harmfulImgs = [rock, rad, boom, crystal, fire, mosaic];
    return (
        <>
            <h1>Harmful Slimes</h1>
            {harmfulImgs.map((img, index) => {
                return <Slimecard name={harmfulSlimes[index].name} palette={harmfulSlimes[index].palette} src={img} key={index}></Slimecard>
            })}
        </>
    );
}

export default Harmful;