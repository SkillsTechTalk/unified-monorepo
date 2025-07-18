// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlashcardsPage from './pages/Flashcards';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FlashcardsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
