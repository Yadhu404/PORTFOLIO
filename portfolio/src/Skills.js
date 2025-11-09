import './Skills.css'

function Skills({ID, name}) 
{
    return (
        <div id = {ID} className='skills'>
            <div className='items'>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default Skills;