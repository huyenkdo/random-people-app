const Card = (props) => {
  const {firstName, lastName, image, city, state, country, age, tel, email} = props;

  return (
    <div className="card col shadow" style={{width: "18rem"}}>
      <img src={image} alt='user' className="card-img-top mt-2"></img>
      <div className="card-body">
        <h5 class="card-title fw-bold">{firstName} {lastName}</h5>
        <p className="card-text m-0">Adress: {city}, {state}, {country}</p>
        <p className="card-text m-0">Age: {age}</p>
        <p className="card-text m-0">Tel: {tel}</p>
        <p className="card-text m-0">Email: {email}</p>
      </div>
    </div>
  )
}

export default Card;
