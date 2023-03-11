import React, { lazy, Suspense } from 'react'
const Home = lazy(() => import('./pages/home/Home'))
const App = () => {
    return (
        <>
            <Suspense fallback={<p>Loading...</p>}>
                <Home />
            </Suspense>
        </>
    )
}

export default App