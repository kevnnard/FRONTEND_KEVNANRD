import { Box } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

const SplideComponent = ({ worksState }: any) => {
  const { getOneWork } = worksState;
  return (
    <Box
      sx={{
        maxWidth: "100%",
      }}
    >
      <Splide
        aria-label="My Works"
        options={{
          autoplay: true,
          type: "loop",
          perPage: 1,
          perMove: 1,
          focus: 0,
          interval: 1500,
          textAlign: "center",
        }}
      >
        {getOneWork
          ? getOneWork.images.map((item: any, index: number) => (
              <SplideSlide key={index}>
                <Image
                  src={`/images/works/${item.nameImage}.png`}
                  alt={`${item.nameImage}`}
                  width={650}
                  height={400}
                />
              </SplideSlide>
            ))
          : null}
      </Splide>
    </Box>
  );
};

export default SplideComponent;
