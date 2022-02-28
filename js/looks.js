/*
- Поменять случайно 1-3 изображения в течение 3х секунд
*/

const images = [
    {
        src: './images/item1.jpg',
        alt: 'fashion look'
    },
    {
        src: './images/item2.jpg',
        alt: 'fashion look'
    },
    {
        src: './images/item3.jpg',
        alt: 'fashion look'
    },
    {
        src: './images/item4.jpg',
        alt: 'fashion look'
    },
    {
        src: './images/item5.jpg',
        alt: 'fashion look'
    },
    {
        src: './images/item6.jpg',
        alt: 'fashion look'
    },
    {
        src: './images/item7.jpg',
        alt: 'fashion look'
    },
    {
        src: './images/item8.jpg',
        alt: 'fashion look'
    }
];

const mobile_image_count = 8;
const tablet_image_count = 6;
const dektop_image_count = 8;

const looks = document.querySelector('.looks');
const imageTemplate = document.querySelector('.image-template');

/*
 Создать картинку
*/
function createImage(src, alt) {
    // создаем копию картинки из шаблона
    const looksImage = imageTemplate.content.querySelector('.looks__image').cloneNode(true);
    // заполняем элемент картинки данными
    looksImage.src = src;
    looksImage.alt = alt;
    return looksImage;
}

/*
Добавить картинку в секцию looks
*/
function addImageToLooks(src, alt) {
    // создаем эл-т картинки
    const newImage = createImage(src, alt);
    // добавить в секцию looks
    looks.prepend(newImage)  
}

function addImages(count) {
    for(let i = 0; i < count; i++) {
        const image = images[i];
        addImageToLooks(image.src, image.alt)
    }
}



if (window.innerWidth > 320 && window.innerWidth < 768) {  // если на мобильном
    addImages(8)
} else if (window.innerWidth >= 768 && window.innerWidth < 1090) { // если на планшете
    addImages(6)
} else { // на десктопе
    addImages(8)
}
