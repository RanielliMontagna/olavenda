import { useState, useLayoutEffect, useCallback } from 'react';
import { usePdvContext } from '../pdv.context';

export const LeituraCodigo = () => {
  const { produtos, produtosMethods } = usePdvContext();
  const [buffer, setBuffer] = useState('');
  const [control, setControl] = useState(false);

  const handlebuscarProduto = useCallback(() => {
    const produto = produtos.find((value) => value.codBar === buffer);
    if (produto) {
      const indexProduto = produtosMethods?.fields?.findIndex((item) => item?.idProduto === produto?.id);

      if (indexProduto !== -1) {
        produtosMethods.update(indexProduto, {
          ...produtosMethods.fields[indexProduto],
          quantidade: produtosMethods?.fields[indexProduto].quantidade + 1,
        });
      } else {
        produtosMethods.append({
          ...produto,
          quantidade: 1,
          idProduto: produto.id,
        });
      }
    }
  }, [buffer, produtos, produtosMethods]);

  const keyboardShortcut = useCallback(
    (event: KeyboardEvent) => {
      const localName = (event.target as HTMLInputElement)?.localName;

      switch (event.key) {
        case 'Enter': {
          if (buffer !== '') {
            handlebuscarProduto();
            //_buscaProdutoPorCodigoBarra(dispatch, buffer, saleProps, setValorDoProduto);
          }

          setBuffer('');
          break;
        }
        default: {
          if (localName !== 'input' && localName !== 'textarea') {
            if (event.key.length === 1) {
              if (event.key === 'j' && control) {
                setControl(false);
                setBuffer('');
              } else {
                setBuffer((current) => current + event.key);
              }
            } else {
              if (event.key === 'Control') {
                setControl(true);
              }
            }
          }
        }
      }
    },
    [buffer, control, handlebuscarProduto]
  );

  useLayoutEffect(() => {
    document.addEventListener('keyup', keyboardShortcut, true);

    return () => {
      document.removeEventListener('keyup', keyboardShortcut, true);
    };
  }, [buffer, control, keyboardShortcut]);
};
