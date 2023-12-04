import React from "react";
import Note from "@/Image/Note.png";
import Mountain from "@/Image/Mountain.png";
function Cards() {
  const cards = [
    {
      image: Mountain.src,
      category: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image: Note.src,
      category: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image: Note.src,
      category: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
  ];
  return (
    <div className="flex justify-center items-center gap-4">
      {cards.map((card, index) => (
        <div key={index} className="relative w-[18rem] h-[20rem]">
          <img src={card.image} alt="" />
          <div className="absolute bottom-0 p-4 text-white ">
            <button className="bg-blue-600 h-7 rounded-lg w-24 ">
              {card.category}
            </button>
            <p className="text-lg">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Cards;
