import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heading } from "../comp/Heading"
import { InputBox } from "../comp/Inputbox"
import { SubHeading } from "../comp/Subheading"
import { Button } from "../comp/Button"
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UpdateDetails = () => {
    const [password, setPassword] = useState("");
    const [firstName, setFname] = useState("");
    const [lastName, setLname] = useState("");
    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Update Details"} />
        <SubHeading label={"Enter your credentials to update your account"} />
        <div className="text-left">
          <InputBox placeholder="123456" label={"Password (Optional)"} onChange={e => {
            setPassword(e.target.value);
          }} />
          <InputBox placeholder="john" label={"First Name (Optional)"} onChange={e => {
            setFname(e.target.value);
          }} />
          <InputBox placeholder="doe" label={"Last Name (Optional)"} onChange={(e) => {
            setLname(e.target.value)
          }}/>
        </div>
        <div className="pt-4">
          <Button onClick={async () => {
            try{
                    const updatePayload = {};
                    if (password) updatePayload.password = password;
                    if (firstName) updatePayload.firstName = firstName;
                    if (lastName) updatePayload.lastName = lastName;

                    const response = await axios.put("https://paytm-clone-backend-ungd.onrender.com/api/v1/user/", updatePayload, {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("token")
                        }
                    });
                if (response.status === 200) {
                    toast.success("Updated the details successfully");
                    navigate("/dashboard");
                }
            }
            catch(error){
                toast.error("Please enter the correct inputs");
            }}} label={"Update Details"} />
        </div>
      </div>
    </div>
  </div>
}
export default UpdateDetails;