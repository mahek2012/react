import { LockKeyholeIcon, Mail } from "lucide-react";
import { useState } from "react";

const LoginForm = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPasseord] = useState("");

//   data send to Server(backend)
function SubmitForm(){
console.log("Data Send to Backend", Email,Password);
setEmail("");
setPasseord("");
}

  return (
    <>
      <section className="flex justify-center items-center mt-10">
        <form className="max-w-sm h-full shadow-2xl bg-teal-700/40 p-6 rounded-xl" onSubmit={(e)=>{
            e.preventDefault(); // stop to reload form
            SubmitForm();
        }}>
          <h1 className="text-center py-4 text-3xl font-semibold text-teal-500">
            Log In
          </h1>
          {/* Email */}
          <div className="bg-gray-300 rounded-md flex items-center w-full my-2 py-1 px-2">
            <Mail className="w-5 h-5 text-gray-500 mr-1" />
            <input
              className="outline-none "
              type="email"
              placeholder="Email"
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          {/* Password */}
          <div className="bg-gray-300 rounded-md flex items-center w-full my-2 py-1 px-2">
            <LockKeyholeIcon className="w-5 h-5 text-gray-500 mr-1" />
            <input
              className="outline-none"
              type="password"
              placeholder="Password"
              value={Password}
              onChange={(e)=>{
                setPasseord(e.target.value);
              }}
            />
          </div>

          <input
            className="w-full text-center bg-teal-500 text-teal-700 px-4 py-2 rounded-md font-semibold text-xl"
            type="submit"
            value="Login"
          />
        </form>
      </section>
    </>
  );
};

export default LoginForm;
