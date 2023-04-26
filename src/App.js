import { feeStructure, coursesList } from "./jsonData/feeData";
import FeeCalculator from "./FeesCalculator";

function App() {
  return (
    <div>
      <h1 class="header"> Fees Calculator </h1>
      <div class="container">
        <div className="container-form">
          <FeeCalculator 
            feeStructure={feeStructure}
            coursesList={coursesList}
          />
        </div>
      </div>
      <div className="footer">
        Fees Calculator ©2023 Created by Apoorv Tiwari
      </div>
    </div>
  );
}

export default App;
