import { useState, useEffect } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "../themes";
import "./style.scss";
import circularArrows from "../../imgs/Combined Shape.png";
import bolobolo from "../../imgs/bolobolo.svg"; 
import lightGreetingImg from "../../imgs/Combined Shape1.png";
import darkGreetingImg from "../../imgs/Path.png";
import { getTheme } from "../tools";
import Details from "../Details";

const GlobalStyle = createGlobalStyle`
  body {
    background-image: ${(props) => props.theme.backgroundImage};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  :root {
    --panel-bg: ${({ theme }) =>
      theme === lightTheme
        ? "rgba(255, 255, 255, 0.5)"
        : "rgba(0, 0, 0, 0.5)"};
  }
`;

const MainBlock = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [theme, setTheme] = useState<"light" | "dark">(getTheme(new Date()));
  const [isPanelVisible, setIsPanelVisible] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      setTheme(getTheme(now));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const togglePanel = () => {
    setIsPanelVisible((prev) => !prev);
  };

  const selectedTheme = theme === "light" ? lightTheme : darkTheme;

  return (
     <ThemeProvider theme={selectedTheme}>
        <GlobalStyle />
        <div className="main-container">
          <div className={`main-content ${isPanelVisible ? "panel-visible" : ""}`}>
            {!isPanelVisible && (
              <div className="quote">
                <div>
                  <p className="quote-text">
                    “The science of operations, as derived from mathematics more
                    especially, is a science of itself, and has its own abstract
                    truth and value.”
                  </p>
                  <p className="author">Ada Lovelace</p>
                </div>
                <div>
                  <img src={circularArrows} alt="Circular Arrows" />
                </div>
              </div>
            )}
    
            
            <div className="current-time">
              <div className="time-details">
                <div className="greeting">
                  <img src={theme === "light" ? lightGreetingImg : darkGreetingImg} alt="Greeting Icon" />
                  <p>GOOD MORNING, IT’S CURRENTLY</p>
                </div>
                <div className="clock">
                  {currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </div>
                <div className="location">In Georgia</div>
              </div>
    
            
              <div className="more-info">
                <button onClick={togglePanel}>
                  <p>{isPanelVisible ? "LESS" : "MORE"}</p>
                  <img src={bolobolo} alt="Arrow" className={isPanelVisible ? "rotated" : ""} />
                </button>
              </div>
            </div>
    
            
            {isPanelVisible && <Details />}
          </div>
        </div>
      </ThemeProvider>
    );
    
  
};

export default MainBlock;
