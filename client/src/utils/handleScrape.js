export const handleScrape = async (setIsLoading, setData, isLoading, setError, url) => {
  setIsLoading(true);
  setError('');
  try {
    const response = await fetch("http://localhost:3001/scrape", 
      {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    }
  );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    setData(result);
    isLoading(false);
  } catch (err) {
    setError(err.message);
    isLoading(false);
  }
};
