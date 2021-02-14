import { Router } from 'express';
import pool from '../dbconfig/dbconnector';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const client = await pool.connect();

    const sql = "SELECT * FROM public.todos";
    const { rows } = await client.query(sql);
    const todos = rows;
    
    client.release();

    res.send(todos);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/todos", async (req, res) => {
  try {
      const client = await pool.connect();
      const { description } = req.body;
      const newTodo = await client.query("INSERT INTO todos (description) VALUES($1) RETURNING * ", [description]);
      res.json(newTodo.rows[0]);
      client.release();
  } catch (error) {
      console.log(error.meessage)
  }
});

router.get("/todos", async (req, res) => {
  try {
      const client = await pool.connect();
      const allTodos = await client.query("SELECT * FROM todos");
      res.json(allTodos.rows);
      client.release();
  } catch (error) {
      console.log(error.meessage)
  }
});

router.get("/todos/:id", async (req, res) => {
  try {
      const client = await pool.connect();
      const { id } = req.params;
      const todo = await client.query("SELECT * FROM todos WHERE todo_id = $1", [id])
      res.json(todo.rows[0])
      client.release();
  } catch (error) {
      console.log(error.message)

  }
});

router.put("/todos/:id", async (req, res) => {
  try {
      const client = await pool.connect();
      const { id } = req.params;
      const { description } = req.body;
      const updateTodo = await pool.query("UPDATE todos SET description = $1 WHERE todo_id = $2", [description, id])
      res.json("Todo updated.")
      client.release();
  } catch (error) {
      console.log(error.message)
  }
});

router.delete("/todos/:id", async (req, res) => {
  try {
      const client = await pool.connect();
      const { id } = req.params;
      const deleteTodo = await client.query("DELETE FROM todos WHERE todo_id = $1", [id])
      res.json("Todo deleted.")
      client.release();
  } catch (error) {
      console.log(error.message)
  }
});


export default router;
  



