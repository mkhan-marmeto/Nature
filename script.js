let images = {
    "image1": "./images/image1.jpg",
    "image2": "./images/image2.jpg",
    "image3": "./images/image3.jpg",
    "image4": "./images/image4.jpg",
    "image5": "./images/image5.jpg"
};

let changeButton = document.querySelector(".change-btn");
let imageTag = document.querySelector("#image");

let currentImageIndex = 1;


changeButton.addEventListener('click', () => {
    imageTag.classList.add('fade-out');

    setTimeout(()=>{
        currentImageIndex++;
        if (currentImageIndex > 5) {
            currentImageIndex = 1;
        }
        imageTag.src = images[`image${currentImageIndex}`];
        imageTag.classList.remove('fade-out');
    },500)
});