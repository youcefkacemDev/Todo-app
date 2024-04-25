export default function Footer({completedTodos, totalTodos}){
    return (
        <div className="position-fixed fixed-bottom d-grid bg-warning p-2 text-dark text-center display-6 rounded-bottom rounded-5">
            <div className="row">
                <div className="col">
                    <div>Completed Todos : {completedTodos}</div>
                </div>
                <div className="col">
                    <div>Total Todos : {totalTodos}</div>
                </div>
            </div>
        </div>
    );
}