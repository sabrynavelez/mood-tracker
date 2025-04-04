import React, { useState, useEffect } from 'react';
import MoodForm from './MoodForm';
import MoodList from './MoodList';

function App() {
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem('moodEntries');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('moodEntries', JSON.stringify(entries));
  }, [entries]);

  const handleAddEntry = (newEntry) => {
    setEntries([newEntry, ...entries]);
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h1 className="display-5">🌈 Daily Mood Tracker</h1>
        <p className="text-muted">Track how you're feeling every day</p>
      </div>
      <div className="card shadow-sm p-4 mb-4">
        <MoodForm onAdd={handleAddEntry} />
      </div>
      <MoodList entries={entries} />
    </div>
  );
}

export default App;
