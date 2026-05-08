import { toast } from "react-toastify";
import useReduxItems from "../hooks/useReduxItems"
import { deleteEmployee, setOpenEditModal, setSelectedEmployee } from "../redux/slices/employeeSlice"
import {  motion } from "framer-motion";

function Employees({ employee }) {

    const { dispatch } = useReduxItems()

    const openEditModal = () => {
        dispatch(setOpenEditModal());
        dispatch(setSelectedEmployee(employee))
    }

    const handleDelete = () => {
        const sure = confirm("Silmek İstediğinize Emin misiniz? ");
        if (sure) {
            dispatch(deleteEmployee(employee));
            toast.success("Personel Başarıyla Silindi...");
        } else {
            return null
        }
    }
    return (

            <motion.tbody initial={{ opacity: 0.2, x: -1000 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} layout exit={{ opacity: 0.2, x: -1200 }} >
                <tr>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.address}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.department}</td>
                    <td>
                        <a onClick={openEditModal} className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                        <a onClick={handleDelete} className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                    </td>
                </tr>
            </motion.tbody>
    )
}

export default Employees