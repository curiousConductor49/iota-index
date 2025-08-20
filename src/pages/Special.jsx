import Slimecard from "../components/Slimecard";
import slimeIndex from "../lib/slimedata.js";
import quicksilver from "../assets/images/special/Quicksilver_Slime.png"
import glitch from "../assets/images/special/Glitch_Slime.png"
import gold from "../assets/images/special/Gold_Slime.png"
import lucky from "../assets/images/special/Lucky_Slime.png"
import twinkle from "../assets/images/special/Twinkle_Slime.png"

function Special() {
    const specialImgs = [quicksilver, glitch, gold, lucky, twinkle];
    const slimeCategoryKeys = Object.keys(slimeIndex);
    return (
        <>
            <h1>Special Slimes</h1>
            {specialImgs.map((img, index) => {
                return <Slimecard name={slimeIndex.specialSlimes[index].name} category={slimeCategoryKeys[2]} src={img} slimeNum ={index} key={index}></Slimecard>
            })}
        </>
    );
}

export default Special;