import React from 'react';
import s from './TechSkillsCertification.module.scss';
import {
  DiReact,
  
  DiHtml5,
  DiGit,
  DiCss3,
  DiJavascript1,
} from 'react-icons/di';

import {  FaGithub } from 'react-icons/fa';

const TechCertificationsSkills = () => {
  const certifications = [
    {
      name: 'Google IT Support Professional Certificate',
      icon: (
        <img
          src="https://w7.pngwing.com/pngs/63/1016/png-transparent-google-logo-google-logo-g-suite-chrome-text-logo-chrome.png"
          alt="Google IT Support Professional Certificate"
          style={{ width: '48px', height: '48px' }}
        />
      ),
      description:
        'The course covers a wide range of topics related to IT, including: Troubleshooting, Networking, Operating systems, System administration, Automation and scripting, and Security.',
      image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/fa/79e521abf14610b4fec9d677901916/0.png?auto=format%2Ccompress&dpr=1&w=&h=45',
      certificationLink:
        'https://www.coursera.org/account/accomplishments/specialization/certificate/6KACSVEZGVM4',
    },
    {
      name: 'Meta Professional Version Control Cert.',
      icon: ( 
       <>  
        <DiGit style={{ color: '#f14e32', fontSize: '48px' }} />
        <FaGithub style={{ color: 'purple', fontSize: '48px' }} />
        </>
      ),
      description:
        'Learn how modern software developers collaborate across the world without messing up each others code. You will look at the different version control systems, also Linux commands ',
      image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/73/e03b13a8e44df9b19eb279e5506396/360-x-360.png?auto=format%2Ccompress&dpr=1&w=56px&h=56px&auto=format%2Ccompress&dpr=1&w=&h=',
      certificationLink:
        'https://www.coursera.org/account/accomplishments/certificate/83ZB2EU7W9YT',
    },
    {
      name: 'Programming with JavaScript',
      icon: <DiJavascript1 style={{ color: '#F7DF1E', fontSize: '48px' }} />,
      description:
        'JavaScript is the programming language that powers the modern web. In this course, you will learn the basic concepts of web development with JavaScript.',
      image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/73/e03b13a8e44df9b19eb279e5506396/360-x-360.png?auto=format%2Ccompress&dpr=1&w=56px&h=56px&auto=format%2Ccompress&dpr=1&w=&h=',
      certificationLink:
        'https://www.coursera.org/account/accomplishments/certificate/UTNVNS9CS66V',
    },
    {
      name: 'HTML and CSS in depth',
      icon: (
        <>
          <DiHtml5 style={{ color: '#E34F26', fontSize: '48px' }} />
          <DiCss3 style={{ color: '#264de4', fontSize: '48px' }} />
        </>
      ),
      description:
        'HTML is a markup language used for structuring web content, defining headings, images, and links. CSS is a style sheet language used to design and layout HTML elements, applying colors, fonts, and spacing.',
      image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/73/e03b13a8e44df9b19eb279e5506396/360-x-360.png?auto=format%2Ccompress&dpr=1&w=56px&h=56px&auto=format%2Ccompress&dpr=1&w=&h=',
      certificationLink:
        'https://www.coursera.org/account/accomplishments/certificate/S6MFVDMALMAN',
    },
    {
      name: 'React Certification',
      image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/73/e03b13a8e44df9b19eb279e5506396/360-x-360.png?auto=format%2Ccompress&dpr=1&w=56px&h=56px&auto=format%2Ccompress&dpr=1&w=&h=',
      description:
        'GitHub Certification is designed for software developers, project managers, students, and teachers who want to demonstrate their proficiency with GitHub in classroom or professional settings.',
        icon: <DiReact style={{ color: '#61dafb', fontSize: '48px' }} />,
      certificationLink:
        'https://www.your-certification-link-here.com',
    },
    {
      name: 'Full Stack Development',
      icon: <FaGithub style={{ color: '#000000', fontSize: '48px' }} />,
      description:
        'Full stack refers to the end-to-end computer system application, including the front end and back end coding. This Professional Certificate covers development for both of these scenarios.',
        image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/73/e03b13a8e44df9b19eb279e5506396/360-x-360.png?auto=format%2Ccompress&dpr=1&w=56px&h=56px&auto=format%2Ccompress&dpr=1&w=&h=',
        certificationLink:
          'https://www.coursera.org/account/accomplishments/certificate/UTNVNS9CS66V',
    },
    // Add more certifications here
  ];

  return (
    <ul className={s.container}>
      {certifications.map((certification, index) => (
        <li className={s.techIcon} key={index}>
          <img
            src={certification.image}
            alt={certification.name}
            style={{ width: '100px', height: '70px' }} // Adjust the width and height as needed
          />
          <div className={s.certificationInfo}>
            <h1 className={s.certificationName}>{certification.name}</h1>
            <p className={s.certificationDescription}>{certification.description}</p>
            {certification.icon}
            <a
              target="_blank"
              rel="noreferrer"
              href={certification.certificationLink}
              className={`${s.certificationLink} ${s.underline}`}
              style={{ color: 'rgb(231, 40, 231)', fontWeight: '900' }}
            >
              View Certification
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TechCertificationsSkills;


