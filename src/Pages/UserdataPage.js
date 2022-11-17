import { Card, CircularProgress, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Userdata from "../Components/Userdata";

const UserdataPage = () => {
  /**************************************
   ******** State
   *************************************/
  const [Users, setUsers] = useState(false);
  const [FetchingData, setFetchingData] = useState(false);
  const [SearchUser, setSearchUser] = useState("");
  // const [Timer, setTimer] = useState(null);

  /**************************************
   ******** Get Users
   *************************************/
  useEffect(() => {
    
    const getUsers = async () => {
      setFetchingData(true);

      const { data: users } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      const updatedUser = users.filter((user) =>
        user.name.toLowerCase().includes(SearchUser.toLowerCase())
      );

      setUsers(updatedUser);

      setFetchingData(false);

      // Then/catch
      // axios.get('https://jsonplaceholder.typicode.com/users')
      //   .then(({data}) => {
      //     // console.log(data)
      //     setUsers(data)
      //   })
      // .catch(err => console.log(err))
    };

    /**************************************
     ******** Delay in searching
     *************************************/

    const delayFunction = setTimeout(() => {
      getUsers();
    }, 1000);

    return () => clearTimeout(delayFunction);

    //   if (Timer) {
    //     clearTimeout(Timer);
    //     const time = setTimeout(getUsers(), 1000);
    //     setTimer(time);
    //   } else {
    //     const time = setTimeout(getUsers(), 1000);
    //     setTimer(time);
  }, [SearchUser]);

  // Show loading indicator
  if (FetchingData)
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
  // Show message if there are no users
  else if (!Users.length)
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

  return (
    <>
      <TextField
        id="outlined-basic"
        autoComplete="off"
        label="Search UserName ..."
        variant="outlined"
        margin="normal"
        fullWidth
        type="text"
        value={SearchUser}
        onChange={(e) => setSearchUser(e.target.value)}
      />
      {Users.map((user) => (
        <Userdata userData={user} key={user.id} />
      ))}
    </>
  );
};

export default UserdataPage;
