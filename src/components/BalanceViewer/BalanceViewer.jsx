import { useDispatch } from "react-redux";
import { deposit } from "../../redux/balance/actions";
import { withdraw } from "../../redux/balance/actions";

export default function BalanceViewer() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(deposit(10))}>Deposit 10 credits</button>
      <button onClick={() => dispatch(withdraw(10))}>
        Withdraw 10 credits
      </button>
    </>
  );
}
