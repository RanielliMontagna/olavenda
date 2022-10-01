import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

import { center } from 'styles/shared.styles';
import { Container } from './404.styles';

const NotFound = () => {
  const _navigate = useNavigate();

  return (
    <Container>
      <img src="assets/svgs/404.svg" alt="404" />
      <div style={{ ...center, flexDirection: 'column', gap: 8 }}>
        <Typography variant="h1">Página não encontrada</Typography>
        <h2>Sinto muito, a página que você está procurando não existe ou foi removida.</h2>
      </div>
      <Button variant="outlined" onClick={() => _navigate('/')}>
        Voltar para a página inicial
      </Button>
    </Container>
  );
};

export { NotFound };
