import { TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import RenderUsersList from "../Components/RenderUsersList";

const UserdataPage = () => {
  /**************************************
   ******** State
   *************************************/
  const [Users, setUsers] = useState([]);
  const [FetchingData, setFetchingData] = useState(false);
  const [SearchUser, setSearchUser] = useState("");
  const [Timer, setTimer] = useState(null);

  /**************************************
   ******** Get Users
   *************************************/
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
   ******** Search by typing
   *************************************/
  // better approach
  // useEffect(() => {
  // const timer = setTimeout(() => getUsers(), 1000);
  // return () => clearTimeout(timer);
  // }, [SearchUser]);

  // useEffect(() => {
  //   if (SearchUser.length) {
  //     if (Timer) clearTimeout(Timer);
  //     setTimer(setTimeout(getUsers(), 1000));
  //   } else if (!SearchUser && Users.length) {
  //     setUsers([]);
  //   }
  // }, [SearchUser]);

  useEffect(() => {
    if (SearchUser.length) {
      if (Timer) clearTimeout(Timer);

      setTimer(setTimeout(() => getUsers(), 1000));
    } else if (!SearchUser && Users.length) {
      setUsers([]);
    }
  }, [SearchUser]);

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
      <RenderUsersList users={Users} fetchingData={FetchingData} />
    </>
  );
};

export default UserdataPage;
