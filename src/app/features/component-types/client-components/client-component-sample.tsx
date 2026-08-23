"use client";

import { useState } from "react";

export default function ClientComponentSample() {
  // Client components can use state, events, effects, and browser APIs.
  // The "use client" directive tells Next.js this component runs in the browser.
  const [count, setCount] = useState(0);

  return (
    <div style={styles.box}>
      <div style={styles.label}>Browser interaction</div>
      <button style={styles.button} onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  box: {
    background: "#fef2f2",
    border: "1px solid #fecaca",
    borderRadius: 8,
    padding: 12,
  },
  label: {
    color: "#b91c1c",
    fontSize: 13,
    fontWeight: 800,
    marginBottom: 8,
  },
  button: {
    background: "#dc2626",
    border: "1px solid #b91c1c",
    borderRadius: 8,
    color: "#ffffff",
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 800,
    minHeight: 40,
    padding: "8px 12px",
  },
};
