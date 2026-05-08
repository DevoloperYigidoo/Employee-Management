import { useDispatch, useSelector } from 'react-redux'

function useReduxItems() {

    const dispatch = useDispatch()
    const {employees,isOpenAddEmployeeModal,isOpenEditEmployeeModal,selectedEmployee} = useSelector((state) => state.employee )

  return {
    employees,isOpenAddEmployeeModal,dispatch,isOpenEditEmployeeModal,selectedEmployee
  }
}

export default useReduxItems