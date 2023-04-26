import React, { useState } from "react";
import { Select } from "antd";
import "./index.css";

const { Option } = Select;

const FeeCalculator = (props) => {
  const [selectedFee, setSelectedFee] = useState("");
  const [selectedNationality, setSelectedNationality] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedCourseView, setSelectedCourseView] = useState("");
  const [feeAmount, setFeeAmount] = useState(0);
  const [levelsList, setLevelList] = useState([]);

  const { feeStructure, coursesList } = props;

  const handleFeeChange = (e) => {
    setSelectedFee(e);
    setSelectedNationality("");
    setSelectedCourse("");
    setSelectedLevel("");
    setFeeAmount(0);
  };

  const handleNationalityChange = (e) => {
    setSelectedNationality(e);
    setSelectedCourse("");
    setSelectedLevel("");
    setFeeAmount(0);
  };

  const handleCourseChange = (e) => {
    setSelectedCourse("ALL_COURSES");
    setSelectedCourseView(e);
    let levelListUpdate = Object.keys(
      feeStructure[selectedFee][selectedNationality]["ALL_COURSES"]
    );
    if (levelListUpdate[0] === "ALL_LEVEL") {
      levelListUpdate = ["UG", "PG", "DIPLOMA", "Ph.D"];
    }
    setLevelList(levelListUpdate);
    setSelectedLevel("");
    setFeeAmount(0);
  };

  const handleLevelChange = (e) => {
    if (selectedFee === "Exam Fee") {
      setFeeAmount(
        feeStructure[selectedFee][selectedNationality][selectedCourse][
          "ALL_LEVEL"
        ].amount
      );
    } else {
      setFeeAmount(
        feeStructure[selectedFee][selectedNationality][selectedCourse][e].amount
      );
    }
    setSelectedLevel(e);
  };

  return (
    <div className="form-wrapper">
      <div className="form">
        <p htmlFor="fee">Fee:</p>
        <Select
          name="fee"
          id="fee"
          onChange={handleFeeChange}
          value={selectedFee}
          style={{ width: "100%" }}
        >
          <Option value="">Select a fee</Option>
          {Object.keys(feeStructure).map((fee) => (
            <option key={fee} value={fee}>
              {fee}
            </option>
          ))}
        </Select>
      </div>
      {selectedFee && (
        <>
          <p>Select nationality:</p>
          <Select
            onChange={handleNationalityChange}
            value={selectedNationality}
            style={{ width: "100%" }}
          >
            <Option disabled value="">
              Select nationality
            </Option>
            {Object.keys(feeStructure[selectedFee]).map((nationality) => (
              <Option key={nationality} value={nationality}>
                {nationality}
              </Option>
            ))}
          </Select>

          {selectedNationality && (
            <>
              <p>Select course:</p>
              <Select
                onChange={handleCourseChange}
                value={selectedCourseView}
                style={{ width: "100%" }}
              >
                <Option disabled value="">
                  Select course
                </Option>
                {coursesList.ALL_COURSES.map((course) => (
                  <Option key={course} value={course}>
                    {course}
                  </Option>
                ))}
              </Select>

              {selectedCourse && (
                <>
                  <p>Select level:</p>
                  <Select
                    onChange={handleLevelChange}
                    value={selectedLevel}
                    style={{ width: "100%" }}
                  >
                    <Option disabled value="">
                      Select level
                    </Option>
                    {levelsList.map((level) => (
                      <Option key={level} value={level}>
                        {level}
                      </Option>
                    ))}
                  </Select>

                  {selectedLevel && (
                    <h2 className="fee-amt">Fee amount: {feeAmount}</h2>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default FeeCalculator;
