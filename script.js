const dishes = document.getElementsByClassName("dish");
for (let i = 0; i < dishes.length; i++) {
    dishes[i].addEventListener("click", function() {
        const recipe = dishes[i].nextElementSibling;
        if (recipe.style.display === "none") {
            recipe.style.display = "block";
        } else {
            recipe.style.display = "none";
        }
    });
}
