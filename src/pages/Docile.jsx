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
    // Create an array of image imports indexed in the same order as the slime category's array elements
    const docileImgs = [pink, tabby, phosphor, honey, puddle, hunter, quantum, dervish, tangle, saber];
    // Create an array of property keys for the slime index import
    const slimeCategoryKeys = Object.keys(slimeIndex);
    return (
        <>
            <h1 className="text-center font-fascinate text-4xl m-10">Docile Slimes</h1>
            <div className="flex flex-col gap-5 items-center">
                {/* 
                Walk over the img import array and use index to access the right slime category's slimes
                Pass props to the slimecard component: name, category, slimeNum
                */}
                {docileImgs.map((img, index) => {
                    return <Slimecard name={slimeIndex.docileSlimes[index].name} category={slimeCategoryKeys[0]} src={img} slimeNum ={index} key={index}></Slimecard>
                })}
            </div>
        </>
    );
}

export default Docile;