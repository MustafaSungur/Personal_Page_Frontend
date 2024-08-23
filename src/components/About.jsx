import { MdWavingHand } from "react-icons/md";

const About = () => {
  return (
    <div className="max-w-xl mt-6 text-zinc-500">
      <h2 className="text-xl md:text-2xl mb-4">About Me</h2>
      <p className="flex gap-2 text-xl">
        Hello!
        <MdWavingHand size={20} color="#fea90e" className="inline" />
      </p>
      <p className="text-lg">
        I am a Full Stack Developer with extensive experience in technologies
        like React, .NET, and Node.js. I love learning new technologies and
        continuously improving my existing skills. Participating in innovative
        projects and tackling technical challenges is an enjoyable process for
        me. I am adept at teamwork and have experience in project management,
        which allows me to actively contribute to the development of complex
        software solutions.
      </p>
    </div>
  );
};

export default About;
