import React, { useState } from 'react';
import arrowIcon from '../assets/icon-arrow.svg';
const AgeForm = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState({});
  const [age, setAge] = useState({ years: '--', months: '--', days: '--' });

  const isValidDate = (day, month, year) => {
    const date = new Date(year, month - 1, day); // JavaScript months are 0-based
    return (
      date.getDate() === parseInt(day, 10) &&
      date.getMonth() === month - 1 &&
      date.getFullYear() === parseInt(year, 10)
    );
  };

  const calculateAge = (day, month, year) => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    setAge({
      years: ageYears,
      months: ageMonths,
      days: ageDays,
    });
  };

  const validate = () => {
    const error = {};
    const currentYear = new Date().getFullYear();

    const dayNumber = parseInt(day, 10);
    const monthNumber = parseInt(month, 10);
    const yearNumber = parseInt(year, 10);

    if (day === '') {
      error.day = 'This field is required';
    } else if (dayNumber > 31 || dayNumber < 1) {
      error.day = 'Must be a valid day';
    }

    if (month === '') {
      error.month = 'This field is required';
    } else if (monthNumber > 12 || monthNumber < 1) {
      error.month = 'Must be a valid month';
    }

    if (year === '') {
      error.year = 'This field is required';
    } else if (yearNumber > currentYear) {
      error.year = 'Must be a valid year';
    }

    if (!error.day && !error.month && !error.year) {
      if (!isValidDate(dayNumber, monthNumber, yearNumber)) {
        error.general = 'Must be a valid date';
      }
    }

    return error;
  };

  const handleClick = () => {
    const error = validate();
    setError(error);

    if (Object.keys(error).length === 0) {
      calculateAge(day, month, year);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-offWhite font-poppins p-4">
        <div className="bg-white rounded-xl sm:rounded-br-[150px] rounded-br-[100px] sm:p-8 w-full max-w-lg">
          <div className="flex flex-row m-2 tracking-wider">
            <label
              htmlFor=""
              className="m-2 p-2 flex flex-col w-1/4 max-w-32 text-smokeyGrey font-[700px]"
            >
              DAY
              <input
                type="text"
                className="border border-smokeyGrey rounded-md p-2 font-bold text-lg  md:text-[32px] mt-2 mb-2"
                placeholder="DD"
                onChange={(e) => setDay(e.target.value)}
              />
              {error.day && (
                <span className="text-red-500 text-sm">{error.day}</span>
              )}
            </label>
            <label
              htmlFor=""
              className="m-2 p-2 flex flex-col max-w-32 w-1/4 text-smokeyGrey font-[700px]"
            >
              MONTH
              <input
                type="text"
                className="border border-smokeyGrey rounded-md p-2 font-bold text-lg  md:text-[32px] mt-2 mb-2"
                placeholder="MM"
                onChange={(e) => setMonth(e.target.value)}
              />
              {error.month && (
                <span className="text-red-500 text-sm">{error.month}</span>
              )}
            </label>
            <label
              htmlFor=""
              className="m-2 p-2 flex flex-col max-w-32 w-1/4 text-smokeyGrey font-[700px]"
            >
              YEAR
              <input
                type="text"
                className="border border-smokeyGrey rounded-md p-2 font-bold text-lg  md:text-[32px] mt-2 mb-2"
                placeholder="YYYY"
                onChange={(e) => setYear(e.target.value)}
              />
              {error.year && (
                <span className="text-red-500 text-sm">{error.year}</span>
              )}
            </label>
          </div>
          {error.general && (
            <span className="text-red-500">{error.general}</span>
          )}
          <div className="relative mt-10 mb-10">
            <hr className="w-full " />
            <img
              src={arrowIcon}
              alt="arrow"
              className="bg-purple rounded-full p-2 absolute bottom-[-30px] sm:right-0 right-1/2 cursor-pointer"
              onClick={handleClick}
            />
          </div>
          <div className="p-2 text-5xl md:text-7xl italic font-extrabold text-left mb-8">
            <div>
              <span className="text-purple">{age.years}</span> years
            </div>
            <div>
              <span className="text-purple">{age.months}</span> months
            </div>
            <div>
              <span className="text-purple">{age.days}</span> days
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgeForm;
