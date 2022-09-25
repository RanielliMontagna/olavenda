import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { center } from 'styles/shared.styles';
import { Container } from './404.styles';

const NotFound = () => {
  const _navigate = useNavigate();

  return (
    <Container>
      <img src="assets/svgs/404.svg" alt="404" />
      <div style={{ ...center, flexDirection: 'column', gap: 8 }}>
        <h1>Página não encontrada</h1>
        <h2>Sinto muito, a página que você está procurando não existe ou foi removida.</h2>
      </div>
      <Button variant="outlined" onClick={() => _navigate('/')}>
        Voltar para a página inicial
      </Button>
    </Container>
  );
};

export { NotFound };
