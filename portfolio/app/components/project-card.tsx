import React from 'react';

interface ProjectCardProps {
  title: string;
  tags: string[];
  description: string;
  learnMoreLink: string;
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ProjectCard({
  title,
  tags,
  description,
  learnMoreLink,
}: ProjectCardProps) {
  return (
    <div className="flex flex-row border-b-2 border-b-zinc-800 py-10">
      <div>
        <h2 className="text-2xl font-semibold mb-6">{title}</h2>
        <p className="text-md mb-8">{description}</p>
        <div className="flex flex-wrap justify-start space-x-5">
          {tags.map((tag) => (
            <button
              key={tag}
              className="pl-3 pr-3 rounded-xl bg-slate-700 text-sm mb-2"
            >
              {tag}
            </button>
          ))}
        </div>
        <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href={learnMoreLink}
            >
              <ArrowIcon />
              <p className="ml-2 h-7">Learn More</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}