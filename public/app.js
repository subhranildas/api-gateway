document.getElementById('fetchBtn').addEventListener('click', async () => {
  const res = await fetch('/aggregate');
  const data = await res.json();
  document.getElementById('output').textContent = JSON.stringify(data, null, 2);
});
