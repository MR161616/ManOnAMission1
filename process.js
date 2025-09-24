document.getElementById("doubtForm").addEventListener("submit", async function(e){
  e.preventDefault();
  const doubtText = document.getElementById("doubt").value;
  
  // Call AI API to generate comic content
  const comicContent = await getComicContent(doubtText);
  
  document.getElementById("comicOutput").innerHTML = comicContent;
});
