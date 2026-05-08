import { useForm } from "react-hook-form"
import { motion } from "framer-motion";
import { AlertCircle  } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {  setCurrentUser } from "../../redux/slices/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {

  

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {users} = useSelector(state => state.auth)


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    try {
      const findUser = users.find((user) => user.email === data.email && user.password === data.password);

      if(findUser){
        dispatch(setCurrentUser(data));
        toast.success("Başarıyla Giriş Yapıldı...");
        navigate("/");
      }else {
        toast.error("Email veya Şifre Uyuşmuyor...");
      }
      
      
    } catch (error) {
      toast.error(error.message);
    }
  }


  return (
    <motion.div initial={{ opacity: 0.2, x: -900 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.475 }} className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Giriş Yap</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
          <div className="input-group">
            <label>E-posta</label>
            <input
              type="text"
              placeholder="ornek@mail.com"
              {...register("email", {
                required: "Bu Alan Zorunludur!!!",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Email Formatına Uygun Olmaldır..."
                }
              })}
            />
            {errors.email && <p className="error-p" ><AlertCircle size={20} color="red" />{errors.email.message}</p>}
          </div>

          <div className="input-group">
            <label>Şifre</label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("password", {
                required: "Bu Alan Zorunludur!!!",
                minLength: {
                  value: 5,
                  message: "Minimum Karakter Sayısı 5 Olmalıdır..."
                }
              })}
            />
            {errors.password && <p className="error-p" ><AlertCircle size={20} color="red" />{errors.password.message}</p>}
          </div>

          <button type="submit" className="auth-button">Giriş Yap</button>
        </form>
        <div className="auth-footer">
          <span>Hesabın yok mu?</span>
          <a onClick={() => navigate("/register")}>Kayıt Ol</a>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;