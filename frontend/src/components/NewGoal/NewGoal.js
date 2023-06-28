import React, { useCallback } from 'react';
import './NewGoal.css';

const NewGoal = ({ onAddGoal }) => {
  const handleSumbit = useCallback((e) => {
    e.preventDefault();
    const newGoal = {
      id: Math.random().toString(),
      text: 'My new goal!',
    };
    onAddGoal(newGoal);
  }, []);

  return (
    <form className="new-goal" onSubmit={handleSumbit}>
      <input type="text" />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
