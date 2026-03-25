import { useEffect, useState } from "react";
import { createEmployee, getEmployeeId, updateEmployee } from "../service/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const navigator = useNavigate();
  const { id } = useParams();

  // data from API to show in update form
  useEffect(() => {
    if (id) {
      getEmployeeId(id).then((r) => {
          setFirstName(r.data.firstName), setLastName(r.data.lastName), setEmail(r.data.email);
        }).catch((err) => console.error(err));
    }
  }, [id]);

  function handleSaveOrUpdateEmployee(e) {
    e.preventDefault();

    const emp = { firstName, lastName, email };
    if (id) {
      updateEmployee(id, emp).then((r) => {
        console.log(r.data);
        navigator("/employees");
      }).catch(err => console.error(err));
    }
    else {
      createEmployee(emp).then((r) => {
        console.log(r.data);
        navigator("/employees");
      }).catch(err => console.error(err));
    }
  }

  function pageTitle() {
    if (id) {
      return <h3 className="mb-0">Update Employee</h3>;
    } else {
      return <h3 className="mb-0">Add Employee</h3>;
    }
  }

  function pageButton() {
    if (id) {
      return <button type="button" className="btn btn-success" onClick={handleSaveOrUpdateEmployee} >Update</button>
    } else {
      return <button type="button" className="btn btn-success" onClick={handleSaveOrUpdateEmployee} >Save</button>
    }
  }

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center mt-5">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-header bg-primary text-white text-center rounded-top-4">{pageTitle()}</div>

            <div className="card-body p-4">
              <form>

                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label fw-semibold">First Name</label>
                  <input id="firstName" type="text" name="firstName" placeholder="Enter first name"
                    className="form-control form-control-lg" value={firstName} onChange={handleFirstName} />
                </div>

                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label fw-semibold">Last Name</label>
                  <input id="lastName" type="text" name="lastName" placeholder="Enter last name"
                    className="form-control form-control-lg" value={lastName} onChange={handleLastName} />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                  <input id="email" type="email" name="email" placeholder="Enter email address"
                    className="form-control form-control-lg" value={email} onChange={handleEmail} />
                </div>

                <div className="d-grid w-50 mx-auto">{pageButton()}</div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeComponent;
