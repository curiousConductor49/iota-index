import slimeIndex from '../lib/slimedata.js'

function Slimecard(props) {
    return (
        <div className="border-2 border-red-400 rounded-md w-xl flex flex-col justify-center items-center p-10">
            <div className="flex flex-row gap-5">
                <img src={props.src} className="h-[150px] w-[150px]"/>
                <div className="self-center flex flex-row items-center gap-2 font-zain">
                    <div className="bg-red-400 text-5xl w-[3px] h-[60px]"></div>
                    <p className="font-semibold text-3xl">Name:</p>
                    <p className="text-3xl" style={{color: slimeIndex[props.category][props.slimeNum].palette[0]}}>{props.name}</p>
                </div>
            </div>
            <p className="font-semibold font-zain text-2xl">Palette: </p>
            <div className="flex flex-row flex-wrap">{slimeIndex[props.category][props.slimeNum].palette.map((colour, index) => {
                return <div style={{backgroundColor: colour, borderRadius: 5, margin: 5, padding: 10, flexGrow: 1, color: "white", fontFamily: "zain", fontSize: 20}} key={index}>{colour}</div>
            })}</div>
        </div>
    );
}

export default Slimecard