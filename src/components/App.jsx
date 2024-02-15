import { useSelector } from "react-redux";
import css from "./App.module.css";
import LangSwitcher from "./LangSwitcher/LangSwitcher";
import BalanceViewer from "./BalanceViewer/BalanceViewer";

function App() {
  const lang = useSelector((state) => state.locale.lang);
  const balance = useSelector((state) => state.balance.value);

  return (
    <div className={css.app}>
      <LangSwitcher />
      <p>Current language: {lang}</p>
      <hr />
      <BalanceViewer />
      <p>Balance: {balance} credits</p>
    </div>
  );
}

export default App;
