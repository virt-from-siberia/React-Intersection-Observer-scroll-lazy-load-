import React from "react";
import { useInView } from "react-intersection-observer";
import photos from "./photos.json";
import { Photo } from "./Photo";

import "./App.css";

function App() {
  const [active, setActive] = React.useState(false);

  const { ref, inView } = useInView({
    threshold: 0.5, // На сколько виден эоемент при котором будет срабатывать хук
  });

  React.useEffect(() => {
    if (inView) setActive(true);
    else setActive(false);
  }, [inView]);

  return (
    <div>
      <div className="section">
        <h2>Section</h2>
      </div>

      <div ref={ref} className={`section banner ${active ? "active" : active}`}>
        <h2>Banner3</h2>
      </div>

      <div className="section">
        <h2>Banner3</h2>
      </div>
      <div className="photos">
        {photos.map((url, i) => {
          return <Photo key={i} url={url} name={`Photo - ${url}`} />;
        })}
      </div>
    </div>
  );
}

export default App;
