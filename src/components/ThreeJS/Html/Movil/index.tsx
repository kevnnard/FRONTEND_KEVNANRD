const MovilHtml = ({ cameraPhone, cameraPositionInit }) => {
  return (
    <div
      onPointerLeave={cameraPositionInit}
      style={
        cameraPhone
          ? {
              background: "#ccc",
              height: "100%",
              transition: "all ease-in-out 1s",
            }
          : {}
      }
    >
      div
    </div>
  );
};

export default MovilHtml;
