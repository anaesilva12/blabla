document.addEventListener('DOMContentLoaded', () => {
  const btnFact = document.getElementById('btnFact');
  const factBox = document.getElementById('factBox');

  if (btnFact && factBox) {
    btnFact.addEventListener('click', () => {
      if (factBox.style.display === 'none' || factBox.style.display === '') {
        factBox.style.display = 'block';
      } else {
        factBox.style.display = 'none';
      }
    });
  }
});
