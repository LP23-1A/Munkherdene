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
    {
      image: Note.src,
      category: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
  ];
  return (
    <div className="flex justify-center items-center gap-4">
      {cards.map((card, index) => (
        <div key={index} className="relative w-[15rem] h-[20rem]">
          <img src={card.image} alt="" />
          <div className="absolute bottom-[55px] p-4 text-white  flex flex-col gap-2">
            <button className="bg-blue-600 h-7 rounded-lg w-24 ">
              {card.category}
            </button>
            <p className="text-sm">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Cards;
