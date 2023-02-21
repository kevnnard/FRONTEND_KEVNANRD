import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "next/link";
import { Stack } from "@mui/material";

export default function FeaturedWork({ worksState }: any) {
  const { getOneWork } = worksState;
  return (
    <Grid item xs={16}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {getOneWork.platform}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {getOneWork.year}
            </Typography>
            <Typography variant="body2" color="secondary">
              {getOneWork.minDescription}
            </Typography>
            <Typography variant="subtitle2" paragraph>
              {getOneWork.descriptionWork}
            </Typography>

            <Typography variant="caption" paragraph color="primary">
              {getOneWork.stack}
            </Typography>
            <Stack direction="column" spacing={1}>
              <Link
                href={getOneWork.front === "Null" ? "#" : getOneWork.front}
                target="_blank"
                color="primary"
              >
                Watch FronteEnd Code
              </Link>
              <Link
                href={getOneWork.back === "Null" ? "#" : getOneWork.back}
                target="_blank"
                color="primary"
              >
                Watch Backend Code
              </Link>
              <Link href={getOneWork.link} target="_blank" color="primary">
                Watch work
              </Link>
            </Stack>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: "50%", display: { xs: "none", sm: "block" } }}
            image={`/images/works/${getOneWork.images[0].nameImage}.png`}
            // alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}
