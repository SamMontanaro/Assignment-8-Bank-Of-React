import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/home';
import UserProfile from './Components/userProfile';
import LogIn from './Components/login';
import Debits from './Components/debits';
import Credits from './Components/credits';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    }
  }

  mockLogin = (logInInfo) => {
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({currentUser: newUser});
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home accountBalance={this.state.accountBalance}/>}></Route>
          <Route exact path="/login" element={<LogIn user={this.state.currentUser} mockLogin={this.mockLogin} {...this.props}></LogIn>}></Route>
          <Route exact path="/userProfile" element={<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}></UserProfile>}></Route>
          <Route exact path="/debits" element={<Debits></Debits>}></Route>
          <Route exact path="/credits" element={<Credits></Credits>}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;