import { useState } from "react"
import { BottomWarning } from "../comp/Bottomwar"
import { Button } from "../comp/Button"
import { Heading } from "../comp/Heading"
import { InputBox } from "../comp/Inputbox"
import { SubHeading } from "../comp/Subheading"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <div className="text-left">
          <InputBox onChange={e => {
            setFirstName(e.target.value);
          }} placeholder="john" label={"First Name"} />
          <InputBox onChange={(e) => {
            setLastName(e.target.value);
          }} placeholder="doe" label={"Last Name"} />
          <InputBox onChange={e => {
            setUsername(e.target.value);
          }} placeholder="johndoe@gmail.com" label={"Email"} />
          <InputBox onChange={(e) => {
            setPassword(e.target.value)
          }} placeholder="123456" label={"Password (min: 6)"} />
        </div>
        <div className="pt-4">
          <Button onClick={async () => {
            try {
              const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                username,
                password,
                firstName,
                lastName
              });
              if (response.status === 200) {
                localStorage.setItem("token", response.data.token);
                toast.success("Successful created a new account");
                navigate("/dashboard");
              }
            }
            catch(error) {
              toast.error("Please enter the correct inputs");
          }
          }} label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}
export default Signup;