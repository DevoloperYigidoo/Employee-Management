import { createSlice } from '@reduxjs/toolkit'

const getEmployeesFromStorage = () => {
  const savedEmployees = localStorage.getItem("employees");
  return savedEmployees ? JSON.parse(savedEmployees) : [];
}

const initialState = {

  employees:getEmployeesFromStorage(),
  isOpenAddEmployeeModal:false,
  isOpenEditEmployeeModal:false,
  selectedEmployee:null,
}


const writeEmployeesToStorage = (employee) => {

  localStorage.setItem("employees",JSON.stringify(employee))

}

export const employeeSlice = createSlice({
    name:"employees",
    initialState,
    reducers:{
      setOpenAddModal: (state) => {
        state.isOpenAddEmployeeModal = !state.isOpenAddEmployeeModal;
      },
      setOpenEditModal: (state) => {
        state.isOpenEditEmployeeModal = !state.isOpenEditEmployeeModal;
      },
      addNewEmployee:(state,action) => {
        state.employees = [...state.employees,{...action.payload,id:Math.floor(Math.random() * 1000)}];
        writeEmployeesToStorage(state.employees);
      },
      deleteEmployee:(state,action) => {
        const filteredData = state.employees && state.employees.filter((employee) => employee.id !== action.payload.id);
        state.employees = filteredData;
        writeEmployeesToStorage(state.employees);
      },
      setSelectedEmployee:(state,action) => {
        state.employees.map((employee) => {
          if(employee.id === action.payload.id){
            state.selectedEmployee = action.payload;
          }
        })
      },
      editEmployee:(state,action) => {
        state.employees = state.employees.map((employee) => employee.id === action.payload.id ? action.payload : employee);
        writeEmployeesToStorage(state.employees);
      }
    }
})


export const { setOpenAddModal,addNewEmployee,deleteEmployee,setSelectedEmployee ,editEmployee,setOpenEditModal } = employeeSlice.actions

export default employeeSlice.reducer