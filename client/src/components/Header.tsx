import combinedLogo from "../../../public/images/univsersae&ut-logo.png";
import headerImage from "../../../public/images/header_hero.jpg";


const Header = () => {
  
  return (
    <header
      style={{ backgroundImage: `url(${headerImage})` }}
      className=" 
      bg-cover 
      bg-center
      sm:overflow-visible
      sm:mr-10
      
      relative
      overflow-hidden
      block
      z-10
      
      before:content-['']
      before:absolute
      before:inset-0
      before:block
      before:z-[-5]
      
      before:bg-header-gradient-small
      before:from-[rgba(170,53,50,.8)_18em]
      before:to-[rgba(0,0,0,0)_18em]
      
      before:sm:bg-header-gradient-main
      before:sm:from-[rgba(170,53,50,.8)_23em]
      before:sm:to-[rgba(0,0,0,0)_23em]
      
      before:md:from-[rgba(170,53,50,.8)_29em]
      before:md:to-[rgba(0,0,0,0)_29em]
      "
    >
          {/* Top bar for angled gradient thing (the part with the white) */}
      <div className="
        h-8 bg-header-gradient-small from-[rgba(0,0,0,0)_18em] to-[rgba(255,255,255,1)_18em]
        sm:h-5 sm:bg-header-gradient-main sm:from-[rgba(0,0,0,0)_23em] sm:to-[rgba(255,255,255,1)_23em]
        md:from-[rgba(0,0,0,0)_29em] md:to-[rgba(255,255,255,1)_29em]
        "
      >
      </div>
      <div className="container pr-5 pl-4 py-12 ">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
           
              {/* The top combined logo and their respective links*/}
            <div className="relative h-[8em]">
              <img src={combinedLogo} className="h-[5em] mb-5 sm:ml-10 absolute" />
              <a className="absolute w-[9em] h-[5em] left-[-0.4em] sm:left-[2em]"
                href="https://utahtech.edu/" target="_blank">
              </a>
              <a className="absolute w-[5em] h-[5em] left-[10.4em] sm:left-[13em]"
                href="https://universae.com/" target="_blank">
              </a>
            </div>
         

            <p className="text-white text-xs mb-3 sm:ml-10">
              Transfer to Utah Tech University from Universae
            </p>

            <div id="zero-to-hero" className="sm:inline-block mb-6 w-full">
              <span className="sm:visible
                white-line block mb-5
                sm:inline-block
                "
              ></span>
              <span className="text-white font-choplin-light text-2xl md:text-4xl">
                Take the Next Step in{" "}
              </span>
              <br />
              <div className="sm:ml-10">
                <span className="text-white font-choplin-medium text-2xl md:text-4xl overflow-visible whitespace-nowrap">
                  Tech -{" "}
                </span>
                <span className="text-white font-choplin-light text-2xl md:text-4xl">
                  In the{" "}
                </span>
                <span className="text-white font-choplin-medium text-2xl md:text-4xl">
                  U.S.
                </span>
              </div>
            </div>

                {/* This button links and opens the Jotform to fill out contact info */}
            <a
              href="javascript:void( window.open( 'https://form.jotform.com/251595236042152', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=700, screenX=300, screenY=150') )"
              className="sm:ml-10 px-6 py-2 bg-transparent  border-white font-light text-white 
              transition duration-300 hover:bg-white hover:text-primary border rounded-none"
            >
              Learn More
            </a>
          </div>

              {/* Search Bar looking thing small */}
          <div className="md:hidden w-full md:w-1/2 ">
            <div
              className="bg-white h-10 w-full
              bg-[linear-gradient(90deg,var(--white)_80%,var(--red)_80%)]"
            ></div>
          </div>
        </div>

            {/* Search Bar looking thing bigger */}
        <div className="invisible md:visible absolute top-[3em] -right-10 w-[60%] lg:w-[70%]">
          <div
            className="bg-white h-12 w-full overflow-visible
            bg-[linear-gradient(90deg,var(--white)_80%,var(--red)_80%)]"
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
