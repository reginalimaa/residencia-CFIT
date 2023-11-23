import styles from "../styles/Todos.module.css"


async function getData(){
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')

  if (!res.ok){
    throw new Error('Filed to fetch data')
  }
  
  return res.json()
}

export default async function Todos(){
  const data = await getData();
  return (
    <>
      <h1>Tarefas para fazer</h1>
      <ul className={styles.todolist}>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  )
}