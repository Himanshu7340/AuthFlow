function PasswordStrength({ password }) {
  if (!password) {
    return null;
  }

  let score = 0;

  if (password.length >= 8) {
    score++;
  }

  if (/[A-Z]/.test(password)) {
    score++;
  }

  if (/[0-9]/.test(password)) {
    score++;
  }

  if (/[^A-Za-z0-9]/.test(password)) {
    score++;
  }

  const levels = {
    1: "Weak",
    2: "Fair",
    3: "Good",
    4: "Strong",
  };

  const strength = levels[score] || "Weak";

  return (
    <div className="password-strength">
      <div className="strength-header">
        <span>Password strength</span>
        <strong>{strength}</strong>
      </div>

      <div className="strength-bars">
        {[1, 2, 3, 4].map((bar) => (
          <span
            key={bar}
            className={
              bar <= score
                ? `strength-bar active strength-${score}`
                : "strength-bar"
            }
          />
        ))}
      </div>

      <p>
        Use 8+ characters with uppercase, numbers and symbols.
      </p>
    </div>
  );
}

export default PasswordStrength;