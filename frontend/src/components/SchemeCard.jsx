import "./SchemeCard.css";

export default function SchemeCard({
  name,
  description,
  eligibility,
  benefits,
  link,
}) {
  return (
    <div className="scheme-card">
      <h2 className="scheme-title">{name}</h2>
      <p className="scheme-description">{description}</p>

      <div className="section">
        <h3 className="section-title">Eligibility</h3>
        <ul className="list">
          {eligibility.map((item, idx) => (
            <li key={idx} className="list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3 className="section-title">Benefits</h3>
        <ul className="list">
          {benefits.map((item, idx) => (
            <li key={idx} className="list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          className="learn-more"
          rel="noopener noreferrer"
        >
          Learn More →
        </a>
      )}
    </div>
  );
}
