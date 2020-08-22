import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import Button from 'react-bootstrap/Button';
import SignUpComponent from './SignUp';
import LoginComponent from './Login';
import ArticlesListComponent from './ArticlesList';
import AddArticleComponent from './AddArticle';
class NavbarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      isUserConnected: true,
      showLoginComponent: false,
      showSignUpComponent: false,
      showArticleListComponent: false,
      showAddArticleComponent: false,
    };
  }

  showSignUpComponent = () => {
    this.setState({ showSignUpComponent: true, showLoginComponent: false });
  };

  showLoginComponent = () => {
    this.setState({ showSignUpComponent: false, showLoginComponent: true });
  };

  showArticleListComponent = () => {
    this.setState({
      showArticleListComponent: true,
      showLoginComponent: false,
      showSignUpComponent: false,
    });
  };

  logout = () => {
    this.setState({ isUserConnected: false });
    localStorage.removeItem('token');
  };

  showAddArticleComponent = () => {
    this.setState({
      showLoginComponent: false,
      showSignUpComponent: false,
      showAddArticleComponent: true,
    });
  };

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Blog</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home" onClick={this.showArticleListComponent}>
              Home
            </Nav.Link>
            {!this.state.isUserConnected && (
              <div>
                <Button variant="primary" onClick={this.showSignUpComponent}>
                  Sign up
                </Button>{' '}
                <Button variant="primary" onClick={this.showLoginComponent}>
                  Login
                </Button>{' '}
              </div>
            )}
            {this.state.isUserConnected && (
              <div>
                <Button variant="primary" onClick={this.logout}>
                  Log out
                </Button>{' '}
                <Button
                  variant="primary"
                  onClick={this.showAddArticleComponent}
                >
                  Create new article
                </Button>{' '}
              </div>
            )}
          </Nav>
        </Navbar>
        {this.state.showSignUpComponent && <SignUpComponent />}
        {this.state.showLoginComponent && <LoginComponent />}
        {this.state.showArticleListComponent &&
          !this.state.showSignUpComponent &&
          !this.state.showLoginComponent && <ArticlesListComponent />}
        {this.state.showAddArticleComponent &&
          !this.state.showLoginComponent &&
          !this.state.showSignUpComponent && <AddArticleComponent />}
      </div>
    );
  }
}

export default NavbarComponent;
