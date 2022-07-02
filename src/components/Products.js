import React from "react";
import img1 from "../img/team1.jpg";
const products = [
  {
    id: 1,
    title: "Product 1",
    desc: "Product 1",
    price: 10,
    img: require("../img/burger.png"),
  },
  {
    id: 2,
    title: "Cola",
    desc: "cold Cola",
    price: 20,
    img: require("../img/Coke.png"),
  },
  {
    id: 3,
    title: "mushroom",
    desc: " spicy mushroom with salad",
    price: 30,
    img: require("../img/Mushroom.png"),
  },
  {
    id: 4,
    title: "Product 4",
    desc: "Product 4",
    price: 40,
    img: require("../img/Cheddar-Cheese-Fries-190x190.png"),
  },
  {
    id: 5,
    title: "Product 5",
    desc: "Product 1",
    price: 10,
    img: require("../img/Chicken-Salad.png"),
  },
  {
    id: 6,
    title: "Product 6",
    desc: "Product 2",
    price: 20,
    img: require("../img/Grand-Share.png"),
  },
  {
    id: 7,
    title: "Product 7",
    desc: "Product 3",
    price: 30,
    img: require("../img/McNuggets-9psc.png"),
  },
  {
    id: 8,
    title: "Product 8",
    desc: "Product 4",
    price: 40,
    img: require("../img/M2M-190x190.png"),
  },
  {
    id: 9,
    title: "Product 9",
    desc: "Product 9",
    price: 50,
    img: require("../img/Cheddar-Cheese-Fries-190x190.png"),
  },
];
const handlerClick = (x, y) => {
  alert("price of  : " + x + " is : $" + (y - 1));
};
const Products = () => {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: "10px",
          textAlign: "center",
          position: "relative",
          left: "10%",
          top: "100px",
          width: "80%",
        }}
      >
        {products.map((x, index) => (
          <div key={index}>
            <Product {...x} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
const Product = ({ id, title, desc, price, img }) => {
  return (
    <section style={{ backgroundColor: "#f2f2f2", padding: "2px" }}>
      <img
        src={img}
        alt='ss'
        width='20%'
        height='20%'
        style={{ marginTop: "20px" }}
      />
      <h1>{title}</h1>

      <p> price :${price}</p>
      <button
        style={{ marginBottom: "20px", padding: "10px" }}
        type='button'
        onClick={() => handlerClick(title, price)}
      >
        special price
      </button>
    </section>
  );
};
