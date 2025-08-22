import Slimecard from "../components/Slimecard";
import slimeIndex from "../lib/slimedata.js";
import rock from '../assets/images/harmful/Rock_Slime.png'
import rad from '../assets/images/harmful/Rad_Slime.png'
import boom from '../assets/images/harmful/Boom_Slime.png'
import crystal from '../assets/images/harmful/Crystal_Slime.png'
import fire from '../assets/images/harmful/Fire_Slime.png'
import mosaic from '../assets/images/harmful/Mosaic_Slime.png'

function Harmful() {
    // Create an array of image imports indexed in the same order as the slime category's array elements
    const harmfulImgs = [rock, rad, boom, crystal, fire, mosaic];
    // Create an array of property keys for the slime index import
    const slimeCategoryKeys = Object.keys(slimeIndex);
    return (
        <>
            <h1 className="text-center font-fascinate text-4xl m-10">Harmful Slimes</h1>
            <div className="flex flex-col gap-5 items-center">
                {/* 
                Walk over the img import array and use index to access the right slime category's slimes
                Pass props to the slimecard component: name, category, slimeNum
                */}
                {harmfulImgs.map((img, index) => {
                    return <Slimecard name={slimeIndex.harmfulSlimes[index].name} category={slimeCategoryKeys[1]} src={img} slimeNum ={index} key={index}></Slimecard>
                })}
            </div> 
        </>
    );
}

export default Harmful;