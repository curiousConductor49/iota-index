import { useEffect } from 'react'
import { useNavigate } from 'react-router'

function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 4000)
    }, [])

    return(
        <>
            <h1 className="text-center font-sans text-5xl m-10">Page Not Found</h1>
            <p className="text-center font-sans text-lg">Uh oh! Looks like you've landed in the middle of nowhere on the Far, Far Range!</p>
            <p className="text-center font-sans text-lg m-10">Let's get you back home, huh?</p>
        </>
    );
}

export default NotFound