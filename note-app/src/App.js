import React from "react";
import "./App.css";

import CreateNote from "./Components/CreateNote";
import { NoteListView } from "./Components/NoteListView";
import { NoteEdit } from "./Components/NoteEdit";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };
    this.addNote = this.addNote.bind(this);
  }

  addNote(note) {
    this.setState({ notes: [].concat(this.state.notes, note) });
  }
  //2.we get the data from the backend populate our state
  componentDidMount() {
    //we using this method using fetch
    //fetch bthis data whatever it come use function to run it
    fetch("http://localhost:8080/getAllnotes")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          notes: data,
        })
      );
  }

  //5.Inside it we have a empty list
  //5.every state in our expenses pass to ExpenseComponent
  //7.jsx get return added inside body list
  //7.once the for loop is done it return the body
  //7.WHole thing get render
  // rendernotes() {
  //   let body = [];
  //   this.state.notes.forEach((note) => {
  //     body.push(<NoteComponent note={note} />);
  //   });
  //   return body;
  // }

  //   render() {
  //     return (
  //       <div className="App">
  //         <h1>Notes</h1>

  //         {this.rendernotes()}
  //       </div>
  //     );
  //   }
  // }

  render() {
    return (
      <div className="App">
        <h1>Notes</h1>
        <NoteEdit add={this.addNote} />
        <NoteListView notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
