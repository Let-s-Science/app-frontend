const Logout = () => {
  try {
    localStorage.removeItem("token");
  } catch (error) {
    console.log(error);
  }
  return <></>;
};

export default Logout;
