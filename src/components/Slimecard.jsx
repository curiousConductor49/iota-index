import slimeIndex from '../lib/slimedata.js'

function Slimecard(props) {
    // Returns a div that contains the image, name, and palette of each slime whose data is imported from the slimedata.js file
    // Is passed props from each slime category page it's called in
    // props.src provides slime img url
    // props.category provides key for each nested object containing the slimes per category
    // props.slimeNum provides the index of each slime object inside the category property (whose value is an array)
    // key provides a unique identifier for each generated div; this is technically the same value as props.slimeNum, but is saved as a different prop as keys cannot be passed as props
    return (
        <div className="border-2 border-red-400 rounded-md w-xl flex flex-col justify-center items-center p-10">
            <div className="flex flex-row gap-5">
                <img src={props.src} className="h-[150px] w-[150px]"/>
                <div className="self-center flex flex-row items-center gap-2 font-zain">
                    <div className="bg-red-400 text-5xl w-[3px] h-[60px]"></div>
                    <p className="font-semibold text-3xl">Name:</p>
                    {/* 
                    Drill down through the slime index object to the slime category, then to the specific slime, then its palette array's first element
                    Props then passes the actual slime name, which is styled in the colour of that array element
                    */}
                    <p className="text-3xl" style={{color: slimeIndex[props.category][props.slimeNum].palette[0]}}>{props.name}</p>
                </div>
            </div>
            <p className="font-semibold font-zain text-2xl">Palette: </p>
            {/* 
            Props provides the category key to the slime index object and the specific slime index
            The palette property of the accessed slime object is walked over to return a div for each palette colour
            Vanilla CSS used for styling as Tailwind does not permit dynamic classes
            */}
            <div className="flex flex-row flex-wrap">{slimeIndex[props.category][props.slimeNum].palette.map((colour, index) => {
                return <div style={{backgroundColor: colour, borderRadius: 5, margin: 5, padding: 10, flexGrow: 1, color: "white", fontFamily: "zain", fontSize: 20}} key={index}>{colour}</div>
            })}</div>
        </div>
    );
}

export default Slimecard