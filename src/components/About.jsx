import React from 'react';
import { Box, Typography } from "@mui/material";
import {Navbar} from './'

const About = () => {
  return (
    <>
    <Navbar/>
    <Box width="70vw" margin="22px auto" display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h3" marginTop="38px" fontSize="32px" color="red" fontWeight="bold">
        About YTMP3 Master
      </Typography>
      <Typography variant="body1" marginTop="20px" fontSize="18px" color="#333">
        YTMP3 Master is a powerful YouTube to MP3 converter that allows you to easily convert your favorite YouTube videos into high-quality MP3 audio files. Whether you want to enjoy music on the go or save audio tracks for offline listening, YTMP3 Master has got you covered.
      </Typography>
      <Typography variant="body1" marginTop="20px" fontSize="18px" color="#333">
        Our user-friendly interface makes it simple to convert YouTube videos to MP3 with just a few clicks. Simply paste the YouTube video URL, hit the "Convert Now" button, and let YTMP3 Master do the rest. You'll have your MP3 file ready to download in no time.
      </Typography>
      <Typography variant="body1" marginTop="20px" fontSize="18px" color="#333">
        YTMP3 Master is fast, reliable, and completely free to use. We are committed to providing a seamless experience for our users and ensuring that you can enjoy your favorite music hassle-free.
      </Typography>
      <Typography variant="body1" marginTop="20px" fontSize="18px" color="#333">
        Thank you for choosing YTMP3 Master for all your YouTube to MP3 conversion needs. We hope you find our service convenient and enjoyable.
      </Typography>
    </Box>
    </>
  );
};

export default About;
