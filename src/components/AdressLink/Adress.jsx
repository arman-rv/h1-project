import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const Adress = ({name}) => {

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }

  return (
    <div  role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link style={{color:'var(--text-col4)'}} underline="hover" color="inherit" href="/">
              صفحه اصلی
            </Link>
            <Typography style={{color:'var(--text-col4)'}} color="text.primary">{name}</Typography>
          </Breadcrumbs>
        </div>
  )
}

export  {Adress};