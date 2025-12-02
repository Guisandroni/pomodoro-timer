import { useContext } from "react";
import { AndamentoStyled, HistoryContainer, HistoryTable } from "./styles";
import { CyclesContext } from "../../contexts/CyclesContext";

function formatDistanceToNow(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return "a few seconds ago";
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} ${diffInMinutes === 1 ? "minute" : "minutes"} ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} ${diffInHours === 1 ? "hour" : "hours"} ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} ${diffInDays === 1 ? "day" : "days"} ago`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} ${diffInMonths === 1 ? "month" : "months"} ago`;
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears} ${diffInYears === 1 ? "year" : "years"} ago`;
}

export function History() {
  const { cycles } = useContext(CyclesContext);

  // Sort cycles by start date (most recent first)
  const sortedCycles = [...cycles].sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  return (
    <HistoryContainer>
      <h1>My History</h1>

      <div>
        {sortedCycles.length === 0 ? (
          <p style={{ color: "#8d8d99", textAlign: "center", marginTop: "2rem" }}>
            No cycles recorded yet. Start a new cycle on the home page!
          </p>
        ) : (
          <HistoryTable>
            <table>
              <thead>
                <tr>
                  <th>Session</th>
                  <th>Duration</th>
                  <th>Started</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {sortedCycles.map((cycle) => {
                  let status: "yellow" | "green" | "red" = "yellow";
                  let statusText = "In Progress";

                  if (cycle.finishedDate) {
                    status = "green";
                    statusText = "Completed";
                  } else if (cycle.interruptedDate) {
                    status = "red";
                    statusText = "Interrupted";
                  }

                  return (
                    <tr key={cycle.id}>
                      <td>{cycle.task}</td>
                      <td>{cycle.minutesAmount} minutes</td>
                      <td>
                        {formatDistanceToNow(new Date(cycle.startDate))}
                      </td>
                      <td>
                        <AndamentoStyled $statusColor={status}>
                          {statusText}
                        </AndamentoStyled>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </HistoryTable>
        )}
      </div>
    </HistoryContainer>
  );
}
