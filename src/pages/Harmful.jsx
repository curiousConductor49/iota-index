import Slimecard from "../components/Slimecard";
import slimeIndex from "../lib/slimedata.js";
import rock from '../assets/images/harmful/Rock_Slime.png'
import rad from '../assets/images/harmful/Rad_Slime.png'
import boom from '../assets/images/harmful/Boom_Slime.png'
import crystal from '../assets/images/harmful/Crystal_Slime.png'
import fire from '../assets/images/harmful/Fire_Slime.png'
import mosaic from '../assets/images/harmful/Mosaic_Slime.png'

function Harmful() {
    const harmfulImgs = [rock, rad, boom, crystal, fire, mosaic];
    const slimeCategoryKeys = Object.keys(slimeIndex);
    return (
        <>
            <h1 className="text-center font-sans text-4xl m-10">Harmful Slimes</h1>
            {harmfulImgs.map((img, index) => {
                return <Slimecard name={slimeIndex.harmfulSlimes[index].name} category={slimeCategoryKeys[1]} src={img} slimeNum ={index} key={index}></Slimecard>
            })}
        </>
    );
}

export default Harmful;