import React from "react";
//----data of items----
const item = [
  { id: 1, title: "item 1", desc: " old and replaced", price: 10 },
  { id: 2, title: "item 2", desc: " new and recent", price: 20 },
  { id: 3, title: "item 3", desc: " old and replaced", price: 10 },
  { id: 4, title: "item 4", desc: " new and recent", price: 20 },
  { id: 5, title: "item 5", desc: " old and replaced", price: 10 },
  { id: 6, title: "item 6", desc: " new and recent", price: 20 },
];
//----map of all items----
function Mem() {
  return (
    <div style={{ position: "absolute", left: "40px", top: "100px" }}>
      <h1 style={{ textAlign: "center" }}>ITEMS</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridColumnGap: "20px",
        }}
      >
        {item.map((item, index) => (
          <div key={index}>
            <Item {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

//----item----
const Item = (props) => {
  const { title, desc, price } = props;
  return (
    <article
      style={{
        backgroundColor: "#f2f2f2",
        textAlign: "center",
        padding: "0px 2px",
        width: "500px",
        boxShadow: "4px 8px grey",
        
      }}
    >
      <h1 style={{ padding: "20px" }}>{title} </h1>
      <h3>{desc}</h3>
      <p style={{ padding: "20px" }}>{price}</p>
    </article>
  );
};

export default Mem;
