import { useState, useEffect } from "react";
import styles from "../styles/NumberMatchGame.module.css"; // Import styles

const numbers = [
  "1", "1", "2", "2", "3", "3", "4", "4",
  "5", "5", "6", "6", "7", "7", "8", "8"
];

export default function NumberMatchingGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    shuffleCards();
  }, []);

  const shuffleCards = () => {
    const shuffled = [...numbers].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
  };

  const handleFlip = (index) => {
    if (flipped.length === 2 || matched.includes(index) || flipped.includes(index)) return;
    
    setFlipped([...flipped, index]);

    if (flipped.length === 1) {
      const firstIndex = flipped[0];
      if (cards[firstIndex] === cards[index]) {
        setMatched([...matched, firstIndex, index]);
      }
      setTimeout(() => setFlipped([]), 1000);
      setMoves(moves + 1);
    }
  };

  return (
    <div className={styles.container}>
      {!gameStarted ? (
        <div className={styles.instructions}>
          <h2>🔢 Number Matching Game for Seniors 🔢</h2>
          <p>Welcome! This fun game helps improve memory and focus.</p>
          <h3>✅ How to Play:</h3>
          <ul>
            <li>Click on a card to reveal a number.</li>
            <li>Find and click another card with the same number.</li>
            <li>If they match, they stay revealed. If not, they flip back.</li>
            <li>Keep matching pairs until all numbers are revealed!</li>
          </ul>
          <button className={styles.startButton} onClick={() => setGameStarted(true)}>
            Start Game
          </button>
        </div>
      ) : (
        <>
          <h1>Number Matching Game</h1>
          <p>Moves: {moves}</p>
          <div className={styles.grid}>
            {cards.map((item, index) => (
              <div 
                key={index} 
                className={`${styles.card} ${flipped.includes(index) || matched.includes(index) ? styles.flipped : ""}`} 
                onClick={() => handleFlip(index)}
              >
                {flipped.includes(index) || matched.includes(index) ? <span>{item}</span> : "❓"}
              </div>
            ))}
          </div>
          <button onClick={shuffleCards} className={styles.button}>Restart</button>
        </>
      )}
    </div>
  );
}
