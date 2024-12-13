import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../../../components/Header/Header";
import { Container } from "react-bootstrap";

function Agendamento() {
  const [agendamentos, setAgendamentos] = useState([]);
  const { handleSubmit, register, reset } = useForm();

  async function loadData() {
    const resposta = await fetch("http://localhost:3000/agendamento");
    const dados = await resposta.json();
    setAgendamentos(dados);
  }
  async function excluirAgendamento(id) {
    await fetch(`http://localhost:3000/agendamento/${id}`, {
      method: "DELETE",
    });
    loadData();
  }
  async function editarAgendamento(id) {
    const data_agendamento = window.prompt("Digite uma nova data:");
    await fetch(`http://localhost:3000/agendamento/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data_agendamento }),
    });
    loadData();
  }
  async function salvarAgendamento(dados) {
    await fetch("http://localhost:3000/agendamento", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });
    loadData();
    reset();
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <h1>Agendamento</h1>
        <form onSubmit={handleSubmit(salvarAgendamento)}>
          <div>
            <label htmlFor="nome">Nome</label> <br />
            <input type="text" id="nome" {...register("nome")} />
          </div>
          <div>
            <label htmlFor="data_agendamento">Data Agendamento</label> <br />
            <input
              type="text"
              id="data_agendamento"
              {...register("data_agendamento")}
            />
          </div>
          <div>
            <label htmlFor="hora_agendamento">Hora Agendamento</label> <br />
            <input
              type="text"
              id="hora_agendamento"
              {...register("hora_agendamento")}
            />
          </div>
          <div>
            <label htmlFor="serviço">Serviço</label> <br />
            <select id="serviço" {...register("serviço")}>
              <option value="Corte Tesoura">Corte Tesoura</option>
              <option value="Corte Maquina">Corte Maquina</option>
              <option value="Corte Desenhado">Corte Desenhado</option>
              <option value="Barba">Barba</option>
            </select>
          </div>
          <button>Adicionar</button>
        </form>{" "}
        <br />
        <table>
          <tbody>
            {agendamentos.map((agendamento) => (
              <tr key={agendamento.id}>
                <td>{agendamento.nome}</td>
                <td>{agendamento.servico}</td>
                <td>{agendamento.data_agendamento}</td>
                <td>{agendamento.hora_agendamento}</td>
                <td>
                  <button onClick={() => editarAgendamento(agendamento.id)}>
                    Editar
                  </button>
                </td>
                <td>
                  <button onClick={() => excluirAgendamento(agendamento.id)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
}

export default Agendamento;
