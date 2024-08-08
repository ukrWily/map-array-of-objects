function Person({ firstName, lastName, email, img }) {
  console.log("Person");

  //
  return (
    <div className="card">
      <img src={img} alt="person" />
      <h3>{firstName}</h3>
      <h3>{lastName}</h3>
      <div>{email}</div>
    </div>
  );
}

export default Person;
// id, firstName, lastName, email, image, index;
