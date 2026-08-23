const PRODUCTS = [
  { id: 1, name: "Routing Guide", status: "Ready" },
  { id: 2, name: "Component Notes", status: "Draft" },
];

export default function ServerComponentSample() {
  // Server components are the default in the App Router.
  // They are best for loading data and rendering content before it reaches the browser.
  return (
    <div style={styles.box}>
      <div style={styles.label}>Server rendered list</div>
      <ul style={styles.list}>
        {PRODUCTS.map((product) => (
          <li key={product.id} style={styles.item}>
            <span>{product.name}</span>
            <strong>{product.status}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  box: {
    background: "#eff6ff",
    border: "1px solid #bfdbfe",
    borderRadius: 8,
    padding: 12,
  },
  label: {
    color: "#1d4ed8",
    fontSize: 13,
    fontWeight: 800,
    marginBottom: 8,
  },
  list: {
    display: "grid",
    gap: 8,
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  item: {
    alignItems: "center",
    background: "#ffffff",
    borderRadius: 6,
    color: "#1f2937",
    display: "flex",
    fontSize: 14,
    justifyContent: "space-between",
    padding: "8px 10px",
  },
};
