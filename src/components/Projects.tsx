import { useMemo, useState } from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { ProjectCard } from './ui/ProjectCard';
import { AnimateIn } from './ui/AnimateIn';
import {
  projects,
  projectCategories,
  PROJECT_CATEGORY_LABELS,
} from '../data/projects';
import type { ProjectCategory } from '../types/project';

type FilterValue = 'all' | ProjectCategory;

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter]);

  const filters: { value: FilterValue; label: string }[] = [
    { value: 'all', label: 'All' },
    ...projectCategories.map((category) => ({
      value: category,
      label: PROJECT_CATEGORY_LABELS[category],
    })),
  ];

  return (
    <SectionBackground>
      <section id="projects">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="Crafting code into solutions I'm proud of, from concept to creation">
            Projects
          </SectionTitle>

          <AnimateIn delay={80}>
            <div className="max-w-6xl mx-auto mb-8 flex flex-wrap gap-2 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter.value
                      ? 'bg-blue-600 text-white scale-105'
                      : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:scale-105'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </AnimateIn>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimateIn key={project.slug} delay={(index % 3) * 100}>
                <ProjectCard project={project} />
              </AnimateIn>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="text-center text-gray-500 dark:text-gray-400 py-12">
              No projects found in this category.
            </p>
          )}
        </div>
      </section>
    </SectionBackground>
  );
}
