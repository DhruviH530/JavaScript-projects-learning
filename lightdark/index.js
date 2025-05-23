const toggleButton = document.getElementById('toggleButton');
const body = document.body;

toggleButton.addEventListener('click', () => {
    // Check if current mode is light
    if (body.style.backgroundColor === 'white' || body.style.backgroundColor === '') {
        // Switch to dark mode
        body.style.backgroundColor = '#333';  
        body.style.color = 'white';  
        toggleButton.textContent = 'Switch to Light Mode';
        toggleButton.style.backgroundColor = '#555';  
        toggleButton.style.color = 'white';  
    } else {
        // Switch to light mode
        body.style.backgroundColor = 'white';
        body.style.color = 'black'; 
        toggleButton.textContent = 'Switch to Dark Mode'; 
        toggleButton.style.backgroundColor = '#ffffff';
        toggleButton.style.color = 'black'; 
    }
});
