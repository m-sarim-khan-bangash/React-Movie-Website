import React from "react";
import Movies from "./Movies";
import Search from "./Search";

const Home = () => {
  // const obj = useContext(AppContext);
  // const obj = useGlobalContext();
  return (
    <>
      {/* <h1>{obj}</h1> */}
      <Search />
      <Movies />
    </>
  );
};

export default Home;
