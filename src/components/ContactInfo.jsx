export default function ContactInfo(id, logo, type, info) {

    return (
        <div className="bg-gray-700">
            <img src={logo}></img>

            <div>
                <h3>{type}</h3>
                <p>{info}</p>
            </div>
        </div>
    )
}