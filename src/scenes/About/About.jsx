import React from 'react';
import s from './About.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import laptopImg from "../../assets/aboutx.png"
import AboutTextCard from './AboutTextCard/AboutTextCard';
import TechSkills from './TechSkills/TechSkills';
import GithubActivity from './GithubActivity/GithubActivity';



const About = () => {
  

  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.about}>
          <div className={s.aboutDescription}>
            <h1 className={s.title}>
             Who <b className={s.purple}>I am .</b>
            </h1>
            <AboutTextCard />
          </div>

          <div className={s.aboutImg}>
            <img src={laptopImg} alt="about" className="img-fluid" />
          </div>

        </div>

        <h2 className={s.skills}>
          Professional <b className={s.purple}>Skills</b>
        </h2>
        <TechSkills />

        <h2 className={s.githubActivity}>
          Days I <b className={s.purple}>Code</b>
        </h2>
        <GithubActivity />
      </div>
      
    </BaseLayout>
  );
};

export default About;
