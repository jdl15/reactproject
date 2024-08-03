import React, { useState } from 'react';

const TodoItem = ({ todo, toggleTodo, editTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSaveEdit = () => {
    editTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (<input type="text"
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}/>
                    ) : (<span className='item-text' onClick={() => toggleTodo(todo.id)}>{todo.text}</span>)
        }
      <div>
        {isEditing ? (<button className='save' onClick={handleSaveEdit}>Save</button>
                      ) : (<button className='edit' onClick={() => setIsEditing(true)}><i class="bi bi-pencil-square"></i></button>)
        }
        <button className='delete' onClick={() => deleteTodo(todo.id)}><i class="bi bi-trash-fill"></i></button>
      </div>
    </div>
  );
};

export default TodoItem;
