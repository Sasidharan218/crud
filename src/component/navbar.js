import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

export default function ButtonAppBar() {
  
  return (
    <div >
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6">
            CRUD
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
