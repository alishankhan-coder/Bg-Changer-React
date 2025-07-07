const Buttons = ({ color, setColor }) => {
  return (
    <button
      className="py-2 px-4 text-white shadow-lg rounded-3xl focus:outline-black focus:ring focus:ring-black hover:scale-105 transition-transform duration-200"
      onClick={() => setColor(color)}
      style={{ backgroundColor: color }}
    >
      {color}
    </button>
  );
};
export default Buttons;
