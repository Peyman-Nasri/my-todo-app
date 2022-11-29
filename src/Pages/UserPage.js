import styled from "@emotion/styled";
import { Card, LinearProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const [FetchingData, setFetchingData] = useState(true);
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
    getUser();
  }, []);

  return (
    <>
      <h1>User Page</h1>
      {FetchingData ? (
        <LinearProgress />
      ) : (
        // <Card style={{ margin: "1em auto", padding: "1em", lineHeight: '1.5em' }}>
        <StyledCard>
          <div>
            <b>Username: </b>
            <span>{user.username}</span>
          </div>
          <div>
            <b>Email: </b>
            <span>{user.email}</span>
          </div>
          <div>
            <b>Address: </b>
            <span>{`${user.address?.street} - ${user.address?.suite} - ${user.address?.city}`}</span>
          </div>
          <div>
            <b>Zipcode: </b>
            <span>{user.address.zipcode}</span>
          </div>
        </StyledCard>
      )}
    </>
  );
};

export default UserPage;


const StyledCard = styled(Card)`
  margin: 1.5 auto;
  line-height: 1.5em;
  padding: 1em;
`
