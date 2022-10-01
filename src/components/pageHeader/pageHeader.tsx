import { Grid, Typography } from '@mui/material';

interface PageHeaderProps {
  title: React.ReactNode;
  rightContent?: React.ReactNode;
}

const PageHeader = ({ title, rightContent }: PageHeaderProps) => {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h4" component="h1">
          {title}
        </Typography>
      </Grid>
      <Grid item>{rightContent}</Grid>
    </Grid>
  );
};

export { PageHeader };
