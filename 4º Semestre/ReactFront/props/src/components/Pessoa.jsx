import { useState } from "react";
import "./Pessoa.css"

function Pessoa(props){

    const [nome, setNome] = useState(props.nome);
    const [profissao, setProfissao] = useState(props.profissao);

    const handleTextNome = (event) => {
        setNome(event.target.value);
    }

    const handleTextProfissao = (event) => {
        setProfissao(event.target.value);
    }

    return(
        <main className="divPessoa">
            <section>
                <article>
                    <h2
                    >Nome: {nome}</h2>
                    <input 
                        type="text" 
                        placeholder="digite aqui o nome..." 
                        onChange={handleTextNome}
                        value={nome}
                    />
                    <p>Profissão: {profissao}</p>
                    <input 
                        type="text" 
                        placeholder="digite aqui o nome..." 
                        onChange={handleTextProfissao}
                        value={profissao}
                    />
                </article>
            </section>
        </main>
    )
}

export default Pessoa;