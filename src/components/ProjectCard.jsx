const ProjectCard = ({ project }) => {
  const desc = project.description.split("\n");
  return (
    <div className="max-w-lg w-3/4 rounded-xl overflow-hidden shadow-lg flex flex-col bg-[#F9FAFB]">
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
        <div className="font-bold text-[#1F2937] text-xl mb-2">
          {project.name}
        </div>
        <p className="text-[#4B5563] text-base">
          {desc.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </p>
      </div>
      {/* Footer section */}
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-[#10B981] mr-2 mb-2">
          #{project.category}
        </span>
        <div>
          {project.liveDemoURL && (
            <a
              href={project.liveDemoURL}
              className="btn mr-2 bg-[#9de5ce] hover:bg-[#9de5ce] text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
          <a
            href={project.url}
            className="btn bg-[#10B981] hover:bg-[#9de5ce] text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
