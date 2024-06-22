import pic from './profile-pic.jpg'
import './App.css';

export default function App() {
  return (
    <div className='card'>
      <img src={pic} alt="profile-picture" className='profile-pic'/>
      <h1>Bonor Ayambem</h1>
    </div>
  )
}
