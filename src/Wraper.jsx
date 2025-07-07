import Buttons from "./Buttons";
const Wraper = ({ colors, setColor }) => {
  return (
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl bg-white">
        {colors.map((color) => (
          <Buttons key={color} color={color} setColor={setColor} />
        ))}
      </div>
    </div>
  );
};
export default Wraper;
