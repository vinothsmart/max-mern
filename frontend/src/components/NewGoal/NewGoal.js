import React, { useCallback, useState } from 'react';
import './NewGoal.css';

const NewGoal = ({ onAddGoal }) => {
  const [enteredText, setEnteredText] = useState('');

  const handleSumbit = useCallback(
    (e) => {
      e.preventDefault();
      const newGoal = {
        id: Math.random().toString(),
        text: enteredText,
      };
      onAddGoal(newGoal);
      setEnteredText('');
    },
    [onAddGoal, enteredText]
  );

  const handleChange = useCallback((e) => {
    setEnteredText(e.target.value);
  }, []);

  return (
    <form className="new-goal" onSubmit={handleSumbit}>
      <input type="text" onChange={handleChange} value={enteredText} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
