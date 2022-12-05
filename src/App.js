import { useState } from "react"

function App() {
  const [name, setName] = useState("")
  const [info, setInfo] = useState([
    { id: 0, task: "example task" }
  ]);
  function addItem(e) {
    e.preventDefault();
    const i = info.length - 1;
    const j = info[i].id
    //alert(j)
    const tsk = {
      id: j + 1,
      task: name
    }
    // alert(typeof name)
    setInfo(info => [...info, tsk])
    console.log(info)
  }
  function deleteUser(el) {
    setInfo(info.filter((l) => l.id !== el.id))
  }
  return (
    <div className=" w-full h-screen bg-teal-400 ">
      <div className="w-full p-4 text-white text-center text-4xl bg-teal-700 shadow-lg">
        <p >Todo List App</p>
      </div>

      <div className="md:w-[30%] text-center mt-11 bg-teal-600 rounded-lg shadow-lg p-5 w-[80%] mx-auto">
        <form onSubmit={addItem} >
          <input type="text" value={name} placeholder="enter your name"
          className="p-1 rounded mx-3"
          required onChange={(e) => setName(e.target.value.toString())} />
          <button className=" bg-violet-900 shadoe-lg items-center p-1 px-2 rounded font-bold text-white"> Add Task </button>
          {/* <h2>{info.length}</h2> */}
          {/* <p>{name}</p> */}
        </form>
        <ul className="mt-10 text-white">{
          info.map((item) => (
            item.id === 0 ? <li></li>:<li className="mt-3">  {item.task} &nbsp; <button className=" bg-violet-900 text-xs rounded px-2 p-1 bg-" onClick={() => deleteUser(item)}>Complete</button></li>
          ))
        }</ul>
      </div>
      <div className="w-full text-center text-xs mt-11">made by Anurag kasudhan</div>
    </div>
  );
}

export default App;
