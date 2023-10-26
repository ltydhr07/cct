import React from 'react'

const HomePage = React.lazy(() => import('../pages/HomePage'))
const HomeRoute = () => {
  return (
    <React.Suspense>
      <HomePage />
    </React.Suspense>
  )
}

export { HomeRoute }
