import pic from './profile-pic.jpg'
import './App.css';

export default function App() {
  return (
    <div className='card'>
      <img src={pic} alt="profile-picture" className='profile-pic'/>
      <div className='header'>
        <h1>Bonor Ayambem</h1>
        <h3>Software Engineer</h3>
        <h4>Bethlehem, PA</h4>
      </div>
      <div className='social-buttons'>
          <button className='email-btn'>Email</button>
          <button className='linkedin-btn'>LinkedIn</button>
      </div>
      <div className='text-content'>
        <h2 className='about'>About</h2>
        <p className='about-txt'>Bonor Ayambem is a software engineer originally from Abuja, Nigeria.
          She attended Lehigh University from 2019 to 2024, where she obtained both
          her Bachelor's and Master's degree in Computer Science. She has worked as a software engineer
          intern at Jacobs Engineering Group and Guidewire Software, and studied Computer Vision in 
          graduate school.
        </p>
        <h2>Interests</h2>
        <p className='interests-txt'>Bonor is a runner and dancer. She is also interested in fashion and beauty, finance. 
          She has recently been learning American Sign Language, and enjoys to read and write.
        </p>
      </div>
      <footer>
          <p>placeholder</p>
        </footer>
    </div>
  )
}
