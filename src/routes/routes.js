import React from 'react'

const HomePage = React.lazy(() => import('../pages/HomePage'))
const HomeRoute = () => {
  return (
    <React.Suspense>
      <HomePage />
    </React.Suspense>
  )
}

const PrivacyPage = React.lazy(() => import('../pages/Privacy'))
const PrivacyRoute = () => {
  return (
    <React.Suspense>
      <PrivacyPage />
    </React.Suspense>
  )
}

export { HomeRoute, PrivacyRoute }
