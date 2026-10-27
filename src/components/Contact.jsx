import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { contact } from '../constants';

const ContactLink = ({ label, value, href }) => (
  <a
    href={href}
    target={href.startsWith('mailto:') ? undefined : '_blank'}
    rel="noreferrer"
    className="flex flex-col bg-eerieBlack py-4 px-6 rounded-lg
      hover:bg-jetLight transition duration-[0.2s] ease-in-out">
    <span className="text-taupe font-medium text-[14px]">{label}</span>
    <span className="text-timberWolf font-medium text-[18px] break-all">
      {value}
    </span>
  </a>
);

const Contact = () => {
  const links = [
    contact.email && {
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    contact.linkedin && {
      label: 'LinkedIn',
      value: contact.linkedin.replace(/^https?:\/\/(www\.)?/, ''),
      href: contact.linkedin,
    },
    contact.github && {
      label: 'GitHub',
      value: contact.github.replace(/^https?:\/\//, ''),
      href: contact.github,
    },
  ].filter(Boolean);

  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse
      flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <p className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] font-poppins">
          Have an app to build or one that needs looking after? Send me a
          message, I reply fast.
        </p>

        <div className="mt-10 flex flex-col gap-6 font-poppins">
          {links.map((link) => (
            <ContactLink key={link.label} {...link} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
