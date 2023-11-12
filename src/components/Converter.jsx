import { Box, Typography, Link, Button, Input } from "@mui/material";
import axios from "axios";
import youtube_parser from "../utils/ytParser";
import { useRef, useState, useEffect } from "react";

const Converter = () => {
  const inputUrlRef = useRef();
  const [urlResult, setUrlResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [processingMessage, setProcessingMessage] = useState(null);

  useEffect(() => {
    if (urlResult && urlResult.status === "ok") {
      console.log("URL Result: ", urlResult);
      setProcessingMessage(null);
      setUrlResult(urlResult);
    }
  }, [urlResult]);

  const handleClick = async (e) => {
    // e.preventDefault()
    const YoutubeID = youtube_parser(inputUrlRef.current.value);
    if (!YoutubeID) {
      console.log("Invalid URL");
      return;
    }

    setIsLoading(true);
    setProcessingMessage("Your video is processing, please wait...");

    const options = {
      method: "get",
      url: "https://youtube-mp36.p.rapidapi.com/dl",
      headers: {
        "X-RapidAPI-Key": `${process.env.REACT_APP_RAPID_API_KEY_MP3_CONVERTER}`,
        "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
      },
      params: {
        id: YoutubeID,
      },
    };
    axios(options)
      .then((res) => {
        setUrlResult(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));

    inputUrlRef.current.value = "";
  };

  const formatFileSize = (fileSizeInBytes) => {
    if (fileSizeInBytes < 1024) {
      return fileSizeInBytes + " bytes";
    } else if (fileSizeInBytes < 1024 * 1024) {
      return (fileSizeInBytes / 1024).toFixed(2) + " KB";
    } else if (fileSizeInBytes < 1024 * 1024 * 1024) {
      return (fileSizeInBytes / (1024 * 1024)).toFixed(2) + " MB";
    } else {
      return (fileSizeInBytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
    }
  };

  return (
    <Box
      width="70vw"
      margin="22px auto"
      borderRadius="2px"
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{
        border: { xs: "none", sm: "none", md: "2px solid red" },
      }}
    >
      <Typography
        variant="h3"
        marginTop="38px"
        fontSize="32px"
        color="#424242"
        fontWeight="bold"
        textAlign={"center"}
      >
        Youtube to MP3 Converter
      </Typography>
      <Input
        inputRef={inputUrlRef}
        placeholder="Enter your video link here..."
        disableUnderline
        sx={{
          width: { xs: "100%", sm: "100% ", md: "65%" },
          margin: "20px 0",
          border: "2px solid gray",
          padding: "12px",
          borderRadius: "3px",
        }}
      />

      <Button
        sx={{
          color: "white",
          backgroundColor: "red",
          padding: "12px",
          border: "2px solid red",
          textAlign: "center",
          marginBottom: "18px",
          ":hover": {
            color: "red",
            backgroundColor: "transparent",
            border: "2px solid red",
          },
        }}
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? "Converting..." : "Convert Now"}
      </Button>
      {processingMessage ? (
        <Typography variant="body1" fontWeight="bold" marginBottom="6px">
          {processingMessage}
        </Typography>
      ) : urlResult && urlResult.status === "ok" ? (
        <>
          <Typography variant="body1" fontWeight="bold" marginBottom="6px">
            Video Title: {urlResult.title}
          </Typography>
          <Typography variant="body2" fontWeight="bold">
            File Size: {formatFileSize(urlResult.filesize)}
          </Typography>
          <Button
            href={urlResult.link}
            rel="noreferrer"
            target="_blank"
            sx={{
              margin: "12px 0",
              ":hover": {
                color: "white",
                backgroundColor: "green",
              },
            }}
          >
            Download
          </Button>
        </>
      ) : (
        ""
      )}
      <Typography marginBottom="12px  " variant="subtitle1" color="gray">
        By using this service, you agree to our{" "}
        <Link color="#ff0000" underline="none">
          terms and services.
        </Link>
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          opacity: "0.7",
        }}
      >
        (If the converter doesn't work, try pasting your link one more time.)
      </Typography>
      <Typography variant="subtitle1" sx={{
        width: {xs: "100%", md: "90%"},
        margin: "22px 0",
        fontWeight: 'medium'
      }}>
        YTMP3 Master is a powerful YouTube to MP3 converter that allows you to
        easily convert your favorite YouTube videos into high-quality MP3 audio
        files. <br /> <br /> Whether you want to enjoy music on the go or save audio tracks
        for offline listening, YTMP3 Master has got you covered. Our
        user-friendly interface makes it simple to convert YouTube videos to MP3
        with just a few clicks. Simply paste the YouTube video URL, hit the
        "Convert Now" button, and let YTMP3 Master do the rest. You'll have your
        MP3 file ready to download in no time. <br /> <br /> YTMP3 Master is fast, reliable,
        and completely free to use. We are committed to providing a seamless
        experience for our users and ensuring that you can enjoy your favorite
        music hassle-free. Thank you for choosing YTMP3 Master for all your
        YouTube to MP3 conversion needs. We hope you find our service convenient
        and enjoyable.
      </Typography>
    </Box>
  );
};

export default Converter;
