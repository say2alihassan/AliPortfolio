import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { projects, moreApps } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectCard = ({
  id,
  name,
  description,
  image,
  tags = [],
  links = [],
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[90px]
      h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}>
      {image ? (
        <img
          src={image}
          alt={name}
          className="absolute w-full h-full object-cover rounded-[24px]"
        />
      ) : (
        <div
          className="absolute w-full h-full rounded-[24px]"
          style={{
            background:
              'linear-gradient(160deg, #333333 0%, #1f1f1f 55%, #66666e 100%)',
          }}
        />
      )}
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight
      h-full w-full opacity-[0.35] rounded-[24px]"></div>

      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem] lg:pr-[8.5rem]">
          <h3
            className="font-extrabold font-beckman uppercase w-[200px] h-[30px]
        whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
        absolute lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20">
            {name}
          </h3>
        </div>
      ) : (
        <div
          className="absolute bottom-0 p-8 justify-start w-full
            flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">
          <h2
            className="font-bold sm:text-[32px] text-[24px]
              text-timberWolf uppercase font-beckman">
            {name}
          </h2>
          <p
            className="text-silver sm:text-[14px] text-[12px]
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px]">
            {description}
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <p
                key={tag.name}
                className={`text-[13px] font-poppins ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="live-demo flex justify-center items-center
                  sm:text-[16px] text-[14px] text-timberWolf
                  font-bold font-beckman px-4 whitespace-nowrap
                  sm:h-[50px] h-[46px] rounded-[10px] glassmorphism
                  sm:mt-[22px] mt-[16px] hover:bg-battleGray
                  hover:text-eerieBlack transition duration-[0.2s]
                  ease-in-out">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState('project-1');

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Live on the stores</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Apps.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          A selection of apps I've built and shipped, used by real people on the
          App Store and Google Play. Tap a card to see more and open the app. I
          also have private apps built for clients that I'm happy to walk
          through on a call.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>

      <div className="mt-12">
        <p className="text-taupe text-[16px] font-poppins mb-4">More apps:</p>
        <div className="flex flex-wrap gap-3">
          {moreApps.map((app) => (
            <a
              key={app.url}
              href={app.url}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-[10px] bg-jetLight text-timberWolf
                font-poppins text-[14px] hover:bg-battleGray
                hover:text-eerieBlack transition duration-[0.2s]">
              {app.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
