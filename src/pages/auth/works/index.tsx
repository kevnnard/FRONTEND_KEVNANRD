/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { dispatch, useSelector } from "@/store";
import { getAllWorksSuccess } from "@/store/slices/works";
import { useLazyQuery } from "@apollo/client";
import { GET_ALL_WORKS } from "@/pages/api/works";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "next/link";
import Head from "next/head";

interface Props {
  id?: string;
  name?: string;
  year?: string;
  minDescription?: string;
  images: [any];
  status?: boolean;
}

const Works = () => {
  const theme = useTheme();
  const [worksState, setWorks] = useState<Props[]>();
  const { works } = useSelector((state: any) => state.works);

  const [getWorksData, { loading, data, startPolling, stopPolling }] =
    useLazyQuery(GET_ALL_WORKS);

  useEffect(() => {
    const onHandleClick = async () => {
      getWorksData();
      if (!loading) dispatch(getAllWorksSuccess(data));
    };
    onHandleClick();
  }, [data, getWorksData, loading]);

  useEffect(() => {
    setWorks(works);
    stopPolling();
  }, [works, startPolling, stopPolling]);
  return (
    <>
      <Head>
        <title>Works</title>
      </Head>
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            My works
          </Typography>
          {/* <Button onClick={onHandleClick}>Click</Button> */}
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ py: 2 }}>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {worksState
              ? worksState.getAllWorks!.map((card: Props, index: number) => (
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={`/images/works/${card.images[0].nameImage}.png`}
                        alt="random"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {card.name} - in {card.year}
                        </Typography>
                        <Typography>{card.minDescription}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">View</Button>
                        <Button size="small">
                          <Link type="button" href={`/auth/works/${card.id}`}>
                            Edit
                          </Link>
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))
              : null}
          </Grid>
        </Container>
      </main>
    </>
  );
};

Works.Layout = "authGuard";
export default Works;
