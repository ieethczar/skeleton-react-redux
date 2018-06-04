import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        Home Page
      </div>
    );
  }
}

export default connect(
  state => ({ 
    homeState: state.get('homeState') 
  })
)(HomePage);
