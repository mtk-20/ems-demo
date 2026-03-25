import React, { useState } from 'react'
import { useEffect } from 'react';
import { createDepartment, getDepartmentId, updateDepartment } from '../service/DepartmentService';
import { useNavigate, useParams } from 'react-router-dom';

const DepartmentComponent = () => {

    const [deptName, setDeptName] = useState("")
    const [description, setDescription] = useState("")

    const handleDeptName = (d) => setDeptName(d.target.value)
    const handleDescription = (d) => setDescription(d.target.value)

    const navigator = useNavigate();
    const { id } = useParams();

    // data from API to show in update form
    useEffect(() => {
        if (id) {
            getDepartmentId(id).then((r) => {
                setDeptName(r.data.deptName), setDescription(r.data.description)
            }).catch(e => console.error(e));
        }
    }, [id])

    function handleSaveOrUpdateDepartment(d) {
        d.preventDefault();
        const dept = { deptName, description }
        if (id) {
            updateDepartment(id, dept).then((r) => {
                console.log(r.data);
                navigator("/departments")
            }).catch(e => console.error(e));
        } else {
            createDepartment(dept).then((r) => {
                console.log(r.data);
                navigator("/departments")
            }).catch(e => console.error(e));
        }
    }

    function pageTitle() {
        if (id) {
            return <h3 className="mb-0">Update Department</h3>;
        } else {
            return <h3 className="mb-0">Add Department</h3>;
        }
    }

    function pageButton() {
        if (id) {
            return <button type="button" className="btn btn-success btn-lg" onClick={handleSaveOrUpdateDepartment} >Update</button>
        } else {
            return <button type="button" className="btn btn-success btn-lg" onClick={handleSaveOrUpdateDepartment} >Save</button>
        }
    }

    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center mt-5">
                <div className="col-md-6">
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-header bg-primary text-white text-center rounded-top-4">{pageTitle()}</div>

                        <div className="card-body p-4">
                            <form>

                                <div className="mb-3">
                                    <label htmlFor="deptName" className="form-label fw-semibold">Department Name</label>
                                    <input id="deptName" type="text" name="deptName" placeholder="Enter department name"
                                        className="form-control form-control-lg" value={deptName} onChange={handleDeptName} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label fw-semibold">Description</label>
                                    <input id="description" type="text" name="description" placeholder="Enter description"
                                        className="form-control form-control-lg" value={description} onChange={handleDescription} />
                                </div>

                                <div className="d-grid w-50 mx-auto">{pageButton()}</div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepartmentComponent
