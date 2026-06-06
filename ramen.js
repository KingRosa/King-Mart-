const ramenData = [
    {
        name: "Mystery Shoyu Ramen",
        img: "Pixel Art/Mystery Ramen (Pixel Art).png",
        desc: "<strong>Inspired by:</strong> Chef King... <br><br> <strong>Ingredients:</strong> Chicken broth, chili, sea urchin."
    },
    {
        name: "Travel World Ramen",
        img: "Pixel Art/Ramen Pixel Art.png",
        desc: "<strong>Inspired by:</strong> Global flavors... <br><br> <strong>Ingredients:</strong> Exotic spices, wheat noodles."
    }
];

let currentIndex = 0;

function changeRamen(direction) {
    currentIndex = (currentIndex + direction + ramenData.length) % ramenData.length;
    
    // Update the HTML
    document.getElementById('ramen-name').innerText = ramenData[currentIndex].name;
    document.getElementById('ramen-img').src = ramenData[currentIndex].img;
    document.getElementById('ramen-desc').innerHTML = ramenData[currentIndex].desc;
}