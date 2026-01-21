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


  const addTask = async newTask => {
    const response = await fetch(`${VITE_URL_API}/tasks`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask)
    })
    const { success, message, task } = await response.json();
    if (!success) throw new Error(message);

    setTasks(prev => [...prev, task])
  }

  const removeTask = (taskId) => {

  }

  const updateTask = (taskId) => {

  }


  return { tasks, addTask, removeTask, updateTask }
}

export default useTasks







