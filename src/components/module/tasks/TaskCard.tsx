import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import type { ITask } from "@/types/types";
import { MdDelete } from "react-icons/md";
interface Itaskprops {
  task: ITask;
}

const TaskCard = ({ task }: Itaskprops) => {
  return (
    <div>
      <div className="border px-5 py-3 rounded-md">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div
              className={cn("size-3 rounded-full ", {
                "bg-green-500": task.priority === "Low",
                "bg-yellow-500": task.priority === "Medium",
                "bg-orange-500": task.priority === "High",
              })}
            ></div>
            <h1>{task.title}</h1>
          </div>
          <div className="flex gap-3 items-center">
            <Button variant="link" className="p-0 text-red-500">
              <MdDelete />
            </Button>
            <Checkbox />
          </div>
        </div>
        <p className="mt-5">{task.description}</p>
      </div>
    </div>
  );
};

export default TaskCard;
