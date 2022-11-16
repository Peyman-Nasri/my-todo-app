import { Card } from "@mui/material";


const Userdata = ({userData: {
  name,
  email,
  phone
}}) => {
  return (
    <>
      <Card style={{margin: '1em auto', padding: '1em'}}>
        <div><b>Name: </b><span>{name}</span></div>
        <div><b>Email: </b><span>{email}</span></div>
        <div><b>Phone: </b><span>{phone}</span></div>
      </Card>
    </>
  );
};

export default Userdata;