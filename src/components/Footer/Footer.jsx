import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTwitter ,
} from 'react-icons/fa';

const Footer = () => {
 

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h1>Made with ❤️ by Andrey Carvajal</h1>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/Wasabi95"
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/AndyCarvajal100fx"
                target="_blank"
                rel="noreferrer"
                aria-label="facebook"
              >
                <FaFacebookSquare />
              </a>
            </li>
           
            <li>
              <a
                href="https://www.linkedin.com/in/andrey-carvajal-58b134283/"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className={s.socialLink}>
          <a
            href="https://twitter.com/your-twitter-handle"
            target="_blank"
            rel="noreferrer"
            className={s.socialIcon}
            aria-label="twitter"
          >
            <FaTwitter />
          </a>
        </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
