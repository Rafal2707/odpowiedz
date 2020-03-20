fetch('https://danepubliczne.imgw.pl/api/data/synop')
        .then(response => response.json())
        .then(data => {

            data.forEach(function(elem) {

                let containerInner = document.createElement('div')
                let cityName = document.createElement('p');
                let temp = document.createElement('p');

                cityName.innerText ='Miasto : ' + elem.stacja;
                temp.innerText = 'Temperatura : ' + elem.temperatura + ' °C';

                if(elem.temperatura >= 10){
                    temp.classList.add('hot')

                }else{
                    temp.classList.add('cold')
                }
    
                containerInner.appendChild(cityName)
                containerInner.appendChild(temp)
                document.getElementById('container').appendChild(containerInner)
            });
 })



    