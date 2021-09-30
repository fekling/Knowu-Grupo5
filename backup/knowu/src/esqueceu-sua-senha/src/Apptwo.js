import seta from './img/seta.png';
import bg from './img/bg-color.png';
import './Apptwo.css';
import AlterarSenhaEmail from '../../components/AlterarSenha/AlterarSenhaEmail';

function App() {
  return (
    <section>
       <img src={bg} alt="background colorido" class="bg-color"/>
      <div id="esquerda">
        <img src={seta} alt="seta para voltar" id="seta" />
        <h3 id="botao-voltar">Voltar</h3>
      </div>
      <AlterarSenhaEmail/>
    </section>
  );
}

export default App;
