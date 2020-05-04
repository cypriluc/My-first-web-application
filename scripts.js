let data = {
    photo: 'fotky/jesienka.jpg',
    title: 'Rozkvitnutá jesienka',
    description: 'Hrebene Nízkych Tatier sa farbia dofialova, keď si suchou trávou na svetlo sveta svoju cestu prerážajú jesienky.'
};

$('#photo').attr('src', data.photo);
$('#photo-title').html(`<h1>${data.title}</h1>`);
$('#photo-description').html(`<p>${data.description}</p>`);