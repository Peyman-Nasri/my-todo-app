import { Card } from "@mui/material";
import { Link } from "react-router-dom";

const Userdata = ({ userData: { id, name, email, phone } }) => {
  return (
    <>
      <Link to={`/userdata/${id}`}>
        <Card style={{ margin: "1em auto", padding: "1em" }}>
          <div>
            <b>Name: </b>
            <span>{name}</span>
          </div>
          <div>
            <b>Email: </b>
            <span>{email}</span>
          </div>
          <div>
            <b>Phone: </b>
            <span>{phone}</span>
          </div>
        </Card>
      </Link>
    </>
  );
};

export default Userdata;
