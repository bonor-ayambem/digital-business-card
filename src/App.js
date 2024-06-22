import pic from './profile-pic.jpg'
import envelope from './envelope-icon.png'
import ghLogo from './github-logo.png'
import instaLogo from './instagram-logo.png'
import linkedin from './linkedin-icon.png'

import './App.css';

export default function App() {
  const handleLinkedInClick = () => {
    window.location.href = 'https://www.linkedin.com/in/bonor/';
  };

  return (
    <div className='card'>
      <img src={pic} alt="profile-picture" className='profile-pic'/>
      <div className='header'>
        <h1>Bonor Ayambem</h1>
        <h3>Software Engineer</h3>
        <h4>Bethlehem, PA</h4>
      </div>
      <div className='social-buttons'>
          <button className='email-btn'>
            <img src={envelope} alt='email icon' className="email-icon" />
            Email
          </button>
          <button className='linkedin-btn' onClick={handleLinkedInClick} >
            <img src={linkedin} alt='linkedin icon' className="linkedin-icon" />
            LinkedIn
          </button>
      </div>
      <div className='text-content'>
        <h2 className='about'>About</h2>
        <p className='about-txt'>Bonor Ayambem is a software engineer from Abuja, Nigeria.
          She attended Lehigh University from 2019 to 2024, where she obtained both her Bachelor's 
          and Master's degree in Computer Science. She has worked as a Software Engineer Intern at 
          Jacobs Engineering and Guidewire Software, and studied Computer Vision in graduate 
          school. She has skills in Cloud Engineering, Machine Learning, and other 
          areas in software engineering.
        </p> 
        <p className='about-txt'> Bonor is dedicated to her work and a fast learner. She is 
          excited to continue moving forward in her career, and make a positive impact in her communities.
        </p>
        <h2>Interests</h2>
        <p className='interests-txt'>Bonor is a runner and dancer. She is also interested in fashion and beauty, finance. 
          She has recently been learning American Sign Language, and enjoys to read and write.
        </p>
      </div>
      <footer>
          <img src={ghLogo} alt='github logo' className="github-logo" width="30px"/>
          <img src={instaLogo} alt='instagram logo' className="insta-logo" />
        </footer>
    </div>
  )
}
