import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { testimonials } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const TestimonialCard = ({ index, quote, name, role, source }) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.3, 0.75)}
    className="bg-jetLight p-8 rounded-[20px] xs:w-[340px] w-full flex flex-col justify-between">
    <p className="text-timberWolf font-black text-[48px] leading-none">"</p>
    <p className="text-timberWolf tracking-wider text-[16px] font-poppins leading-[28px]">
      {quote}
    </p>
    <div className="mt-6">
      <p className="text-timberWolf font-medium text-[16px] font-poppins">
        {name}
      </p>
      {(role || source) && (
        <p className="mt-1 text-taupe text-[13px] font-poppins">
          {[role, source].filter(Boolean).join(' · ')}
        </p>
      )}
    </div>
  </motion.div>
);

const Testimonials = () => {
  if (!testimonials.length) return null;

  return (
    <div className="-mt-[4rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What clients say</p>
        <h2 className={styles.sectionHeadTextLight}>Reviews.</h2>
      </motion.div>
      <div className="mt-12 flex flex-wrap gap-7">
        {testimonials.map((t, index) => (
          <TestimonialCard key={t.name + index} index={index} {...t} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Testimonials, 'reviews');
