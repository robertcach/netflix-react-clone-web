import './InputGroup.scss';

const InputGroup = ({ label, id, name, type, placeholder, register, error }) => {
  return (
    <div className="form-input">
      <label className="form-input__label" htmlFor={id}></label>
      <input className="form-input__input" type={type} id={id} placeholder={placeholder} {...register(id)}></input>
      <p>{error}</p>
    </div>
  )
}

export default InputGroup;