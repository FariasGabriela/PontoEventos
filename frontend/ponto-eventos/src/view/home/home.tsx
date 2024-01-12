import AppBarComponent from "../../components/appbar/appbar";
import "./home.css";
import Transitions from "../../components/transitions/transitions";

/**
 * View da tela inicial da aplicação
 */
export default function Home() {
  return (
    <div>
      <AppBarComponent title="Ponto Eventos" />

      <div className="background">
        <Transitions>
          <div className="card-button">Instituição</div>
        </Transitions>

        <Transitions>
        <div className="card-button">Evento</div>
        </Transitions>
      </div>
    </div>
  );
}
