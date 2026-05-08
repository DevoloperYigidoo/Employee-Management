import { AnimatePresence } from "framer-motion"
import useReduxItems from "../hooks/useReduxItems"
import Employees from "./Employees"

function EmployeeList() {

    const { employees } = useReduxItems()

    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>İsim</th>
                    <th>Email</th>
                    <th>Adres</th>
                    <th>Telefon</th>
                    <th>Departman</th>
                    <th>İşlemler</th>
                </tr>
            </thead>
            <AnimatePresence>
                {
                    employees && employees.map((employee) => (
                        <Employees key={employee.id} employee={employee} />
                    ))
                }
            </AnimatePresence>
        </table>

    )
}

export default EmployeeList