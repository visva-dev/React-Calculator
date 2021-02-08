import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const firstGroup = ['AC', '+/-', '%', '/'];
  const secondGroup = ['7', '8', '9', 'X'];
  const thirdGroup = ['4', '5', '6', '-'];
  const fourthGroup = ['1', '2', '3', '+'];
  const fifthGroup = ['0', '.', '='];

  return (
    <>
      <div className="group1">
        {firstGroup.map(element => (
          <Button name={element} key={firstGroup.indexOf(element)} />
        ))}
      </div>
      <div className="group1">
        {secondGroup.map(element => (
          <Button name={element} key={secondGroup.indexOf(element)} />
        ))}
      </div>
      <div className="group1">
        {thirdGroup.map(element => (
          <Button name={element} key={thirdGroup.indexOf(element)} />
        ))}
      </div>
      <div className="group1">
        {fourthGroup.map(element => (
          <Button name={element} key={fourthGroup.indexOf(element)} />
        ))}
      </div>
      <div className="group1">
        {fifthGroup.map(element => (
          <Button name={element} key={fifthGroup.indexOf(element)} />
        ))}
      </div>
    </>
  );
};

export default ButtonPanel;
