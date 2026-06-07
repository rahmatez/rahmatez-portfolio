import { Link } from 'react-router-dom';
import { SiGithub } from 'react-icons/si';
import { FaGlobe, FaArrowRight } from 'react-icons/fa';
import type { Project } from '../../types/project';
import { LazyImage } from './LazyImage';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { slug, title, description, image, link, github, techStack, year, status } = project;

  return (
    <div className="group relative flex flex-col h-full">
      <div className="relative flex flex-col h-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:shadow-blue-500/10">
        <Link to={`/projects/${slug}`} className="relative overflow-hidden p-4 pb-0 block">
          <LazyImage
            src={image}
            alt={`Screenshot of ${title}`}
            className="w-full aspect-video object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </Link>

        <div className="flex flex-col flex-1 p-6">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-gray-500 dark:text-gray-400">{year}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 capitalize">
                  {status}
                </span>
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} GitHub repository`}
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  <SiGithub className="w-5 h-5" />
                </a>
              )}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} live demo`}
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  <FaGlobe className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-1">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto mb-4">
            {techStack.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  title={item.name}
                  className="p-1.5 rounded-lg bg-gray-200 dark:bg-gray-800"
                >
                  <Icon className="w-5 h-5" color={item.color} />
                </div>
              );
            })}
          </div>

          <Link
            to={`/projects/${slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-cyan-400 hover:gap-3 transition-all"
          >
            View case study
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
