import Link from "next/link";

// Homepage quiz section — fresh scaffold build (artifact v15).
// For My Child / For My Pet are Coming Soon and go to the waitlist;
// the other three options go to the quiz.
export default function QuizSection() {
  return (
    <div className="card">
      <h2>Find Your Perfect Hair Routine in 60 Seconds</h2>
      <h3>Who is this routine for?</h3>
      <div className="grid">
        <Link className="quiz-option" href="/quiz">
          For Me (Woman)
        </Link>
        <Link className="quiz-option" href="/quiz">
          For Me (Man)
        </Link>
        <Link className="quiz-option" href="/quiz">
          For My Partner
        </Link>
        <Link className="quiz-option" href="/quiz">
          For My Child (Coming Soon)
        </Link>
        <Link className="quiz-option" href="/quiz">
          For My Pet (Coming Soon)
        </Link>
      </div>
      <p>
        <Link className="btn" href="/quiz">
          Take the Hair Quiz
        </Link>
      </p>
    </div>
  );
}
