// import { useState, useRef } from "react";
// import uuidv4 from 'uuid/package.json'

// function Input({ data, setData }) {
//   const [Title, setTitle] = useState("");
//   const [Desc, setDesc] = useState("");
//   const todoNameRef = useRef();

//   const addToDo = () => {
//     const task = {
//       id: uuidv4,
//       title: Title,
//       desc: Desc,
//       data: new Date(),
//     };

//     const name = todoNameRef.current.value;
//     const tasks = [...data, task]
//     if (name === "") return setData(tasks)
//     todoNameRef.current.value = null