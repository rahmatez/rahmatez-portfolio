import { TypeWriter } from './ui/TypeWriter';
import { SocialLinks } from './hero/SocialLinks';
import { ContactInfo } from './hero/ContactInfo';
import { ActionButtons } from './hero/ActionButtons';
import { StructuredData, structuredDataConfigs } from './StructuredData';
import { AnimateIn } from './ui/AnimateIn';

export function Hero() {
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full-Stack Developer",
    "Web Development Specialist",
  ];

  return (
    <>
      <StructuredData data={structuredDataConfigs.person} id="person-data" />
      <section
        id="home"
        className="min-h-screen flex items-start md:items-center justify-center relative pt-28 md:pt-0"
      >
        <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-black dark:via-gray-950/60 dark:to-slate-950/60">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.08] dark:opacity-[0.08]" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 dark:bg-blue-600/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/20 dark:bg-purple-600/30 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 sm:px-10 py-8 md:py-14 relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <AnimateIn
              immediate
              delay={100}
              className="relative order-1 md:order-2 mt-4 md:mt-0"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
              <img
                src="/assets/rahmatez.png"
                alt="rahmatez"
                className="relative w-36 sm:w-48 md:w-56 lg:w-72 mx-auto rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </AnimateIn>

            <div className="flex flex-col items-center justify-center text-center space-y-4 order-2 md:order-1">
              <AnimateIn immediate delay={200}>
                <div className="space-y-2">
                  <div className="inline-block bg-blue-100 dark:bg-blue-900/50 backdrop-blur-sm text-blue-700 dark:text-blue-300 text-sm font-medium px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800">
                    Hey! <span className="inline-block origin-[70%_70%] animate-wave">👋</span> I'm
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100">
                    Rahmat Ashari
                  </h1>
                  <div className="text-lg sm:text-xl md:text-xl text-gray-700 dark:text-gray-300">
                    I'm a <TypeWriter words={roles} delay={100} />
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn immediate delay={350}>
                <ContactInfo />
              </AnimateIn>
              <AnimateIn immediate delay={450}>
                <ActionButtons />
              </AnimateIn>
              <AnimateIn immediate delay={550}>
                <SocialLinks />
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
