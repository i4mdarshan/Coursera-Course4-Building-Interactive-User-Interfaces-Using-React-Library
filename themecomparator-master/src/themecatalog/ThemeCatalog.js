import React from "react";
import Theme from '../theme/Theme';

export default class ThemeCatalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      themes: props.themes ? props.themes : [],
    }
    this.onThemeDeleted = this.onThemeDeleted.bind(this);
    this.deleteCallback = this.props.onThemeDeleted;
  }

  static getDerivedStateFromProps(props, state) {
    return { themes: props.themes };
  }

  onThemeDeleted(themeName) {
    this.deleteCallback(themeName);
  }

  render() {
    return (
      <div>
        <h3>Theme Catalog</h3>
        <div className="catalog">
          {
            this.state.themes.map((theme) =>
              <Theme key={theme.name}
                name={theme.name}
                backgroundColor={theme.backgroundColor}
                color={theme.color}
                fontFamily={theme.fontFamily}
                fontWeight={theme.fontWeight}
                onThemeDeleted={this.onThemeDeleted}
              />)
          }
        </div>
      </div>
    );
  }
}