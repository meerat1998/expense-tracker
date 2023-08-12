import "./ExpenseForm.css";
const ExpenseForm = () => {
  return <div>
    <form>
     <div className="new-expense__controls"></div>
     <div className="new-expense__control">
        <label>title</label>
        <input type="text" />
     </div>
     <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" min="0.01" />
     </div>
     <div className="new-expense__control">
        <label>title</label>
        <input type="text" />
     </div>
    </form>
    </div>
};
export default ExpenseForm;
