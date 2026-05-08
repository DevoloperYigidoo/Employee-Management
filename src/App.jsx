import { ToastContainer } from 'react-toastify';
import { AnimatePresence } from 'framer-motion';
import useReduxItems from './hooks/useReduxItems';
import AddEmployee from './components/AddEmployee';
import EditEmployee from "./components/EditEmployee"
import "./css/App.css"
import "./css/auth.css"
import ConfigRoute from './config/ConfigRoute';


function App() {

  const { isOpenAddEmployeeModal, isOpenEditEmployeeModal } = useReduxItems()

  return (
    <div>
      <div className="container">
        <div className="table-wrapper">
          <ConfigRoute />

          <AnimatePresence>
            {isOpenAddEmployeeModal && <AddEmployee />}
            {isOpenEditEmployeeModal && <EditEmployee />}
          </AnimatePresence>

          <ToastContainer autoClose={900} closeOnClick={true} />
        </div>
      </div>
    </div>
  )
}

export default App