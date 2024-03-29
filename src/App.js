import { useState } from "react";
import "./styles.css";

export default function App() {
  const src =
    "https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU";
  const [styles, setStyles] = useState({
    backgroundImage: `url(${src})`,
    backgroundPosition: "0% 0%",
  });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setStyles({
      ...styles,
      backgroundPosition: `${x}% ${y}%`,
    });
  };

  return (
    <figure onMouseMove={handleMouseMove} style={styles}>
      <img src={src} />
    </figure>
  );
}
