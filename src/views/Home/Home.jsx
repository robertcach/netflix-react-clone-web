import Banner from '../../components/Banner/Banner';
import FAQButton from '../../components/FAQButton/FAQButton';
import Header from '../../components/Header/Header';
import banners from '../../data/banners.json';
import faqs from '../../data/faq.json'
import Register from '../Register/Register';
import './Home.scss';

const Home = () => {
  return (
    <div id="main">
      <div className="first-banner">
        <Header />
      </div>

      <div className="banners">
        {banners.map(banner => {
          return (
            <Banner key={banner.id} {...banner} /> 
          )
        }
        )}
      </div>

      <div className="faqs">
        <div className="wrapper">
          <h2 className="faqs__title">Frequently Asked Questions</h2>
          {faqs.map(faq => {
            return (
              <FAQButton key={faq.id} {...faq} />
            )
          }
          )}
          <p className="faqs__info">Ready to watch? Enter your email to create or restart your membership.</p>

          <div className="faqs__register">
            <Register />    
          </div>
        </div>
      </div>

        
    </div>
  )
}

export default Home;