import './App.css';
import ThemeCatalog from './themecatalog/ThemeCatalog';
import ThemeCreator from './themecreator/ThemeCreator';
import React from 'react';
import axios from 'axios';

export default class App extends React.Component {

  signal1 = axios.CancelToken.source();
  signal2 = axios.CancelToken.source();
  signal3 = axios.CancelToken.source();

  constructor(props) {
    super(props);
    this.state = {
      themes: [],
      errors: []
    };
    this.onThemeCreated = this.onThemeCreated.bind(this);
    this.onThemeValidated = this.onThemeValidated.bind(this);

    this.onThemeDeleted = this.onThemeDeleted.bind(this);
  }

  componentDidMount() {
    this.getThemes();
  }

  async getThemes() {
    try {
      const response = await axios.get(`http://localhost:3001/themes`, {
        cancelToken: this.signal2.token
      })
      this.setState(
        {
          themes: response.data
        }
      )
    }
    catch (error) {
      if (!axios.isCancel(error)) {
        this.setState({ errors: error })
      }
    }
  }

  onThemeCreated(theme) {
    this.saveTheme(theme);
  }

  async saveTheme(theme) {
    try {
      const response = await axios.post(`http://localhost:3001/themes`, theme, {
        cancelToken: this.signal1.token
      })
      if (response.status === 201)
        this.setState({
          themes: [...this.state.themes, theme]
        });
      else
        throw new Error('Failed to save theme')
    }
    catch (error) {
      if (!axios.isCancel(error)) {
        this.setState({ errors: error })
      }
    }
  }

  onThemeValidated(themeName) {
    return this.getThemeByName(themeName).length === 0;
  }

  getThemeByName(themeName) {
    return this.state.themes.filter(theme => theme.name === themeName)
  }

  onThemeDeleted(themeName) {
    const idx = this.state.themes.filter(theme => theme.name === themeName)[0]["id"];
    this.deleteTheme(idx);
  }

  async deleteTheme(themeIndex) {
    try {
      await axios.delete(`http://localhost:3001/themes/${themeIndex}`, {
        cancelToken: this.signal3.token
      });
      const filteredThemes = this.state.themes.filter(theme => theme.id !== themeIndex);

      this.setState({
        themes: [...filteredThemes]
      });
    }
    catch (error) {
      if (!axios.isCancel(error)) {
        this.setState({ errors: error })
      }
    }
  }

  componentWillUnmount() {
    this.signal1.cancel("");
    this.signal2.cancel("");
    this.signal3.cancel("");
  }

  render() {
    return (
      <div>
        <header className="App-header"><h2>Theme Comparer</h2></header>
        <ThemeCreator onThemeCreated={this.onThemeCreated}
          onThemeValidated={this.onThemeValidated} />
        <ThemeCatalog themes={this.state.themes}
          onThemeDeleted={this.onThemeDeleted} />
      </div>
    )
  }
}