import React from "react";
//----------------books Data----------------------//
const books = [
  { id: 1, title: "book1", desc: "new book", price: 10 },
  { id: 2, title: "book2", desc: "book two", price: 20 },
  { id: 3, title: "book3", desc: "book three", price: 30 },
  { id: 4, title: "book4", desc: "book four", price: 40 },
  { id: 5, title: "book5", desc: "new book", price: 10 },
  { id: 6, title: "book6", desc: "book two", price: 20 },
  { id: 7, title: "book7", desc: "book three", price: 30 },
  { id: 8, title: "book8", desc: "book four", price: 40 },
];
//----------------books Data---------------------//
//----------------Memo--------------------------//
const Memo = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>ITEMS</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "20px",
          position: "absolute",
          top: "100px",
          left: "200px",
          textAlign: "center",
        }}
      >
        {books.map((book, index) => {
          return (
            <div
              style={{ backgroundColor: "#f3f3f3", width: "600px" }}
              key={index}
            >
              <Book {...book} />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Memo;
//----------------Memo--------------------------//
//----------------book------------------------//
const Book = ({ title, desc, price }) => {
  return (
    <div>
      <h1> {title}</h1>
      <h3>DESC: {desc}</h3>
      <p>PRICE :{price}</p>
    </div>
  );
};
//----------------book-------------------------//
