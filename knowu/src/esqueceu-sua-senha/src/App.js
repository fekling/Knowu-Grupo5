import seta from './img/seta.png';
import bg from './img/bg-color.png';
import './App.css';
import AlterarSenha from './AlterarSenha/AlterarSenha';

function App() {
  return (
    <section>
       <img src={bg} alt="background colorido" class="bg"/>
      <div class="esquerda">
        <img src={seta} alt="seta para voltar" class="seta" />
        <h3>Voltar</h3>
      </div>
      <AlterarSenha/>
    </section>
  );
}

export default App;
