import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';

const AvatarComponent =({avatarInitial}:{avatarInitial:string}) => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: deepOrange[500]}}>{avatarInitial}</Avatar>
    </Stack>
  );
}

export default AvatarComponent;