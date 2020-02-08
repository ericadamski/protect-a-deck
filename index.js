import React, { useState, useEffect } from "react";
import fetch from "unfetch";

export default props => {
  const [pwd, setPwd] = useState();
  const [valid, setValid] = useState(
    typeof window !== `undefined` && JSON.parse(localStorage.getItem("pwdv"))
  );
  const [error, setError] = useState();

  useEffect(() => {
    if (valid) {
      localStorage.setItem("pwdv", valid);
    }
  }, [valid]);

  useEffect(() => {
    try {
      setValid(JSON.parse(localStorage.getItem("pwdv")));
    } catch (error) {
      console.error(error);
    }
  }, [props.deckState.index]);

  const onSubmit = async () => {
    if (!pwd || pwd.length < 1) return;

    const response = await fetch(
      `https://paassword.now.sh/api/get/${props.paassword}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pwd })
      }
    );

    if (response.ok) {
      const password = await response.json();

      if (password.valid) {
        setValid(true);
        setError();
      } else {
        setError("Incorrect password");
      }
    }
  };

  return (
    <div>
      {valid ? (
        props.children
      ) : (
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            width: "100vw",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              maxWidth: 350
            }}
          >
            <p style={{ fontFamily: "system-ui,sans-serif", fontSize: "2rem" }}>
              This deck is locked, please enter the password to view.
            </p>
            <label htmlFor="pwd" style={{ fontFamily: "system-ui,sans-serif" }}>
              Password
            </label>
            <input
              type="password"
              name="pwd"
              onChange={({ target }) => setPwd(target.value)}
              style={{
                margin: "0.5rem 0",
                fontSize: "1rem"
              }}
            />
            {error && (
              <p style={{ fontFamily: "system-ui,sans-serif", color: "red" }}>
                {error}
              </p>
            )}
            <button onClick={onSubmit}>Unlock</button>
          </div>
        </div>
      )}
    </div>
  );
};
