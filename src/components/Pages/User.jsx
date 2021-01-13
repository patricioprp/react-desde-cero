import React, { Component } from "react";
import UserCard from "../Molecules/UserCard";
import axios from 'axios'

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

//   componentDidMount(){
//       fetch('https://jsonplaceholder.typicode.com/users',{method: 'get'})
//       .then( response => response.json() )
//       .then(json => {
//           this.setState({
//               users:json
//             })
//         })
//     }
// Make a GET request
componentDidMount(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    axios.get(apiUrl)
    .then((repos) => {
      const users = repos.data;
      this.setState({
          users: users
      })
    });
}

  render() {
      
    const { users } = this.state;
    return (
      <div className="ed-grid">
        <h1>Usuario</h1>
        <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
          {users.map((u) => (
            <UserCard
              key={u.id}
              name={u.name}
              username={u.username}
              email={u.email}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default User;
