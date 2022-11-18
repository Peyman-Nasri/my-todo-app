import { Card, CircularProgress } from "@mui/material";
import Userdata from "./Userdata";

const RenderUsersList = ({ fetchingData, users }) => {
  if (fetchingData) {
    return (
      <Card
        style={{
          minHeight: "10em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Card>
    );
  } else if (!users.length) {
    return (
      <Card
        style={{
          minHeight: "10em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        No Users
      </Card>
    );
  }

  return users.map((user) => <Userdata userData={user} key={user.id} />);
};

export default RenderUsersList;
