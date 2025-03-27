import "./style.scss";

const InfoPanel = ({ theme = { color: "#000" } }) => {
  return (
    <div className="info-panel" style={{ color: theme.color }}>
      <div className="info-content">
        <div className="data-cards">
          <div>
            <p className="label">CURRENT TIME ZONE</p>
            <p className="value">GEORGIA</p>
          </div>
          <div>
            <p className="label">Day of the year</p>
            <p className="value">295</p>
          </div>
        </div>
        <div className="data-cards separator">
          <div>
            <p className="label">Day of the week</p>
            <p className="value">5</p>
          </div>
          <div>
            <p className="label">Week number</p>
            <p className="value">42</p>
          </div>
        </div>
      </div>
    </div>
    
  );
};
export default InfoPanel;
