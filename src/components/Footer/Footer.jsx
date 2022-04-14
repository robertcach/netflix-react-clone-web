import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer wrapper">
      <div className="footer__call">
        <p className="footer__number">Questions? Call 900 822 377</p>
      </div>

      <div className="footer__cols">
        <div className="footer__col">
          <ul className="footer__ul">
            <li className="footer__li">FAQ</li>
            <li className="footer__li">Investor Relations</li>
            <li className="footer__li">Ways to watch</li>
            <li className="footer__li">Corporate Information</li>
            <li className="footer__li">Only on Netflix</li>
          </ul>
        </div>

        <div className="footer__col">
          <ul className="footer__ul">
            <li className="footer__li">Help Center</li>
            <li className="footer__li">Jobs</li>
            <li className="footer__li">Terms of Use</li>
            <li className="footer__li">Contact Us</li>
          </ul>
        </div>

        <div className="footer__col">
          <ul className="footer__ul">
            <li className="footer__li">Account</li>
            <li className="footer__li">Redeem Gift Cards</li>
            <li className="footer__li">Privacy</li>
            <li className="footer__li">Speed Test</li>
          </ul>
        </div>

        <div className="footer__col">
          <ul className="footer__ul">
            <li className="footer__li">Media Center</li>
            <li className="footer__li">Buy Gift Card</li>
            <li className="footer__li">Cookie Preferences</li>
            <li className="footer__li">Legal Notices</li>
          </ul>
        </div>
      </div>

      <div className="footer__last">
        <p className="footer__country">Netflix Spain</p>
      </div>
    
    </div>
  )
}

export default Footer