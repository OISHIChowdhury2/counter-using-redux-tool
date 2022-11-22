import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, reset } from '../components/counterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  const [incrementAmount, setIncrementByAmount] = useState(0)

  const addValue = Number(incrementAmount) || 0

  const resetAll = () => {
    setIncrementByAmount(0)
    dispatch(reset())
  }

  return (
    <div>
      <section class=" justify-center">
        <div class=" justify-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {' '}
              <p>{count}</p>
            </h5>
          </a>
          <div class="mb-6">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              onClick={() => dispatch(incrementByAmount(addValue))}
            >
              +
            </button>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              onClick={() => dispatch(decrement())}
            >
              -
            </button>
            <input
              type="text"
              id="large-input"
              class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={incrementAmount}
              onChange={(e) => setIncrementByAmount(e.target.value)}
            />
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              onClick={resetAll}
            >
              Reset All
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Counter
