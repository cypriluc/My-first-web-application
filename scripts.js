let data_0 = {
    photo: 'fotky/jesienka.jpg',
    title: 'Rozkvitnutá jesienka',
    description: 'Hrebene Nízkych Tatier sa farbia dofialova, keď si suchou trávou na svetlo sveta svoju cestu prerážajú jesienky.'
};

let data_1 = {
    photo: 'fotky/jesterka.jpg',
    title: 'Jašterička',
    description: 'Jašterička vystrkuje jazýček.'
};

let data_2 = {
    photo: 'fotky/krizna.jpg',
    title: 'Hrebeň Krížnej',
    description: 'Posledné zbytky jarného snehu na Krížnej.'
};

let data_3 = {
    photo: 'fotky/modry_kvietok.jpg',
    title: 'Modrý kvietok',
    description: 'Modrý kvietok zvláštneho druhu rastie v bezfarebnom okolí.'
};

let data_4 = {
    photo: 'fotky/prasiva.jpg',
    title: 'Hrebeň Krížnej',
    description: 'Posledné zbytky jarného snehu na Prašivej.'
};

let data_5 = {
    photo: 'fotky/snezienka.jpg',
    title: 'Snežienka',
    description: 'Prvá jarná, len čo zasvieti slniečko a miznú zbytky snehu, už kvitne.'
};

let currentPhoto = 0;
let imagesData = [data_0, data_1, data_2, data_3, data_4, data_5]

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').html(`<h1>${imagesData[photoNumber].title}</h1>`);
    $('#photo-description').html(`<p>${imagesData[photoNumber].description}</p>`);
}

loadPhoto(currentPhoto)

$('#right').click(() => {
    if(currentPhoto === (imagesData.length - 1)) {
        currentPhoto = 0;           
    } else {
    currentPhoto++;
    };
    loadPhoto(currentPhoto);
    
});

$('#left').click(() => {
    if(currentPhoto === 0) {
        currentPhoto = (imagesData.length - 1);        
    } else {
    currentPhoto--;
    };
    loadPhoto(currentPhoto);
});

imagesData.forEach((item, index) => {
    $('.thumbnails').append(`<img src="${item.photo}" class="nahled" data-index="${index}">`);
});
    
$('.nahled').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    currentPhoto = parseInt(indexClicked);
    loadPhoto(currentPhoto)
    $('.active-nahled').toggleClass('active-nahled');
    $(event.target).toggleClass('active-nahled');

    });  
