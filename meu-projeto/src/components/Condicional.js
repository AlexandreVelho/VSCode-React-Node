import { useState } from 'react';

function Condicional() {
    const [email, setEmail] = useState('');
    const [userEmail, setUserEmail] = useState('');

    function enviarEmail(e) {
        e.preventDefault();
        setUserEmail(email);
        console.log('E-mail enviado:', email);
    }
    function limparEmail() {
        setUserEmail('')
    }
    return (
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                {/* Input para inserir o e-mail, com o valor vinculado ao estado 'email' */}
                <input
                    type="email"
                    placeholder="Digite o seu e-mail..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>
                    Enviar E-mail
                </button>
            </form>
            {userEmail && <p>E-mail cadastrado: {userEmail}</p>}
            <button onClick={limparEmail}>Limpar e-mail</button>
        </div>
    );
}

export default Condicional;
