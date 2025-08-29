import React, { useState, useEffect } from 'react';

function Assessment() {
  // 1️⃣ Initialize state from localStorage for persistence
  const [scores, setScores] = useState(() => {
    return JSON.parse(localStorage.getItem('iqScores')) || [];
  });
  const [months, setMonths] = useState(() => {
    return JSON.parse(localStorage.getItem('iqMonths')) || [];
  });
  const [scoreInput, setScoreInput] = useState('');

  // 2️⃣ Save scores whenever they change
  useEffect(() => {
    localStorage.setItem('iqScores', JSON.stringify(scores));
    localStorage.setItem('iqMonths', JSON.stringify(months));
  }, [scores, months]);

  // 3️⃣ Handle score submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const score = Number(scoreInput);
    if (scoreInput === '' || isNaN(score)) return;

    const currentMonth = new Date().toLocaleString('default', { month: 'short' });

    setScores([...scores, score]);
    setMonths([...months, currentMonth]);
    setScoreInput('');
  };

  // 4️⃣ Chart data
  const data = {
    labels: months,
    datasets: [
      {
        label: 'IQ Score Progress',
        data: scores,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.3)',
        tension: 0.3,
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)'
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Monthly IQ Test Progress' }
    }
  };

  return (
    <div className='flex flex-col items-center my-10 p-5 max-w-3xl mx-auto'>
      {/* Header */}
      <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold p-3 m-5 hover:bg-gray-50 cursor-pointer'>
          Take Your Assessment
        </h1>
        <p>Track your IQ growth and get personalized career insights</p>
        <p className='mt-5'>
          <button
            className='bg-blue-200 p-2 mt-5 rounded-full w-[40%] border hover:bg-blue-400 hover:scale-105 text-xl font-semibold my-soul-regular'
            onClick={() => window.open('https://www.123test.com/', '_blank')}
          >
            Take Test
          </button>
        </p>
      </div>

      {/* IQ Score Input */}
      {/* <form onSubmit={handleSubmit} className='flex gap-3 mb-6 w-full justify-center'>
        <input
          type='number'
          value={scoreInput}
          onChange={(e) => setScoreInput(e.target.value)}
          placeholder='Enter IQ Score'
          className='border p-2 rounded w-1/3'
        />
        <button
          type='submit'
          className='bg-green-500 text-white px-4 rounded hover:bg-green-600'
        >
          Add Score
        </button>
      </form> */}

      {/* Progress Chart */}
      {/* {scores.length > 0 ? (
        <Line data={data} options={options} className='w-full' />
      ) : (
        <p className='text-gray-500'>No scores yet. Enter your first score!</p>
      )} */}
    </div>
  );
}

export default Assessment;
