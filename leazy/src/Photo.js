import React from "react";
import { useInView } from "react-intersection-observer";

export const Photo = ({ url, name }) => {
  // const [active, setActive] = React.useState(false);

  const { ref, inView } = useInView({
    threshold: 0.5, // На сколько виден эоемент при котором будет срабатывать хук
    triggerOnce: true, // Если true то вы размантирует элемент при покидании области видимости
  });

  return (
    <div ref={ref} className="photo-card">
      {inView ? (
        <img src={url} alt="Example" />
      ) : (
        <>
          <div className="photo-card-skeleton" />
          <h4>{name}</h4>
        </>
      )}
    </div>
  );
};
