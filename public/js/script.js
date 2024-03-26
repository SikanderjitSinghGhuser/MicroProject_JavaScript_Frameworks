document.getElementById('load-data-btn').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/data');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const pens = await response.json();
        const container = document.getElementById('data-display');
        container.innerHTML = '';
        pens.forEach(pen => {
            const penElement = document.createElement('div');
            penElement.classList.add('pen-item');
            penElement.innerHTML = `
                <h3>${pen.name}</h3>
                <p>${pen.description}</p>
                <span class="price">${pen.price}</span>
            `;
            container.appendChild(penElement);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
