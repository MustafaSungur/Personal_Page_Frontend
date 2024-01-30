import { MdWavingHand } from "react-icons/md";

const About = () => {
  return (
    <div className="max-w-xl mt-6 text-zinc-500">
      <h2 className="text-xl mb-4">About Me</h2>
      <p className="flex gap-2">
        Hello!
        <MdWavingHand size={20} color="#fea90e" className="inline" />
      </p>
      <p>
        I’m Sungur. As a Full Stack Developer, I work on both frontend and
        backend topics. With my effort to produce creative solutions and my
        interest in technology, I try to offer custom solutions for projects.
        With an open approach to innovation, I try to support digital
        transformation.
      </p>
    </div>
  );
};

export default About;
