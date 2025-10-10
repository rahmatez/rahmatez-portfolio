import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TypeWriter } from './ui/TypeWriter';
import { SocialLinks } from './hero/SocialLinks';
import { ContactInfo } from './hero/ContactInfo';
import { ActionButtons } from './hero/ActionButtons';
import { StructuredData, structuredDataConfigs } from './StructuredData';

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
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
      {/* Animated background with particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-black dark:via-gray-950/60 dark:to-slate-950/60">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.08] dark:opacity-[0.08]" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 dark:bg-blue-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/20 dark:bg-purple-600/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-10 py-16 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Column - Content */}
          <div className="flex flex-col items-center justify-center text-center space-y-4 order-2 md:order-1">
            <div className="space-y-2">
              <div className="inline-block bg-blue-100 dark:bg-blue-900/50 backdrop-blur-sm text-blue-700 dark:text-blue-300 text-sm font-medium px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800">
                Hey! <span className="inline-block origin-[70%_70%] animate-wave">👋</span> I'm
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Rahmat Ashari
              </h1>
              <div className="text-xl sm:text-2xl md:text-2xl text-gray-700 dark:text-gray-300">
                I'm a <TypeWriter words={roles} delay={100} />
              </div>
            </div>

            <ContactInfo />
            <ActionButtons />
            <SocialLinks />
          </div>

          {/* Right Column - Profile Image + Responsive Balloons */}
          <div className="relative order-1 md:order-2">
            {/* Responsive floating balloons */}
            {/* <div className="absolute w-6 sm:w-10 md:w-24 h-6 sm:h-10 md:h-24 bg-blue-600 top-0 left-0 rounded-full animate-floating" />
            <div className="absolute w-6 sm:w-10 md:w-24 h-6 sm:h-10 md:h-24 bg-purple-600 bottom-0 right-0 rounded-full animate-floating delay-150" />
            <div className="absolute w-5 sm:w-8 md:w-20 h-5 sm:h-8 md:h-20 bg-green-500 top-4 right-4 rounded-full animate-floating delay-300" />
            <div className="absolute w-5 sm:w-8 md:w-20 h-5 sm:h-8 md:h-20 bg-yellow-500 bottom-4 left-4 rounded-full animate-floating delay-450" /> */}

            {/* Profile image */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
            {/* Profile image placeholder - Replace with actual photo */}
             <img
              src="/assets/rahmatez.png"
              alt="rahmatez"
              className="relative w-40 sm:w-52 md:w-64 lg:w-80 mx-auto rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 animate-bounce">
          <Link
            to="/about"
            className="p-2 inline-block"
          >
            <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" />
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}
