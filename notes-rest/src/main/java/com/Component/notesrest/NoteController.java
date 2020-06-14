package com.Component.notesrest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

    @CrossOrigin(origins="*")
    @RestController
    public class NoteController {

        @Autowired
        private NoteRepository noteRepository;


        @GetMapping("/ing")
        public String ing(){
            return "Up";
        }



        @GetMapping("/getAllnotes")
        public List<Note> getAllnotes(){
        return noteRepository.findAll();
        }



        @PostMapping("/notes")
        public Note saveNote(@RequestBody Note note){
            return noteRepository.save(note);
        }


        @DeleteMapping("/getnote/{id}")
        public void deleteNoteById(@PathVariable int id){
            noteRepository.deleteById(id);
        }


        @DeleteMapping("/getnote")
        public void deleteNote(@RequestBody Note note){
            noteRepository.delete(note);
        }

    }

