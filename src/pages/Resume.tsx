import { useState, useEffect } from "react";
import { Footer } from '../components/Footer';
import { SectionTitle } from '../components/ui/SectionTitle';
import { SectionBackground } from '../components/ui/SectionBackground';
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineDownload } from "react-icons/ai";

// Set up PDF.js worker - using exact same approach as working reference
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export function ResumePage() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState<number | null>(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  function onDocumentLoadError() {
  }

  // Improved responsive scaling logic
  const getScale = () => {
    if (width < 480) return 0.5;  // Very small phones
    if (width < 640) return 0.6;  // Small phones  
    if (width < 768) return 0.75; // Large phones
    if (width < 1024) return 0.9; // Tablets
    return 1.2; // Desktop
  };

  const pdfFile = "/assets/CV Rahmat Ashari - Frontend & Backend.pdf";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="pt-20" style={{ paddingTop: '4rem' }}>
        <SectionBackground>
          <section id="resume" className="space-y-12">
            <div className="container mx-auto px-4 sm:px-6 text-center">
              <SectionTitle subtitle="Download and view my professional resume">
                Resume
              </SectionTitle>

              {/* Download Button */}
              <div className="flex justify-center mb-6 sm:mb-8">
                <a
                  href={pdfFile}
                  download="CV_Rahmat_Ashari_Frontend_Backend.pdf"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium text-sm sm:text-base"
                >
                  <AiOutlineDownload className="text-lg" />
                  Download CV
                </a>
              </div>

              {/* PDF Viewer */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 sm:p-6 border border-gray-200 dark:border-gray-700 max-w-full overflow-hidden">
                <Document
                  file={pdfFile}
                  className="flex flex-col items-center space-y-4 sm:space-y-6"
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onDocumentLoadError}
                  loading={
                    <div className="flex items-center justify-center py-10 sm:py-20">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-blue-600 dark:border-blue-400 mx-auto mb-4"></div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Loading PDF...</p>
                      </div>
                    </div>
                  }
                  
                  noData={
                    <div className="flex items-center justify-center py-10 sm:py-20">
                      <div className="text-center">
                        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">No PDF data found.</p>
                      </div>
                    </div>
                  }
                  options={{
                    disableTextLayer: true,
                    disableAnnotationLayer: true,
                    disableWorker: false,
                  }}
                >
                  {/* Page 1 */}
                  <div className="pdf-page-container w-full flex justify-center mb-4 sm:mb-6">
                    <div className="shadow-lg rounded-lg overflow-hidden max-w-full">
                      <Page
                        pageNumber={1}
                        scale={getScale()}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        loading={
                          <div className="flex items-center justify-center py-8 sm:py-10">
                            <div className="text-center">
                              <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-blue-600 dark:border-blue-400"></div>
                              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">Loading page 1...</p>
                            </div>
                          </div>
                        }
                        error={
                          <div className="text-red-600 dark:text-red-400 text-center py-8 sm:py-10 text-sm sm:text-base">
                            Error loading page 1
                          </div>
                        }
                      />
                    </div>
                  </div>
                  
                  {/* Page 2 - Only render if PDF has more than 1 page */}
                  {numPages && numPages > 1 && (
                    <div className="pdf-page-container w-full flex justify-center">
                      <div className="shadow-lg rounded-lg overflow-hidden max-w-full">
                        <Page
                          pageNumber={2}
                          scale={getScale()}
                          renderTextLayer={false}
                          renderAnnotationLayer={false}
                          loading={
                            <div className="flex items-center justify-center py-8 sm:py-10">
                              <div className="text-center">
                                <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-blue-600 dark:border-blue-400"></div>
                                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">Loading page 2...</p>
                              </div>
                            </div>
                          }
                          error={
                            <div className="text-red-600 dark:text-red-400 text-center py-8 sm:py-10 text-sm sm:text-base">
                              Error loading page 2
                            </div>
                          }
                        />
                      </div>
                    </div>
                  )}
                </Document>

                {/* Additional info */}
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Last updated: 2025 | Frontend & Backend Development Specialist
                  </p>
                </div>
              </div>

              {/* Bottom Download Button */}
              <div className="flex justify-center mt-6 sm:mt-8">
                <a
                  href={pdfFile}
                  download="CV_Rahmat_Ashari_Frontend_Backend.pdf"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium text-sm sm:text-base"
                >
                  <AiOutlineDownload className="text-base sm:text-lg" />
                  Download CV
                </a>
              </div>
            </div>
          </section>
        </SectionBackground>
      </div>
      <Footer />
    </div>
  );
}