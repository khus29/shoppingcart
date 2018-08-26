import Cookies from 'universal-cookie';
const cookies = new Cookies();

const auth = {
  checkAuthenticated() {
    this.isAuthenticated = false;
    if (cookies.get('user')) {
      this.isAuthenticated = true;
    }
    return this.isAuthenticated;
  },
  authenticate() {
    this.isAuthenticated = true;
  }
};

export default auth;
