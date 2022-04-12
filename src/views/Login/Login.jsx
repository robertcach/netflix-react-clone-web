import InputGroup from '../../components/InputGroup/InputGroup';
import Navbar from '../../components/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { loginRequest } from '../../services/AuthService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useLocation, useNavigate } from 'react-router';
import { useState } from 'react';
import './Login.scss';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required()
}).required()


const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/profile"; // Accede a la última url del historial

  const { login } = useAuthContext();

  const [error, setError] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  

  const onSubmit = (data) => {
    setError(undefined)
    setIsSubmitting(true)

    loginRequest(data) // Llama a /loginRequest (authService) pasando el data
      .then(response => {
        login(response.access_token, () => navigate(from, { replace: true })) // Lo segundo es el callback
        navigate("/profile")
      })
      .catch(err => {
        setError(err?.response?.data?.message)
      })
      .finally(() => setIsSubmitting(false))
  };  


  return (
    <div className="login">
      <div className="login__content">
        <h1>Iniciar Sesión</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="login__form">
          <InputGroup 
            label="Email"
            id= "email"
            register={register}
            error={errors.email?.message}
            type="email"
            placeholder="Correo electrónico"
          />

          <InputGroup 
            label="Password"
            id= "password"
            register={register}
            error={errors.password?.message}
            type="password"
            placeholder="Contraseña"
          />

          <button className="register-form__button">Empezar
            <i className="fa fa-arrow-right register-form__icon" aria-hidden="true"></i>
          </button>
        </form>

        <p className="login__suscribe">¿Todavía sin Netflix?
          <a href="/" className="login__back-home"> Suscríbete ya</a>.
        </p>
      </div>
    </div>
  )
}

export default Login;