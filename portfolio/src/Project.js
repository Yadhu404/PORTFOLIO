import './Project.css'

function Project({ID, imgUrl, name, about}) 
{
    return (
        <div id = {ID} className='project'>
            <div className='items'>
                <div className='img' style={{backgroundImage : `url(${imgUrl})`}}>
                </div>
                <p>{name}</p>
            </div>
            <div  role="tooltip" id="about">{about}</div>

        </div>
    )
}

export default Project;