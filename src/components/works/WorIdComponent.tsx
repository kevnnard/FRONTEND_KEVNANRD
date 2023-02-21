import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Image from "next/image";

export default function WorkIdComp({ worksState }: any) {
  const { getOneWork } = worksState;
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundImage: `url(/images/works/${getOneWork.images[0].nameImage}.png)`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <Image
          style={{ display: "none" }}
          src={`/images/works/${getOneWork.images[0].nameImage}.png`}
          width={100}
          height={100}
          alt={""} //   alt={post.imageText}
        />
      }
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {getOneWork.name}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Estado: {getOneWork.status}
            </Typography>
            <Typography variant="subtitle1">Rol: {getOneWork.role}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
