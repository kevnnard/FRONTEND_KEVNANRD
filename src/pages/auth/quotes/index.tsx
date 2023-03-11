/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { dispatch, useSelector } from "@/store";
import { getAllQuotes } from "@/store/slices/quotes";
import { useLazyQuery } from "@apollo/client";
import { GET_ALL_QUOTES } from "@/pages/api/quotes";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Link from "next/link";

const theme = createTheme();

interface Props {
  id?: string;
  nameUser?: string;
  emailUser?: string;
  phoneUser?: string;
  message?: string;
  createdAt?: string;
}

const Quotes = () => {
  const [quoteState, setQuotes]: any = useState();
  const { quotes } = useSelector((state: any) => state.quotes);

  const [getAllQuotesAction, { loading, data, startPolling, stopPolling }] =
    useLazyQuery(GET_ALL_QUOTES);

  useEffect(() => {
    const onHandleClick = async () => {
      getAllQuotesAction();
      if (!loading) dispatch(getAllQuotes(data));
    };
    onHandleClick();
  }, [data, getAllQuotesAction, loading]);

  useEffect(() => {
    setQuotes(quotes);
    stopPolling();
  }, [quotes, startPolling, stopPolling]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            My Quotes
          </Typography>
          {/* <Button onClick={onHandleClick}>Click</Button> */}
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ py: 2 }}>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {quoteState
              ? quoteState.getAllQuotes.map((card: Props, index: number) => (
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
                        image="https://source.unsplash.com/random"
                        alt="random"
                        height={160}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5">
                          {card.nameUser}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                          {card.emailUser}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                          {card.phoneUser}
                        </Typography>
                        <Typography>{card.message}</Typography>
                        <Typography variant="subtitle1">
                          {card.createdAt}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">
                          {/* <Link type="button" href={`/auth/works/${card.id}`}>
                            Edit
                          </Link> */}
                          <Typography>View</Typography>
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))
              : null}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
};

Quotes.Layout = "authGuard";
export default Quotes;
