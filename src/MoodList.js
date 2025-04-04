import React from 'react';

function MoodList({ entries }) {
  if (entries.length === 0) return <p className="text-center text-muted">No moods added yet!</p>;

  return (
    <div className="row">
      {entries.map((entry, index) => (
        <div key={index} className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{entry.mood} - {entry.date}</h5>
              {entry.note && <p className="card-text">{entry.note}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoodList;
