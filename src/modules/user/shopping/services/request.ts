async function getProducts() {
  const url =
    "https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=AgeAppropriate%3ATeens";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY!,
        "x-rapidapi-host": "kohls.p.rapidapi.com",
      },
    });

    const result = await response.json();
    return result?.payload.products ?? [];
  } catch (err) {
    console.error(err);
  }
}

export { getProducts };
