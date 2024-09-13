import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './AddEmployeeSalaryModal.module.css';
import closeX from './CloseX.svg';

const EditEmpSalaryModal = ({ isOpen, onClose, employeeId, departmentId, designationId }) => {
    const [animate, setAnimate] = useState(false);
    const [allowances, setAllowances] = useState([]);
    const [deductions, setDeductions] = useState([]);
    const [employee, setEmployee] = useState(null); // To store employee data
    const [department, setDepartment] = useState(null); // To store department data
    const [designation, setDesignation] = useState(null); // To store designation data
    const [basicSalary, setBasicSalary] = useState('');
    const [houseAllowance, setHouseAllowance] = useState('');
    const [transportAllowance, setTransportAllowance] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [tax, setTax] = useState('');
    const [pension, setPension] = useState('');
    const [loan, setLoan] = useState('');
    const [bonus, setBonus] = useState('');
    const [bearer, setBearer] = useState(''); // State to hold the bearer token
    const [isLoading, setIsLoading] = useState(true); // Loading state

    // Fetch the token when the modal opens (e.g., from localStorage or other source)
    useEffect(() => {
        if (isOpen) {
            const token = localStorage.getItem('token'); // Get the token from localStorage
            if (token) {
                setBearer(token); // Set the token in the state
            }

            const fetchData = async () => {
                try {
                    const [employeeResponse, departmentResponse, designationResponse] = await Promise.all([
                        axios.get(`https://hr-api.emas.ng/api/employees/fetchByID/${employeeId}`, {
                            headers: {
                                Authorization: `Bearer ${bearer}`,
                            },
                        }),
                        axios.get(`https://hr-api.emas.ng/api/department/fetchByID/${departmentId}`, {
                            headers: {
                                Authorization: `Bearer ${bearer}`,
                            },
                        }),
                        axios.get(`https://hr-api.emas.ng/api/designation/fetchByID/${designationId}`, {
                            headers: {
                                Authorization: `Bearer ${bearer}`,
                            },
                        }),
                    ]);

                    setEmployee(employeeResponse.data);
                    setDepartment(departmentResponse.data);
                    setDesignation(designationResponse.data);
                    setIsLoading(false); // Data is fully loaded
                } catch (error) {
                    console.error('Error fetching data:', error);
                    setIsLoading(false); // Stop loading on error
                }
            };

            if (bearer) {
                fetchData();
            }

            const timer = setTimeout(() => {
                setAnimate(true);
            }, 500);

            return () => clearTimeout(timer);
        } else {
            setAnimate(false);
        }
    }, [isOpen, bearer, employeeId, departmentId, designationId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            employee_id: employeeId,
            department_id: departmentId,
            designation_id: designationId,
            salary: basicSalary,
            start_date: startDate,
            end_date: endDate,
            pay_date: new Date().toISOString().split('T')[0], // Get today's date in ISO format
            house_allowance: houseAllowance,
            transport_allowance: transportAllowance,
            tax,
            pension,
            loan,
            bonus,
            deductions: deductions.reduce((acc, item) => acc + parseFloat(item.value || 0), 0), // Total deductions
        };

        // Add allowances as part of the form data
        formData.allowances = allowances.map(a => ({ amount: a.value }));

        try {
            const response = await axios.post('https://hr-api.emas.ng/api/payroll/create', formData, {
                headers: {
                    Authorization: `Bearer ${bearer}`,
                    'Content-Type': 'application/json',
                },
            });
            console.log('Success:', response.data);
        } catch (error) {
            console.error('Error submitting payroll:', error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className={classes.modalOverlayWhole}>
            <div className={classes.modalErrYes}>
                <button className={classes.closeButtonModally} onClick={onClose}>
                    <img src={closeX} alt='' />
                </button>
                <form onSubmit={handleSubmit} className={classes.modalContainer22}>
                    <h6>Edit Employee Salary</h6>
                    <h5>Employee information</h5>
                    <div className={classes.classGroupCont}>
                        <div className={classes.labelandInput}>
                            <label>Employee</label>
                            <input type="text" value={employee?.name || 'Loading...'} readOnly />
                        </div>
                        <div className={classes.labelandInput}>
                            <label>Department</label>
                            <input type="text" value={department?.name || 'Loading...'} readOnly />
                        </div>
                        <div className={classes.labelandInput}>
                            <label>Designation</label>
                            <input type="text" value={designation?.name || 'Loading...'} readOnly />
                        </div>
                    </div>

                    {/* Salary and Allowances Fields */}
                    <div className={classes.classGroupCont}>
                        <div className={classes.labelandInput}>
                            <label>Basic Salary</label>
                            <input
                                type="number"
                                value={basicSalary}
                                onChange={(e) => setBasicSalary(e.target.value)}
                                required
                            />
                        </div>
                        <div className={classes.labelandInput}>
                            <label>House Allowance</label>
                            <input
                                type="number"
                                value={houseAllowance}
                                onChange={(e) => setHouseAllowance(e.target.value)}
                            />
                        </div>
                        <div className={classes.labelandInput}>
                            <label>Transport Allowance</label>
                            <input
                                type="number"
                                value={transportAllowance}
                                onChange={(e) => setTransportAllowance(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Deductions Fields */}
                    <div className={classes.classGroupCont}>
                        <div className={classes.labelandInput}>
                            <label>Tax</label>
                            <input
                                type="number"
                                value={tax}
                                onChange={(e) => setTax(e.target.value)}
                            />
                        </div>
                        <div className={classes.labelandInput}>
                            <label>Pension</label>
                            <input
                                type="number"
                                value={pension}
                                onChange={(e) => setPension(e.target.value)}
                            />
                        </div>
                        <div className={classes.labelandInput}>
                            <label>Loan</label>
                            <input
                                type="number"
                                value={loan}
                                onChange={(e) => setLoan(e.target.value)}
                            />
                        </div>
                        <div className={classes.labelandInput}>
                            <label>Bonus</label>
                            <input
                                type="number"
                                value={bonus}
                                onChange={(e) => setBonus(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Start and End Dates */}
                    <div className={classes.classGroupCont}>
                        <div className={classes.labelandInput}>
                            <label>Start Date</label>
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                required
                            />
                        </div>
                        <div className={classes.labelandInput}>
                            <label>End Date</label>
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button className={classes.saveButton} type='submit'>Save</button>
                </form>
            </div>
        </div>
    );
};

export default EditEmpSalaryModal;
