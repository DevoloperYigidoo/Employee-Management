import { useForm } from "react-hook-form"
import useReduxItems from '../hooks/useReduxItems'
import { addNewEmployee, setOpenAddModal } from '../redux/slices/employeeSlice';
import { toast } from "react-toastify";
import { AlertCircle } from "lucide-react";
import {  motion } from "framer-motion";


function AddEmployee() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { dispatch } = useReduxItems()

  const closeAddModal = () => {
    dispatch(setOpenAddModal())
    reset()
  }

  const onSubmit = (data) => {
    dispatch(addNewEmployee(data));
    reset()
    toast.success("Personel Başarıyla Eklendi...");
    closeAddModal();
  }






  

  return (
    
      <motion.div initial={{ opacity: 0.4, y: -500 }} exit={{ opacity:0.2, y: 800 }} layout animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.375 }} id="addEmployeeModal" className="modal fade show">
        <div className="modal-dialog">
          <div className="modal-content">


            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="modal-header">
                <h4 className="modal-title">Personel Ekle</h4>
                <button onClick={closeAddModal} type="button" className="close" data-dismiss="modal">&times;</button>
              </div>

              <div className="modal-body">
                <div className="form-group">
                  <label>İsim</label>
                  <input type="text" className="form-control"  {...register("name", {
                    required: "Bu Alan Zorunludur!!!",
                  })} />
                  {errors.name && <p className="error-p" ><AlertCircle size={20} color="red" />{errors.name.message}</p>}
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" {...register("email", {
                    required: "Bu Alan Zorunludur!!",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Geçerli Bir Email Giriniz..."
                    }
                  })} />
                  {errors.email && <p className="error-p" ><AlertCircle size={20} color="red" />{errors.email.message}</p>}

                </div>
                <div className="form-group">
                  <label>Adres</label>
                  <textarea className="form-control" {...register("address", { required: "Bu Alan Zorunludur!!!" })}></textarea>
                  {errors.address && <p className="error-p" ><AlertCircle size={20} color="red" />{errors.address.message}</p>}
                </div>
                <div className="form-group">
                  <label>Telefon</label>
                  <input type="text" className="form-control" {...register("phone", {
                    required: "Bu Alan Zorunludur!!!",
                    maxLength: {
                      value: 11,
                      message: "11 Karakterden Fazla Olamaz "
                    }
                  })} />
                  {errors.phone && <p className="error-p" ><AlertCircle size={20} color="red" />{errors.phone.message}</p>}
                </div>

                <div className="form-group">
                  <label>Departman Seçimi</label>
                  <select style={{ marginLeft: 10 }} {...register("department")}>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="AI Engineer">AI Engineer</option>
                  </select>
                </div>
              </div>

              <div className="modal-footer">
                <input onClick={closeAddModal} type="button" className="btn btn-default" data-dismiss="modal" value="İptal Et" />
                <input type="submit" className="btn btn-success" value="Ekle" />
              </div>

            </form>
          </div>
        </div>
      </motion.div>
  )
}

export default AddEmployee