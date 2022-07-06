import { Component } from 'react';

export default class Theme extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      backgroundColor: props.backgroundColor ? props.backgroundColor : 'whitesmoke',
      color: props.color ? props.color: 'black',
      fontFamily: props.fontFamily ? props.fontFamily : 'Menlo',
      fontWeight: props.fontWeight ? props.fontWeight : 500,
    }
    this.onDeleted = this.onDeleted.bind(this);
    this.deleteCallback = this.props.onThemeDeleted;
  }

  onDeleted(themeName) {
    
    this.deleteCallback(themeName);
  }

  render() {
    const styles = {
      ...this.state,
      borderRadius: '8px',
      border: '1px solid gray',
      minHeight: '200px',
      width: '350px',
      padding: '15px',
      margin: '10px',
      fontSize: '32px',
    };
    return (
      <div id={this.state.name} className="theme" style={styles}>
        <div className="theme-name" style={{fontFamily: 'Arial'}}>{this.state.name}</div>
        <p>
          Almost before we knew it, we had left the ground.
        </p>
        <button className="delete-button" onClick={this.onDeleted.bind("themeName",this.state.name)}>Delete</button>
      </div>
    )
  }
}