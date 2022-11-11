import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { AiOutlinePlus } from 'react-icons/ai';

import { colunasCategorias } from './categoriasDialog.static';
import type { ICategoriasDialogProps } from './categoriasDialog.types';

const CategoriasDialog = ({ handleClose }: ICategoriasDialogProps) => {
  return (
    <Dialog open onClose={handleClose}>
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
          <Grid item xs={12}>
            <DataGrid
              rows={[
                {
                  id: 1,
                  nome: 'Categoria 1',
                },
                {
                  id: 2,
                  nome: 'Categoria 2',
                },
              ]}
              columns={colunasCategorias}
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
