import React, { useEffect } from "react";
import { logo } from "./assets";
import Header from "./Component/Header";
import { FirebaseDB } from "./db/db";

const style = {
  app: "text-center",
  app_h1: "text-red-500",
};
const db = new FirebaseDB();
function App() {
  useEffect(() => {
    //@ts-ignore
    db.getProducts();
  }, []);

  return (
    <div className={style.app}>
      <Header logo={logo} />
      <h1 className={style.app_h1}>Hello Tailwind</h1>
    </div>
  );
}

export default App;
