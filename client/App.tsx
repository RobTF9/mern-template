import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);

  async function fetchItem() {
    try {
      const response = await fetch("/api/item");
      const json = await response.json();
      setMessage(json.message);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (message) return;
    fetchItem();
  }, [message]);

  return <h1>{message}</h1>;
};

export default App;
