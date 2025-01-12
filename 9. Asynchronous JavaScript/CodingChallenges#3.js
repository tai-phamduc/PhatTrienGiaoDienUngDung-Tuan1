// Reusing the createImage function from before
function createImage(imgPath) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', () => {
            document.querySelector('.images').appendChild(img);
            resolve(img);
        });

        img.addEventListener('error', () => {
            reject(new Error('Image failed to load'));
        });
    });
}

// Part 1: Load and pause function using async/await
async function loadNPause() {
    try {
        // Load first image and wait for it to load
        const img1 = await createImage('img/image1.jpg');
        console.log('First image loaded');
        
        // Wait for 2 seconds using a custom wait function
        await wait(2);
        
        // Hide the first image
        img1.style.display = 'none';
        console.log('First image hidden');
        
        // Load second image and wait for it to load
        const img2 = await createImage('img/image2.jpg');
        console.log('Second image loaded');
        
        // Wait for 2 seconds
        await wait(2);
        
        // Hide the second image
        img2.style.display = 'none';
        console.log('Second image hidden');
    } catch (error) {
        console.error('Error loading image:', error.message);
    }
}

// Function to pause execution for a given number of seconds
function wait(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
