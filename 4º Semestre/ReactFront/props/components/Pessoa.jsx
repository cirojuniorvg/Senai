import './Pessoa.css'

function Pessoa(props){

    return(
        <>
            <div className='divPessoa'>
                {console.log(props)}
                <h2>Nome: {props.nome}</h2>
                <p>Prosissão: {props.profissao}</p>
            </div>
        </>
    )
}

export default Pessoa;