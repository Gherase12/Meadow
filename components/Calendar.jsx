import React from "react";

import { useRouter } from 'next/navigation';
import { BsChevronLeft } from "react-icons/bs";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { useState } from "react";
import  Image  from "next/image";

function Calendar() {

  const router = useRouter()
  const events = [
    {
      id: 1,
      name: "Meadow",
      img: "meadow",
      startDatetime: "2022-12-30T13:00",
      endDatetime: "2022-05-11T14:30",
    },
    {
      id: 2,
      name: "NanoPay",
      img: "nanopay",
      startDatetime: "2022-12-04T09:00",
      endDatetime: "2022-05-20T11:30",
    },
    {
      id: 3,
      name: "Docker",
      img: "docker",
      startDatetime: "2022-12-11T17:00",
      endDatetime: "2022-05-20T18:30",
    },
    {
      id: 4,
      name: "Boom",
      img: "boom",
      startDatetime: "2022-12-19T13:00",
      endDatetime: "2022-06-09T14:30",
    },
    {
      id: 5,
      name: "Pax",
      img: "pax",
      startDatetime: "2022-12-15T14:00",
      endDatetime: "2022-05-13T14:30",
    },
  ];

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
    <div className='relative pb-[70px] lg:pb-0  z-10'>
      <div className='absolute text-[18px] -top-[46px] left-[-17px] font-bold w-[190px] text-center   lg:hidden items-center justify-center'>
        Launch calendar
      </div>
      <div className='relative  w-full lg:m-0  lg:transform-none lg:w-[381.85px] h-[310.52px] bg-white rounded-[30px] card1 lg:px-[30px] py-[27px] flex flex-col items-center '>
        <div className='flex justify-between items-center mb-[31px] lg:px-[10px] lg:w-full  '>
          <div className='font-avenir w-[190px] font-bold text-[20px]  lg:w-[205px]  text-start hidden lg:flex items-center justify-start leading-[24px]'>
            Launch calendar
          </div>
          <div className='max-[375px]:w-full  w-[307px] lg:w-[101.05px] h-[24px] flex   items-center   justify-between lg:justify-between'>
            <BsChevronLeft
              onClick={() => previousMonth()}
              className=' text-gray-2  font-black text-[20px] lg:text-[15px] cursor-pointer  '
            />
            <div className='hidden lg:flex items-center  justify-center font-avenir  font-bold text-[14px]  leading-[24px] text-black   h-[24px] w-[65px] tracking-[0.01em] text-center '>
              {currentMonth.replace("-", " ")}
            </div>
            <div className='  flex lg:hidden items-center  justify-center  font-bold text-[16px] lg:text-[12px]  leading-[24px] text-black   h-[24px]  tracking-[0.01em] text-center '>
              {format(firstDayCurrentMonth, "MMMM yyyy")}
            </div>

            <BsChevronLeft
              onClick={() => nextMonth()}
              className='text-gray-2 text-[20px] lg:text-[15px] rotate-180  cursor-pointer  '
            />
          </div>
        </div>
        {/* dates */}

        <div className=' mx-auto flex flex-col items-start gap-[3px] w-[307px] h-[212px] max-[375px]:w-full relative     '>
          <div className='flex items-center justify-center space-x-[3px] w-[307] h-[25px] max-[375px]:w-full font-bold   relative z-10 '>
            <div className='week-text'>Su</div>
            <div className='week-text'>Mo</div>
            <div className='week-text'>Tu</div>
            <div className='week-text'>We</div>
            <div className='week-text'>Th</div>
            <div className='week-text'>Fr</div>
            <div className='week-text'>Sa</div>
          </div>
          {/* grid */}
          <div className='relative z-10  grid grid-cols-7 gap-[3px] overflow-y-scroll overflow-x-hidden scrollbar-hide day-text max-[375px]:w-full  w-[307px] justify-items-center '>
            {days.map((day, dayIdx) => (
              <div
                key={day.toString()}
                className={classNames(
                  dayIdx === 0 && colStartClasses[getDay(day)]
                )}
              >
                <div className='relative w-full h-full group  z-40'>
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
                        "border-[1px] border-white-2 text-black ",
                      isEqual(day, selectedDay) && !isToday(day) && "",
                      !isEqual(day, selectedDay) && "",
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        "font-bold ",
                      " flex w-[40px] h-[43px]  items-center justify-center rounded-[11px] text-[14px] leading-[24px] font-extrabold text-black  "
                    )}
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
                    </time>
                  </button>

                  <div className=''>
                    {events.some(({startDatetime, img}) =>
                      isSameDay(parseISO(startDatetime), day)
                    ) && (
                      < >
                        <div className='w-[6px] h-[6px] rounded-full absolute bottom-[4px] left-[50%] translate-x-[-50%] bg-red '></div>
                        
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
