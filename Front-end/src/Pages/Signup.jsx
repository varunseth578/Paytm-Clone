import { useState } from "react"
import axios from "axios";
import { BottomWarning } from "../comp/Bottomwar"
import { Button } from "../comp/Button"
import { Heading } from "../comp/Heading"
import { InputBox } from "../comp/Inputbox"
import { Subheading } from "../comp/Subheading"
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const  [email, setEmail]  = useState("");
  const [ password, setPassword]  = useState("");
  const navigate = useNavigate();

  return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <Subheading label={"Enter your information to create an account"} />
        <InputBox onChange={(e) => {
          setFirstName(e.target.value);
        }} placeholder="John" label={"First Name"} />
        <InputBox onChange={(e) => {
          setLastName(e.target.value);
        }} placeholder="Doe" label={"Last Name"} />
        <InputBox onChange={(e) => {
          setEmail(e.target.value);
        }} placeholder="abc@gmail.com" label={"Email"} />
        <InputBox onChange={(e) => {
          setPassword(e.target.value);
        }} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={async ()=>{
            const response = await axios.post("http://localhost:4000/api/v1/user/signup",{
              email,
              firstName,
              lastName,
              password
            });
            localStorage.setItem("token", response.data.token)
            localStorage.delete("token");
            navigate("/dashboard")
          }} label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}