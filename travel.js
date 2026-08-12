// Fetch travel data
async function fetchData() {
  const response = await fetch('travel_recommendation_api.json');
  const data = await response.json();
  console.log(data);
  return data;
}

// Search logic
document.getElementById('searchBtn').addEventListener('click', async () => {
  const keyword = document.getElementById('searchInput').value.toLowerCase();
  const data = await fetchData();
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  let results = [];

  if (keyword.includes('beach')) {
    results = data.beaches;
  } else if (keyword.includes('temple')) {
    results = data.temples;
  } else if (keyword.includes('country')) {
    results = data.countries;
  }

  results.forEach(place => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${place.imageUrl}" alt="${place.name}">
      <h3>${place.name}</h3>
      <p>${place.description}</p>
    `;
    resultsContainer.appendChild(card);
  });
});

// Reset logic
document.getElementById('resetBtn').addEventListener('click', () => {
  document.getElementById('searchInput').value = '';
  document.getElementById('results').innerHTML = '';
});
