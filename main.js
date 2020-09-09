var sldierData = [
    {
        url: "https://www.google.ge/",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmyKntJkxoZdWvJar52mxn6_luCxJAOkIRIwDyjuMQ-2qydVT"
    }, {
        url: "https://www.google.ge/",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSha1d6sIgC8m5bES3M_iL3eQv7ht-o3_1THiB7uOhwMNmR1awZ"
    }, {
        url: "https://www.google.ge/",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAo_-C5WW93-uovVOr_uGJI2YXS9_NhZVtEEXzlpMm54YzwfwJ"
    }, {
        url: "https://www.google.ge/",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYcQY27NjSiq7SGYTkjZo7TRn3ayXm_n_5uq6X1JW9yfNVuZLeTA"
    },
]


var sldier = document.getElementById('slider');
var right = document.getElementById('right');
var left = document.getElementById('left');
var curentIndex = 0;

function createAelement(url) { 
    var aElement = document.createElement('a');
    aElement.href = url;
    return aElement;
}
function createImgelement(img) {
    var imgElement = document.createElement('img');
    imgElement.src = img;
    return imgElement;
}


function setSlider(index) { 
    
    let curentSlider = sldierData[index];

    var elemnt = createAelement(curentSlider.url);

    elemnt.appendChild(createImgelement(curentSlider.img));
    
    
    sldier.innerHTML = '';

    sldier.appendChild(elemnt);
    
    // setInterval(function () {
    //     document.getElementsByTagName('img')[0].classList.add('active');
    // }, 3000);
    
    // setInterval(function () {
    //     document.getElementsByTagName('img')[0].classList.remove('active');
    // }, 5000);
}


function arrowRight() { 
    if (curentIndex   == sldierData.length - 1) { 
        curentIndex = -1;
    }
    
    if (curentIndex <= sldierData.length - 1) { 
        curentIndex++;
       setSlider(curentIndex);
    }
    
    console.log(curentIndex);
}

function arrowLeft() { 
    if (curentIndex == 0) { 
        curentIndex = sldierData.length - 1;
    }

    if (curentIndex !== 0) { 
        curentIndex--;
        setSlider(curentIndex);
    } 
    console.log(curentIndex);
}

right.addEventListener('click', arrowRight);


left.addEventListener('click',arrowLeft);


setInterval(function () {
    arrowRight();
    setSlider(curentIndex);
}, 3000)
setSlider(curentIndex);
