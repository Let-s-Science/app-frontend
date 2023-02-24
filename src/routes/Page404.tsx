import { Title } from "@mantine/core";
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
        <Title order={1}>Oops... Found!</Title>
        <Title order={2} style={{ textAlign: "center" }}>
          This site doesn't seems to exist.
        </Title>
      </div>
    </div>
  );
};

export default Page404;
