package com.Component.notesrest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

    @CrossOrigin(origins="*")
    @RestController
    public class NoteController {

        @Autowired
        private NoteRepository noteRepository;

        //    Request: GET /ping
//    Response: "Up"
        @GetMapping("/ing")
        public String ing(){
            return "Up";
        }

        //    Request: GET /expenses

        @GetMapping("/getAllnotes")
        public List<Note> getAllnotes(){
        return noteRepository.findAll();
        }

//            Request: GET /expense/{id}
//    Response: Expense
//    @GetMapping("/notes/{id}")
//    public Note getNotesById(@PathVariable int id){
//        return noteRepository.findById(id);
//    }

        //    Request: POST /expense Expense
//    Response: Expense
        @PostMapping("/notes")
        public Note saveNote(@RequestBody Note note){
            return noteRepository.save(note);
        }

        //    Request: DELETE /expense/{id}
//    Response: void
        @DeleteMapping("/getnote/{id}")
        public void deleteNoteById(@PathVariable int id){
            noteRepository.deleteById(id);
        }

        //    Request: DELETE /expense Expense
//    Response: void
        @DeleteMapping("/getnote")
        public void deleteNote(@RequestBody Note note){
            noteRepository.delete(note);
        }

    }

