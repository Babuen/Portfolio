import './navbar.css';

function Navbar() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="nav">
      <div className="nav-left">
        <img src="./avatar.jpg" alt="Profile" className="profile" />
        <p className="name">Babu E N</p>
      </div>

      <ul className="nav-right">
        <li onClick={() => handleScroll('hero')}>Home</li>
        <li onClick={() => handleScroll('intro')}>Over-view</li>
        <li onClick={() => handleScroll('projects')}>Projects</li>
        <li onClick={() => handleScroll('skills')}>Skills</li>
        <li onClick={() => handleScroll('contact')}>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
