import React from "react";
import { CreateNote } from "./CreateNote";

export function NoteListView(props) {
  let body = [];
  props.notes.forEach((note) => {
    body.push(<CreateNote note={note} />);
  });
  return <div>{body}</div>;
}
