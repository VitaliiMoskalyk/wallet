import MainHeader from "../MainHeader/MainHeader";
import MainPanel from "../MainPanel/MainPanel";
import option from "../../data/options.json";
import Counter from "../Counter/Counter";

const MainPage = () => {
  return (
    <>
      <MainHeader />
      <MainPanel title="Расходы" opt={option.costsPanelOptions} />
      <MainPanel title="Доходы" opt={option.incomesPanelOptions} />
      <MainPanel title="Баланс" opt={option.balancePanelOptions} />
      <Counter></Counter>
    </>
  );
};

export default MainPage;
