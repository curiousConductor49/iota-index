import Slimecard from "../components/Slimecard";
import slimeIndex from "../lib/slimedata.js";
import pink from '../assets/images/docile/Pink_Slime.png'
import dervish from '../assets/images/docile/Dervish_Slime.png'
import honey from '../assets/images/docile/Honey_Slime.png'
import hunter from '../assets/images/docile/Hunter_Slime.png'
import phosphor from '../assets/images/docile/Phosphor_Slime.png'
import puddle from '../assets/images/docile/Puddle_Slime.png'
import quantum from '../assets/images/docile/Quantum_Slime.png'
import saber from '../assets/images/docile/Saber_Slime.png'
import tabby from '../assets/images/docile/Tabby_Slime.png'
import tangle from '../assets/images/docile/Tangle_Slime.png'

function Docile() {
    const docileImgs = [pink, tabby, phosphor, honey, puddle, hunter, quantum, dervish, tangle, saber];
    const slimeCategoryKeys = Object.keys(slimeIndex);
    return (
        <>
            <h1 className="text-center font-sans text-4xl m-10">Docile Slimes</h1>
            {docileImgs.map((img, index) => {
                return <Slimecard name={slimeIndex.docileSlimes[index].name} category={slimeCategoryKeys[0]} src={img} slimeNum ={index} key={index}></Slimecard>
            })}
        </>
    );
}

export default Docile;