import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { AiOutlinePlus } from 'react-icons/ai';
import { FiDelete, FiEdit } from 'react-icons/fi';
import { useProdutoContext } from '../produto.context';

import { colunasCategorias } from './categoriasDialog.static';
import type { ICategoriasDialogProps } from './categoriasDialog.types';

const CategoriasDialog = ({ handleClose }: ICategoriasDialogProps) => {
  const { categorias } = useProdutoContext();

  return (
    <Dialog
      open
      onClose={handleClose}
      PaperProps={{
        style: {
          width: '100%',
        },
      }}
    >
      <DialogTitle>
        <Typography variant="h6">Categorias</Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button variant="outlined" startIcon={<AiOutlinePlus size={18} />}>
              Adicionar categoria
            </Button>
          </Grid>
          <Grid item xs={12} style={{ height: '50vh' }}>
            <DataGrid
              rows={categorias.map((categoria) => {
                return {
                  ...categoria,
                  cor: Number(categoria.cores || 5),
                };
              })}
              columns={colunasCategorias.map((value) => {
                if (value.field === 'acoes') {
                  return {
                    ...value,
                    renderCell: () => {
                      return (
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <div
                            style={{
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <FiEdit size={24} />
                          </div>
                          <div
                            style={{
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <FiDelete size={24} />
                          </div>
                        </div>
                      );
                    },
                  };
                }
                return value;
              })}
              isRowSelectable={() => false}
              hideFooter
              disableColumnMenu
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined" color="inherit">
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export { CategoriasDialog };
