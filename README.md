import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import classes from './AddDept.module.css';
import trash from './trash.png';
import edit from './edit.png';
import miss from './miss.png';
import axios from 'axios';
import Modal from 'react-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TopNavBar from '../../Components/TopNavBar/TopNavBar';
import { BASE_URL } from '../../Pages/api/api';

Modal.setAppElement('#root');

const AddDept = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [newDepartment, setNewDepartment] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState(''); // State for selected department description
    const [departments, setDepartments] = useState([]);
    const [editIndex, setEditIndex] = useState(false);
    const [loading, setLoading] = useState(false);
    const [bearer, setBearer] = useState('');
    const [selectedDeptID, setSelectedDeptID] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            await readData();
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (bearer) {
            fetchDepartments();
        }
    }, [bearer]);

    const readData = async () => {
        try {
            const value = await AsyncStorage.getItem('tokens');
            if (value !== null) {
                setBearer(value);
            }
        } catch (e) {
            alert('Failed to fetch the input from storage');
        }
    };

    const fetchDepartments = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/department/fetchAll`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${bearer}`
                },
            });
            if (response.status === 200) {
                setDepartments(response.data.data);
            } else {
                console.error('Failed to fetch departments:', response.data.message);
            }
        } catch (error) {
            console.error('Error fetching departments:', error);
        }
    };

    const handleAddDepartmentClick = () => {
        setNewDepartment('');
        setSelectedDepartment(''); // Reset the description
        setEditIndex(false);
        setModalIsOpen(true);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
    };

    const handleAddNewDepartment = async () => {
        if (newDepartment.trim()) {
            const newDept = {
                name: newDepartment.trim(),
                description: selectedDepartment.trim() || 'Head of Department', // Add description
                company_id: '1',
            };

            try {
                const response = await axios.post(`${BASE_URL}/department/create`, newDept, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${bearer}`
                    },
                });

                if (response.status === 201 || response.status === 200) {
                    setDepartments([...departments, response.data.data]);
                    toast.success('Department added successfully!');
                } else {
                    console.error('Failed to add department:', response.data.message);
                }
            } catch (error) {
                console.error('Error adding department:', error);
            }

            setNewDepartment('');
            setSelectedDepartment(''); // Reset the description
            handleCloseModal();
        }
    };

    const handleSaveEdit = async () => {
        setLoading(true);
        if (editIndex !== null && editIndex >= 0 && editIndex < departments.length) {
            const selectedDept = departments[editIndex];
            const deptId = selectedDeptID // Ensure this is not undefined
            const updatedDeptName = newDepartment.trim();
            const updatedDeptDescription = selectedDepartment.trim() || 'Updated description here';
    
            console.log('Preparing to update department with the following details:');
            console.log('Department ID:', deptId);
            console.log('Updated Name:', updatedDeptName);
            console.log('Updated Description:', updatedDeptDescription);
    
            if (!deptId) {
                console.error('Department ID is undefined');
                return;
            }
         
            try {
                const response = await axios.get(`${BASE_URL}/department/update`, {
                    params: {
                        id: deptId,
                        name: updatedDeptName,
                        description: updatedDeptDescription
                    },
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${bearer}`,
                    },
                });
    
                if (response.status === 200) {
                    const updatedDepartments = departments.map((dept, idx) =>
                        idx === editIndex ? { ...dept, name: updatedDeptName, description: updatedDeptDescription } : dept
                    );
                    setDepartments(updatedDepartments);
                    fetchDepartments();
                    setEditIndex(false);
                    toast.success('Department updated successfully!');
                } else {
                    toast.error('Failed to update department.');
                }
            } catch (error) {
                console.error('Error updating department:', error);
                toast.error('An error occurred while updating the department.');
            }
    
            setNewDepartment('');
            setSelectedDepartment(''); // Reset the description
            handleCloseModal();
        } else {
            console.error('Edit Index is invalid or out of bounds');
        
            setLoading(false);
        }
    };
    
    
    

    const handleEditClick = (id) => {
        const foundDepartment = departments.find(item => item.id === id);
setEditIndex(true);
        setSelectedDepartment(foundDepartment?.description);
        setNewDepartment(foundDepartment?.name);
        setSelectedDeptID(foundDepartment?.id || ''); // Set description
        setModalIsOpen(true);
    };

    const handleDeleteClick = async (index) => {
        const departmentId = departments[index]._id;
        try {
            const response = await axios.delete(`${BASE_URL}/department/delete`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${bearer}`
                },
                data: { id: departmentId },
            });

            if (response.status === 200) {
                const updatedDepartments = departments.filter((_, deptIndex) => deptIndex !== index);
                setDepartments(updatedDepartments);
                toast.success('Department deleted successfully!');
            } else {
                console.error('Failed to delete department:', response.data.message);
            }
        } catch (error) {
            console.error('Error deleting department:', error);
        }
    };

    return (
        <div>
            <TopNavBar />
            <div className={classes.AddDept}>
                <div className={classes.textabove}>
                    <h5>Departments</h5>
                    <div className={classes.buttondept} onClick={handleAddDepartmentClick}>
                        Add Department
                    </div>
                </div>
                <div className={classes.tableContainer}>
                    <table className={classes.scheduleTable}>
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Department</th>
                                <th className={classes.actionColumn}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {departments.map((dept, index) => (
                                <tr key={dept.id || index} className={index % 2 === 1 ? classes.highlightRow : ''}>
                                    <td>{index + 1}</td>
                                    <td>{dept.name}</td>
                                    <td className={classes.actionButtons}>
                                        <button className={classes.editButton} >
                                            <img onClick={() => handleEditClick(dept.id)} src={edit} alt="Edit" />
                                        </button>
                                        <button className={classes.deleteButton}>
                                            <img onClick={() => handleDeleteClick(dept.id)} src={trash} alt="Delete" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={handleCloseModal}
                    contentLabel={editIndex === true ? 'Edit Department' : 'Add New Department'}
                    className={classes.modal}
                    overlayClassName={classes.overlay}
                >
                    <div className={classes.textandimg}>
                        <h2>{editIndex === true ? 'Edit Department' : 'Add New Department'}</h2>
                        <img src={miss} alt="Close" onClick={handleCloseModal} style={{ cursor: 'pointer' }} />
                    </div>
                    <br />
                    <hr />
                    <br />
                    <p>Enter department name</p>
                    <input
                        type="text"
                        value={newDepartment}
                        onChange={(e) => setNewDepartment(e.target.value)}
                        placeholder="Public Relations"
                        className={classes.modalInput}
                    />
                    <p>Enter department description</p> {/* New input for description */}
                    <input
                        type="text"
                        value={selectedDepartment}
                        onChange={(e) => setSelectedDepartment(e.target.value)} // Update the state with user input
                        placeholder="Enter department description"
                        className={classes.modalInput}
                    />
                    <button
                        onClick={editIndex !== null ? handleSaveEdit : handleAddNewDepartment}
                        className={classes.modalButton}
                        disabled={loading}
                       
                    >
                 
                        {editIndex === true ? 'Save changes' : 'Add department'}
                    </button>
                </Modal>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddDept;
