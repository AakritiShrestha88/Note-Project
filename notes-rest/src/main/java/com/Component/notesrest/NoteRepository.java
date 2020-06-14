package com.Component.notesrest;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface NoteRepository extends CrudRepository<Note,Integer> {
    List<Note> findAll();
    Note findById(int id);
//    List<Expense> findByCategoryAndName(String category,String name);
//    List<Expense> findByCategory(String category);
//    List<Expense> findByAmountLessThan(double amount);
}
