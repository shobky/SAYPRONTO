import React, { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Loading from './components/loading/Loading'
const Home = lazy(() => import('./pages/home/Home'))
const CalendlyWidget = lazy(() => import('./components/Calendly'))
const Nav = lazy(() => import('./components/nav/Nav'))
const Footer = lazy(() => import('./components/home/footer/Footer'))


const App = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });;
    }, [pathname]);

    return (
        <>
            <Nav />

            <Routes>
                <Route path='/' exact element={<Suspense fallback={<Loading />} >
                    <Home />
                </Suspense>} />
                <Route path='/book-a-meeting' element={
                    <Suspense fallback={<Loading />}>
                        <CalendlyWidget />
                    </Suspense>} />
            </Routes>
            <Footer />

        </>
    )
}

export default App