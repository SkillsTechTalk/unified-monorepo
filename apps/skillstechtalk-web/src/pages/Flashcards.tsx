import { useState, useMemo, useCallback, useEffect } from 'react';
import axios from 'axios';
import Flashcard, { FlashcardData } from '../components/Flashcard';
import styles from '../styles/Flashcard.module.css';

interface Filters {
    category: string;
    difficulty: string;
}

const FlashcardsPage = () => {
    const [flashcards, setFlashcards] = useState<FlashcardData[]>([]);
    const [filters, setFilters] = useState<Filters>({ category: 'All', difficulty: 'All' });
    const [showAnswer, setShowAnswer] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedCards, setDisplayedCards] = useState<FlashcardData[]>([]);

    useEffect(() => {
        let isMounted = true;

        axios.get('http://localhost:3001/api/flashcards')
            .then((response) => {
                console.log('Flashcards fetched:', response.data);
                if (isMounted) {
                    setFlashcards(response.data);
                }
            })
            .catch((error) => {
                console.error('Error fetching flashcards:', error);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    const filteredCards = useMemo(() => {
        return flashcards.filter((card) => {
            const matchesCategory = filters.category === 'All' || card.category === filters.category;
            const matchesDifficulty = filters.difficulty === 'All' || card.difficulty === filters.difficulty;
            return matchesCategory && matchesDifficulty;
        });
    }, [flashcards, filters]);

    const shuffleCards = useCallback(() => {
        return [...filteredCards].sort(() => Math.random() - 0.5);
    }, [filteredCards]);

    useEffect(() => {
        setDisplayedCards(shuffleCards());
        setCurrentIndex(0);
        setShowAnswer(false);
    }, [filters, shuffleCards]);

    const handleNext = () => {
        setShowAnswer(false);
        setCurrentIndex((prev) => (prev + 1) % displayedCards.length);
    };

    const handlePrevious = () => {
        setShowAnswer(false);
        setCurrentIndex((prev) => (prev - 1 + displayedCards.length) % displayedCards.length);
    };

    const handleShuffle = () => {
        setDisplayedCards(shuffleCards());
        setCurrentIndex(0);
        setShowAnswer(false);
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilters((prev) => ({ ...prev, category: e.target.value }));
    };

    const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilters((prev) => ({ ...prev, difficulty: e.target.value }));
    };

    const categories = useMemo(() => ['All', ...new Set(flashcards.map((card) => card.category))], [flashcards]);
    const difficulties = useMemo(() => ['All', ...new Set(flashcards.map((card) => card.difficulty))], [flashcards]);
    const currentCard = displayedCards[currentIndex] ?? null;

    return (
        <div className={styles['flashcards-container']}>
            <div className={styles.header}>
                <h1>Skillstechtalk Interview Flashcards</h1>
                <p>Sharpen your tech interview skills with 400+ curated flashcards across React, .NET, AI, and software architecture.</p>
            </div>

            <div className={styles.filters}>
                <div>
                    <label htmlFor="category-filter">Category</label>
                    <select id="category-filter" value={filters.category} onChange={handleCategoryChange}>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="difficulty-filter">Difficulty</label>
                    <select id="difficulty-filter" value={filters.difficulty} onChange={handleDifficultyChange}>
                        {difficulties.map((diff) => (
                            <option key={diff} value={diff}>{diff}</option>
                        ))}
                    </select>
                </div>
            </div>

            {filteredCards.length > 0 && currentCard ? (
                <div className={styles['card-container']}>
                    <div className={styles.tags}>
                        <span className={styles.tag}>{currentCard.category}</span>
                        <span className={`${styles.tag} ${styles[`difficulty-${currentCard.difficulty.toLowerCase()}`]}`}>
      {currentCard.difficulty}
    </span>
                    </div>
                    <h2>{currentCard.question}</h2>
                    {showAnswer && <p>{currentCard.answer}</p>}

                    <button
                        className={styles['show-button']}
                        onClick={() => setShowAnswer((prev) => !prev)}
                    >
                        {showAnswer ? 'Hide Answer' : 'Show Answer'}
                    </button>
                </div>

            ) : (
                <div className={styles['no-cards']}>
                    <p>No flashcards match your filters. Try adjusting them.</p>
                </div>
            )}

            {filteredCards.length > 0 && (
                <div className={styles.navigation}>
                    <button onClick={handlePrevious} disabled={displayedCards.length <= 1}>Previous</button>
                    <button onClick={handleShuffle} disabled={displayedCards.length <= 1}>Shuffle</button>
                    <button onClick={handleNext} disabled={displayedCards.length <= 1}>Next</button>
                    <p>Card {currentIndex + 1} of {displayedCards.length}</p>
                </div>
            )}
        </div>
    );
};

export default FlashcardsPage;
