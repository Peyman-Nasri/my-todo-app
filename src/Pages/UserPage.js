import { useParams } from "react-router-dom";

const UserPage = () => {
  const { userId, userName } = useParams();

  return (
    <>
      <h1>User Page:</h1>
      <p>User Id is: {userId}</p>
      <p>User Name is: {userName}</p>
    </>
  );
};

export default UserPage;
