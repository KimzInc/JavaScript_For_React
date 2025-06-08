const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*

//book;

//console.log(book);

const { title, author, publicationDate, pages, genres, hasMovieAdaptation } =
  book;

title;
author;

const pub_year = publicationDate.split("-")[0];
pub_year;

// De-structuring with arrays

const [primaryGenre, secondaryGenre] = book.genres;

primaryGenre;
secondaryGenre;

// Using spread operator ...
const [primary1Genre, secondary1Genre, ...otherGenre] = book.genres;
primary1Genre;
secondary1Genre;
otherGenre;

// create a new array using spread operator

const newGenres1 = [genres, "epic fantasy"]; // wrong! use rest operator

//const newGenres2 = [...book.genres, "epic fantasy"];
const newGenres2 = ["epic fantasy", ...book.genres];

newGenres2;

// objects, adding new properties and updating the existing ones

console.log(book.publicationDate);

console.log(book);

// add new property and update number of pages
const updatedBook = {
  ...book,
  moviePublicationDate: "2001-12-19",
  pages: "1300",
};

console.log(updatedBook);

// Template leterals, back-ticks ```````

const summary = `${title}, a ${
  book.pages
}-page long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;

summary;

//Ternaries instead of if/else statements

const page_numpers = pages > 1000 ? "over a thousand" : "less than 1 thousand";

console.log(`The book has ${page_numpers} pages`);

// Arrow function

function getPublicationDate(str) {
  return str.split("-")[0];
}

const year_of_publication = getPublicationDate(publicationDate);
console.log(year_of_publication);

// applying arrow function in above example
const getYear = (str) => str.split("-")[0];

console.log(getYear(publicationDate));

//Short-Circuiting logical operators (&&, ||, and ??)
let input = "Kim";

//let input = "";

let username = input || "Guest";

username;

// isLoggedIn && showDashboard();
//let userInput;
let userInput = 10;

let count = userInput ?? 0;

count;

console.log(true && "Some string");
console.log(false && "Some string");

console.log(true || "Some string");
console.log(false || "Some string");

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";

spanishTranslation;

console.log(book.reviews.librarything.reviewsCount);

const countWrong = book.reviews.librarything.reviewsCount || "No Data";

countWrong;

// using nullish operator ??

const cWrong = book.reviews.librarything.reviewsCount ?? "No Data";

cWrong;

//Optional chaining
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  //goodreads;
  //librarything;
  return goodreads + librarything;
}

const allReviews = getTotalReviewCount(book);
allReviews;

// Map, filter and reduce

titles = data.map((i) => i.title);

titles;

// title, author, pages

const summary1 = data.map((k) => ({
  title: k.title,
  author: k.author,
  pages: k.pages,
}));

summary1;

// Filter
// filter by hasMovieAdaptation

const movies = data.filter((book) => book.hasMovieAdaptation);

console.log(movies.map((book) => ({ title: book.title, author: book.author })));
*/

const books = getBooks();

//const book = getBook(2);

// const result = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((x) => x * 2);

// console.log(result);

const titles = books.map((book) => book.title);

titles;

// const essentialData = books.map((book) => {
//   return {
//     title: book.title,
//     author: book.author,
//   };
// });

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));

essentialData;

// Filter method: filter books with more than 800 pages

const more_pages = books
  .filter((book) => book.pages > 500)
  .map((b) => ({
    title: b.title,
    author: b.author,
  }));

console.log(more_pages);

// includes return true or false

const adventureBooks = books.filter((books) =>
  books.genres.includes("adventure")
);

adventureBooks;

// Reduce
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);

pagesAllBooks;

// Example using product list

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 50 },
  { name: "router", price: 400 },
  { name: "receiver", price: 200 },
  { name: "MacBook Pro", price: 2000 },
];

/*
// get the total price and apply a discount
const totalPrice = products
  .filter((p) => p.price < 500)
  .map((p) => p.price)
  .reduce((sum, price) => sum + price, 0);

totalPrice;
const discount = 0.1; // 10% discount

const discountedTotal = totalPrice * (1 - discount);

console.log(discountedTotal);

*/

function applyDiscount(products, discount) {
  return products
    .filter((p) => p.price <= 1000)
    .reduce((sum, p) => sum + p.price * (1 - discount), 0);
}

const finalTotal = applyDiscount(products, 0.25);

finalTotal;

// sort method: use slice to create a copy
const arr = [3, 9, 7, 1, 5, 4, 2, 8];

const sorted = arr.slice().sort((a, b) => a - b);

arr;

sorted;

// array of objects
const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);

sortedByPages;

// adding, updating and deleting objects
const newBook = { id: 6, title: "Kifo kisimani", author: "Kimutai" };

const booksAfterAdd = [...books, newBook];

booksAfterAdd;

//delete a book object using filter method
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 6);

booksAfterDelete;

//update an object using Map method
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1240 } : book
);

booksAfterUpdate;

// Asynchronous JavaScript: Promise

/*
fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
  res.json().then((data) => console.log(data))
);
*/

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}

getTodos();
