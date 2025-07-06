import { useState } from "react";

export default function Chat() {
    const [messaggi, setMessaggi] = useState('');
    const handleChange = (e) => {
        setMessaggi(e.target.value);
    }
    const resetMessaggi = () => {
        setMessaggi('');
    }

    return (
        <div className="chat-container">
            <h3>Inizia qui la tua chat</h3>
            <input
                type="text"
                value={messaggi}
                onChange={handleChange}
                placeholder="Scrivi un messaggio..."
                className="form-control mb-3"
            />
            <p className="link-success">Il messaggio che stai scrivendo: { messaggi }</p>
            <button onClick={resetMessaggi}>Invia!</button>
            <div className="messaggi-list">
                {messaggi && <p className="link-success">{messaggi}</p>}
                
            </div>
        </div>
    );
}