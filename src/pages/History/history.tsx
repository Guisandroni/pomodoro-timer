import { AndamentoStyled, HistoryContainer, HistoryTable } from "./styles";

export function History() {
  return (
    <HistoryContainer>
      <h1>History Page</h1>

      <div>
        <HistoryTable>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Início</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Consertando a api</td>
                <td>20 minutos</td>
                <td>ha cerca de </td>
                <td>
            
                  <AndamentoStyled statusColor="yellow">Em andamento</AndamentoStyled>
                </td>
              </tr>
              <tr>
                <td>Consertando a api</td>
                <td>20 minutos</td>
                <td>ha cerca de </td>
                <td>
            
                  <AndamentoStyled statusColor="green">Concluido</AndamentoStyled>
                </td>
              </tr>
              <tr>
                <td>Consertando a api</td>
                <td>20 minutos</td>
                <td>ha cerca de </td>
                <td>
               
                  <AndamentoStyled statusColor="yellow">Em andamento</AndamentoStyled>
                </td>
              </tr>
              <tr>
                <td>Consertando a api</td>
                <td>20 minutos</td>
                <td>ha cerca de </td>
                <td>
                  <AndamentoStyled statusColor="red">Interrompido</AndamentoStyled>
                </td>
              </tr>
            </tbody>
          </table>
        </HistoryTable>
      </div>
    </HistoryContainer>
  );
}
