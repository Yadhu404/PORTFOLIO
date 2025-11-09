import { useEffect, useState } from 'react';
import './MouseTrail.css'

function MouseTrail()
{
    // const trailRef = useRef();

    const [trail, setTrail] = useState([]);

    useEffect(() => {
        function GenerateTrail(e)
        {
            // console.log(`${e.clientX} : ${e.clientX}`);
            const newTrail = 
            {
                ID : Date.now(),
                x : e.clientX,
                y : e.clientY,
            };

            setTrail((prev) => [...prev.slice(-10), newTrail]);
        }
        window.addEventListener("mousemove" ,GenerateTrail);

        return () => window.removeEventListener("mousemove" ,GenerateTrail);
    }, [])

    return (
        <div className='trail-container'>
            {trail.map((t) => (
                <div className='trail' key = {t.ID} style={{top : t.y, left : t.x}}></div>
            ))}
        </div>
    )
}

export default MouseTrail;