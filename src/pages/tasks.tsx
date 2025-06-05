import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  console.log(tasks);
  return (
    <div>
      <h1>This is Task Componentt</h1>
    </div>
  );
};

export default Tasks;
