export default function ContactForm(){
    return (
        <div>
            
            <form className="flex flex-col bg-gray-700">
                <input placeholder="Votre nom"></input>
                <input placeholder="Votre email"></input>

                <textarea placeholder="Votre message"></textarea>
            </form>

        </div>
    )
}