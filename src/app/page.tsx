'use client';

import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

export default function Home(): React.JSX.Element {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [currentHours, setCurrentHours] = useState<number>(0);
  const [currentMinutes, setCurrentMinutes] = useState<number>(0);
  const [currentSeconds, setCurrentSeconds] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      setCurrentTime(now);
      setCurrentHours(hours);
      setCurrentMinutes(minutes);
      setCurrentSeconds(seconds);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [currentTime]);

  const hoursEiner = currentHours % 10;
  const hoursZehner = Math.floor(currentHours / 10);

  const minutesEiner = currentMinutes % 10;
  const minutesZehner = Math.floor(currentMinutes / 10);

  const secondsEiner = currentSeconds % 10;
  const secondsZehner = Math.floor(currentSeconds / 10);

  return (
    <main>
      <Board>
        <UnitContainer>
          {/* hoursZehner */}
          <div>
            <Cell />
            <Cell />
            <Cell $isActive={hoursZehner === 2} />
            <Cell $isActive={hoursZehner === 1} />
          </div>

          {/* hoursEiner */}
          <div>
            <Cell $isActive={hoursEiner === 9 || hoursEiner === 8} />
            <Cell
              $isActive={
                hoursEiner === 7 ||
                hoursEiner === 6 ||
                hoursEiner === 5 ||
                hoursEiner === 4
              }
            />
            <Cell
              $isActive={
                hoursEiner === 7 ||
                hoursEiner === 6 ||
                hoursEiner === 3 ||
                hoursEiner === 2
              }
            />
            <Cell
              $isActive={
                hoursEiner === 9 ||
                hoursEiner === 7 ||
                hoursEiner === 5 ||
                hoursEiner === 3 ||
                hoursEiner === 1
              }
            />
          </div>
        </UnitContainer>

        <UnitContainer>
          {/* minutesZehner */}
          <div>
            <Cell />
            <Cell $isActive={minutesZehner === 5 || minutesZehner === 4} />
            <Cell $isActive={minutesZehner === 3 || minutesZehner === 2} />
            <Cell
              $isActive={
                minutesZehner === 5 ||
                minutesZehner === 3 ||
                minutesZehner === 1
              }
            />
          </div>

          {/* minutesEiner */}
          <div>
            <Cell $isActive={minutesEiner === 9 || minutesEiner === 8} />
            <Cell
              $isActive={
                minutesEiner === 7 ||
                minutesEiner === 6 ||
                minutesEiner === 5 ||
                minutesEiner === 4
              }
            />
            <Cell
              $isActive={
                minutesEiner === 7 ||
                minutesEiner === 6 ||
                minutesEiner === 3 ||
                minutesEiner === 2
              }
            />
            <Cell
              $isActive={
                minutesEiner === 9 ||
                minutesEiner === 7 ||
                minutesEiner === 5 ||
                minutesEiner === 3 ||
                minutesEiner === 1
              }
            />
          </div>
        </UnitContainer>

        <UnitContainer>
          {/* secondsZehner */}
          <div>
            <Cell />
            <Cell $isActive={secondsZehner === 5 || secondsZehner === 4} />
            <Cell $isActive={secondsZehner === 3 || secondsZehner === 2} />
            <Cell
              $isActive={
                secondsZehner === 5 ||
                secondsZehner === 3 ||
                secondsZehner === 1
              }
            />
          </div>

          {/* secondsEiner */}
          <div>
            <Cell $isActive={secondsEiner === 9 || secondsEiner === 8} />
            <Cell
              $isActive={
                secondsEiner === 7 ||
                secondsEiner === 6 ||
                secondsEiner === 5 ||
                secondsEiner === 4
              }
            />
            <Cell
              $isActive={
                secondsEiner === 7 ||
                secondsEiner === 6 ||
                secondsEiner === 3 ||
                secondsEiner === 2
              }
            />
            <Cell
              $isActive={
                secondsEiner === 9 ||
                secondsEiner === 7 ||
                secondsEiner === 5 ||
                secondsEiner === 3 ||
                secondsEiner === 1
              }
            />
          </div>
        </UnitContainer>
      </Board>
    </main>
  );
}

const Board = styled.div`
  height: calc(100vh + 10px);
  display: flex;
`;

const UnitContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex: 0 0 calc(100% / 3);

  div {
    display: flex;
    flex-direction: column;
    height: calc(100vh + 10px);
  }
`;

const Cell = styled.div<{ $isActive?: boolean }>`
  background-color: ${(p) => (p.$isActive ? '#fff' : '#212121')};
  border: 5px solid #000;
`;
