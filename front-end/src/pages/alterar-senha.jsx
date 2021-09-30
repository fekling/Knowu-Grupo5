import seta from '../assets/images/seta.png';
import bg from '../assets/images/bg-color.png';
import '../assets/css/alterar-senha.css';
import AlterarSenha from '../components/AlterarSenha';

function Index() {
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

export default Index;
