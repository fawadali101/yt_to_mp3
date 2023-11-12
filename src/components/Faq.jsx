import React from 'react';
import { Box, Typography } from "@mui/material";
import Navbar from './Navbar';

const FAQ = () => {
  const faqData = [
    {
      question: 'Is YTMP3 Master free to use?',
      answer: 'Yes, YTMP3 Master is completely free to use. You can convert as many YouTube videos to MP3 as you like without any cost.'
    },
    {
      question: 'Do I need to create an account to use YTMP3 Master?',
      answer: 'No, there is no need to create an account or log in. YTMP3 Master provides a hassle-free experience without the need for registration.'
    },
    {
      question: 'Is the converted MP3 audio quality good?',
      answer: 'Yes, YTMP3 Master provides high-quality MP3 conversions. The audio quality of the converted files is excellent, ensuring you enjoy your music.'
    },
    {
      question: 'Are there any limitations on the length of the video I can convert?',
      answer: 'YTMP3 Master supports the conversion of videos of various lengths. However, extremely long videos may take a bit longer to process.'
    },
    {
      question: 'Is it legal to convert YouTube videos to MP3?',
      answer: "It's important to note that the legality of converting YouTube videos to MP3 may vary by jurisdiction and intended use. Make sure to respect copyright laws and only use YTMP3 Master for personal, non-commercial purposes."
    }
  ];

  return (
    <>
    <Navbar/>
    <Box width="70vw" margin="22px auto" display="flex" flexDirection="column">
      <Typography variant="h3" marginTop="38px" fontSize="32px" color="#424242" fontWeight="bold">
        Frequently Asked Questions (FAQ)
      </Typography>
      {faqData.map((item, index) => (
        <Box key={index} marginTop="20px">
          <Typography variant="h5" fontSize="20px" color="#333" fontWeight="bold">
            {item.question}
          </Typography>
          <Typography variant="body1" marginTop="10px" fontSize="18px" color="#333">
            {item.answer}
          </Typography>
        </Box>
      ))}
    </Box>
    </>
  );
};

export default FAQ;
