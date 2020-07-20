import React, { Component } from 'react';
import ValidEmail from './ValidEmail';
import TestRenderRouters from './Pages/TestRoutes/testRenderRoutes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
    };
  }

  changeEmail(value) {
    this.setState({ email: value });
  }

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '' });
  }

  render () {
    const { email, saveEmail } = this.state;
    return(
      <div className="App">
        <p>Renderizando o App</p>
        <label htmlFor="id-email">
          Email
        </label>
        <input 
          id="id-email" 
          value={email}
          type="email" 
          onChange={(e) => this.changeEmail(e.target.value)}
        />
        <input 
          id="btn-send" 
          type="button" 
          data-testid="id-send" 
          value="Enviar" 
          onClick={() => this.changeSaveEmail(email)}
        />
        <input id="btn-id" type="button" value="Voltar" />
        <ValidEmail email={saveEmail}/>
        <hr />
        <p>Renderizando o App TestRenderRouters</p>
        <div>
          <TestRenderRouters />
        </div>
      </div>
    )
  };
}

export default App;
