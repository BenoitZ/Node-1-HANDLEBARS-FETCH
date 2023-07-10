const weather = (location, unit, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=5988e33db047c82c9cb3b267ccfd4209&query=${encodeURIComponent(location)}&units=${unit}`;
                            //encodeURIcomponent -> fonction qui encode des caractéres spéciaux au cas où
                            //on passe les paramétres à l'url de l'API
                            //fonction callback -> pour pouvoir renvoyer des informations dans une fonction 
            fetch(url)
            .then(res => res.json())                       
            .then(data => {
                    if (data.success === false) {
                            callback(`Impossible de renvoyer vos infos. Error ${data.error.code}:${data.error.info} `, undefined)
                    } else {
                            const {current, location } = data;
                            callback(undefined, {
                                location: location.name,
                                country: location.country,
                                temperature: current.temperature,
                                feelslike : current.feelslike,
                                weather_descriptions: current.weather_descriptions[0]
                            } );          
                    }
            });
    }

    module.exports = {weather};
