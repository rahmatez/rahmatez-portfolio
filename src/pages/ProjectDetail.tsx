import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { getProjectBySlug, PROJECT_CATEGORY_LABELS } from '../data/projects';
import { LazyImage } from '../components/ui/LazyImage';
import { AnimateIn } from '../components/ui/AnimateIn';
import { Footer } from '../components/Footer';

const statusLabels = {
  live: 'Live',
  wip: 'In Progress',
  private: 'Private',
} as const;

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="pt-20 pb-16">
        <article className="container mx-auto max-w-4xl px-6">
          <AnimateIn immediate delay={50}>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          </AnimateIn>

          <AnimateIn immediate delay={100}>
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {project.categories.map((category) => (
                <span
                  key={category}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                >
                  {PROJECT_CATEGORY_LABELS[category]}
                </span>
              ))}
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                {project.year}
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                {statusLabels[project.status]}
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-blue-500 dark:hover:border-blue-400 text-sm font-medium transition-colors"
                >
                  <SiGithub className="w-4 h-4" />
                  Source Code
                </a>
              )}
            </div>
          </header>
          </AnimateIn>

          <AnimateIn delay={150}>
          <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 mb-10 bg-white dark:bg-gray-900">
            <LazyImage
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              className="w-full h-auto object-cover"
            />
          </div>
          </AnimateIn>

          <div className="grid gap-8 md:grid-cols-2 mb-10">
            <AnimateIn delay={100}>
            <section className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 h-full">
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3">Problem</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.problem}</p>
            </section>
            </AnimateIn>
            <AnimateIn delay={200}>
            <section className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 h-full">
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3">Solution</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.solution}</p>
            </section>
            </AnimateIn>
          </div>

          <AnimateIn delay={100}>
          <section className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Key Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-cyan-400 mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
          </AnimateIn>

          {project.results.length > 0 && (
            <AnimateIn delay={150}>
            <section className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Results</h2>
              <ul className="space-y-2">
                {project.results.map((result) => (
                  <li key={result} className="flex gap-3 text-gray-600 dark:text-gray-300">
                    <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </section>
            </AnimateIn>
          )}

          <AnimateIn delay={200}>
          <section className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                  >
                    <Icon className="w-5 h-5" color={item.color} />
                    <span className="text-sm text-gray-700 dark:text-gray-200">{item.name}</span>
                  </div>
                );
              })}
            </div>
          </section>
          </AnimateIn>
        </article>
      </div>
      <Footer />
    </div>
  );
}
