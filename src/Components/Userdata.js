import { Card } from "@mui/material";
import { Link } from "react-router-dom";

const Userdata = ({ userData: { id, name } }) => {
  return (
    <>
      <Link to={`/userdata/${id}`}>
        <Card style={{ margin: "1em auto", padding: "1em" }}>
          <div>
            <b>Name: </b>
            <span>{name}</span>
          </div>
        </Card>
      </Link>
    </>
  );
};

export default Userdata;
