import { useRef, useState, useEffect } from "react";
import musica from "../../assets/Rubi.mp3";
import "./Player.css";

function Player() {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        // Se já existe um áudio global criado pelo Login, reutilize-o
        const globalAudio = typeof window !== "undefined" ? window.__bgAudio : null;
        const audio = globalAudio || audioRef.current;
        if (!audio) return;

        const handlePlay = () => setPlaying(true);
        const handlePause = () => setPlaying(false);
        audio.addEventListener("play", handlePlay);
        audio.addEventListener("pause", handlePause);
        audio.addEventListener("ended", handlePause);

        // Se for áudio global e não temos elemento <audio>, não atribua ref
        if (globalAudio && !audioRef.current) {
            // no-op: audioRef stays null, but we can still control globalAudio
        }

        // inicializar estado baseado no áudio
        setPlaying(!audio.paused);

        return () => {
            audio.removeEventListener("play", handlePlay);
            audio.removeEventListener("pause", handlePause);
            audio.removeEventListener("ended", handlePause);
        };
    }, []);

    const toggleMusic = async () => {
        const audio = typeof window !== "undefined" ? window.__bgAudio || audioRef.current : audioRef.current;
        if (!audio) return;

        // debug
        // console.debug('toggleMusic audio', audio, 'paused', audio.paused, 'playingState', playing);

        if (playing) {
            audio.pause();
            // garantir atualização imediata do UI caso o evento pause não dispare
            setPlaying(false);
        } else {
            try {
                await audio.play();
                setPlaying(true);
            } catch (err) {
                console.warn("Play foi bloqueado pelo navegador:", err);
            }
        }
    };

    const globalAudioExists = typeof window !== "undefined" && !!window.__bgAudio;

    return (
        <div className="player-root">
            <div className="player-inner">
                {globalAudioExists ? (
                    <div>
                        <button onClick={toggleMusic} className="player-button">
                            {playing ? "Pausar 💔" : "Tocar 💕"}
                        </button>
                    </div>
                ) : (
                    <>
                        <audio ref={audioRef} controls className="player-audio">
                            <source src={musica} type="audio/mpeg" />
                            Seu navegador não suporta o elemento de áudio.
                        </audio>

                        <button onClick={toggleMusic} className="player-button">
                            {playing ? "Pausar 💔" : "Tocar 💕"}
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Player;
