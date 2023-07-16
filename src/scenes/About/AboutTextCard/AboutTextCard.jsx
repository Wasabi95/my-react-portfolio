import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';
import { FaCat } from 'react-icons/fa';

const tiktokLinkStyle = {
  textDecoration: 'underline',
  color: '#FF3366',
  fontWeight: "900",
  
};

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I'm{' '}
        <span className={s.purple}>Andy Carvajal </span>
        a software engineer based in <br/> <span className={s.purple}> Queens, NYC.</span>
        <br />
        I specialize in cross-platform development with a focus 
        <br/>
        on React. {' '}
        <br />
        Although I haven't had the opportunity to gain professional
        <br/>
        experience yet,         
        <br />
        I am passionate about coding and constantly seeking 
        <br/>
        opportunities 
        <br />
        to expand my skills.
        <br />
        Outside of programming, I lead a fulfilling personal life. 
        <br />
        I am happily married, We also have a four-legged 
        <br/>
        and furry son, my cat. <FaCat size={24} />
        <br/>
        , who has brought joy to our home.
        <br/>
        Want to get to know him better? 
        <br/>
        
      Check out my{' '}
      <a
        target="_blank"
        href="https://www.tiktok.com/@wasabithebengalcat?lang=en"
        style={tiktokLinkStyle}
      >
        TikTok
      </a>
     
       
        <br />
        In my free time, I enjoy a variety of activities,
        <br />
        I love to relax with a good Netflix series
        <br />
        To stay active, I enjoy spinning classes,
        <br />
        Additionally, I have a flair for cooking
        <br />
        I am excited about the opportunities that lie ahead in my
        <br />
         software engineering journey
        <br />
        and look forward to contributing my skills and knowledge
        <br />
         to real-life projects.
        
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Netflix
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Spinning
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Cooking
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
