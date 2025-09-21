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

  const pdfFile = "/assets/CV Rahmat Ashari - Frontend & Backend.pdf";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="pt-20" style={{ paddingTop: '4rem' }}>
        <SectionBackground>
          <section id="resume" className="space-y-12">
            <div className="container mx-auto px-6 text-center">
              <SectionTitle subtitle="Download and view my professional resume">
                Resume
              </SectionTitle>

              {/* Download Button */}
              <div className="flex justify-center mb-8">
                <a
                  href={pdfFile}
                  download="CV_Rahmat_Ashari_Frontend_Backend.pdf"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium"
                >
                  <AiOutlineDownload className="text-lg" />
                  Download CV
                </a>
              </div>

              {/* PDF Viewer */}
              <div>
                <Document
                  file={pdfFile}
                  className="flex flex-col items-center space-y-6"
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onDocumentLoadError}
                  loading={
                    <div className="flex items-center justify-center py-20">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400 mx-auto mb-4"></div>
                        <p className="text-gray-600 dark:text-gray-400">Loading PDF...</p>
                      </div>
                    </div>
                  }
                  
                  noData={
                    <div className="flex items-center justify-center py-20">
                      <div className="text-center">
                        <p className="text-gray-600 dark:text-gray-400">No PDF data found.</p>
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
                  <div className="pdf-page-container mb-6 shadow-lg rounded-lg overflow-hidden">
                    <Page
                      pageNumber={1}
                      scale={width > 786 ? 1.4 : 0.8}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      loading={
                        <div className="flex items-center justify-center py-10">
                          <div className="text-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 dark:border-blue-400"></div>
                            <p className="text-gray-600 dark:text-gray-400">Loading page 1...</p>
                          </div>
                        </div>
                      }
                      error={
                        <div className="text-red-600 dark:text-red-400 text-center py-10">
                          Error loading page 1
                        </div>
                      }
                    />
                  </div>
                  
                  {/* Page 2 - Only render if PDF has more than 1 page */}
                  {numPages && numPages > 1 && (
                    <div className="pdf-page-container shadow-lg rounded-lg overflow-hidden">
                      <Page
                        pageNumber={2}
                        scale={width > 786 ? 1.4 : 0.8}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        loading={
                          <div className="flex items-center justify-center py-10">
                            <div className="text-center">
                              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 dark:border-blue-400"></div>
                              <p className="text-gray-600 dark:text-gray-400">Loading page 2...</p>
                            </div>
                          </div>
                        }
                        error={
                          <div className="text-red-600 dark:text-red-400 text-center py-10">
                            Error loading page 2
                          </div>
                        }
                      />
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
              <div className="flex justify-center mt-8">
                <a
                  href={pdfFile}
                  download="CV_Rahmat_Ashari_Frontend_Backend.pdf"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium"
                >
                  <AiOutlineDownload className="text-lg" />
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