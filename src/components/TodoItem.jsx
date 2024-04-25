export default function TodoItem({item, todos, setTodos}){
    function handleDelete(item){
        setTodos(todos.filter((todo)=>item !== todo.id));
    }
    function handleDone(id){
        const newTodos = todos.map(
            (todo)=>todo.id === id ? {...todo, done: !todo.done} : todo
        );
        setTodos(newTodos);
        console.log(todos);
    }
    const style = item.done ? "container rounded-5 bg-warning-subtle  mb-4 shadow-lg" : "container rounded-5 bg-primary-subtle  mb-4 shadow-lg";
    return(
        <div className={style}>
            <div className="row">
                <div className="col-6 display-5 p-3 ps-5">{item.name}</div>
                <div className="col-6 text-end ">
                    <button 
                        className="btn btn-success p-3 m-3 px-4 rounded-3 fw-bold me-4"
                        onClick={()=>handleDone(item.id)}
                    >✓</button>
                    <button 
                        className="btn btn-danger p-3 m-3 px-4 rounded-3 fw-bold me-4"
                        onClick={()=>handleDelete(item.id)}
                    >X</button>
                </div>
            </div>
        </div>
    );
}