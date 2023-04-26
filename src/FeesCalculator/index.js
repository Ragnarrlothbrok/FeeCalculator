import React, { useState } from "react";
import { Select, Row, Col, Card, Divider } from "antd";
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
    setSelectedFee(e.target.value);
    console.log("What Na",feeStructure[e.target.value],  feeStructure);
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
    // if(coursesList["ALL_COURSES"].includes(e)){
        setSelectedCourse("ALL_COURSES");
        setSelectedCourseView(e);
        const levelListUpdate = Object.keys(feeStructure[selectedFee][selectedNationality]["ALL_COURSES"]);
        if( levelListUpdate == ["ALL_LEVEL"]) {
            levelListUpdate = ["UG", "PG", "DIPLOMA"];
        }
        setLevelList(levelListUpdate);
    // }
    // else {
    //     setSelectedCourse(e);
    //     setSelectedCourseView(e);
    // }
    setSelectedLevel("");
    setFeeAmount(0);
  };

  const handleLevelChange = (e) => {
    if (selectedFee == "Exam Fee") {
        setFeeAmount(
            feeStructure[selectedFee][selectedNationality][selectedCourse]["ALL_LEVEL"].amount
        );
    } else {
        setFeeAmount(
            feeStructure[selectedFee][selectedNationality][selectedCourse][
              e
            ].amount
          );
    }
    setSelectedLevel(e);
  };

  return (
    <div>
      <h2>Fee Calculator</h2>
      <div>
        <label htmlFor="fee">Fee:</label>
        <select
          name="fee"
          id="fee"
          onChange={handleFeeChange}
          value={selectedFee}
        >
          <option value="">Select a fee</option>
          {Object.keys(feeStructure).map((fee) => (
            <option key={fee} value={fee}>
              {fee}
            </option>
          ))}
        </select>
      </div>
      {selectedFee && (
        <>
          <p>Select nationality:</p>
          <Select
            onChange={handleNationalityChange}
            value={selectedNationality}
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
              <Select onChange={handleCourseChange} value={selectedCourseView}>
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
                  <Select onChange={handleLevelChange} value={selectedLevel}>
                    <Option disabled value="">
                      Select level
                    </Option>
                    {levelsList.map((level) => (
                      <Option key={level} value={level}>
                        {level}
                      </Option>
                    ))}
                    {/* {Object.keys(
                      feeStructure[selectedFee][selectedNationality][
                        selectedCourse
                      ]
                    ).map((level) => {
                      if (level === "ALL_LEVEL") return null;
                      if (!levelsList.includes(level)) return null;
                      return (
                        <Option key={level} value={level}>
                          {level}
                        </Option>
                      );
                    })} */}
                  </Select>

                  {selectedLevel && (
                    <p>
                      Fee amount:{" "}
                      {/* {
                        feeStructure[selectedFee][selectedNationality][
                          selectedCourse
                        ][selectedLevel].amount
                      } */}
                      {feeAmount}
                    </p>
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
