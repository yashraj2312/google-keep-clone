import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const notes: Note[] = [
      { 
        id: 11,
        title: 'PayO',
        description: 'PayO will become Unicorn',
        isDone: false,
        isArchived: false,
      },
      { 
        id: 12,
        title: 'Hire Yash Raj',
        description: 'Check Out https://bit.ly/yashrajweb to know more',
        isDone: false,
        isArchived: false,
      },
      { 
        id: 13,
        title: 'Final Test',
        description: 'Final Test Note done after compilation',
        isDone: false,
        isArchived: false,
      },
      { 
        id: 14,
        title: 'FrontEnd Dev',
        description: 'Yash Raj is a good Candidate',
        isDone: false,
        isArchived: true,
      }
    ];
    return {notes};
  }

  genId(notes: Note[]): number {
    return notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 11;
  }
}
