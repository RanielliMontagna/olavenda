import { useCallback, useEffect, useState } from 'react';

import type { ICategoriaValues } from 'service/categorias/categorias.types';
import type { IClassificacaoFiscalValues } from 'service/classificacaoFiscal/classificacaoFiscal.types';

import { buscarClassificacoes } from 'service/classificacaoFiscal/classificacaoFiscal';
import { buscarCategorias } from 'service/categorias/categorias';
import useApp from 'store/app/app';

const useFields = () => {
  const { handleError, setLoading } = useApp();
  const [categorias, setCategorias] = useState<ICategoriaValues[]>([]);
  const [classificacoesFiscais, setClassificacoesFiscais] = useState<IClassificacaoFiscalValues[]>([]);

  const _buscarCategorias = useCallback(async () => {
    setLoading(true);

    try {
      const response = await buscarCategorias({});
      setCategorias(response.data.Categorias);
    } catch (err) {
      handleError(err);
    }

    setLoading(false);
  }, [handleError, setLoading]);

  const _buscarClassificacoesFiscais = useCallback(async () => {
    setLoading(true);

    try {
      const response = await buscarClassificacoes({});
      setClassificacoesFiscais(
        response?.data?.classificacoes?.data?.filter((classificao: IClassificacaoFiscalValues) => {
          if (classificao.Codigo) {
            return classificao;
          }

          return null;
        })
      );
    } catch (err) {
      handleError(err);
    }
  }, [handleError, setLoading]);

  useEffect(() => {
    _buscarCategorias();
    _buscarClassificacoesFiscais();
  }, [_buscarCategorias, _buscarClassificacoesFiscais]);

  return {
    categorias,
    classificacoesFiscais,
  };
};

export { useFields };
