
import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import styled from 'styled-components';

const NavBar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <StyledNavBar> 
      <div className="navbarContainer">
        <nav className="navbar">
          <div className="title">
            <h1>Women's World Cup Players</h1>
            <h2>Ranked by Search Interest June-July 2019</h2>
          </div>
          <div className="dark-mode__toggle">
            <div
              onClick={toggleMode}
              className={darkMode ? 'toggle toggled' : 'toggle'}
            />
          </div>
        </nav>
      </div>
    </StyledNavBar>
  );
};

export default NavBar;

const StyledNavBar = styled.div `

.navbarContainer{

  h1{
    font-size: 3rem;
    text-align: center;
  }

  h2{
    font-size: 1.5rem;
    text-align: center;
  }

  .navbar{
    background-color: #edf2ee;
    opacity: .9; 
    align-items: center;
    display: flex;
    height: 5%;
    justify-content: space-between;
    width: 100%;
  }

  .title{
    width: 100%;
  }

  .dark-mode__toggle {
    background: #9fc27f;
    border-radius: 50px;
    height: 30px;
    position: relative;
    width: 60px;
    align-self: flex-start;
    margin: 3%;
  }

  .toggle {
    background: #677e22;
    border-radius: 50px;
    height: 30px;
    left: 0;
    position: absolute;
    transition: 0.2s;
    width: 30px;
  }
  
  .toggled {
    left: 25px;
  }

}

`;