const redirect = () => {
  return (
    <div>
      <h1>Redirecting...</h1>
      <p>
        I have come from about page due to middlware config which matched all
        paths starting with about and redirected my here!.
      </p>
    </div>
  );
};

export default redirect;
