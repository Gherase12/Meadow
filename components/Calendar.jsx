import React from "react";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
} from "date-fns";
import { useState } from "react";

function Calendar() {
  let colStartClasses = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
  ];

  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className='relative pb-[70px] lg:pb-0'>
      <h2 className='absolute -top-[46px] left-[-3px] w-[190px] text-center   lg:hidden items-center justify-center'>
        Launch calendar
      </h2>
      <div className='relative w-full lg:m-0  lg:transform-none lg:w-[381.85px] h-[310.52px] bg-white rounded-[30px] card1 lg:px-[30px] py-[27px] flex flex-col items-center '>
        <div className='flex justify-between items-center mb-[31px] lg:px-[10px] lg:w-full  '>
          <div className='font-avenir w-[190px] font-black lg:w-[155px]  text-center hidden lg:flex items-center justify-center leading-[24px]'>
            Launch calendar
          </div>
          <div className=' w-[307px] lg:w-[101.05px] h-[24px] flex   items-center justify-between lg:justify-between'>
            <MdKeyboardArrowLeft
              onClick={() => previousMonth()}
              className=' text-gray-2 text-[40px] lg:text-[20px]  '
            />
            <p className='hidden lg:flex items-center  justify-center  font-medium text-[16px] lg:text-[12px]  leading-[24px] text-black   h-[24px] lg:w-[65px] tracking-[0.01em] text-center '>
              {currentMonth.replace("-", " ")}
            </p>
            <div className='  flex lg:hidden items-center  justify-center  font-medium text-[16px] lg:text-[12px]  leading-[24px] text-black   h-[24px] lg:w-[65px] tracking-[0.01em] text-center '>
              {format(firstDayCurrentMonth, "MMMM yyyy")}
            </div>

            <MdKeyboardArrowRight
              onClick={() => nextMonth()}
              className='text-gray-2 text-[40px] lg:text-[20px]  '
            />
          </div>
        </div>
        {/* dates */}

        <div className=' mx-auto flex flex-col items-start gap-[3px] w-[307px] h-[212px]  '>
          <div className='flex items-center justify-center space-x-[3px] w-[307] h-[25px]'>
            <div className='week-text'>Su</div>
            <div className='week-text'>Mo</div>
            <div className='week-text'>Tu</div>
            <div className='week-text'>We</div>
            <div className='week-text'>Th</div>
            <div className='week-text'>Fr</div>
            <div className='week-text'>Sa</div>
          </div>
          {/* grid */}
          <div className='grid grid-cols-7 gap-[3px] overflow-y-scroll overflow-x-hidden scrollbar-hide day-text  w-[307px] justify-items-center '>
            {days.map((day, dayIdx) => (
              <div
                key={day.toString()}
                className={classNames(
                  dayIdx === 0 && colStartClasses[getDay(day)]
                )}
              >
                <button
                  type='button'
                  onClick={() => setSelectedDay(day)}
                  className={classNames(
                    isEqual(day, selectedDay) &&
                      "text-black border-[1px] border-white-2",
                    !isEqual(day, selectedDay) &&
                      isToday(day) &&
                      "text-black border-[1px] border-white-2 ",
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      isSameMonth(day, firstDayCurrentMonth) &&
                      " text-black ",
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      !isSameMonth(day, firstDayCurrentMonth) &&
                      "text-gray-400",
                    isEqual(day, selectedDay) &&
                      isToday(day) &&
                      "border-[1px] border-white-2 text-black bg-blue-1",
                    isEqual(day, selectedDay) && !isToday(day) && "bg-gray-2",
                    !isEqual(day, selectedDay) && "hover:bg-gray-1",
                    (isEqual(day, selectedDay) || isToday(day)) &&
                      "font-semibold",
                    " flex w-[40px] h-[43px]  items-center justify-center rounded-[11px] text-[14px] leading-[24px] font-black text-black  "
                  )}
                >
                  <time dateTime={format(day, "yyyy-MM-dd")}>
                    {format(day, "d")}
                  </time>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
