import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import SnackbarContent from '@mui/material/SnackbarContent';

const action = (
  <Button color="secondary" size="small" onClick={() => window.location.reload()}>
    Restart The Level
  </Button>
);

export default function Finish() {
  return (
    <div className='finish'>
      <Stack>
        <SnackbarContent message={'You Completed all the levels.'}
         action={action} />
      </Stack>
    </div>
  );
}
