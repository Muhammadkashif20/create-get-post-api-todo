import Link from "next/link"

const page = async() => {
    let get=await fetch('http://localhost:3000/api/todos')
    get=await get.json()
  return (
    <div>
        <h1 className="text-center font-bold text-3xl ">Todos</h1>
        <input 
        placeholder="Add Your Todo" 
        type="text"
        className="p-3 mx-52 w-[46.4rem] my-3 rounded border border-gray-300"/>
        <button className="p-3 bg-purple-500 rounded text-white mx-[-12rem]">Add Todo</button>
        {get.todo.map((todo)=>{
            return(
                <Link key={todo.id} href={`/Todo/${todo.id}`}>
            <h1 className="border border-blue-400 p-3 text-center w-2/3 mx-52 m-3">{todo}</h1>
            </Link>
            )
        })}
    </div>
  )
}

export default page
