import Slimecard from "../components/Slimecard";
import { specialSlimes } from "../lib/slimedata";
import quicksilver from "../assets/images/special/Quicksilver_Slime.png"
import glitch from "../assets/images/special/Glitch_Slime.png"
import gold from "../assets/images/special/Gold_Slime.png"
import lucky from "../assets/images/special/Lucky_Slime.png"
import twinkle from "../assets/images/special/Twinkle_Slime.png"

function Special() {
    const specialImgs = [quicksilver, glitch, gold, lucky, twinkle];
    return (
        <>
            <h1>Special Slimes</h1>
            {specialImgs.map((img, index) => {
                return <Slimecard name={specialSlimes[index].name} palette={specialSlimes[index].palette} src={img} key={index}></Slimecard>
            })}
        </>
    );
}

export default Special;