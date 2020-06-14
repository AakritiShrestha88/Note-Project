package com.Component.notesrest;

import javax.persistence.*;


import javax.persistence.*;
import java.util.Date;

    @Entity
    @Table(name="notes")
    public class Note {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int id;
        private String description;
        private String color;

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }
        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public String getColor() {
            return color;
        }

        public void setColor(String color) {
            this.color = color;
        }
    }

