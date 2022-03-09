import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Jefferson', 19, '3'),
    new Cliente('Pedro', 21, '4'),
    new Cliente('Clara', 23, '5')
  ]
  
  function clienteSelecionado(cliente: Cliente) {
    console.log('Nome do Usuário ' + cliente.nome);
  }

  function clienteExcluido(cliente: Cliente) {
    console.log('Usuário excluido' + cliente.nome);
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo={'Cadastro Simples'}>
        <div className={'flex justify-end'}>
          <Botao cor={'green'} className={'mb-4'}> Novo Cliente </Botao>
        </div>
        <Tabela clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        />
      </Layout>
    </div>
  )
}
