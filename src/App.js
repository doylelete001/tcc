
import baka from './imagens/baka.jpeg'
import './styles.css'
function App() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="login">
        <form className="login-form">
        <span className="titulo-login">
          Bem Vindo
        </span>
        <span className="titulo-login">
          <img src={baka} alt=""/>
          </span>
          <div className="tudo-input">
            < input className ="input" type="email"/>
            <span className="focu.input"  placeholder="Email" >
            </span>
            </div>
            <div className="tudo-input">
            < input className="input" type="password"/>
            <span className="focar.input"  placeholder="Senha" >
            </span>
          </div>
          <div className="container-login-DoForm">
            <button className="container-login-DoForm">Login</button>
          </div>
          <div className="nao-posssui-conta">
            <span className="texto-do-nao-possui-conta"></span>
            <a className="texto2" href="#">Criar uma Conta</a>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default App;
