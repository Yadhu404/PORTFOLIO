import logo from './logo.svg';
import './App.css';
import './Button.js'
import Button from './Button.js';
import Project from './Project.js';
import Skills from './Skills.js';
import extLink from './data/extLink.json'
import proDet from './data/projectDet.json'
import skiDet from './data/skillDet.json'
import Trail from './MouseTrail.js'
import { useRef, useState } from 'react';
import MouseTrail from './MouseTrail.js';



function App() {
  function OpenMail()
  {
    window.open('mailto:yadhunandhan@gmail.com');
  }
  
  function OpenResume()
  {
    const link = document.createElement('a');
    link.href = '/Yadhunandhan_Resume.pdf';
    link.download = 'Yadhunandhan_K_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  const myname = useRef();
  const [isTyping, setTypeState] = useState(false);
  let isHovered = false;

  function TypeNameOn()
  {
    if(!isHovered)
    {
      isHovered = true;
      const text2 = myname.current;
      if (!text2) return;
      const fullText = text2.textContent;
      console.log(fullText);
      text2.textContent = "";
      let i = 0;
      const interval = setInterval(() => {
        text2.textContent += fullText[i];
        i++;
        if (i === fullText.length) 
        {
          clearInterval(interval);
          isHovered = false;
        }
      }, 50);
    }
  }
  function TypeNameOff()
  {
    isHovered = false;
    const text2 = myname.current;
    if (!text2) return;
    text2.textContent = "YADHUNANDHAN K";
  }

  return (
    <div className="App">
      <div className='perso-det'>
        <Trail/>
        <img src='/mypic.jpg' alt='my image'/>
        <p ref={myname}>YADHUNANDHAN K</p>
        <h4>Frontend and Game developer</h4>
        <span>Passionate about crafting interactive games and web experiences, with more than a year of hands-on development experience.</span>
        <div className='ext-links'>
          {extLink.map((ext) => (
            <Button key={ext.ID} ID={ext.ID} link={ext.url} value={ext.name} />
          ))}
        </div>
      </div>
      <div className='other-det'>
        <div className='project-det'>
          <h2>My Crafts</h2>
          <div className='pro-list'>
            {proDet.map((pro) => (
              <Project ID = {pro.ID} imgUrl={pro.url} name={pro.name} about={pro.about}/>
          ))}
          </div>
        </div>

        <div className='skills'>
          <h2>My SKills</h2>
          <div className='sk-list'>
            {skiDet.map((sk) => (
              <Skills ID = {sk.ID} imgUrl={sk.url} name={sk.name}/>
          ))}
          </div>
        </div>

        <div className='contact'>
          <h2>Get In Touch</h2>
          <div className='con-det'>
              <input type='button' value={'yadhunandhan55@gmail.com'} onClick={() => {OpenMail()}}/>
              <input type='button' value={'My Resume'} onClick={() => {OpenResume()}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
