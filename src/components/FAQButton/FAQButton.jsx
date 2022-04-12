import { useState } from 'react';
import './FAQButton.scss';

const FAQButton = ({ title, content }) => {
  const [info, setInfo] = useState(false)

  const handleContent = () => {
    return info === false ? setInfo(true) : setInfo(false)
  }

  return(
    <div className="faq">
        <button className="faq__btn" onClick={handleContent}>
          <p className="faq__title">{title}</p>
          <i className="fa fa-plus faq__icon" aria-hidden="true"></i>
        </button>
        {info && 
          <p className="faq__content">{content}</p>
        }
         
    </div>
  )
}

export default FAQButton