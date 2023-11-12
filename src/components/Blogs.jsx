import { Box, Typography } from '@mui/material'
import React from 'react'
import {Navbar} from './'

const Blogs = () => {
  return (
    <>
    <Navbar/>
    <Box textAlign={'center'} margin={"20px 0"}>
        <Typography fontWeight={"bold"} variant='h1' sx={{
            fontSize: "36px",
            marginBottom: "20px"
        }}>Blogs Coming Soon!</Typography>
        <Typography variant='subtitle1'>Blogs will be available in a very short time. Meanwhile, subscribe to our newsletter to get updates and news.</Typography>
    </Box>
    </>
  )
}

export default Blogs