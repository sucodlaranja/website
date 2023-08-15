function Card({ project }) {
  return (
    <a
      key={project.name}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative px-5 pt-2 border rounded-lg w-52 group h-52">
        <div className="flex justify-center w-full">
          <img
            className="h-20 w-24 rounded transition ease-linear object-fill  group-hover:scale-110"
            src={project["image-src"]}
            alt={project.name}
          />
        </div>
        <div className="absolute flex flex-col justify-end bottom-2">
          <div className="text-sm text-gray-500 ">
            {project.language.map((language, index) => (
              <div key={index}>{language}</div>
            ))}
          </div>
          <div className="text-base">{project.name}</div>
        </div>
      </div>
    </a>
  );
}

export default Card;
