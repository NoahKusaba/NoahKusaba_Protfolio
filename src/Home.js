import './App.css';
import React, {useState, useEffect, useCallback, useRef} from "react";

import About from "./Pages/About.js" ;
import Projects from "./Pages/Projects.js";
import Resume from "./Pages/Resume.js";
import Experience from "./Pages/Experience.js";
import Contact from "./Pages/Contact.js";

function Home() {
const [currentPage, setPage] = useState(null);
const wrapper = useRef(null);
const [currentSlide , setSlide] = useState(0);

//Exit Page 
useEffect( ()=> {
  document.addEventListener("keydown",escClose);
  document.addEventListener("mousedown",outsideClickClose)
  return () => {
    document.removeEventListener("keydown", escClose);
    document.removeEventListener("mousedown",outsideClickClose);
  };
  })

// Establishing slideshow
const changeSlide = useCallback(()=> {

let slides = document.getElementsByClassName("FlexPage");
let slideQ = slides.length;
// only executing if valid window, & more than 1 page. 
if(!wrapper || slideQ === 1 || slideQ === 0){
  return;
}
// hide pages & show relevant page. 
else{
[...slides].forEach(e => {e.classList.add("hiddenPage")}); 
}

if(currentSlide >= 0 && currentSlide < slideQ){

  slides[currentSlide].classList.remove("hiddenPage");

} else if (currentSlide < 0 ) {
  setSlide(0);
  slides[0].classList.remove("hiddenPage")

} else {
  setSlide(slideQ-1);
  slides[slideQ-1].classList.remove("hiddenPage")
}
},[wrapper,currentSlide])
//

const outsideClickClose = useCallback((event) => {
  if (wrapper.current == null){
    return;
  }
  else if (!wrapper.current.contains(event.target)){
    setPage("") ;
    setSlide(0);
  }
},[])


const escClose = useCallback((event) =>{ 
  if (event.keyCode === 27) {
    setPage("");
    setSlide(0);
  }
},[])

const showPage = () => {
  switch(currentPage) {
    case "aboutPage":
      return <About />;
    case "projectsPage":
      return <Projects />;
    case "resumePage" :
      return  <Resume />;
    case "experiencePage":
      return <Experience />;
    case "contactPage" :
      return <Contact />;
    default:
        return null;
  }
};
// this took an emberrasingly long time to figure out 
useEffect(()=> { 
  changeSlide()
},[currentSlide,changeSlide])


  return (
    <>
      <div className="HomePage">
      <div id="instructions">
        <div className="iText">&#123;esc&#125;</div>
        <div className="iText">&#123;outsideClick&#125;</div>
      </div>
        <div className="Flexbox">
          <div className="deg90" id="about" onClick={()=>setPage("aboutPage")}><div className ="shake">ABOUT</div></div>
          <div className="deg45" id="projects" onClick={()=>setPage("projectsPage")}><div className="shake">PROJECTS</div></div>
          <div className="deg90" id="resume" onClick={()=>setPage("resumePage")}><div className="shake">RESUME</div></div>
        </div>

        {!currentPage ? null :<div className='BorderPage' ref={wrapper}>
          {showPage()}
          <a className ="prev" onClick={() => setSlide(currentSlide -1 )}>&#10094;</a>
          <a className="next" onClick={() => setSlide(currentSlide +1 )}>&#10095;</a>
          </div>}
       
        <div className='Flexbox'>
          <div className="deg90" id="experience" onClick={()=>setPage("experiencePage")}><div className="shake">EXPERIENCE</div></div>
          <div id="c"><div className="shake">C</div></div>
          <div id="stacked">
            <div className="degNeg45" id="contact" onClick={()=>setPage("contactPage")}><div className="shake">ONTACT</div></div>
            <div className="deg45" id="connect" onClick={() => window.open("https://www.linkedin.com/in/noah-kusaba/") } ><div className="shake">ONNECT</div></div>
          </div>
        </div>
        
      </div>
      
    </>
  );


}

export default Home;
