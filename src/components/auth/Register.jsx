import { useForm } from "react-hook-form"
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewUser } from "../../redux/slices/authSlice";
import { toast } from "react-toastify";

const Register = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    try {
      dispatch(addNewUser(data));
      reset();
      toast.success("Kullanıcı Başarıyla Oluşturuldu...");
      navigate("/login")
    } catch (error) {
      toast.error(error.message);
    }
  }


  return (
    <motion.div initial={{ opacity: 0.2, x: -900 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.475 }} className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Hesap Oluştur</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
          <div className="input-group">
            <label>Ad Soyad</label>
            <input
              type="text"
              placeholder="Adınız Soyadınız"
              {...register("name", {
                required: "Bu Alan Zorunludur!!!",
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "Sadece Harflerden Oluşmalıdır...",
                }
              })}
            />
            {errors.name && <p className="error-p" ><AlertCircle size={20} color="red" />{errors.name.message}</p>}
          </div>

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

          <button type="submit" className="auth-button">Kayıt Ol</button>
        </form>

        <div className="auth-footer">
          <span>Zaten üye misin?</span>
          <a onClick={() => navigate("/login")}>Giriş Yap</a>
        </div>
      </div>
    </motion.div>
  );
};

export default Register;