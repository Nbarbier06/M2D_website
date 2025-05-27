const API_KEY = "pat7UP069eYy2CH9u.23212cef80da585a3bc0fb9bb572162a0e4fd2cabdd0bbb4955a3022e833da07";
const BASE_ID = "app7913ETHqajipme";
const TABLE_NAME = "solutionsIA";
const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}?pageSize=100`;

document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('catalogue-ia');
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    });
    const data = await response.json();

    data.records.forEach(record => {
      const { Nom, Description } = record.fields;
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h3 class="card-title">${Nom || ''}</h3>
        <p class="card-description">${Description || ''}</p>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    console.error('Erreur lors de la récupération des données AirTable :', err);
    container.innerHTML = '<p>Erreur lors du chargement des données.</p>';
  }
});
