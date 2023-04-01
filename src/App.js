import React, { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Nav from './components/nav/Nav'
import Footer from './components/home/footer/Footer'
const Home = lazy(() => import('./pages/home/Home'))
const CalendlyWidget = lazy(() => import('./components/Calendly'))

const App = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });;
    }, [pathname]);

    return (
        <>
            <Nav />

            <Routes>
                <Route path='/' exact element={<Suspense >
                    <Home />
                </Suspense>} />
                <Route path='/book-a-meeting' element={
                <Suspense>
                    <CalendlyWidget />
                </Suspense>} />
            </Routes>
            <Footer />

        </>
    )
}

export default App