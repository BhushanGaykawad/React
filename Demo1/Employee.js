import Department from "./Department";
function Employee(data) {
    return (
      <div>
        <p style={{color:'red'}}>Name:{data.name}</p>
        <p style={{color:'blue'}}>Salary:{data.salary}</p>
        <Department dept={data.dept} head={data.head} />
      </div>
    );
  }
  export default Employee;