import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog'; 
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
 
const Todo = ({ _todo , delete_Todo, update_Todo}) => {

    const [open, setOpen] = useState(false);
    const [todo, setTodo] = useState({});
    // const [todotxt, setTodotxt] = useState(_todo.text);
    // const [todoid, setTodoID] = useState(_todo.id);

    const handleOpen = () => {
        setOpen(true);
    };    
    const handleClose = (e) => {
        e.preventDefault();
        console.log('closed');
        setOpen(false);
    };
    const handleSave = (e) => {
        update_Todo(todo);
        setOpen(false);
        console.log('saved');
        e.preventDefault();
    };

  return (
    <ListItem 
        key={_todo.id}
        secondaryAction={
        <IconButton 
            onClick={() => delete_Todo(_todo.id)}
            aria-label="delete" 
            color="error"
            size="large">
            <DeleteIcon fontSize="inherit" />
        </IconButton>
        }
        disablePadding
        divider
    >
        <ListItemButton role={undefined} onClick={handleOpen} dense>
            <ListItemIcon>
                <ArrowForwardIosIcon/>
            </ListItemIcon>
            <ListItemText 
                primary={_todo.text} />
        </ListItemButton>  
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Update Todo</DialogTitle>
            <DialogContent>
                <div>
                    <TextField 
                    id="text1" 
                    label="Change to" 
                    defaultValue={_todo.text} 
                    variant="standard" 
                    onChange={e => setTodo({id: _todo.id, text: e.target.value})}
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog> 
    </ListItem>
  );
};
 
export default Todo;