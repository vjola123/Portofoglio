import React from "react";
import BgTexture from "./assets/Images/brown-wooden-flooring.jpg";
import MyBook from "./Components/MyBook";

const BgTextureStyle = {
  backgroundImage: `url(${BgTexture})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  width: "100%",
};
const App = () => {
  return (
    <div
      style={BgTextureStyle}
      className="w-full h-full flex justify-center items-center"
    >
      <MyBook />
    </div>
  );
};

export default App;