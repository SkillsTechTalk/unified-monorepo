import styles from '../styles/Flashcard.module.css';

export interface FlashcardData {
    question: string;
    answer: string;
    category: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
}

const Flashcard = ({
                       question,
                       answer,
                       category,
                       difficulty,
                       showAnswer,
                   }: FlashcardData & { showAnswer: boolean }) => {
    return (
        <div className={styles.card}>
            <div className={styles.tags}>
                <span className={styles.tag}>{category}</span>
                <span className={`${styles.tag} ${styles[`difficulty-${difficulty.toLowerCase()}`]}`}>
          {difficulty}
        </span>
            </div>
            <h2>{question}</h2>
            {showAnswer && (
                <div className={styles.answer}>
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

export default Flashcard;
