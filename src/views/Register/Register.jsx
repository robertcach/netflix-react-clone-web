import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerRequest } from '../../services/AuthService'
import * as yup from "yup";
import InputGroup from '../../components/InputGroup/InputGroup'
import './Register.scss';
import { useNavigate } from 'react-router';


const schema = yup.object({
  email: yup.string().email().required(),
  name: yup.string().required(),
  password: yup.string().min(8, 'Password must have at least 8 characters').required()
}).required()

const Register = () => {
  const [backErrors, setBackErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    setBackErrors({})
    setIsSubmitting(true)

    registerRequest(data)
      .then((user) => {
        console.log(user)
        navigate("/login")
      })
      .catch(err => {
        setBackErrors(err?.response?.data?.errors)
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="register-form">
        <div className="register-form__columns">
          <div className="register-form__left-col">
              <InputGroup
                label="Email"
                id= "email"
                register={register}
                error={backErrors?.email || errors.email?.message}
                type= "email"
                placeholder="Email"
              />
            </div>

            <div className="register-form__right-col">
              <InputGroup
                label="Name"
                id= "name"
                register={register}
                error={backErrors?.name || errors.name?.message}
                type= "text"
                placeholder="Name"
              />
            </div>
        </div>
        

        <div className="register-form__full-col">
          <InputGroup
            label="Password"
            id= "password"
            register={register}
            error={backErrors?.password || errors.password?.message}
            type= "password"
            placeholder="Password"
          />

        </div>

        <button className="register-form__button">{isSubmitting ? 'Submiting...' : 'Get Started'}
          <i className="fa fa-arrow-right register-form__icon" aria-hidden="true"></i>
        </button>
      </form>
    </>
  )
}

export default Register
