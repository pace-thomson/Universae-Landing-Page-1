import { useState } from "react";

const Scholarship = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="pb-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col justify-center items-center text-center">
          <div>
            <h2 className="mb-4 font-med text-2xl ">
              International{" "}
              <span className="font-bold">Merit</span> 
              -Based{" "} 
              <span className="font-bold text-[--red]">Scholarship</span> 
            </h2>
            <p className="text-secondary text-sm max-w-2xl">
              Utah Tech University is committed to supporting international students 
              in their academic journey. The university offers competitive scholarships 
              to help make education more accessible and affordable.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg p-8 border-l-4 border-primary">
          {/* Scholarship Amount - Featured (Clickable) */}
          <div 
            className="md:col-span-2 text-center bg-primary text-white p-6 rounded-lg mb-4 
            cursor-pointer hover:bg-primary/90 transition-colors"
            onClick={toggleExpanded}
          >
            <h3 className="font-light text-lg sm:text-3xl">
              Earn{" "}
              <span className="text-3xl sm:text-5xl font-bold mb-2">$5,500 </span>
              a year while studying at Utah Tech*
            </h3>
            <div className="flex justify-center items-center mt-2">
              <span className="text-sm mr-2">View Requirements</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 
                  1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Collapsible Requirements Section */}
          <div className={`transition-all duration-300 overflow-hidden 
              ${isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 pt-4">
              {/* Requirements Grid */}
              <div className="">
                <h4 className="font-semibold text-lg text-primary border-b border-primary pb-2 w-5/6">
                  Academic Requirements
                </h4>
                
                <div className="mt-4 flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Minimum Required GPA:</span>
                    <span className="ml-2 text-primary font-bold">8.0</span>
                  </div>
                </div>
                <p className="text-xs text-[#808080] ml-6 w-4/5">
                  This is a representation of the actual requirement of a 3.3 GPA 
                  in the US. A conversion will be done to evaluate during application.
                </p>

                <div className="mt-4 flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Minimum Credit Hours:</span>
                    <span className="ml-2 text-primary font-bold">24</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-primary border-b border-primary pb-2 w-5/6">
                  Certificate Requirements
                </h4>
                <p className="text-sm text-secondary mb-3">
                  At least one of the following certificates:
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-secondary rounded-full flex-shrink-0"></div>
                    <span className="text-sm">
                      Advanced Technician in Multiplatform Application Development (MAP), Online
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-secondary rounded-full flex-shrink-0"></div>
                    <span className="text-sm">
                      Advanced Technician in Online Web Application Development (DAW)
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-secondary rounded-full flex-shrink-0"></div>
                    <span className="text-sm">
                      Advanced Technician in Network Systems Administration (ASIR)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-muted text-center">
              <p className="text-sm text-secondary">
                * The award totals $5,500 per year — $2,750 for the fall semester
                <br />
                 and $2,750 for the spring — and applies to tuition only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scholarship;