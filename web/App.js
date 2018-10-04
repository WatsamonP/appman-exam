import React from 'react';
import './styles/app.scss'
import './styles/grid.scss'
import reactLogo from './logo.svg';

const Whiteframe = {
  width: 380,
  height: 540,

  margin: 'auto',
  padding: '10px',
  backgroundColor: 'ghostwhite',
}

const textStyle = {
  fontSize: '16px',
  fontFamily: 'sans-serif',
  textAlign: 'left',
  paddingLeft: '10px',
  paddingRight: '10px',
  display: 'inline'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      err_status: "",
      isLoading: false,
    };

    this.onClickSubmit = this.onClickSubmit.bind(this);
  }

  onClickSubmit(event) {
    event.preventDefault();
    this.setState({ isLoading: true });
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }),
    }).then((response) => {
      if (response.ok) {
        return response;
      } else {
        throw new Error('error');
      }
    })
      .then((response) => {
        if (response.status == 200) {
          alert("Login Successed");
          this.setState({ isLoading: false });
          this.setState({ err_status: '' });
        }
      })
      .catch((error) => {
        this.setState({ err_status: 'E-mail or password is incorrect' });
        this.setState({ email:  ""  })
        this.setState({ password:  ""  })
        this.setState({ isLoading: false });
      });
  }


  renderLogo() {
    if (this.state.isLoading) {
      return <img src={reactLogo} style={{ width: '180px' }} alt="logo" className="logo-spin" />
    } else {
      return <img src={reactLogo} style={{ width: '180px' }} alt="logo" />
    }
  }


  render() {
    // start your code here
    return (

     
      <div style={Whiteframe} className="shadow">
        <div style={{ textAlign: 'center', paddingTop: '20px' }}>
          {this.renderLogo()}
        </div>

        <form onSubmit={this.onClickSubmit} style={{ paddingTop: '20px' }}>
          <div style={{ padding: '10px' }}>
            <label>
              <p style={textStyle}>E-mail address</p>
              <div style={{ textAlign: 'center' }}>
                <input name="email"
                  className="text-input"
                  placeholder="example@appman.co.th"
                  type="text"
                  value = {this.state.email}
                  onChange={evt => this.setState({ email: evt.target.value })}
                />
              </div>
            </label>

          </div>

          <div style={{ padding: '10px' }}>
            <label>
              <p style={textStyle}>Password</p>
              <div style={{ textAlign: 'center' }}>
                <input name="password"
                  className="text-input"
                  placeholder="your password ..."
                  type="password"
                  value = {this.state.password}
                  onChange={evt => this.setState({ password: evt.target.value  })}
                  //onChange={(evt) => this.onPasswordChange(evt.target.value)} 
                  />
              </div>
            </label>
          </div>
          <div style={{ paddingLeft: '10px' }}>
          <div style={textStyle} className="text-red">{this.state.err_status}</div>
          </div>

          <div style={{ paddingTop: '10px', textAlign: 'center' }}>
            <input type="submit" value="SIGN IN" className="bt-deepskyblue"
              style={{ fontSize: '16px', fontFamily: 'sans-serif' }} />
          </div>
        </form>

        <div style={{ paddingTop: '25px' }}>
          <Row>
            <Col span={6} >
              <div style={{ textAlign: 'left' }} className="aTagStyle">
                <a style={textStyle}>Forgot password ?</a>
              </div>
            </Col>
            <Col span={6} >
              <div style={{ textAlign: 'right' }} className="aTagStyle">
                <a style={textStyle}>Create a new account</a>
              </div>
            </Col>
          </Row>
        </div>
      </div>

    );

    function Row(props) {
      return (
        <div className='section group'>{props.children}</div>
      )
    }

    function Col({ span, offset = false, children }) {
      let colClass = `col span_${span}_of_12`
      colClass = offset ? colClass + ' offset' : colClass
      return (
        <div className={colClass}>{children}</div>
      )
    }
  }
}


export default App;