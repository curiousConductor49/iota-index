import { Link } from 'react-router'

function Home() {
    return (
        <>
            <h1 className="text-center font-fascinate text-5xl mt-20 m-10">Welcome to the Iota Index</h1>
            <h2 className="text-center font-fascinate text-3xl text-red-400"> A Slime Rancher Fan Project</h2>
            <div className="font-zain flex flex-col gap-3 m-auto mt-10 mb-20 text-3xl max-w-3xl">
                <p className="text-center">Howdy, rancher!</p>
                <p className="text-center">Have you ever wanted to know the wonderful colours of your wonderful slimes?</p>
                <p className="text-center">Well, look no further. Here, we've got slimes dime a dozen, categorized by their behaviour and their colour palettes on full display!</p>
                <p className="border-l-3 border-red-400 min-w-lg p-5 m-10">Please note that Iota Index is by no means a comprehensive list of the slimes in Slime Rancher. Some event-exclusive slimes have been excluded (e.g. Party Slime), as this index mostly focuses on the more common slimes in-game. Hop on <a href="https://slimerancher.fandom.com/wiki/Slime_Rancher_Wiki" className="underline hover:text-red-400">the fan wiki</a> for a full rundown of the Far, Far Range's slime ecosystem!</p>
                <p className="text-center text-4xl">Check out the slime categories <Link to="/categories" className="text-red-400">here</Link>.</p>
            </div>
        </>
        
    );
}

export default Home;