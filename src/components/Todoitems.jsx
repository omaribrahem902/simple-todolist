import tick from "../checked.png";
import not_tick from "../unchecked.png";
function Todoitems({ text, id, isComplete, deleteTask, toggle }) {
  return (
    <>
      <div className="flex items-center my-3 gap-2">
        <div
          onClick={() => {
            toggle(id);
          }}
          className="flex flex-1 items-center cursor-pointer"
        >
          <img src={isComplete ? tick : not_tick} alt="" className="w-7" />
          <p
            className={`text-slate-700 ml-4 text-[17-px] decoration-slate-500 ${
              isComplete ? "line-through " : ""
            }`}
          >
            {text}
          </p>
        </div>

        <button
          onClick={() => deleteTask(id)}
          style={{ fontSize: "10px", fontWeight: "bold" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              border: "3px solid black",
            }}
          >
            X
          </div>
        </button>
      </div>
    </>
  );
}
export default Todoitems;
