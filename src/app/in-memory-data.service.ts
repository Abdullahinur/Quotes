
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService  implements InMemoryDbService {
createDb() {
    let quotes = [
      {id: 1, quote: 'You are the shuckiest shuck faced shuck in the world!', author: 'James Dashner, The Maze Runner', submittedBy: 'Abdullahi'},
      {id: 2, quote: 'Insane means fewer cameras!', author: ' Ally Carter, Only the Good Spy Young', submittedBy: 'Abdullahi'},
      {id: 3, quote: 'Her name badge read: Hello! My name is DIE, DEMIGOD SCUM!', author: 'Rick Riordan, The Son of Neptune', submittedBy: 'Abdullahi'},
      {id: 4, quote: 'Hand me my pants,', author: 'Michael Grant, Hunger', submittedBy: 'Abdullahi'},
    ];
    return { quotes };
}
}
