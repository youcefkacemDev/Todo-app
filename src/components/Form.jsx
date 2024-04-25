import { useState } from "react";
export default function Form({todos, setTodos}){
    const [todo, setTodo] = useState({id: 1, name: "", done: false});
    const [i , setI] = useState(0);
    
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({id: setI(i+1), name: "", done: false});
    }
    return (
        <div>
            <form 
                className="d-flex justify-content-center mt-5 p-5"
                onSubmit={handleSubmit}
            >
                <input 
                    className="display-5 shadow-lg rounded-5 px-5 p-3 bg-dark text-white me-1"
                    onChange={(e)=> setTodo({id: i, name: e.target.value, done: false})} 
                    value={todo.name} 
                    type="text" 
                    placeholder="Write your todo..."
                />
                <button 
                    className="btn btn-success px-5 fw-bold shadow-lg rounded-5 ms-1" 
                    type="submit"
                >Add</button>
            </form>
        </div>
    );
}