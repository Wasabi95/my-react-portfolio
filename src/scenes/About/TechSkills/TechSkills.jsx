import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSass,
  Dipython,
  DiPython,
  DiBootstrap,
  DiCss3,
  DiFirebase,
  DiGithub,
  DiPostgresql,
  DiMysql,
  DiHtml5,
  DiVisualstudio,
  DiResponsive,
  DiNpm,
} from 'react-icons/di';
import {
  SiTypescript,
  SiRedux,
  SiSocketdotio,
  SiAmazonaws,
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <SiTypescript />
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiMongodb />
      </li>
      <li className={s.techIcon}>
        <DiSass />
      </li>
      <li className={s.techIcon}>
        <SiAmazonaws />
      </li>
      <li className={s.techIcon}>
        <SiRedux />
      </li>
      <li className={s.techIcon}>
        <SiSocketdotio />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <DiPython />
      </li>
      <li className={s.techIcon}>
        <DiBootstrap />
      </li>
      <li className={s.techIcon}>
        <DiCss3 />
      </li>
      <li className={s.techIcon}>
        <DiFirebase />
      </li>
      <li className={s.techIcon}>
        <DiGithub />
      </li>
      <li className={s.techIcon}>
        <DiPostgresql />
      </li>
      <li className={s.techIcon}>
        <DiMysql />
      </li>
      <li className={s.techIcon}>
        <DiHtml5 />
      </li>
      <li className={s.techIcon}>
        <DiVisualstudio />
      </li>
      <li className={s.techIcon}>
        <DiResponsive />
      </li>  

    </ul>
  );
};

export default TechSkills;
