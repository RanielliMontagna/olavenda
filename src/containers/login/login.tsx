import * as styled from './login.styles';

const Login = () => {
  return (
    <form>
      <div style={{ display: 'flex', overflow: 'hidden' }}>
        <styled.DivLogin>{/* implementar */}</styled.DivLogin>

        <styled.DivLayout>
          <styled.DivIlustracao>
            <img src="./assets/svgs/welcome.svg" alt="loginIllustration"></img>
          </styled.DivIlustracao>
          <h1>Seja bem vindo!</h1>
          <h2>Faça vendas de forma simples e rápida, com o melhor sistema de gestão de vendas.</h2>
        </styled.DivLayout>
      </div>
    </form>
  );
};

export { Login };
