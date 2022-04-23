import React from "react";
import Nav from "./Nav";
import Users from "./Users";

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  const usersData = data.map((user) => (
    <Users
      key={user.id}
      name={user.name}
      bio={user.company.catchPhrase}
      street={user.address.street}
      suite={user.address.suite}
      city={user.address.city}
      email={user.email}
      phone={user.phone}
    />
  ));

  return (
    <div className="App">
      <Nav />
      {usersData}
    </div>
  );
}

export default App;
