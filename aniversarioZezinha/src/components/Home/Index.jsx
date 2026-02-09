import { useState, useEffect } from "react";
import "./Home.css";
import namoro from "../../assets/namoro.png";
import zezinha_cabelo from "../../assets/zezinha_cabelo.png";
import zezinha_social from "../../assets/zezinha_social.png";
import zezinha_moletom from "../../assets/zezinha_moletom.png";
import zezinha_com_rapariga from "../../assets/zezinha_com_rapariga.jpeg";

function Home() {
    const [currentPhoto, setCurrentPhoto] = useState(0);
    const [timeElapsed, setTimeElapsed] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const photos = [
        {
            id: 1,
            url: namoro,
            caption: "Primeiro dia do nosso namoro 💕"
        },
        {
            id: 2,
            url: zezinha_cabelo,
            caption: "Ela, do jeitinho que eu amo 😍"
        },
        {
            id: 3,
            url: zezinha_social,
            caption: "Um olhar seu já muda meu dia 🌹"
        },
        {
            id: 4,
            url: zezinha_moletom,
            caption: "Até meu moletom prefere ficar com ela 🥲"
        },
        {
            id: 5,
            url: zezinha_com_rapariga,
            caption: "Meu amor e a Rapariga, do jeitinho que eu amo ✨"
        }
    ];

    // Calcular tempo desde 11 de janeiro
    useEffect(() => {
        const calculateTime = () => {
            const startDate = new Date(2026, 0, 11); // 11 de janeiro de 2026
            const now = new Date();
            
            let diff = now - startDate;
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            diff -= days * (1000 * 60 * 60 * 24);
            
            const hours = Math.floor(diff / (1000 * 60 * 60));
            diff -= hours * (1000 * 60 * 60);
            
            const minutes = Math.floor(diff / (1000 * 60));
            diff -= minutes * (1000 * 60);
            
            const seconds = Math.floor(diff / 1000);
            
            setTimeElapsed({ days, hours, minutes, seconds });
        };

        calculateTime();
        const timer = setInterval(calculateTime, 1000);

        return () => clearInterval(timer);
    }, []);

    const nextPhoto = () => {
        setCurrentPhoto((prev) => (prev + 1) % photos.length);
    };

    const prevPhoto = () => {
        setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
    };

    return (
        <div className="home-container">
            <div className="anniversary-content">
                {/* Mensagem de Aniversário */}
                <div className="message-section">
                    <h1>Feliz Aniversário!</h1>
                    <h2>Zezinha 💕</h2>
                    <p className="love-message">
                        Hoje é o seu dia, Zezinha.
                        E eu só queria aproveitar esse cantinho pra te lembrar do quanto você é especial pra mim.

                        Você chegou na minha vida do seu jeito, sem fazer esforço nenhum, e mesmo assim mudou tudo. Mudou meus dias, meus pensamentos, meu jeito de ver as coisas. Com você, tudo fica mais leve, mais calmo, mais verdadeiro.

                        Eu amo quem você é, amo seus detalhes, suas manias, seu jeito único de existir. Amo dividir a vida com você, mesmo nas coisas simples. Principalmente nelas.

                        Que esse novo ano venha cheio de coisas boas, sonhos realizados e muitos momentos felizes e que eu possa estar ao seu lado em todos eles, cuidando de você do jeito que você merece.

                        Feliz aniversário, meu amor.
                        Eu te amo mais do que consigo colocar em palavras. 💙
                    </p>
                    <p className="signature">Com todo meu amor 💗</p>
                </div>

                {/* Carrossel de Fotos */}
                <div className="carousel-section">
                    <div className="carousel-container">

                        <div className="carousel-photo">
                            <img 
                                src={photos[currentPhoto].url} 
                                alt={`Foto ${currentPhoto + 1}`}
                                className="photo"
                            />
                            <p className="photo-caption">{photos[currentPhoto].caption}</p>
                        </div>

                        <button className="carousel-btn prev-btn" onClick={prevPhoto}>
                            ❮
                        </button>
                        <button className="carousel-btn next-btn" onClick={nextPhoto}>
                            ❯
                        </button>
                    </div>

                    {/* Indicadores */}
                    <div className="carousel-indicators">
                        {photos.map((_, index) => (
                            <span
                                key={index}
                                className={`indicator ${index === currentPhoto ? "active" : ""}`}
                                onClick={() => setCurrentPhoto(index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Contador de Tempo */}
                <div className="time-counter">
                    <h3>Tempo desde nosso dia especial</h3>
                    <div className="counter-display">
                        <div className="time-unit">
                            <span className="time-number">{timeElapsed.days}</span>
                            <span className="time-label">Dias</span>
                        </div>
                        <span className="separator">:</span>
                        <div className="time-unit">
                            <span className="time-number">{String(timeElapsed.hours).padStart(2, '0')}</span>
                            <span className="time-label">Horas</span>
                        </div>
                        <span className="separator">:</span>
                        <div className="time-unit">
                            <span className="time-number">{String(timeElapsed.minutes).padStart(2, '0')}</span>
                            <span className="time-label">Minutos</span>
                        </div>
                        <span className="separator">:</span>
                        <div className="time-unit">
                            <span className="time-number">{String(timeElapsed.seconds).padStart(2, '0')}</span>
                            <span className="time-label">Segundos</span>
                        </div>
                    </div>
                </div>

                {/* Decoração */}
                <div className="floating-elements">
                    <span className="float-heart">💕</span>
                    <span className="float-heart">🌹</span>
                    <span className="float-heart">💗</span>
                    <span className="float-heart">✨</span>
                    <span className="float-heart">😺</span>
                    <span className="float-heart">💖</span>
                </div>
            </div>
        </div>
    );
}

export default Home;