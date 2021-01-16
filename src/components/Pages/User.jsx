import React, { Component } from "react";
import UserGrid from "../Organisms/UserGrid"
import axios from 'axios'

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

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
    return <UserGrid users = {users}/>
  }
}

export default User;
