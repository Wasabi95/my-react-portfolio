import s from '../About/About.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import education from '../../assets/education (1).svg';
import programmer from "../../assets/programmer.svg"
import AboutTextCard from '../About/AboutTextCard/AboutTextCard';
import TechSkills from "../About/TechSkills/TechSkills"
import GithubActivity from '../About/GithubActivity/GithubActivity';

const Education = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.about}>
          <div className={s.aboutDescription}>
            <h1 className={s.title}>
              Know Who <b className={s.purple}>I'M</b>
            </h1>
            <AboutTextCard />
          </div>

          <div className={s.aboutImg}>
          <img src={education} alt="about" className="img-fluid" />
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

export default Education;
 

