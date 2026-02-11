import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import musica from "../../assets/Rubi.mp3";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        
        if (!email || !password) {
            setError("Preencha todos os campos, meu amor! 💕");
            return;
        }
        
        if (email === "gisely.celestino@etec.sp.gov.br" && password === "ADL$%pkv12") {
            setError("");
            // Tocar música em loop imediatamente (em resposta ao clique)
            try {
                if (!window.__bgAudio) {
                    const a = new Audio(musica);
                    a.loop = true;
                    // armazenar globalmente para persistir entre rotas
                    window.__bgAudio = a;
                }
                // tentar tocar; navegadores permitem play em resposta direta a interação do usuário
                window.__bgAudio.play().catch((err) => console.warn("Play bloqueado:", err));
            } catch (err) {
                console.warn("Erro ao tentar iniciar áudio:", err);
            }

            navigate("/Home");
        } else {
            setError("Errou zezinha??????????????? 🥲");
        }
    };

    return (
        <div className="login-container">
            <div className="floating-hearts">
                <span className="heart">💕</span>
                <span className="heart">💕</span>
                <span className="heart">💕</span>
                <span className="heart">💕</span>
                <span className="heart">💕</span>
            </div>

            <div className="login-card">
                <div className="code-header">Bem-vinda, meu amor!</div>
                <div className="heart-icon">💕</div>

                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="zezinha@love.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-field"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-field"
                        />
                    </div>

                    {error && <p className="error-message">{error}</p>}

                    <button type="submit" className="login-button">
                        Entrar com Amor 💕
                    </button>
                </form>

                <div className="divider"></div>

                <p className="hint-text">
                    💡 Dica: Email: <strong>Etec</strong> | Senha: <strong>Estágio/ADM</strong>
                </p>
            </div>
        </div>
    );
}

export default Login;
