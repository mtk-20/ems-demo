import { useEffect, useState } from "react";
import { deleteEmployee, getEmployees } from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  function getAllEmployees() {
    getEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleAddEmployee() {
    navigator("/add-employee");
  }

  function handleUpdateEmployee(id) {
    navigator(`/update-employee/${id}`)
  }

  function handleDeleteEmployee(id) {
    deleteEmployee(id).then((r) => {
      getAllEmployees();
    }).catch((error) => {
      console.error(error);
    });
  }

  return (
    <>
      <div className="container">
        <div className="header-container">
          <h2>Employee List</h2>
          <button type="button" className="btn btn-info" onClick={handleAddEmployee}>Add Employee</button>
        </div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.email}</td>
                <td>
                  <button type="button" className="btn btn-primary" onClick={() => handleUpdateEmployee(e.id)}>Update</button>
                  <button type="button" className="btn btn-danger ms-1" onClick={() => handleDeleteEmployee(e.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListEmployee;
