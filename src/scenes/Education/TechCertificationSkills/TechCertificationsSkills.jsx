/* import s from './TechSkillsCertification.module.scss';
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
   

    </ul>
  );
};

export default TechCertificationsSkills; */
import React from 'react';
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
  const certifications = [
    {
      name: 'JavaScript Certification',
      description: 'Certified in JavaScript by XYZ University',
      icon: <DiJavascript1 style={{ color: 'rgb(247, 223, 30)' }} />,
    },
    {
      name: 'TypeScript Certification',
      description: 'Certified in TypeScript by ABC University',
      icon: <SiTypescript style={{ color: '#3178c6' }} />,
    },
    {
        name: 'JavaScript Certification',
        description: 'Certified in JavaScript by XYZ University',
        icon: <DiNodejs style={{ color: 'rgb(247, 223, 30)' }} />,
      },
      {
        name: 'TypeScript Certification',
        description: 'Certified in TypeScript by ABC University',
        icon: <DiReact style={{ color: '#3178c6' }} />,
      },
      {
        name: 'JavaScript Certification',
        description: 'Certified in JavaScript by XYZ University',
        icon: <DiHtml5 style={{ color: 'rgb(247, 223, 30)' }} />,
      },
      {
        name: 'TypeScript Certification',
        description: 'Certified in TypeScript by ABC University',
        icon: <DiPython style={{ color: '#3178c6' }} />,
      },
    // Add more certifications here
  ];

  return (
    <ul className={s.container}>
      {certifications.map((certification, index) => (
        <li className={s.techIcon} key={index}>
          {certification.icon}
          <div className={s.certificationInfo}>
            <h3 className={s.certificationName}>{certification.name}</h3>
            <p className={s.certificationDescription}>{certification.description}</p>
            {/* Add more details and styling for each certification */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TechCertificationsSkills;
