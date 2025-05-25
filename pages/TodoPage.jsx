import React, { useState } from 'react';
import List from '@mui/material/List';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const mykey = process.env.NEXT_PUBLIC_KEY
 
const TodoPage = () => {
    const [todos, setTodos] = useState([{id: '001', text: `NextJS`},{id: '002', text: `Key : ${mykey}`}]);
    
    const addTodo = (text) => {
        const newTodo = { 
            id: Date.now().toString(), 
            text: text 
        };
        setTodos([...todos, newTodo]);
        console.log(newTodo);
    };

    const updateTodo = (_todo) => {
        const newTodos = [...todos];
        newTodos.map((todo) => {
            if(todo.id === _todo.id){
                todo.text = _todo.text;
                console.log(todo);
            }
        });
        // setTodos(newTodos);
    };
    
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
        // console.log(todos);
    };
    
    return (
        <Box
        sx={{
            width: 450 ,
            minWidth: 300,
            height: '60%',
            backgroundColor: 'background.paper',
            boxShadow: 2,
            border: 1,
            borderColor: 'primary.main',
            borderRadius: 2,
            p: 2,
            m: 1,
            position: 'absolute', 
            left: '50%', 
            top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <Box sx={{ 
                fontWeight: 'light',
                p: 2 }} >
                <Typography variant="h4" component="div">
                    {'Simple CRUD Todo List 🚀'}
                </Typography>
            </Box>

            
            <TodoForm add_Todo={addTodo} />
            
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {todos.map((todo_) => (
                <Todo
                    key={todo_.id}
                    _todo={todo_}
                    update_Todo={updateTodo}
                    delete_Todo={deleteTodo}
                />
                ))}
            </List>
        </Box>
    );
};
 
export default TodoPage;
