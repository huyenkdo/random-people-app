import Card from "./Card";
import { useEffect, useState } from "react";

const CardList = ({people, query, setPeople}) => {
  const regex = new RegExp(query.toLowerCase())
  const [peopleCopy, setPeopleCopy] = useState(people);
  useEffect(() => {
    const filteredList = people.filter((user) => {
      const fullName = user.name.first.toLowerCase() + user.name.last.toLowerCase()
      return regex.test(fullName)
    })
    setPeopleCopy(filteredList)
  }, [query])

  return (
    <div className='container my-3'>
      <div className="row row-cols-4 gap-3 justify-content-center">
        {peopleCopy.map((user, index) => (
          <Card key={`user${index}`} firstName={user.name.first} lastName={user.name.last} image={user.picture.large} city={user.location.city} state={user.location.state} country={user.location.country} tel={user.phone} age={user.dob.age} email={user.email} />
        ))}
      </div>
    </div>
  )
}

export default CardList;
