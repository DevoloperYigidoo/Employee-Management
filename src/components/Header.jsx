import { useDispatch } from 'react-redux'
import { setOpenAddModal } from '../redux/slices/employeeSlice'
import { LogOut } from "lucide-react";
import { deleteCurrentUser } from '../redux/slices/authSlice';
import { toast } from 'react-toastify';

function Header() {

    const dispatch = useDispatch()
    const logout = () => {
        dispatch(setOpenAddModal());
        toast.success("Başarıyla Çıkış Yapıldı...");
    }

    return (
        <div className="table-title">
            <div className="row">
                <div className="col-sm-6">
                    <h2>Personel <b>Bilgileri</b></h2>
                </div>
                <div className="col-sm-6">
                    <button onClick={logout} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Yeni Personel Ekle</span></button>
                    <button onClick={() => dispatch(deleteCurrentUser())} className="btn btn-danger" data-toggle="modal"><i className="material-icons"><LogOut /></i> <span>Çıkış Yap</span></button>

                </div>
            </div>
        </div>
    )
}

export default Header