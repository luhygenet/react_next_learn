'use client'

import { useState } from 'react'

export default function DashboardPage() {
  const [throwError, setThrowError] = useState(false)

  if (throwError) {
    throw new Error('This is a simulated error!')
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        onClick={() => setThrowError(true)}
      >
        Trigger Error
      </button>
    </div>
  )
}
