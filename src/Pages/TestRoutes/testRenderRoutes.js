import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


export const Home = () => <h1>Você está na página Início</h1>;
export const NoMatch = () => <h1>Página não encontrada</h1>;

export class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
    };
  }

  handleInput(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>Você está na página Sobre</h1>
        <p>
          Nome: 
          <input 
            onChange={(e) => this.handleInput(e)}
            name='name'
            data-testid='input-name'
            value={this.state.name}
          />
        </p>

        <p>
          Email:
          <input 
            onChange={(e) => this.handleInput(e)}
            name='email'
            data-testid='input-email'
            value={this.state.email}
          />
        </p>
      </div>
    );
  }
}

export default function TestRenderRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Link to='/'>Início</Link>
        <Link to='/about'>Sobre</Link>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
