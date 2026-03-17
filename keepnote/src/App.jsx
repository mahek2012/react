import { LayoutList, NotebookPen } from "lucide-react";
import { useState } from "react";

const App = () => {
  const [Heading, setHeading] = useState("");
  const [Notes, setNots] = useState("");
  const [Tasks, setTasks] = useState([]);

  const SubmitForm = () => {
    console.log("New Task Create :", {
      "Task Heading": Heading,
      Notes: Notes,
    });

    let Add = [...Tasks];
    Add.push({
      Title: Heading,
      Task: Notes,
      date: new Date().toLocaleDateString(),
    });
    setTasks(Add);

    console.log("Tasks : ", Tasks);

    setHeading("");
    setNots("");
  };
  return (
    <>
      <section className="flex item-center Justify-center w-full h-screen">
        {/* form for add tasks */}
        <div className="w-1/2 h-screen flex items-center justify-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              SubmitForm();
            }}
          >
            <div className="flex gap-4 items-center my-4">
              <NotebookPen
                strokeWidth={3}
                className="w-32 h-32 text-green-700"
              />
              <h1 className="text-5xl font-bold text-green-950 text-shadow-lg">
                Add Your Task
              </h1>
            </div>

            <input
              type="text"
              className="w-full bg-green-200 rounded-md px-4 py-2 my-2"
              placeholder="Enter your task"
              value={Heading}
              onChange={(e) => {
                if (e.target.value.length > 10) {
                  return alert("You can't put more then 10 characters");
                }
                setHeading(e.target.value);
              }}
            />
            <textarea
              rows={8}
              className="w-full bg-green-200 rounded-md px-4 py-2 my-2"
              placeholder="Enter your description"
              value={Notes}
              onChange={(e) => {
                if (e.target.value.length > 100) {
                  return alert("You can't put more then 100 characters");
                }
                setNots(e.target.value);
              }}
            ></textarea>

            <input
              type="submit"
              value="New Task"
              className="w-full text-center px-4 py-2 rounded-md bg-green-900 text-green-100 active:scale-95 active:bg-green-100 active:text-green-900 transition-all font-semibold"
            />
          </form>
        </div>

        {/* create a div that show ours notes */}
        <div className="w-1/2 h-screen border-l-2 border-black overflow-auto border-dashed p-4 bg-[#fde8da]">
          <div className="flex justify-center items-center gap-4 my-4">
            <LayoutList
              strokeWidth={3}
              className="w-10 h-10 text-[#582f0e] font-bold"
            />
            <h1 className="text-4xl text-[#582f0e]">Your Task</h1>
          </div>

          <div className="flex flex-wrap itmes-center justify-center gap-6 w-full">
            {Tasks.map((data, id) => {
              return (
                <div className="border-2 border-[#582f0e] flex items-center justify-center p-2 rounded-4xl w-full h-72 max-w-72">
                  <div className="bg-[#582f0e] rounded-3xl text-white max-w-68 h-68 p-4">
                    <div className="w-68 h-56">
                      <h1 className="text-4xl font-bold">{id + 1}</h1>
                      <h2 className="text-4xl text-center my-1 font-h2 font-bold">
                        {data.Title}
                      </h2>
                      <p className="text-xl my-1 hyphens-auto">{data.Task}</p>
                    </div>
                    <p className="text-md text-[#faf3ee]/50 text-right flex items-end justify-end">
                      {data.date}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
