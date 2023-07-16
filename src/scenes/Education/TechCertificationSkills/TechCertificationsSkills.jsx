import s from './TechSkillsCertification.module.scss';
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

const TechCertificationsSkills = () => {
  return (
    <ul className={s.container}>
       <li className={s.techIcon} style={{ color: 'rgb(247, 223, 30)' }}>
          <DiJavascript1 />
        </li>
        
      <li className={s.techIcon}>
        <SiTypescript style={{ color: '#3178c6' }}/>
      </li>
      
      <li className={s.techIcon}>
        <DiNodejs style={{ color: '#026e00' }}/>
      </li>
      
      <li className={s.techIcon}>
        <DiReact style={{ color: '#61dafb' }}/>
      </li>
      <li className={s.techIcon}>
        <DiMongodb style={{ color: '#00ED64' }}/>
      </li>
      
      <li className={s.techIcon}>
        <DiSass style={{ color: 'rgb(204, 102, 153)' }}/>
      </li>
      
      <li className={s.techIcon}>
        <SiAmazonaws style={{ color: '#f90' }}/>
      </li>
      
      <li className={s.techIcon}>
        <SiRedux style={{ color: '#764abc' }}/>
      </li>
      <li className={s.techIcon}>
        <SiSocketdotio />
      </li>
      
      <li className={s.techIcon}>
        <DiGit style={{ color: '#f14e32' }}/>
      </li>
      
      <li className={s.techIcon}>
        <DiPython style={{ color: 'rgb(55, 118, 171)' }}/>
      </li>
      <li className={s.techIcon} style={{ color: '#7952b3' }}>
          <DiBootstrap />
        </li>
        <li className={s.techIcon} style={{ color: '#264de4' }}>
          <DiCss3 />
        </li>
        <li className={s.techIcon} style={{ color: '#FFCB2B' }}>
          <DiFirebase />
        </li>
        <li className={s.techIcon} style={{ color: 'purple' }}>
          <DiGithub />
        </li>
        <li className={s.techIcon} style={{ color: '#336791' }}>
          <DiPostgresql />
        </li>
        <li className={s.techIcon} style={{ color: '#00758F' }}>
          <DiMysql />
        </li>
        <li className={s.techIcon} style={{ color: '#E34F26' }}>
          <DiHtml5 />
        </li>
        <li className={s.techIcon} style={{ color: '#5C2D91' }}>
          <DiVisualstudio />
        </li>
        <li className={s.techIcon} style={{ color: '#1E88E5' }}>
          <DiResponsive />
        </li>

    </ul>
  );
};

export default TechCertificationsSkills;