function Redirect(link)
{
    console.log(link);
    window.open(link, "_blank");
}

function Button({ID, link, value})
{
    return (
        <button id = {ID} onClick={() => {Redirect(link)}}>{value}</button>
    )
}

export default Button;