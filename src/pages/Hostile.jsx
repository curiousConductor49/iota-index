import Slimecard from "../components/Slimecard";
import slimeIndex from "../lib/slimedata.js";
import feral from '../assets/images/hostile/Feral_Slime.png'
import tarr from '../assets/images/hostile/Tarr_Slime.png'

function Hostile() {
    const hostileImgs = [feral, tarr];
    const slimeCategoryKeys = Object.keys(slimeIndex);
    return (
        <>
            <h1 className="text-center font-fascinate text-4xl m-10">Hostile Slimes</h1>
            <div className="flex flex-col gap-5 items-center">
                {hostileImgs.map((img, index) => {
                    return <Slimecard name={slimeIndex.hostileSlimes[index].name} category={slimeCategoryKeys[3]} src={img} slimeNum ={index} key={index}></Slimecard>
                })}
            </div>       
        </>
    );
}

export default Hostile;