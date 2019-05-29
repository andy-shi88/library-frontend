const client = require('./service/book_service');

client.GetBooks({}, (error, books) => {
  if (!error) {
    console.log('successfully fetch List books');
    console.log(books.Author);
  } else {
    console.error(error);
  }
});
