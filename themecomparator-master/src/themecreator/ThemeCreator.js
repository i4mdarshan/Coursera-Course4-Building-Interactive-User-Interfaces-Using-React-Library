import React from "react";

export default class ThemeCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            backgroundColor: '',
            color: '',
            fontWeight: '',
            fontFamily: '',
            errors: ''
        };
        this.colors = [];
        this.createCallback = this.props.onThemeCreated;
        this.validateCallback = this.props.onThemeValidated;
        this.onThemeCreated = this.onThemeCreated.bind(this);
    }


    onThemeCreated(e) {
        e.preventDefault();
        const theme = {
            ...this.state,
        };
        if (this.validateCallback(theme.name)) {
            this.createCallback(theme);
            this.setState({
                name: '',
                backgroundColor: '',
                color: '',
                fontWeight: '',
                fontFamily: '',
                errors:''
            })
        }
        else
            this.setState({
                errors: 'Duplicate Theme Name'
            })
    }

    onValueChanged(key, event) {
        this.setState({ [key]: event.target.value });
    }

    render() {

        return (
            <form id="catalog-form" onSubmit={this.onThemeCreated}>
                <h3>Theme Creator</h3>
                <small className="error">{this.state.errors}</small>
                <div className="catalog-row">
                    <label htmlFor="name">Theme Name</label>
                    <input type="text" value={this.state.name}
                        placeholder="Theme Name"
                        name="name"
                        onChange={this.onValueChanged.bind(this, 'name')} />
                </div>
                <div className="catalog-row">
                    <label htmlFor="backgroundColor">Background Color</label>
                    <input type="text" value={this.state.backgroundColor}
                        placeholder="Background Color"
                        name="backgroundColor"
                        onChange={this.onValueChanged.bind(this, 'backgroundColor')} />
                </div>
                <div className="catalog-row">
                    <label htmlFor="foregroundColor">Foreground Color</label>
                    <input type="text" value={this.state.color}
                        placeholder="Foreground Color"
                        name="foregroundColor"
                        onChange={this.onValueChanged.bind(this, 'color')} />
                </div>
                <div className="catalog-row">
                    <label htmlFor="fontFamily">Font Family</label>
                    <input type="text" value={this.state.fontFamily}
                        placeholder="Font Family"
                        name="fontFamily"
                        onChange={this.onValueChanged.bind(this, 'fontFamily')} />
                </div>
                <div className="catalog-row">
                    <label htmlFor="fontWeight">Font Weight</label>
                    <input type="text" value={this.state.fontWeight}
                        placeholder="Font Weight"
                        name="fontWeight"
                        onChange={this.onValueChanged.bind(this, 'fontWeight')} />
                </div>
                <button type="submit" id="add_theme">Add Theme</button>
            </form>
            )
    }
}