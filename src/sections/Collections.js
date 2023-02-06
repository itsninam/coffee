const Collections = ({ coffees }) => {
  return (
    <section className="collections">
      <h2>Our collection</h2>
      <div className="collections-container">
        {coffees.map((coffee, index) => {
          return (
            <div className="collections-coffee" key={index}>
              <img
                src={require(`../assets/home/desktop/${coffee.image}`)}
                alt={coffee.title}
              />
              <h3>{coffee.title}</h3>
              <p>{coffee.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Collections;
