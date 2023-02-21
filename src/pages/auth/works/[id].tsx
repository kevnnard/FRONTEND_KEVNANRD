import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { dispatch, useSelector } from "@/store";
import { useLazyQuery } from "@apollo/client";
import { GET_ONE_WORK } from "@/pages/api/works";
import { getOneWorkSuccess } from "@/store/slices/works";
import WorkIdComp from "@/components/works/WorIdComponent";
import Loader from "@/components/ui-components/Loader";
import SplideComponent from "@/components/works/splide";
import FeaturedWork from "@/components/works/FeaturedWork";
import { Box, Grid, Stack } from "@mui/material";
import { Props } from "@/interfaces/worInteface";
import BasicModal from "@/components/works/utils/[id]";
import DeleteWorkId from "@/components/works/utils/DeleteWork";

const WorkId = () => {
  const router = useRouter();
  const { id } = router.query;
  const [worksState, setWorks] = useState<Props>();
  const { work } = useSelector((state: any) => state.works);

  const [getWorksData, { loading, data, startPolling, stopPolling }] =
    useLazyQuery(GET_ONE_WORK, {
      variables: {
        getOneWorkId: id,
      },
    });

  useEffect(() => {
    const onHandleClick = async () => {
      getWorksData();
      if (!loading) dispatch(getOneWorkSuccess(data));
    };
    onHandleClick();
  }, [data, getWorksData, loading, startPolling]);

  useEffect(() => {
    setWorks(work);
    stopPolling();
  }, [work, startPolling, stopPolling]);

  if (!worksState) return <Loader />;
  return (
    <>
      <WorkIdComp worksState={worksState} />
      <Stack
        direction={"row"}
        spacing={2}
        justifyContent="center"
        sx={{ padding: 2 }}
      >
        <BasicModal worksState={worksState} />
        <DeleteWorkId worksState={worksState} />
      </Stack>
      <Box sx={{ paddingBottom: "5rem" }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={16}>
            <FeaturedWork worksState={worksState} />
          </Grid>
        </Grid>
      </Box>
      <SplideComponent getWorksData={getWorksData} worksState={worksState} />
    </>
  );
};

WorkId.Layout = "authGuard";
export default WorkId;
