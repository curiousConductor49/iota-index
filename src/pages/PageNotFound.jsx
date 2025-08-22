import { useEffect } from 'react'
import { useNavigate } from 'react-router'

function NotFound() {
    // Use the useNavigate hook to redirect user to a select page
    const navigate = useNavigate();
    // Wrap a setTimeout function within the useEffect hook to redirect user after 4000 milliseconds
    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 4000)
    }, [])

    return(
        <>
            <h1 className="text-center font-fascinate text-5xl m-10">Page Not Found</h1>
            <p className="text-center font-zain text-2xl">Uh oh! Looks like you've landed in the middle of nowhere on the Far, Far Range!</p>
            <p className="text-center font-zain text-2xl m-10">Let's get you back home, huh?</p>
        </>
    );
}

export default NotFound