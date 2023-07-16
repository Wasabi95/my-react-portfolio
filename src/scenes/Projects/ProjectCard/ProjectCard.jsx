import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import s from './ProjectCard.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProjectCard = ({ id, image, title, description, github, live }) => {
  const location = useLocation();

  const imageAspectRatio = (image.height / image.width) * 100; // Calculate aspect ratio percentage

  return (
    <li className={s.card}>
      <div className={s.cardWrapper}>
        <Link to={`/project/${id}`} state={{ background: location }}>
          <div
            className={s.imageContainer}
            style={{ paddingBottom: `${imageAspectRatio}%` }} // Set aspect ratio using padding-bottom
          >
            <LazyLoadImage
              alt="card-img"
              src={image.src}
              width="100%"
              height="250px" // Set a fixed height for all images
              style={{ objectFit: 'cover' }} // Preserve aspect ratio and cover the container
              placeholderSrc={image.placeholderSrc}
            />
          </div>
        </Link>

        <div className={s.cardBody}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.description}>{description}</p>
          
          {/* Buttons */}
          <div className={s.buttons}>
            <a href={github} className={s.button} target="_blank" rel="noopener noreferrer">
              <AiFillGithub className={s.icon} />
              Github
            </a>
            <a href={live} className={s.button} target="_blank" rel="noopener noreferrer">
              <BiLinkExternal className={s.icon} />
              Live
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;


