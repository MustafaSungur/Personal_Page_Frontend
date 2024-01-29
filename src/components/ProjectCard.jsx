const ProjectCard = ({ project }) => {
  const desc = project.description.split("\n");
  return (
    <div className="max-w-lg w-3/4 rounded-xl overflow-hidden shadow-lg flex flex-col">
      {/* Image section */}
      <div className="">
        <img
          className="h-auto max-h-56 object-cover mx-auto rounded-xl"
          src={project.imgURL}
          alt="Image"
        />
      </div>
      {/* Content section */}
      <div className="px-6 py-4">
        <div className="font-bold text-zinc-500 text-xl mb-2">
          {project.name}
        </div>
        <p className="text-zinc-500 text-base">
          {desc.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-[#00796B] mr-2 mb-2">
          #{project.category}
        </span>
        <a href={project.url} className="btn" target="_blank">
          Review Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
