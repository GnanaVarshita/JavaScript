const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums =myNums.filter((num)=>{
//   return  num>4
// })

// const newNums =[]
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const books = [
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      pages: 1178,
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      pages: 310,
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Coming-of-age",
      pages: 221,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Coming-of-age",
      pages: 304,
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      pages: 328,
    },
  ];

  const userBooks = books.filter((book)=>book.pages>300)

  console.log(userBooks);

  