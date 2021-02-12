import express, { Application } from 'express';
import bodyParser from 'body-parser';
import EntryRouter from './routers/EntryRouter';
import cors from "cors"; 
import pool from './dbconfig/dbconnector';


class Server {
    private app : Application;

    constructor() {
        this.app = express();
        this.config();
        this.routerConfig();
        this.dbConnect();

    }

    private config() {
        this.app.use(bodyParser.urlencoded({ extended:true }));
        this.app.use(bodyParser.json({ limit: '1mb' })); // 100kb default
        this.app.use(cors());
    }


    private dbConnect() {
        pool.connect(function (err, client, done) {
            if (err) throw new Error(err);
            console.log('Connected');
          }); 
    }

    private routerConfig() {
        // this.app.use('/todos', todosRouter);
        // this.app.use('/migrate', migrateRouter);
        this.app.use('/', EntryRouter);

        this.app.post("/todos", async(req, res) => {
            try {
                const { description } = req.body;
                const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING * ", [description]);
                res.json(newTodo.rows[0]);
                
            } catch (error) {
                console.log(error.meessage)
            }
        });

        this.app.get("/todos", async(req, res) => {
            try {
                const allTodos = await pool.query("SELECT * FROM todo");
                res.json(allTodos.rows);
            } catch (error) {
                console.log(error.meessage)
            }
        });

        this.app.get("/todos/:id", async(req, res) => {
        try {
            const { id } = req.params;
            const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])
            res.json(todo.rows[0])
        } catch (error) {
            console.log(error.message)
            
        }
        });

        this.app.put("/todos/:id", async(req, res) => {
            try {
                const { id } = req.params;
                const { description } = req.body;
                const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description,id])
                res.json("Todo updated.")
            } catch (error) {
                console.log(error.message)
            }
        });

        this.app.delete("/todos/:id", async(req, res) => {
            try {
                const { id } = req.params;
                const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id])
                res.json("Todo deleted.")
            } catch (error) {
                console.log(error.message)
            }
        });




    }

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                resolve(port);
            }).on('error', (err: Object) => reject(err));
        });
    }
}

export default Server;