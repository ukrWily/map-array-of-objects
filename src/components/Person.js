function Person({ id, firstName, lastName, email, img }) {
  console.log("Person");

  //
  return (
    <div>
      <img src={img} alt="person" />
      <div>{id}</div>
      <h3>{firstName}</h3>
      <h3>{lastName}</h3>
      <div>{email}</div>
    </div>
  );
}

export default Person;
// id, firstName, lastName, email, image, index;
