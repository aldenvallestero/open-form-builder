import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';


const Header = React.lazy(() => import('./components/header-component'));
const Footer = React.lazy(() => import('./components/footer-component'));
const HomePage = React.lazy(() => import('./pages/home-page'));
const FormPage = React.lazy(() => import('./pages/form-page'));

function App() {
  return (
    <>
      <Suspense fallback="Loading...">
        <Header />
      </Suspense>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback="Loading...">
                <HomePage />
              </Suspense>
            }
          />

          <Route
            path="/form/create"
            element={
              <Suspense fallback="Loading...">
                <FormPage />
              </Suspense>
            }
          />
        </Routes>
      </Router>

      <Suspense fallback="Loading...">
        <Footer />
      </Suspense>
      </>
  );
}

export default App;
