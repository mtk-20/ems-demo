import React, { useState } from 'react'
import { useEffect } from 'react';
import { deleteDepartment, getDepartments } from '../service/DepartmentService';
import { useNavigate } from 'react-router-dom';

const ListDepartment = () => {
    const [departments, setDepartments] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllDepartments();
    }, [])

    function getAllDepartments() {
        getDepartments().then((r) => {
            setDepartments(r.data);
        }).catch(e => console.error(e));
    }

    function handleAddDepartment() {
        navigator("/add-department")
    }

    function handleUpdateDepartment(id) {
        navigator(`/update-department/${id}`)
    }

    function handleDeleteDepartment(id) {
        deleteDepartment(id).then((r) => {
            getAllDepartments();
        }).catch((e) => console.error(e)
        );
    }

    return (
        <>
            <div className="container">
                <div className="header-container">
                    <h2>Department List</h2>
                    <button type="button" className="btn btn-info" onClick={handleAddDepartment}>Add Department</button>
                </div>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departments.map((d) => (
                            <tr key={d.id}>
                                <td>{d.id}</td>
                                <td>{d.deptName}</td>
                                <td>{d.description}</td>
                                <td>
                                    <button type="button" className="btn btn-primary" onClick={() => handleUpdateDepartment(d.id)}>Update</button>
                                    <button type="button" className="btn btn-danger ms-1" onClick={() => handleDeleteDepartment(d.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ListDepartment;
