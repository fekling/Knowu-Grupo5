import BackgroundColor from '../components/BackgroundColor';
import Menu from '../components/Menu';

function Index() {
    return (
        <>
            <BackgroundColor />
            <Menu />
            <div class="container">
                <h1 class="titulo">Cadastre-se e conheça pessoas incriveis!</h1>
                <div class="content">
                    <div class="campo-direita">
                        <input type="text" class="input-senha" placeholder="Nome de usuário" />
                        <input type="text" class="input-senha" placeholder="Email" />
                        <input type="text" class="input-senha" placeholder="senha" />
                        <input type="text" class="input-senha" placeholder="Confirme sua senha" />
                    </div>
                    <div class="campo-esquerda">
                        <input type="text" class="input-senha" placeholder="Nome completo" />
                        <input type="text" class="input-senha" placeholder="CPF" />
                        <input type="text" class="input-senha" placeholder="Data de nascimento" />
                        <input type="text" class="input-senha" placeholder="Gênero" />
                    </div>
                </div>
                <button class="btn"><a href="">Cadastrar</a></button>
            </div>
        </>

    );
}


export default Index;