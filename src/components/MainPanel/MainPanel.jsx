function MainPanel({ title, opt }) {
  return (
    <section>
      <h2>{title}</h2>
      <p>RUB</p>
      <ul>
        {opt.map(({ period, sum }) => (
          <li key={period}>
            <span>{period}</span>
            <span>{sum}</span>
          </li>
        ))}
      </ul>
      <button>+</button>
    </section>
  );
}

export default MainPanel;
