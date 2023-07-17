import React from 'react';
import s from './TechSkillsCertification.module.scss';
import {
  DiReact,
  DiPython,
  DiHtml5,
} from 'react-icons/di';
import { SiTypescript} from 'react-icons/si';
import { FaGoogle } from 'react-icons/fa';

const TechCertificationsSkills = () => {
  const certifications = [
    {
      name: 'Google IT Support Professional Certificate',
      description:
        'The course covers a wide range of topics related to IT, including: Troubleshooting, Networking, Operating systems, System administration, Automation and scripting, and Security.',
      icon: <FaGoogle style={{ color: '#4285F4', fontSize: '48px' }} />,
      certificationLink:
        'https://www.coursera.org/account/accomplishments/specialization/certificate/6KACSVEZGVM4',
    },
    {
      name: 'TypeScript Certification',
      description:
        'The course covers a wide range of topics related to IT, including: Troubleshooting, Networking, Operating systems, System administration, Automation and scripting, and Security.',
      icon: <SiTypescript style={{ color: '#3178c6', fontSize: '48px' }} />,
      certificationLink:
        'https://www.coursera.org/account/accomplishments/specialization/certificate/6KACSVEZGVM4',
    },
    {
      name: 'JavaScript Certification',
      description:
        'The course covers a wide range of topics related to IT, including: Troubleshooting, Networking, Operating systems, System administration, Automation and scripting, and Security.',
      icon: <SiTypescript style={{ color: '#026e00', fontSize: '48px' }} />,
      certificationLink:
        'https://www.coursera.org/account/accomplishments/specialization/certificate/6KACSVEZGVM4',
    },
    {
      name: 'React Certification',
      description:
        'The course covers a wide range of topics related to IT, including: Troubleshooting, Networking, Operating systems, System administration, Automation and scripting, and Security.',
      icon: <DiReact style={{ color: '#61dafb', fontSize: '48px' }} />,
      certificationLink:
        'https://www.coursera.org/account/accomplishments/specialization/certificate/6KACSVEZGVM4',
    },
    {
      name: 'HTML5 Certification',
      description:
        'The course covers a wide range of topics related to IT, including: Troubleshooting, Networking, Operating systems, System administration, Automation and scripting, and Security.',
      icon: <DiHtml5 style={{ color: '#E34F26', fontSize: '48px' }} />,
      certificationLink:
        'https://www.coursera.org/account/accomplishments/specialization/certificate/6KACSVEZGVM4',
    },
    {
      name: 'Python Certification',
      description:
        'The course covers a wide range of topics related to IT, including: Troubleshooting, Networking, Operating systems, System administration, Automation and scripting, and Security.',
      icon: <DiPython style={{ color: 'rgb(55, 118, 171)', fontSize: '48px' }} />,
      certificationLink:
        'https://www.coursera.org/account/accomplishments/specialization/certificate/6KACSVEZGVM4',
    },
    // Add more certifications here
  ];

  return (
    <ul className={s.container}>
      {certifications.map((certification, index) => (
        <li className={s.techIcon} key={index}>
          {certification.icon}
          <div className={s.certificationInfo}>
            <h1 className={s.certificationName}>{certification.name}</h1>
            <p className={s.certificationDescription}>{certification.description}</p>
            <a
                target="_blank"
                rel="noreferrer"
                href={certification.certificationLink}
                className={`${s.certificationLink} ${s.underline}`}
                style={{ color: 'rgb(231, 40, 231)', fontWeight: '900' }}
              >
                View Certification
              </a>

            {/* Add more details and styling for each certification */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TechCertificationsSkills;

