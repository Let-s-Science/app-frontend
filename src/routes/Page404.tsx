import React from "react";
import { Link } from "react-router-dom";
import "../main.scss";

function Page404() {
  return (
    <div className="e404">
      <div>
        <img
          src="../../public/images/shockedcat.jpeg"
          alt="ups gefunden!"
          className="img404"
        />
      </div>
      <div>
        <h1>Oops... Found!</h1>
        <h2 style={{ textAlign: "center" }}>
          This site doesn't seems to exist.
        </h2>
      </div>
    </div>
  );
  //   return <div>Ouups, Page not Found 404</div>;
}

export default Page404;
