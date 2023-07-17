import s from './IntroSection.module.scss';
import programmer from "../../../assets/programmer.svg"
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,  
  FaTwitter 
} from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
            As a self-taught React developer with 3 years of experience, 
            </p>
            <p>
            I have successfully created full-stack applications using technologies such as:
            </p>

            <p>
             
              <i>
                <b className={s.purple}>
                  TypeScript, React, Python, Javascript, AI, TensorFlow.<br/>
                  Bootstrap, MongoDB, PostgreSQL, MySQL
                </b>
              </i>
              <br />
              While my journey started as a hobby, I have built a portfolio on GitHub <br/>
              showcasing my projects. 
              Although I have not yet gained professional experience, <br/>
              I am eager to apply my skills <br/>
              in real-world scenarios and contribute as a software engineer.
            </p>

            <p>
              My field of Interest's are building new
              <i>
                <b className={s.purple}> Technologies and Products</b>
              </i>
            </p>
          </div>
        </div>
    {/*     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>         
          
        </svg> */}
      <div trackOnWindow={true}>
  <LazyLoadImage alt="avatar" effect="blur" />
  <img src={programmer} alt="avatar" style={{ width: '300px', height: 'auto' }} />
</div>
  

        
{/* 
       <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>         
          
        </svg>
        </Tilt>  */}
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/Wasabi95"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.facebook.com/AndyCarvajal100fx"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="facebook"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li className={s.socialLink}>
          <a
            href="https://twitter.com/AndreyCarvaja17"
            target="_blank"
            rel="noreferrer"
            className={s.socialIcon}
            aria-label="twitter"
          >
            <FaTwitter />
          </a>
        </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/andy-sanclemente-58b134283/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
