import "../main.scss";

const Page404 = () => {
  return (
    <div className="e404">
      <div>
        <img
          src="/images/shockedcat.jpeg"
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
};

export default Page404;
