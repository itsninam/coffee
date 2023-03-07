import { useState } from "react";
import data from "../../headQuarters";

const HeadQuarters = () => {
  const [headQuarters, setHeadQuarters] = useState(data);

  return (
    <section className="headquarters">
      <h2>Our headquarters</h2>
      <ul className="list-container">
        {headQuarters.map((headQuarter, index) => {
          return (
            <li key={index}>
              <img
                src={require(`../../assets/about/desktop/${headQuarter.img}`)}
                alt={`Logo of ${headQuarter.location}`}
              />
              <h3>{headQuarter.location}</h3>
              <p>{headQuarter.address}</p>
              <p>{headQuarter.city}</p>
              <p>{headQuarter.postalCode}</p>
              <p>{headQuarter.phoneNumber}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default HeadQuarters;
