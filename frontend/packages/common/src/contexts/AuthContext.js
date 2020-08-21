import React from 'react';
import axios from '../axios';
import { navigate } from 'gatsby';
export const AuthContext = React.createContext();

export default class AuthContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.state = {
      isLoggedIn: undefined,
      token:
        (typeof window !== 'undefined' && localStorage.getItem('token')) ||
        null,
      user:
        (typeof window !== 'undefined' && localStorage.getItem('user')) || {}
    };
  }

  // componentDidMount() {
  //   if (this.state.token) {
  //     axios
  //       .get('user')
  //       .then((res) => {
  //         this.setState((prevState, prps) => ({
  //           authUser: res.data,
  //           isLoggedIn: true
  //         }));
  //       })
  //       .catch((err) => {
  //         localStorage.removeItem('token');
  //         localStorage.removeItem('user');
  //         this.setState((prevState, prps) => ({
  //           user: {},
  //           isLoggedIn: false,
  //           token: null
  //         }));
  //       });
  //   } else {
  //     this.setState((prevState, prps) => ({
  //       user: {},
  //       isLoggedIn: false,
  //       token: null
  //     }));
  //   }
  // }

  async isLoggedIn() {
    let promise = new Promise((resolve, reject) => {
      axios
        .get('auth/check', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then((res) => {
          resolve(true);
        })
        .catch((err) => {
          resolve(false);
        });
    });

    let loggedIn = await promise;
    return loggedIn;
  }
  logOut() {
    axios
      .post('logout')
      .then((res) => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.setState((prevState, prps) => ({
          isLoggedIn: false,
          token: null,
          user: {}
        }));
      })
      .catch((err) => console.log('logout error', err))
      .then((res) => {
        window.location = '/';
      });
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          checkAuth: async () => {
            let promise = new Promise((resolve, reject) => {
              resolve(this.isLoggedIn());
            });
            let result = await promise;

            return result;
          },
          user: this.state.user,
          token: this.state.token,
          isLoggedIn: this.state.isLoggedIn,
          setUser: (user) => {
            this.setState((prevState, prps) => ({
              user: user
            }));
          },
          setAccessToken: (access_token) => {
            this.setState((prevState, prps) => ({
              token: access_token
            }));
          },
          loginUser: (user, access_token) => {
            localStorage.setItem('token', access_token);
            localStorage.setItem('user', JSON.stringify(user));
            this.setState((prevState, prps) => ({
              user: user,
              token: access_token
            }));
            navigate('/app');
          },
          handleLogOut: () => {
            this.logOut();
          }
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
