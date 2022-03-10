import { useState } from "react";

export default function useTabelaOuForm() {
    const [ visivel, setVisivel ] = useState<'tabela' | 'form'>('tabela');
    
    const exibirTabela = () => setVisivel('tabela');
    const exibirFormulario = () => setVisivel('form');

    return {
        exibirTabela,
        exibirFormulario,
        tabelaVisivel: visivel === 'tabela',
        formularioVisivel: visivel === 'form',
    }
}