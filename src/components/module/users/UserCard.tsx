import { Button } from "@/components/ui/button";

import { deletUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import type { IUser } from "@/types/types";

import { MdDelete } from "react-icons/md";
interface IUserr {
  user: IUser;
}

const UserCard = ({ user }: IUserr) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="border px-5 py-3 rounded-md">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center"></div>
          <div className="flex gap-3 items-center">
            <Button
              onClick={() => dispatch(deletUser(user.id))}
              variant="link"
              className="p-0 text-red-500"
            >
              <MdDelete />
            </Button>
          </div>
        </div>
        <p className="mt-5">{user.name}</p>
      </div>
    </div>
  );
};

export default UserCard;
