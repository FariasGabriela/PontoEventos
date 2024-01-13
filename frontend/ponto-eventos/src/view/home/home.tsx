import "./home.css";
import Transitions from "../../components/transitions/transitions";
import { useNavigate } from "react-router-dom";

/**
 * View da tela inicial da aplicação
 */
export default function Home() {
  let history = useNavigate();

  return (
    <div>
      <div className="background">
        <Transitions>
          <div
            className="card-button"
            onClick={() => history("/listagem-instituicao")}
          >
            Instituição
          </div>
        </Transitions>

        <Transitions>
          <div
            onClick={() => history("/listagem-evento")}
            className="card-button"
          >
            Evento
          </div>
        </Transitions>
      </div>
    </div>
  );
}
