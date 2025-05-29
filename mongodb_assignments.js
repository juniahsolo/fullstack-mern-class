/*********************************
 MONGODB BOOKSTORE ASSIGNMENT
**********************************/

print("=== STARTING ASSIGNMENT ===\n");

// ===== QUESTION 2: BASIC CRUD OPERATIONS =====
print("=== QUESTION 2: CRUD OPERATIONS ===");

// 1. Find all books in a specific genre
print("\n1. All Science Fiction books:");
db.books.find({ genre: "Science Fiction" }).pretty();

// 2. Find books published after a certain year
print("\n2. Books published after 2000:");
db.books.find({ published_year: { $gt: 2000 } }).pretty();

// 3. Find books by a specific author
print("\n3. Books by Frank Herbert:");
db.books.find({ author: "Frank Herbert" }).pretty();

// 4. Update the price of a specific book
print("\n4. Updating Dune's price to $18.99:");
db.books.updateOne(
  { title: "Dune" },
  { $set: { price: 18.99 } }
);
print("Update result:");
db.books.find({ title: "Dune" }, { title: 1, price: 1, _id: 0 }).pretty();

// 5. Delete a book by its title
print("\n5. Deleting 'The Great Gatsby':");
db.books.deleteOne({ title: "The Great Gatsby" });
print("Remaining book count:", db.books.countDocuments());

// ===== QUESTION 3: ADVANCED QUERIES =====
print("\n\n=== QUESTION 3: ADVANCED QUERIES ===");

// 1. Books in stock AND published after 2010
print("\n1. In-stock books published after 2010:");
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
}).pretty();

// 2. Projection (title, author, price only)
print("\n2. Books with projected fields:");
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
).pretty();

// 3. Sorting by price
print("\n3a. Books sorted by price (ascending):");
db.books.find().sort({ price: 1 }).pretty();
print("\n3b. Books sorted by price (descending):");
db.books.find().sort({ price: -1 }).pretty();

// 4. Pagination (5 books per page)
print("\n4. Pagination (Page 1):");
db.books.find().limit(5).pretty();
print("\nPagination (Page 2):");
db.books.find().skip(5).limit(5).pretty();

// ===== QUESTION 4: AGGREGATION PIPELINE =====
print("\n\n=== QUESTION 4: AGGREGATIONS ===");

// 1. Average price by genre
print("\n1. Average price by genre:");
db.books.aggregate([
  { $group: { 
      _id: "$genre", 
      averagePrice: { $avg: "$price" } 
  }}
]);

// 2. Author with most books
print("\n2. Author with most books:");
db.books.aggregate([
  { $group: { 
      _id: "$author", 
      bookCount: { $sum: 1 } 
  }},
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
]);

// 3. Books by publication decade
print("\n3. Books count by decade:");
db.books.aggregate([
  { $project: { 
      decade: { 
        $subtract: [
          "$published_year", 
          { $mod: ["$published_year", 10] }
        ]
      } 
  }},
  { $group: { 
      _id: "$decade", 
      count: { $sum: 1 } 
  }},
  { $sort: { _id: 1 } }
]);

// ===== QUESTION 5: INDEXING =====
print("\n\n=== QUESTION 5: INDEXING ===");

// 1. Create index on title
print("\n1. Creating title index:");
db.books.createIndex({ title: 1 });

// 2. Create compound index
print("\n2. Creating author/year compound index:");
db.books.createIndex({ author: 1, published_year: 1 });

// 3. Show all indexes
print("\n3. Current indexes:");
db.books.getIndexes();

// 4. Explain query with index
print("\n4. Performance with index (search for 'Dune'):");
db.books.find({ title: "Dune" }).explain("executionStats");

print("\n=== ASSIGNMENT COMPLETE ===");