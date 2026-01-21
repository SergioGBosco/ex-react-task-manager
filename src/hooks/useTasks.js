import React from 'react'

import { useEffect, useState } from "react";

const { VITE_URL_API } = import.meta.env;

const useTasks = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`${VITE_URL_API}/tasks`)
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error(err))
  }, []);


  const addTask = (newTask) => {

  }

  const removeTask = (taskId) => {

  }

  const updateTask = (taskId) => {

  }


  return { tasks, addTask, removeTask, updateTask }
}

export default useTasks







