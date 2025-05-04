# My-Portfolio
/*<aside id="sidebar" class="sidebar">
  <button id="toggle-aside">☰ Menu</button>  
    <nav>
      <ul>
        <button id="dark-mode-toggle">🌙 Dark Mode</button>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </aside>*/


  Javascript
  const toggleBtn = document.getElementById('toggle-aside');
  const sidebar = document.getElementById('sidebar');

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('visible');
  });
  const toggleButton = document.getElementById('dark-mode-toggle');

  // Check if dark mode is enabled in localStorage
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = '🌞 Light Mode';
  }

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // If dark mode is active, set it in localStorage, otherwise remove it
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
      toggleButton.textContent = '🌞 Light Mode';
    } else {
      localStorage.removeItem('darkMode');
      toggleButton.textContent = '🌙 Dark Mode';
    }
  });

  CSS
  aside#sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 220px;
  height: 100%;
  background-color: #f5f5f5;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 40px 20px;
  transition: transform 0.3s ease;
  transform: translateX(-100%);
  z-index: 1500;
  overflow-y: auto;
  border-radius: 0 10px 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 1rem;
  font-weight: normal;
  color: #333;
}

aside#sidebar.visible {
  transform: translateX(0);
}

aside#sidebar nav ul {
  list-style: none;
  padding: 0;
}

aside#sidebar nav ul li {
  margin: 20px 0;
}

aside#sidebar nav ul li a {
  color: #007acc;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

aside#sidebar nav ul li a:hover {
  color: #005f99;
}
body.dark-mode {
  background-color: #333;
  color: #f5f5f5;
}

body.dark-mode button {
  background-color: #f5f5f5;
  color: #333;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin: 0 auto;
}

body.dark-mode button:hover {
  background-color: #cccccc;

}
.intro-nav {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
  margin-top: 10px;
  position: relative;
  z-index: 1;
  border-radius: 10px;
  transition: background 0.3s ease;

}

#toggle-aside {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 2000;
  background-color: #007acc;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;

}

#toggle-aside:hover {
  background-color: #005f99;

}
