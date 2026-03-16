import { NotebookPen } from "lucide-react";
import { useState } from "react";
import { LayoutList } from "lucide-react";

const Note = () => {
  const [Heading, setHeading] = useState("");
  const [Notes, setNotes] = useState("");
  const [Tasks, setTasks] = useState([]);

  function SubmitForm() {
    console.log("New Task Created:", {
      "Task Heading": Heading,
      Notes: Notes,
    });

    let Add = [...Tasks];
    Add.push({ Titel: Heading, Task: Notes });
    setTasks(Add);
    console.log("Tasks", Tasks);

    setHeading("");
    setNotes("");
    // console.log(Tasks);
  }

  return (
    <section className="flex item-center justify-center w-full h-screen ">
      {/* form for add tasks */}
      <div className="w-1/2 h-screen flex items-center justify-center ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            SubmitForm();
          }}
        >
          <div className="flex gap-4 items-center my-4">
            <NotebookPen strokeWidth={3} className="w-32 h-32 text-green-900" />
            <h1 className="text-4xl font-bold text-green-950 text-shadow-lg">
              Add Your Task
            </h1>
          </div>
          <input
            type="text"
            className="w-full bg-green-200 rounded-md px-4 py-2 my-2 font-semibold"
            placeholder="Task Heading"
            value={Heading}
            onChange={(e) => {
              setHeading(e.target.value);
            }}
          />
          <textarea
            rows={8}
            className="w-full bg-green-200 rounded-md px-4 py-2 my-2"
            placeholder="Add Your Task........"
            value={Notes}
            onChange={(e) => {
              setNotes(e.target.value);
            }}
          ></textarea>
          <input
            type="submit"
            value="New Task"
            className="w-full text-center px-4 py-2 rounded-md bg-green-900 text-green-100 active:scale-95 active:bg-green-100 active:tex-gree-900 transition-all font-semibold"
          />
        </form>
      </div>

      {/* create a div that show ours notes */}
      <div className="w-1/2 h-screen border-l-2 border-black border-dashed p-4">
        <div className="flex justify-center items-center gap-4 my-4">
            <LayoutList strokeWidth={3} className="w-10 h-10 text-[#582f0e] font-bold"/>
            <h1 className="text-4xl text-[#582f0e]">Your Task</h1>
        </div>
        <div className="border-2 border-[#582f0e] flex items-center justify-center p-2 rounded-4xl w-full h-52 max-w-52">
          <div className="w-full  max-w-48 h-48 bg-[#582f0e] rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Note;
