const toggleButton = document.querySelector(".toggle-button");

toggleButton.addEventListener('click', function(){
    this.classList.toggle('is-active');
})