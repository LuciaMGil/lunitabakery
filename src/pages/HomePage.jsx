import MenuItem from '../components/MenuItem';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CarouselHero  from '../components/CarouselHero';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const HomePage = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <CarouselHero />
        </Grid>
        <Grid size={3}>
          <MenuItem/>
        </Grid>
        <Grid size={3}>
          <Item>food item</Item>
        </Grid>
        <Grid size={3}>
          <Item>food item</Item>
        </Grid>
         <Grid size={3}>
          <Item>food item</Item>
        </Grid>
        <Grid size={3}>
          <Item>food item</Item>
        </Grid>
        <Grid size={3}>
          <Item>food item</Item>
        </Grid>
         <Grid size={3}>
          <Item>food item</Item>
        </Grid>
        <Grid size={3}>
          <Item>food item</Item>
        </Grid>
        <Grid size={3}>
          <Item>food item</Item>
        </Grid>
      </Grid>
    </Box>
    
    )
}

export default HomePage






