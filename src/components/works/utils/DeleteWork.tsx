import Button from "@mui/material/Button";
import { DELETE_ONE_WORK, GET_ALL_WORKS } from "@/pages/api/works";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export default function DeleteWorkId({ worksState }: any) {
  const { getOneWork } = worksState;
  const router = useRouter();

  const [deleteWork, { loading, data }] = useMutation(DELETE_ONE_WORK, {
    variables: {
      deleteWorkId: getOneWork.id,
    },
    refetchQueries: [
      {
        query: GET_ALL_WORKS,
      },
      "GetAllWorks",
    ],
  });

  const handleDeleteWork = (e: any) => {
    e.preventDefault();
    const confirmData = confirm(
      `Do you Want delete This Work ${getOneWork.name}?`
    );
    if (confirmData) {
      try {
        deleteWork();
        if (!loading) {
          console.log(data);
          return router.push("/auth/works");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  // if (loading) return <Loader />;
  return (
    <div>
      <Button variant="outlined" color="error" onClick={handleDeleteWork}>
        Delete Work
      </Button>
    </div>
  );
}
