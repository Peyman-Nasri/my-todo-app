import React, { useEffect } from "react";
import { useState } from "react";
import { v4 as shortId } from "uuid";
import {
  Button,
  Card,
  CardContent,
  Divider,
  TextField,
  Alert,
  Snackbar,
} from "@mui/material";
import { Stack } from "@mui/system";

function Input({ data, setData, updateData }) {
  // state
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [ShowAlert, setShowAlert] = useState(false);
  const [IsEditMode, setIsEditMode] = useState(false);

  // switch to edit mode after receiving updateData
  useEffect(() => {
    if (updateData) {
      const { title, desc } = updateData;

      setTitle(title);
      setDesc(desc);
      setIsEditMode(true);
    }
  }, [updateData]);

  //add task
  const addToDo = () => {
    if (!Title || !Desc) setShowAlert(true);
    else {
      const task = {
        id: shortId(),
        title: Title,
        desc: Desc,
        date: new Date(),
      };
      setTitle("");
      setDesc("");

      setData([...data, task]);

      localStorage.setItem("toDo", JSON.stringify([...data, task]));
    }
  };

  //edit task
  const editToDo = () => {
    if (!Title || !Desc) setShowAlert(true);
    else {
      const newEntry = {
        id: updateData.id,
        title: Title,
        desc: Desc,
        date: new Date(),
      };

      const indexOfNewElement = data.findIndex(
        (task) => task.id === updateData.id
      );
      let newData = [...data];
      newData[indexOfNewElement] = newEntry;

      setData(newData);
      setTitle("");
      setDesc("");
      setIsEditMode(false);

      localStorage.setItem("toDo", JSON.stringify(newData));
    }
  };

  //clear history
  const clearLocalStorage = () => {
    localStorage.clear();
    setData([]);
  };

  // Render
  return (
    <>
      <Card style={{ width: "50%", margin: "1em 23em" }}>
        <CardContent>
          <Stack>
            <TextField
              id="outlined-basic"
              autoComplete="off"
              label="Title"
              variant="outlined"
              type="text"
              value={Title}
              //saving the value of the input field in title state
              onChange={(e) => setTitle(e.target.value)}
            />
            <Divider style={{ margin: "0.5em 0" }} />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              value={Desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <Divider style={{ margin: "0.5em 0" }} />

            {IsEditMode ? (
              <Button variant="contained" color="secondary" onClick={editToDo}>
                Edit Todo
              </Button>
            ) : (
              <Button variant="contained" onClick={addToDo}>
                Add Todo
              </Button>
            )}

            <Divider style={{ margin: "0.5em 0" }} />

            <Button variant="outlined" onClick={clearLocalStorage}>
              Clear History
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Snackbar
        open={ShowAlert}
        onClose={() => setShowAlert(false)}
        sx={{ width: "100%" }}
        spacing={2}
        autoHideDuration={3000}
      >
        <Alert onClose={() => setShowAlert(false)} severity="error">
          Please fill out the fields needed
        </Alert>
      </Snackbar>
    </>
  );
}

export default Input;
