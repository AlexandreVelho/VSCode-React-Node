function Saudacao({ nome }) {
    function gerarSaudacao(algumNome) {
        return `Olá, ${algumNome}, tudo bem?`;
    }

    return (
        <>
            <h1>Home</h1>
            <p>{gerarSaudacao(nome)}</p>
        </>
    );
}

export default Saudacao;