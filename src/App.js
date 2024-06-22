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
        <div className='social-buttons'>
          <button>Email</button>
          <button>LinkedIn</button>
        </div>
      </div>
      <div className='text-content'>
        <h2 className='about'>About</h2>
        <p>Bonor Ayambem is</p>
        <h2>Interests</h2>
        <p>Placeholder</p>
        <footer>
          <p>placeholder</p>
        </footer>
      </div>
    </div>
  )
}
