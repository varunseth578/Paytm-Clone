import { Appbar } from "../comp/Appbar";
import { Balance } from "../comp/Balance";
import { Users } from "../comp/Users";

export const Dashboard = () => {
  return (
    <div>
      <Appbar />
      <div className="m-8">
        <Balance value={"1000"} />
        <Users />
      </div>
    </div>
  );
};

