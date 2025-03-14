import c from "./assets/c.png";
import Cplus from "./assets/Cplus.png";
import python from "./assets/python.png";
import html from "./assets/html2.png";
import css from "./assets/css.png";
import javascript from "./assets/js2.png";
import scss from "./assets/scss.png";


function TechStack() {
  return (
    <div className="careerDetails">
      <div className="techStackHeading">Programming languages I know</div>
      <div className="knowledge">
        <div className="lang" id="c">
          <img src={c} alt="programming_lang_C" />
          <p>C</p>
        </div>

        <div className="lang" id="cplus">
          <img src={Cplus} alt="programming_lang_C++" />
          <p>C++</p>
        </div>

        <div className="lang" id="python">
          <img src={python} alt="programming_lang_python" />
          <p>Python</p>
        </div>

        <div className="lang" id="html">
          <img
            src={html}
            alt="programming_lang_html_image"
          />
          <p>HTML</p>
        </div>

        <div className="lang" id="css">
          <img src={css} alt="programming_lang_css" />
          <p>CSS</p>
        </div>

        <div className="lang" id="javascript">
          <img src={javascript} alt="programming_lang_Javascript" />
          <p>JavaScript</p>
        </div>

        <div className="lang" id="sass">
          <img src={scss} alt="programming_lang_scss" />
          <p>SASS</p>
        </div>
      </div>
    </div>
  );
}
export default TechStack;
