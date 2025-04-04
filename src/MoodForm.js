import React, { useState } from 'react';

function MoodForm({ onAdd }) {
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mood) return;
    onAdd({ mood, note, date: new Date().toLocaleDateString() });
    setMood('');
    setNote('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Mood</label>
        <select className="form-select" value={mood} onChange={(e) => setMood(e.target.value)}>
          <option value="">Choose your mood</option>
          <option value="😊">😊 Happy</option>
          <option value="😢">😢 Sad</option>
          <option value="😠">😠 Angry</option>
          <option value="😴">😴 Tired</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Note</label>
        <input
          type="text"
          className="form-control"
          placeholder="Write a quick note (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <button className="btn btn-primary w-100">Add Mood</button>
    </form>
  );
}

export default MoodForm;
