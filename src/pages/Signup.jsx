import { useState } from "react";
import { Link } from "react-router-dom";

import PasswordStrength from "../components/PasswordStrength";

import "../App.css";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (
      !/\S+@\S+\.\S+/.test(formData.email)
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password =
        "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password =
        "Password must be at least 8 characters.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        "Please confirm your password.";
    } else if (
      formData.password !==
      formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      alert(
        "Account creation validation successful!"
      );
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
            Create your
            <br />
            <span>account.</span>
          </h1>

          <p>
            Start with a secure and beautifully designed
            authentication experience built from scratch.
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

          <div className="form-heading">
            <div className="form-badge">
              GET STARTED
            </div>

            <h2>Create account</h2>

            <p>
              Fill in your details to get started.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="name">
                Full name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Himanshu Choudhary"
                value={formData.name}
                onChange={handleChange}
                className={
                  errors.name
                    ? "input-error"
                    : ""
                }
              />

              {errors.name && (
                <p className="field-error">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="signup-email">
                Email address
              </label>

              <input
                id="signup-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className={
                  errors.email
                    ? "input-error"
                    : ""
                }
              />

              {errors.email && (
                <p className="field-error">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="signup-password">
                Password
              </label>

              <div className="password-wrapper">
                <input
                  id="signup-password"
                  name="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
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
                    setShowPassword(
                      !showPassword
                    )
                  }
                >
                  {showPassword
                    ? "Hide"
                    : "Show"}
                </button>
              </div>

              <PasswordStrength
                password={formData.password}
              />

              {errors.password && (
                <p className="field-error">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="confirm-password">
                Confirm password
              </label>

              <div className="password-wrapper">
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Repeat your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={
                    errors.confirmPassword
                      ? "input-error"
                      : ""
                  }
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >
                  {showConfirmPassword
                    ? "Hide"
                    : "Show"}
                </button>
              </div>

              {errors.confirmPassword && (
                <p className="field-error">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="primary-button"
              disabled={isLoading}
            >
              {isLoading
                ? "Creating account..."
                : "Create account"}

              {!isLoading && (
                <span>→</span>
              )}
            </button>
          </form>

          <p className="signup-text">
            Already have an account?{" "}
            <Link to="/">
              Sign in
            </Link>
          </p>

        </div>
      </section>
    </main>
  );
}

export default Signup;