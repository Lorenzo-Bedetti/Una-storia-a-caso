// ELENCO IMG
image_array = [
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg',
    '05.jpg',
    '06.jpg',
    '07.jpg',
    '08.jpg',
    '09.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '16.jpg',
    '17.jpg',
    '18.jpg',
    '19.jpg',
    '20.jpg',
    '21.jpg',
    '22.jpg',
    '23.jpg',
    '24.jpg',
    '25.jpg',
    '26.jpg',
    '27.jpg',
    '28.jpg',
    '29.jpg',
    '30.jpg',
    '31.jpg',
    '32.jpg',
    '33.jpg',
    '34.jpg',
    '35.jpg',
    '36.jpg',
    '37.jpg',
    '38.jpg',
    '39.jpg',
    '40.jpg',
    '41.jpg',
    '42.jpg',
    '43.jpg',
    '44.jpg',
    '45.jpg',
    '46.jpg',
    '47.jpg',
    '48.jpg',
    '49.jpg',
]
  
function get_random_image(){
    /* Selezione array
    Array = insiemi di variabili dello stesso tipo, in questo caso img della cartella /img
    */
    random_index = Math.floor(Math.random() * image_array.length);

    // Applicare un elemento casuale di numeri per selezione l'immagine nella selezione dell'array 
    selected_image = image_array[random_index]

    // Immagine selezionata nell'apposito spazio
    document.getElementById('image_selected').src = `./img/${selected_image}`
}