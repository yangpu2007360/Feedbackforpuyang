import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutIconLink from "./components/AboutIconLink"
import { Link } from 'react-router-dom'
import { FeedbackProvider } from './context/FeedbackContext'


function App() {

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        } />


                        <Route path='/about' element={<About />} />
                    </Routes>
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>

    )
}

export default App 