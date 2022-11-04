
// // State
// const [Title, setTitle] = useState("");
// const [Desc, setDesc] = useState("");
// const [Data, setData] = useState(
//   JSON.parse(localStorage.getItem("toDo")) || []
// );

// // add todo
// const addToDo = () => {
//   const task = {
//     id: 1,
//     title: Title,
//     desc: Desc,
//     data: new Date(),
//   };

//   const tasks = [...Data, task];

//   setData(tasks);

//   //local storage
//   localStorage.setItem("toDo", JSON.stringify(tasks));
// };

// <span>title</span>
//       <input
//         type="text"
//         value={Title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <span>desc</span>
//       <textarea
//         type="text"
//         value={Desc}
//         onChange={(e) => setDesc(e.target.value)}
//       />

//       <button onClick={addToDo}>Add todo</button>

//       <div>
//         {Data.map(({ title, desc }) => (
//           <>
//             <p>
//               Title: <b>{title}</b>
//             </p>
//             <p>
//               Desc: <b>{desc}</b>
//             </p>
//           </>
//         ))}
//       </div>