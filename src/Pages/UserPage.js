/* eslint-disable react-hooks/exhaustive-deps */
import styled from "@emotion/styled";
import { Card, LinearProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";

const UserPage = () => {
  const [FetchingData, setFetchingData] = useState(true);
  const [user, setUser] = useState(false);

  /**************************************
   ******** Redux
   *************************************/
  // const counter = useSelector(state => state.counter)

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
        <StyledCard>
          <div>
            <b>Username: </b>
            <span>{user.username}</span>
          </div>
          <div>
            <b>Phone: </b>
            <span>{user.phone}</span>
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

      {/* <h1>The value of the counter in redux is: {counter}</h1> */}
    </>
  );
};

export default UserPage;

const StyledCard = styled(Card)`
  margin: 1.5 auto;
  line-height: 1.5em;
  padding: 1em;
`;
