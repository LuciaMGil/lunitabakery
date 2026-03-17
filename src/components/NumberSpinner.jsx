import { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const NumberSpinner = ({ min = 1, max = 10, defaultValue = 1 }) => {
  const [value, setValue] = useState(defaultValue);

  const handleIncrease = () => {
    if (value < max) setValue(value + 1);
  };

  const handleDecrease = () => {
    if (value > min) setValue(value - 1);
  };

  return (
    <Box display="flex" alignItems="center" gap={0}>
      <Button size="small" onClick={handleDecrease}>
        -
      </Button>

      <Typography>{value}</Typography>

      <Button size="small" onClick={handleIncrease}>
        +
      </Button>
    </Box>
  );
};

export default NumberSpinner