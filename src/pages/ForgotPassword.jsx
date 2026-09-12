import { useState } from "react";
import { Link } from "react-router-dom";

import "../App.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setError("Email address is required.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError(
        "Please enter a valid email address."
      );
      return;
    }

    setError("");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 1000);
  };

  return (
    <main className="auth-page">
      <section className="auth-visual">
        <div className="brand">
          <div className="brand-mark">A</div>
          <span>AuthFlow</span>
        </div>

        <div className="visual-content">
          <span className="eyebrow">
            SECURE • SIMPLE • MODERN
          </span>

          <h1>
            Get back
            <br />
            <span>into your account.</span>
          </h1>

          <p>
            Don't worry. Enter your email and we'll help
            you get back into your account.
          </p>
        </div>

        <div className="visual-footer">
          <span>© 2026 AuthFlow</span>
          <span>Built with React</span>
        </div>
      </section>

      <section className="auth-form-section">
        <div className="auth-form-wrapper">

          <div className="mobile-brand">
            <div className="brand-mark">A</div>
            <span>AuthFlow</span>
          </div>

          {!isSent ? (
            <>
              <div className="form-heading">
                <div className="form-badge">
                  ACCOUNT RECOVERY
                </div>

                <h2>Forgot password?</h2>

                <p>
                  Enter your email and we'll send you
                  a password reset link.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="reset-email">
                    Email address
                  </label>

                  <input
                    id="reset-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);

                      if (error) {
                        setError("");
                      }
                    }}
                    className={
                      error
                        ? "input-error"
                        : ""
                    }
                  />

                  {error && (
                    <p className="field-error">
                      {error}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="primary-button"
                  disabled={isLoading}
                >
                  {isLoading
                    ? "Sending..."
                    : "Send reset link"}

                  {!isLoading && (
                    <span>→</span>
                  )}
                </button>
              </form>

              <p className="signup-text">
                Remember your password?{" "}
                <Link to="/">
                  Sign in
                </Link>
              </p>
            </>
          ) : (
            <div className="success-state">
              <div className="success-icon">
                ✓
              </div>

              <div className="form-badge">
                EMAIL SENT
              </div>

              <h2>Check your email</h2>

              <p>
                If an account exists for{" "}
                <strong>{email}</strong>, we've sent
                instructions to reset your password.
              </p>

              <Link
                to="/"
                className="primary-button"
              >
                Back to sign in
                <span>→</span>
              </Link>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}

export default ForgotPassword;