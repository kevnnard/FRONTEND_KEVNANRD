import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Modal, Grid, TextField, Select, MenuItem } from "@mui/material";
import { dispatch } from "@/store";
import { GET_ONE_WORK, UPDATE_ONE_WORK } from "@/pages/api/works";
import { updateOneWorkSuccess } from "@/store/slices/works";
import { useMutation } from "@apollo/client";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ worksState }: any) {
  const { getOneWork } = worksState;

  // Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Mutation
  const [name, setName] = useState(getOneWork.name);
  const [status, setStatus] = useState(getOneWork.status);
  const [role, setrole] = useState(getOneWork.role);
  const [platform, setplatform] = useState(getOneWork.platform);
  const [stack, setStack] = useState(getOneWork.stack);
  const [year, setYear] = useState(getOneWork.year);
  const [back, setBack] = useState(getOneWork.back);
  const [front, setFront] = useState(getOneWork.front);
  const [link, setLink] = useState(getOneWork.link);
  const [minDescription, setminDescription] = useState(
    getOneWork.minDescription
  );
  const [descriptionWork, setdescriptionWork] = useState(
    getOneWork.descriptionWork
  );
  const [images, setImages] = useState([]);

  const [updated, { loading, data }] = useMutation(UPDATE_ONE_WORK, {
    variables: {
      updateWorkId: getOneWork.id,
      input: {
        name,
        status,
        role,
        platform,
        stack,
        year,
        back,
        front,
        link,
        minDescription,
        descriptionWork,
      },
    },
    refetchQueries: [
      {
        query: GET_ONE_WORK,
        variables: {
          getOneWorkId: getOneWork.id,
        },
      },
      "getOneWorkId",
    ],
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      updated();
      if (!loading) dispatch(updateOneWorkSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };

  // if (loading) return <Loader />;
  return (
    <div>
      <Button variant="outlined" color="error" onClick={handleOpen}>
        Edit Work
      </Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography component="h1" variant="h5">
            {getOneWork.name}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name Project"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Select
                  required
                  fullWidth
                  id="role"
                  label="Role"
                  name="role"
                  value={role}
                  onChange={(e) => setrole(e.target.value)}
                >
                  <MenuItem value="WEB_APP">WEB APP</MenuItem>
                  <MenuItem value="ECOMERCE">ECOMERCE</MenuItem>
                  <MenuItem value="SHOPIFY">SHOPIFY</MenuItem>
                  <MenuItem value="MOVIL">MOVIL</MenuItem>
                  <MenuItem value="DESKTOP">DESKTOP</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="platform"
                  required
                  fullWidth
                  id="platform"
                  label="Platform"
                  autoFocus
                  value={platform}
                  onChange={(e) => setplatform(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="year"
                  label="Year Project"
                  name="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="stack"
                  label="Satck Address"
                  name="stack"
                  autoComplete="NextJs"
                  value={stack}
                  onChange={(e) => setStack(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="back"
                  required
                  fullWidth
                  id="back"
                  label="Link BackEnd"
                  autoFocus
                  value={back}
                  onChange={(e) => setBack(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="front"
                  label="Link FrontEnd"
                  name="front"
                  value={front}
                  onChange={(e) => setFront(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="link"
                  required
                  fullWidth
                  id="link"
                  label="URL Project"
                  autoFocus
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Select
                  required
                  fullWidth
                  id="status"
                  label="Status"
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <MenuItem value="INACTIVE">Inactive</MenuItem>
                  <MenuItem value="ACTIVE">Active</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Description"
                  label="Min Description"
                  id="Description"
                  value={minDescription}
                  onChange={(e) => setminDescription(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Description"
                  label="Description Project"
                  id="Description"
                  value={descriptionWork}
                  onChange={(e) => setdescriptionWork(e.target.value)}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  type="text"
                  required
                  fullWidth
                  name="image"
                  label="Images"
                  id="image"
                  value={images}
                  onChange={(e) => setImages(e.target.value)}
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update work
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
