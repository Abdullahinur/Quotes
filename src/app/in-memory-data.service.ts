
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService  implements InMemoryDbService {
createDb() {
    let quotes = [
      {id: 1, quote: 'You are the shuckiest shuck faced shuck in the world!', author: 'James Dashner, The Maze Runner', submittedBy: 'Abdullahi'},
      {id: 2, quote: 'Insane means fewer cameras!', author: ' Ally Carter, Only the Good Spy Young', submittedBy: 'Abdullahi'},
      {id: 3, quote: 'Her name badge read: Hello! My name is DIE, DEMIGOD SCUM!', author: 'Rick Riordan, The Son of Neptune', submittedBy: 'Abdullahi'},
      {id: 5, quote: 'I love you the more in that I believe you had liked me for my own sake and for nothing else.', author: 'John Keats', submittedBy: 'Abdullahi'},
      {id: 6, quote: 'But man is not made for defeat. A man can be destroyed but not defeated.', author: 'Ernest Hemingway', submittedBy: 'Abdullahi'},
      {id: 7, quote: 'When you reach the end of your rope, tie a knot in it and hang on.', author: 'Franklin D. Roosevelt', submittedBy: 'Abdullahi'},
      {id: 8, quote: 'There is nothing permanent except change.', author: 'Heraclitus', submittedBy: 'Abdullahi'},
      {id: 9, quote: 'You cannot shake hands with a clenched fist.', author: 'Indira Gandhi', submittedBy: 'Abdullahi'},
      {id: 10, quote: 'Let us sacrifice our today so that our children can have a better tomorrow.', author: 'A. P. J. Abdul Kalam', submittedBy: 'Abdullahi'},
      {id: 11, quote: 'It is better to be feared than loved, if you cannot be both.', author: 'Niccolo Machiavelli', submittedBy: 'Abdullahi'},
      {id: 12, quote: 'The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.', author: 'Amelia Earhart', submittedBy: 'Abdullahi'},
      {id: 13, quote: 'Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself.', author: 'Henry James', submittedBy: 'Abdullahi'},
      {id: 14, quote: 'Learning never exhausts the mind.', author: 'Leonardo da Vinci', submittedBy: 'Abdullahi'},
      {id: 15, quote: 'There is no charm equal to tenderness of heart.', author: 'Jane Austen', submittedBy: 'Abdullahi'},
      {id: 16, quote: 'All that we see or seem is but a dream within a dream.', author: 'Edgar Allan Poe', submittedBy: 'Abdullahi'},
      {id: 17, quote: 'Lord, make me an instrument of thy peace. Where there is hatred, let me sow love.', author: 'Francis of Assisi', submittedBy: 'Abdullahi'},
      {id: 18, quote: 'If you cannot do great things, do small things in a great way.', author: 'Napoleon Hill', submittedBy: 'Abdullahi'},
      {id: 19, quote: 'Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak.', author: 'Thomas Carlyle', submittedBy: 'Abdullahi'},
      {id: 20, quote: 'Independence is happiness.', author: 'Susan B. Anthony', submittedBy: 'Abdullahi'},
      {id: 21, quote: 'The supreme art of war is to subdue the enemy without fighting.', author: 'Sun Tzu', submittedBy: 'Abdullahi'},
      {id: 22, quote: 'Keep your face always toward the sunshine - and shadows will fall behind you.', author: 'Walt Whitman', submittedBy: 'Abdullahi'},
      {id: 23, quote: 'Being entirely honest with oneself is a good exercise.', author: 'Sigmund Freud', submittedBy: 'Abdullahi'},
      {id: 24, quote: 'Love has no age, no limit; and no death.', author: 'John Galsworthy', submittedBy: 'Abdullahi'},
      {id: 25, quote: "You can't blame gravity for falling in love.", author: 'Albert Einstein', submittedBy: 'Abdullahi'},
      {id: 26, quote: "There is only one corner of the universe you can be certain of improving, and that's your own self.", author: 'Aldous Huxley', submittedBy: 'Abdullahi'},
      {id: 27, quote: 'Honesty is the first chapter in the book of wisdom.', author: 'Thomas Jefferson', submittedBy: 'Abdullahi'},
      {id: 28, quote: 'The journey of a thousand miles begins with one step.', author: 'Lao Tzu', submittedBy: 'Abdullahi'},
      {id: 29, quote: 'Whoever is happy will make others happy too.', author: 'Anne Frank', submittedBy: 'Abdullahi'},
      {id: 30, quote: "I have not failed. I've just found 10,000 ways that won't work.", author: 'Thomas A. Edison', submittedBy: 'Abdullahi'},
      {id: 31, quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.', author: 'Benjamin Franklin', submittedBy: 'Abdullahi'},
      {id: 32, quote: 'There is nothing on this earth more to be prized than true friendship.', author: 'Thomas Aquinas', submittedBy: 'Abdullahi'},
      {id: 33, quote: 'A leader is one who knows the way, goes the way, and shows the way.', author: 'John C. Maxwell', submittedBy: 'Abdullahi'},
      {id: 34, quote: 'Very little is needed to make a happy life; it is all within yourself, in your way of thinking.', author: 'Marcus Aurelius', submittedBy: 'Abdullahi'},
      {id: 35, quote: 'There is only one happiness in this life, to love and be loved.', author: 'George Sand', submittedBy: 'Abdullahi'},
      {id: 36, quote: "If opportunity doesn't knock, build a door.", author: 'Milton Berle', submittedBy: 'Abdullahi'},
      {id: 37, quote: 'Let us be grateful to people who make us happy, they are the charming gardeners who make our souls blossom.', author: 'Marcel Proust', submittedBy: 'Abdullahi'},
      {id: 38, quote: 'Always remember that you are absolutely unique. Just like everyone else.', author: 'Margaret Mead', submittedBy: 'Abdullahi'},
      {id: 39, quote: 'Wise men speak because they have something to say; Fools because they have to say something.', author: 'Plato', submittedBy: 'Abdullahi'},
      {id: 40, quote: 'The World is my country, all mankind are my brethren, and to do good is my religion.', author: 'Thomas Paine', submittedBy: 'Abdullahi'},
      {id: 41, quote: 'A single rose can be my garden... a single friend, my world.', author: 'Leo Buscaglia', submittedBy: 'Abdullahi'},
      {id: 42, quote: 'Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.', author: 'Swami Vivekananda', submittedBy: 'Abdullahi'},
      {id: 43, quote: 'Friends show their love in times of trouble, not in happiness.', author: 'Euripides', submittedBy: 'Abdullahi'},




    ];
    return { quotes };
}
}
