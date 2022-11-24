import { Card } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const [FetchingData, setFetchingData] = useState(false);
  const [user, setUser] = useState(false);

  const { userId } = useParams();
  const getUser = async () => {
    setFetchingData(true);

    const { data: user } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    setUser(user);

    setFetchingData(false);
  };

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      <h1>User Page</h1>
      <Card style={{ margin: "1em auto", padding: "1em" }}>
        <div>
          <b>ID: </b>
          <span>{userId}</span>
        </div>
      </Card>
    </>
  );
};

export default UserPage;
