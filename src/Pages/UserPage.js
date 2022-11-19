import { Card } from "@mui/material";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const { userId, userName } = useParams();

  return (
    <>
      <h1>User Page:</h1>
      <Card style={{ margin: "1em auto", padding: "1em"}}>
        <div>
          <b>ID: </b>
          <span>{userId}</span>
        </div>
        <div>
          <b>Name: </b>
          <span>{userName}</span>
        </div>
      </Card>
    </>
  );
};

export default UserPage;
