import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'

import { LoadingButton } from '@mui/lab'
import { Stack, Typography } from '@mui/material'

import NextLink from 'next/link'

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <LoadingButton
        variant='contained'
        sx={{ bgcolor: '#1DE3D3 !important', mt: 3, py: 1 }}
        className='bg-[#1DE3D3] py-3 w-full rounded font-semibold mt-5 '
        onClick={handleClickOpen}
        size='large'
      >
        Checkout
      </LoadingButton>
      {/* <Button variant='outlined'>Open alert dialog</Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <Stack
          sx={{ p: 4 }}
          spacing={2}
        >
          <Typography
            variant='h5'
            sx={{ textAlign: 'center', fontWeight: 500, fontSize: 18 }}
          >
            Thank you for reaching out to us. Please send the details of the
            property you are interested in purchasing to our email. Our team
            will respond to your inquiry as soon as possible.
          </Typography>
          <Typography
            variant='h3'
            color='initial'
            sx={{
              textAlign: 'center',
              fontWeight: 700,
              fontSize: 24,
              color: '#000',
            }}
          >
            info@dreamz.homes
          </Typography>
          <Button
            variant='contained'
            onClick={handleClose}
            sx={{ bgcolor: '#1DE3D3 !important', py: 1 }}
            LinkComponent={NextLink}
            href='/'
          >
            Go To Home
          </Button>
        </Stack>
      </Dialog>
    </React.Fragment>
  )
}
