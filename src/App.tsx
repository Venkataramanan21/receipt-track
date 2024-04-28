import './App.css';
import GroupSplitTable from './Components/GroupSplitTable/GroupSplitTable';
// import SplitForm from './Components/SplitForm/SplitForm';

function App() {
  return (
    <>
      {/* <SplitForm /> */}
      <GroupSplitTable />
      <p className="read-the-docs">
        Note: Pay the Grand Total to Venkat if the Grand total is in red. If it
        is in Green ask him for money. No need to ask any Paid By Candidate as
        he will be the pivot of the transaction.
      </p>
    </>
  );
}

export default App;
