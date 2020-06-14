import React from "react";

export class NoteEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      description: "",
    };

    this.onColorChange = this.onColorChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.handleOnCancelClick = this.handleOnCancelClick.bind(this);
    this.handleOnCreateClick = this.handleOnCreateClick.bind(this);
  }

  onColorChange(event) {
    this.setState({ color: event.target.value });
  }

  onDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }
  handleOnCancelClick(event) {
    event.preventDefault();
    this.setState({
      color: "",
      description: "",
    });
  }

  handleOnCreateClick(event) {
    event.preventDefault();
    if (this.state.color !== "" && this.state.description !== "") {
      this.saveExpense();
      this.setState({
        color: "",
        description: "",
      });
    }
  }

  saveExpense() {
    //request options
    const options = {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    };
    //send POST request
    fetch("http://localhost:8080/notes", options)
      .then((res) => res.json())
      .then((res) => this.props.add(res));
  }

  render() {
    return (
      <div>
        <form>
          <div className="color">
            <label>Color:</label>
            <select
              name="color"
              value={this.state.color}
              onChange={this.onColorChange}
            >
              <option value=""></option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Yellow">Yellow</option>
              <option value="Green">Green</option>
            </select>
          </div>

          <div className="description">
            <label>
              Description:
              <textarea
                name="description"
                value={this.state.description}
                onChange={this.onDescriptionChange}
              />
            </label>
            <div className="cancel">
              <button onClick={this.handleOnCancelClick}>Cancel</button>

              <button onClick={this.handleOnCreateClick}>Create</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
