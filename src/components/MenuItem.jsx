import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import StrawberryCupcake from '../assets/strawberrycupcake.jpeg';
import NumberSpinner from '../components/NumberSpinner';

const MenuItem = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={StrawberryCupcake}
          alt="Strawberry cupcake"
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            Strawberry Cupcake
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Delicious Strawberry Cupcake
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Quantity */}
        <button>
      <NumberSpinner min={1} max={12} />
        </button>
  

        {/* CTA */}
        <Button 
          size="small"
          variant="contained"
          sx={{ 
            borderRadius: '20px',
            textTransform: 'none',
            px: 2
          }}
        >
          Order Now
        </Button>

      </CardActions>
    </Card>
  );
};

export default MenuItem;