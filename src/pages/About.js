import './../css/about.css';
import profile from './../images/profile-picture.jpg'

export default function About() {
  return (
    <div className="App App-header">
      <div className="about-container">
        <div className="profile-picture-container">
          <img src={ profile } alt="profile-picture" className="profile-picture"></img>
        </div>
        <div className="about-me-text-container">
          <h3>A little something about me</h3>
          <p>
            I love design, coding and photography. Really, I love anything related
            to design and I feel so lucky to be able to work in this field. My 
            interest in pursuing a career in design started as a kid when I used 
            to play video games. I always wondered how they were made and when I 
            first got my computer, I was introduced to Alias Maya (which is now 
            known as Autodesk Maya). This wonderful software allowed me to create 
            simple 3d objects in a computer and it was a really fun process to learn. 
            So I researched further on game design and found a few animation courses 
            that I was interested in. Coding was also something I was very keen on 
            learning but always found it daunting till I joined the Interactive Media 
            Course at Seneca. I was introduced to coding here by my professor Amanda 
            Lutz who made me fall in love with this side of design and it forces me 
            to think very technically. PS: The only thing I find hard to understand
            is JavaScript &#128547; 
          </p>
        </div>
      </div>
    </div>
  )

}