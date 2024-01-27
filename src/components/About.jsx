import { MdWavingHand } from "react-icons/md";

const About = () => {
  return (
    <div className="max-w-xl mt-6 text-zinc-500">
      <h2 className="text-xl mb-4">About Me</h2>
      <p className="flex gap-2">
        Merhaba!
        <MdWavingHand size={20} color="#fea90e" className="inline" />
      </p>
      <p>
        Ben Sungur. Yaklaşık 2 yıldır Web alanında çalışıyorum. Frontend
        tarafında React.js, backend tarafında da Node.js ile deneyimim var.
      </p>
    </div>
  );
};

export default About;
