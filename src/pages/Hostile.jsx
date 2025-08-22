import Slimecard from "../components/Slimecard";
import slimeIndex from "../lib/slimedata.js";
import feral from '../assets/images/hostile/Feral_Slime.png'
import tarr from '../assets/images/hostile/Tarr_Slime.png'

function Hostile() {
    // Create an array of image imports indexed in the same order as the slime category's array elements
    const hostileImgs = [feral, tarr];
    // Create an array of property keys for the slime index import
    const slimeCategoryKeys = Object.keys(slimeIndex);
    return (
        <>
            <h1 className="text-center font-fascinate text-4xl m-10">Hostile Slimes</h1>
            <div className="flex flex-col gap-5 items-center">
                {/* 
                Walk over the img import array and use index to access the right slime category's slimes
                Pass props to the slimecard component: name, category, slimeNum
                */}
                {hostileImgs.map((img, index) => {
                    return <Slimecard name={slimeIndex.hostileSlimes[index].name} category={slimeCategoryKeys[3]} src={img} slimeNum ={index} key={index}></Slimecard>
                })}
            </div>       
        </>
    );
}

export default Hostile;