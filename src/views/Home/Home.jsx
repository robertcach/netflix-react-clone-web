import Banner from '../../components/Banner/Banner';
import FAQButton from '../../components/FAQButton/FAQButton';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import banners from '../../data/banners.json';
import faqs from '../../data/faq.json'
import './Home.scss';

const Home = () => {
  return (
    <div id="main">
      <div className="first-banner">
        <Header />
      </div>

      <div>
        {banners.map(banner => {
          return (
            <Banner key={banner.id} {...banner} /> 
          )
        }
        )}
      </div>

      <div className="faqs wrapper">
        <h2 className="faqs__title">Preguntas frecuentes</h2>
        {faqs.map(faq => {
          return (
            <FAQButton key={faq.id} {...faq} />
          )
        }
        )}
        <p className="faqs__info">¿Quieres ver algo ya? Escribe tu correo para crear una suscripción a Netflix o reactivarla.</p>
      </div>
        
    </div>
  )
}

export default Home;