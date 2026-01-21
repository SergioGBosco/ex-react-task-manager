import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';


const TaskList = () => {

  const { tasks } = useContext(GlobalContext);
  console.log(`tasks:`, tasks)

  return (
    <div>
      <h1>Questa Pagina mostra la lista delle task</h1>
    </div>
  )
}

export default TaskList;
