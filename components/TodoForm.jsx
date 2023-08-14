import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
 
const TodoForm = ({ add_Todo }) => {
  const [text, setText] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    add_Todo(text);
    setText('');
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ width: '100%' }}>
        <Box
          sx={{ display: 'flex', bgcolor: 'lightgrey', borderRadius: 1 }}
        >
          <Box sx={{flexGrow: 1,p: 1}}>
            <TextField
              id="myForm1" 
              label="Add Todo.." 
              variant="outlined"
              size="small"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Box>          
          
          <Box sx={{ p: 1}}>
            <Button 
              onClick={handleSubmit}
              variant="contained" 
              color="primary"
              endIcon={<SendIcon />}>Add</Button>
          </Box>
        </Box>
      </div>
    </form>
  );
};
 
export default TodoForm;