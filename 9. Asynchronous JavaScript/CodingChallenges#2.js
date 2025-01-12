// PART 1: Create Image Function
function createImage(imgPath) {
    return new Promise((resolve, reject) => {
        // Create the image element
        const img = document.createElement('img');
        img.src = imgPath;

        // Add event listener for when image is loaded
        img.addEventListener('load', () => {
            // Append the image to the DOM
            document.querySelector('.images').appendChild(img);
            // Resolve the promise with the image element
            resolve(img);
        });

        // Add event listener for when an error occurs
        img.addEventListener('error', () => {
            // Reject the promise if there is an error loading the image
            reject(new Error('Image failed to load'));
        });
    });
}

// PART 2: Image Loading and Handling with Wait Function
function wait(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

let currentImage;  // Global variable to track the current image

function loadImages() {
    // Load the first image and handle it
    createImage('img/image1.jpg')
        .then(img => {
            currentImage = img; // Store the current image in the global variable
            console.log('First image loaded');
            return wait(2); // Wait for 2 seconds before hiding the first image
        })
        .then(() => {
            // Hide the first image
            currentImage.style.display = 'none';
            console.log('First image hidden');

            // Load the second image
            return createImage('img/image2.jpg');
        })
        .then(img => {
            currentImage = img; // Store the second image in the global variable
            console.log('Second image loaded');
            return wait(2); // Wait for 2 seconds before hiding the second image
        })
        .then(() => {
            // Hide the second image
            currentImage.style.display = 'none';
            console.log('Second image hidden');
        })
        .catch(error => {
            console.error('Error loading image:', error.message);
        });
}

// Call the loadImages function to start the image loading process
loadImages();
