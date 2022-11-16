import { Button, Card, CircularProgress } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import Sandbox from "../Components/Sandbox";

const SandboxPage = () => {

  /**************************************
   ******** State
   *************************************/
  const [Users, setUsers] = useState([])
  const [FetchingData, setFetchingData] = useState(false)

  /**************************************
   ******** Get users on mount
   *************************************/
  useEffect(() => {
    getUsers()
  }, [])

  /**************************************
   ******** Get Users
   *************************************/
  const getUsers = async () => {
    setFetchingData(true)

    const {data: users} = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(users)

    setFetchingData(false)

    // Then/catch
    // axios.get('https://jsonplaceholder.typicode.com/users')
    //   .then(({data}) => {
    //     // console.log(data)
    //     setUsers(data)
    //   })
    // .catch(err => console.log(err))
  }


  // Show loading indicator
  if (FetchingData) return (
    <Card 
      style={{minHeight: '10em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <CircularProgress />
    </Card>
  )

  // Show message if there are no users
  else if (!Users.length) return (
    <Card style={{minHeight: '10em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      No Users
    </Card>
  )

  // Render list of users
  return (
    <>
      {Users.map(user => <Sandbox userData={user} />)}
    </>
  );
};

export default SandboxPage;
