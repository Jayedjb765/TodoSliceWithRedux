import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  deleteTask,
  toggleCompleteState,
} from "@/redux/features/task/taskSlice";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import type { ITask } from "@/types/types";
import { MdDelete } from "react-icons/md";
interface Itaskprops {
  task: ITask;
}

const TaskCard = ({ task }: Itaskprops) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const assignUser = users.find((user) => user.id === task.assignTo);
  return (
    <div>
      <div className="border px-5 py-3 rounded-md">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div
              className={cn("size-3 rounded-full ", {
                "bg-green-500": task.priority === "low",
                "bg-yellow-500": task.priority === "medium",
                "bg-orange-500": task.priority === "high",
              })}
            ></div>
            <h1 className={cn({ "line-through": task.isCompleted })}>
              {task.title}
            </h1>
          </div>
          <div className="flex gap-3 items-center">
            <Button
              onClick={() => dispatch(deleteTask(task.id))}
              variant="link"
              className="p-0 text-red-500"
            >
              <MdDelete />
            </Button>
            <Checkbox
              checked={task.isCompleted}
              onClick={() => dispatch(toggleCompleteState(task.id))}
            />
          </div>
        </div>
        <h2 className="mt-5">
          Assign User - {assignUser ? assignUser.name : "No one"}
        </h2>
        <p className="mt-5">{task.description}</p>
      </div>
    </div>
  );
};

export default TaskCard;
