const likeButton = document.getElementById("likeButton");
    const likeCount = document.getElementById("likeCount");

    
    let likes = 0;

    
    function updateLikeCount() {
      likeCount.textContent = likes + " like(s)";
    }

   
    likeButton.addEventListener("click", function() {
      likes++; 
      updateLikeCount(); 
    });
  





