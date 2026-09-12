import { useState } from "react";
import { Link } from "react-router-dom";

import "../App.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password =
        "Password must be at least 8 characters.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      alert("Demo validation successful — no account was created.");
    }, 1000);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    if (errors.email) {
      setErrors((previous) => ({
        ...previous,
        email: "",
      }));
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);

    if (errors.password) {
      setErrors((previous) => ({
        ...previous,
        password: "",
      }));
    }
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
            AUTHENTICATION UI DEMO
          </span>

          <h1>
            Welcome back.
            <br />
            <span>Let’s continue.</span>
          </h1>

          <p>
            A frontend authentication UI concept built from scratch.
            This demo does not create accounts or transmit credentials.
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

          <div className="demo-notice" role="note">⚠️ UI DEMO — Do not enter real credentials. Nothing is stored or transmitted.</div>

          <div className="form-heading">
            <div className="form-badge">WELCOME BACK</div>

            <h2>Sign in</h2>

            <p>
              Frontend demo only — do not enter real passwords or personal information.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="email">
                Email address
              </label>

              <input
                id="email"
                type="email"
                placeholder="demo@example.com"
                value={email}
                onChange={handleEmailChange}
                className={errors.email ? "input-error" : ""}
              />

              {errors.email && (
                <p className="field-error">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="form-group">
              <div className="label-row">
                <label htmlFor="password">
                  Password
                </label>

                <Link to="/forgot-password">
                  Forgot password?
                </Link>
              </div>

              <div className="password-wrapper">
                <input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Demo password only"
                  value={password}
                  onChange={handlePasswordChange}
                  className={
                    errors.password
                      ? "input-error"
                      : ""
                  }
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              {errors.password && (
                <p className="field-error">
                  {errors.password}
                </p>
              )}
            </div>

            <label className="remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <button
              type="submit"
              className="primary-button"
              disabled={isLoading}
            >
              {isLoading
                ? "Signing in..."
                : "Sign in"}

              {!isLoading && (
                <span>→</span>
              )}
            </button>
          </form>

          <div className="divider">
            <span>demo options</span>
          </div>

          <div className="social-buttons">
            <button type="button">
              <span className="social-icon">G</span>
              Google demo
            </button>

            <button type="button">
              <span className="social-icon">◉</span>
              GitHub demo
            </button>
          </div>

          <p className="signup-text">
            Don't have an account?{" "}
            <Link to="/signup">
              Create one
            </Link>
          </p>

        </div>
      </section>
    </main>
  );
}

export default Login;