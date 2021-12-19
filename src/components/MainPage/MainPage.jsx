import MainHeader from "../MainHeader/MainHeader";
import MainPanel from "../MainPanel/MainPanel";
import option from "../../data/options.json";
import Counter from "../Counter/Counter";
import Toggle from "../Toggle/Toggle";
import TodoList from "../TodoList";

const MainPage = () => {
  return (
    <>
      {/* <MainHeader />
      <MainPanel title="Расходы" opt={option.costsPanelOptions} />
      <MainPanel title="Доходы" opt={option.incomesPanelOptions} />
      <MainPanel title="Баланс" opt={option.balancePanelOptions} /> */}
      <Counter />
      <Toggle />
      <TodoList />
    </>
  );
};

export default MainPage;
