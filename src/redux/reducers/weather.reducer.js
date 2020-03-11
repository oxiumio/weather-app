const initState = {
    weather: {"latitude":48.1351253,"longitude":11.5819805,"timezone":"Europe/Berlin","currently":{"time":1583894062,"summary":"Possible Drizzle","icon":"rain","precipIntensity":0.0072,"precipProbability":0.33,"precipType":"rain","temperature":49.43,"apparentTemperature":43.39,"dewPoint":45.97,"humidity":0.88,"pressure":1016.5,"windSpeed":17.35,"windGust":38.01,"windBearing":253,"cloudCover":1,"uvIndex":0,"visibility":10,"ozone":327.3},"hourly":{"summary":"Possible drizzle tomorrow morning.","icon":"rain","data":[{"time":1583892000,"summary":"Possible Drizzle","icon":"rain","precipIntensity":0.0057,"precipProbability":0.29,"precipType":"rain","temperature":49.43,"apparentTemperature":43.36,"dewPoint":45.7,"humidity":0.87,"pressure":1016.5,"windSpeed":17.48,"windGust":37.97,"windBearing":253,"cloudCover":1,"uvIndex":0,"visibility":10,"ozone":328.4},{"time":1583895600,"summary":"Possible Drizzle","icon":"rain","precipIntensity":0.0077,"precipProbability":0.34,"precipType":"rain","temperature":49.42,"apparentTemperature":43.39,"dewPoint":46.15,"humidity":0.88,"pressure":1016.5,"windSpeed":17.29,"windGust":38,"windBearing":254,"cloudCover":1,"uvIndex":0,"visibility":10,"ozone":326.5},{"time":1583899200,"summary":"Possible Drizzle","icon":"rain","precipIntensity":0.0043,"precipProbability":0.31,"precipType":"rain","temperature":49.36,"apparentTemperature":43.29,"dewPoint":46.54,"humidity":0.9,"pressure":1016.7,"windSpeed":17.36,"windGust":37.75,"windBearing":255,"cloudCover":1,"uvIndex":0,"visibility":10,"ozone":325},{"time":1583902800,"summary":"Overcast","icon":"cloudy","precipIntensity":0.0008,"precipProbability":0.13,"precipType":"rain","temperature":49.36,"apparentTemperature":43.24,"dewPoint":46.93,"humidity":0.91,"pressure":1017,"windSpeed":17.57,"windGust":37.36,"windBearing":256,"cloudCover":1,"uvIndex":0,"visibility":10,"ozone":323.8},{"time":1583906400,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":49.65,"apparentTemperature":43.58,"dewPoint":47.48,"humidity":0.92,"pressure":1017.1,"windSpeed":17.77,"windGust":36.82,"windBearing":257,"cloudCover":0.99,"uvIndex":0,"visibility":10,"ozone":322.3},{"time":1583910000,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":50.32,"apparentTemperature":50.32,"dewPoint":48.16,"humidity":0.92,"pressure":1017.5,"windSpeed":17.88,"windGust":36.1,"windBearing":258,"cloudCover":0.98,"uvIndex":0,"visibility":10,"ozone":320.4},{"time":1583913600,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":51.35,"apparentTemperature":51.35,"dewPoint":49,"humidity":0.92,"pressure":1018.2,"windSpeed":17.96,"windGust":35.2,"windBearing":259,"cloudCover":0.96,"uvIndex":1,"visibility":10,"ozone":318.3},{"time":1583917200,"summary":"Overcast","icon":"cloudy","precipIntensity":0.0003,"precipProbability":0.03,"precipType":"rain","temperature":52.46,"apparentTemperature":52.46,"dewPoint":49.66,"humidity":0.9,"pressure":1018.5,"windSpeed":17.89,"windGust":34.28,"windBearing":260,"cloudCover":0.95,"uvIndex":2,"visibility":10,"ozone":316.3},{"time":1583920800,"summary":"Overcast","icon":"cloudy","precipIntensity":0.0005,"precipProbability":0.05,"precipType":"rain","temperature":53.28,"apparentTemperature":53.28,"dewPoint":49.96,"humidity":0.88,"pressure":1018.6,"windSpeed":17.62,"windGust":33.44,"windBearing":262,"cloudCover":0.93,"uvIndex":2,"visibility":10,"ozone":314.7},{"time":1583924400,"summary":"Overcast","icon":"cloudy","precipIntensity":0.0012,"precipProbability":0.06,"precipType":"rain","temperature":53.76,"apparentTemperature":53.76,"dewPoint":49.74,"humidity":0.86,"pressure":1018.6,"windSpeed":17.21,"windGust":32.56,"windBearing":262,"cloudCover":0.92,"uvIndex":3,"visibility":10,"ozone":313.2},{"time":1583928000,"summary":"Overcast","icon":"cloudy","precipIntensity":0.0021,"precipProbability":0.06,"precipType":"rain","temperature":54.32,"apparentTemperature":54.32,"dewPoint":49.46,"humidity":0.84,"pressure":1018.5,"windSpeed":16.57,"windGust":31.44,"windBearing":262,"cloudCover":0.91,"uvIndex":3,"visibility":10,"ozone":312},{"time":1583931600,"summary":"Overcast","icon":"cloudy","precipIntensity":0.0024,"precipProbability":0.06,"precipType":"rain","temperature":54.72,"apparentTemperature":54.72,"dewPoint":49.15,"humidity":0.81,"pressure":1018.3,"windSpeed":15.71,"windGust":29.85,"windBearing":261,"cloudCover":0.93,"uvIndex":2,"visibility":10,"ozone":311.4},{"time":1583935200,"summary":"Overcast","icon":"cloudy","precipIntensity":0.0024,"precipProbability":0.05,"precipType":"rain","temperature":55.15,"apparentTemperature":55.15,"dewPoint":49.03,"humidity":0.8,"pressure":1018.1,"windSpeed":14.69,"windGust":28.01,"windBearing":258,"cloudCover":0.97,"uvIndex":2,"visibility":10,"ozone":310.9},{"time":1583938800,"summary":"Overcast","icon":"cloudy","precipIntensity":0.0025,"precipProbability":0.04,"precipType":"rain","temperature":55.38,"apparentTemperature":55.38,"dewPoint":48.9,"humidity":0.79,"pressure":1018.1,"windSpeed":13.6,"windGust":26.41,"windBearing":256,"cloudCover":0.97,"uvIndex":1,"visibility":10,"ozone":310.3},{"time":1583942400,"summary":"Overcast","icon":"cloudy","precipIntensity":0.0022,"precipProbability":0.03,"precipType":"rain","temperature":55.96,"apparentTemperature":55.96,"dewPoint":49.03,"humidity":0.78,"pressure":1018.5,"windSpeed":12.28,"windGust":25.26,"windBearing":253,"cloudCover":0.93,"uvIndex":0,"visibility":10,"ozone":309.3},{"time":1583946000,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.002,"precipProbability":0.03,"precipType":"rain","temperature":53.86,"apparentTemperature":53.86,"dewPoint":48.15,"humidity":0.81,"pressure":1019.1,"windSpeed":10.81,"windGust":24.31,"windBearing":251,"cloudCover":0.86,"uvIndex":0,"visibility":10,"ozone":308.1},{"time":1583949600,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0018,"precipProbability":0.04,"precipType":"rain","temperature":52.59,"apparentTemperature":52.59,"dewPoint":47.7,"humidity":0.83,"pressure":1019.6,"windSpeed":9.71,"windGust":23.55,"windBearing":248,"cloudCover":0.81,"uvIndex":0,"visibility":10,"ozone":307.2},{"time":1583953200,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0014,"precipProbability":0.03,"precipType":"rain","temperature":52.15,"apparentTemperature":52.15,"dewPoint":47.61,"humidity":0.84,"pressure":1019.8,"windSpeed":9.21,"windGust":23.1,"windBearing":246,"cloudCover":0.79,"uvIndex":0,"visibility":10,"ozone":306.6},{"time":1583956800,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0009,"precipProbability":0.03,"precipType":"rain","temperature":52.17,"apparentTemperature":52.17,"dewPoint":47.62,"humidity":0.84,"pressure":1019.8,"windSpeed":9.03,"windGust":22.81,"windBearing":244,"cloudCover":0.79,"uvIndex":0,"visibility":10,"ozone":306.2},{"time":1583960400,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0007,"precipProbability":0.03,"precipType":"rain","temperature":51.99,"apparentTemperature":51.99,"dewPoint":47.68,"humidity":0.85,"pressure":1019.6,"windSpeed":8.87,"windGust":22.12,"windBearing":242,"cloudCover":0.79,"uvIndex":0,"visibility":10,"ozone":306.1},{"time":1583964000,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0007,"precipProbability":0.02,"precipType":"rain","temperature":51.41,"apparentTemperature":51.41,"dewPoint":47.22,"humidity":0.86,"pressure":1019.5,"windSpeed":8.54,"windGust":20.17,"windBearing":240,"cloudCover":0.8,"uvIndex":0,"visibility":10,"ozone":306.8},{"time":1583967600,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0007,"precipProbability":0.02,"precipType":"rain","temperature":50.67,"apparentTemperature":50.67,"dewPoint":46.67,"humidity":0.86,"pressure":1019.2,"windSpeed":8.21,"windGust":17.83,"windBearing":237,"cloudCover":0.81,"uvIndex":0,"visibility":10,"ozone":307.9},{"time":1583971200,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0006,"precipProbability":0.02,"precipType":"rain","temperature":50.04,"apparentTemperature":50.04,"dewPoint":46.19,"humidity":0.87,"pressure":1019,"windSpeed":8.24,"windGust":17.01,"windBearing":236,"cloudCover":0.81,"uvIndex":0,"visibility":10,"ozone":308.3},{"time":1583974800,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0005,"precipProbability":0.01,"precipType":"rain","temperature":49.72,"apparentTemperature":46.07,"dewPoint":45.88,"humidity":0.87,"pressure":1018.6,"windSpeed":8.89,"windGust":19.06,"windBearing":235,"cloudCover":0.76,"uvIndex":0,"visibility":10,"ozone":307.4},{"time":1583978400,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0003,"precipProbability":0.01,"precipType":"rain","temperature":49.56,"apparentTemperature":45.54,"dewPoint":45.68,"humidity":0.86,"pressure":1018.2,"windSpeed":9.88,"windGust":22.62,"windBearing":235,"cloudCover":0.68,"uvIndex":0,"visibility":10,"ozone":305.9},{"time":1583982000,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0002,"precipProbability":0.01,"precipType":"rain","temperature":49.43,"apparentTemperature":45.11,"dewPoint":45.66,"humidity":0.87,"pressure":1017.9,"windSpeed":10.66,"windGust":25.56,"windBearing":235,"cloudCover":0.63,"uvIndex":0,"visibility":10,"ozone":305.2},{"time":1583985600,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":49.21,"apparentTemperature":44.75,"dewPoint":45.74,"humidity":0.88,"pressure":1017.9,"windSpeed":10.95,"windGust":26.95,"windBearing":237,"cloudCover":0.59,"uvIndex":0,"visibility":10,"ozone":305.6},{"time":1583989200,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":49.1,"apparentTemperature":44.59,"dewPoint":45.89,"humidity":0.89,"pressure":1017.8,"windSpeed":11.03,"windGust":27.72,"windBearing":241,"cloudCover":0.56,"uvIndex":0,"visibility":10,"ozone":306.8},{"time":1583992800,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0002,"precipProbability":0.03,"precipType":"rain","temperature":49.43,"apparentTemperature":44.89,"dewPoint":46.16,"humidity":0.88,"pressure":1017.7,"windSpeed":11.4,"windGust":28.49,"windBearing":244,"cloudCover":0.58,"uvIndex":0,"visibility":10,"ozone":308.1},{"time":1583996400,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0002,"precipProbability":0.03,"precipType":"rain","temperature":50.23,"apparentTemperature":50.23,"dewPoint":46.54,"humidity":0.87,"pressure":1017.6,"windSpeed":12.3,"windGust":29.42,"windBearing":247,"cloudCover":0.69,"uvIndex":0,"visibility":10,"ozone":309.7},{"time":1584000000,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0002,"precipProbability":0.03,"precipType":"rain","temperature":51.7,"apparentTemperature":51.7,"dewPoint":47.36,"humidity":0.85,"pressure":1017.4,"windSpeed":13.47,"windGust":30.36,"windBearing":251,"cloudCover":0.84,"uvIndex":1,"visibility":10,"ozone":311.4},{"time":1584003600,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":53.39,"apparentTemperature":53.39,"dewPoint":48.23,"humidity":0.83,"pressure":1017,"windSpeed":14.59,"windGust":31.38,"windBearing":254,"cloudCover":0.95,"uvIndex":2,"visibility":10,"ozone":312.7},{"time":1584007200,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":55.19,"apparentTemperature":55.19,"dewPoint":48.57,"humidity":0.78,"pressure":1016.4,"windSpeed":15.76,"windGust":32.87,"windBearing":257,"cloudCover":0.96,"uvIndex":2,"visibility":10,"ozone":313.1},{"time":1584010800,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":56.95,"apparentTemperature":56.95,"dewPoint":48.57,"humidity":0.74,"pressure":1015.7,"windSpeed":16.89,"windGust":34.46,"windBearing":259,"cloudCover":0.93,"uvIndex":3,"visibility":10,"ozone":313.2},{"time":1584014400,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":58.53,"apparentTemperature":58.53,"dewPoint":48.74,"humidity":0.7,"pressure":1015.2,"windSpeed":17.45,"windGust":35.15,"windBearing":260,"cloudCover":0.91,"uvIndex":3,"visibility":10,"ozone":313.7},{"time":1584018000,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":59.26,"apparentTemperature":59.26,"dewPoint":48.81,"humidity":0.68,"pressure":1014.9,"windSpeed":16.99,"windGust":34.02,"windBearing":252,"cloudCover":0.9,"uvIndex":2,"visibility":10,"ozone":315.3},{"time":1584021600,"summary":"Overcast","icon":"cloudy","precipIntensity":0.0003,"precipProbability":0.03,"precipType":"rain","temperature":59.25,"apparentTemperature":59.25,"dewPoint":48.84,"humidity":0.68,"pressure":1014.5,"windSpeed":16,"windGust":31.99,"windBearing":265,"cloudCover":0.9,"uvIndex":2,"visibility":10,"ozone":317.5},{"time":1584025200,"summary":"Overcast","icon":"cloudy","precipIntensity":0.0005,"precipProbability":0.03,"precipType":"rain","temperature":59.01,"apparentTemperature":59.01,"dewPoint":48.7,"humidity":0.69,"pressure":1014.3,"windSpeed":15.04,"windGust":30.76,"windBearing":259,"cloudCover":0.9,"uvIndex":1,"visibility":10,"ozone":319.7},{"time":1584028800,"summary":"Overcast","icon":"cloudy","precipIntensity":0.0006,"precipProbability":0.03,"precipType":"rain","temperature":58.05,"apparentTemperature":58.05,"dewPoint":48.04,"humidity":0.69,"pressure":1014.5,"windSpeed":14.42,"windGust":31.65,"windBearing":270,"cloudCover":0.91,"uvIndex":0,"visibility":10,"ozone":321.7},{"time":1584032400,"summary":"Overcast","icon":"cloudy","precipIntensity":0.001,"precipProbability":0.05,"precipType":"rain","temperature":56.65,"apparentTemperature":56.65,"dewPoint":47.39,"humidity":0.71,"pressure":1015,"windSpeed":13.79,"windGust":33.33,"windBearing":260,"cloudCover":0.93,"uvIndex":0,"visibility":10,"ozone":323.7},{"time":1584036000,"summary":"Overcast","icon":"cloudy","precipIntensity":0.0017,"precipProbability":0.07,"precipType":"rain","temperature":55.24,"apparentTemperature":55.24,"dewPoint":46.62,"humidity":0.73,"pressure":1015.5,"windSpeed":12.85,"windGust":33.5,"windBearing":260,"cloudCover":0.95,"uvIndex":0,"visibility":10,"ozone":325.4},{"time":1584039600,"summary":"Overcast","icon":"cloudy","precipIntensity":0.0018,"precipProbability":0.09,"precipType":"rain","temperature":53.83,"apparentTemperature":53.83,"dewPoint":45.66,"humidity":0.74,"pressure":1016.1,"windSpeed":11.23,"windGust":30.52,"windBearing":196,"cloudCover":0.96,"uvIndex":0,"visibility":10,"ozone":327.1},{"time":1584043200,"summary":"Overcast","icon":"cloudy","precipIntensity":0.0022,"precipProbability":0.11,"precipType":"rain","temperature":52.48,"apparentTemperature":52.48,"dewPoint":45.39,"humidity":0.77,"pressure":1016.6,"windSpeed":9.31,"windGust":26,"windBearing":346,"cloudCover":0.98,"uvIndex":0,"visibility":10,"ozone":328.6},{"time":1584046800,"summary":"Overcast","icon":"cloudy","precipIntensity":0.003,"precipProbability":0.15,"precipType":"rain","temperature":51.21,"apparentTemperature":51.21,"dewPoint":45.36,"humidity":0.8,"pressure":1017.1,"windSpeed":7.93,"windGust":22.46,"windBearing":278,"cloudCover":0.99,"uvIndex":0,"visibility":10,"ozone":329.5},{"time":1584050400,"summary":"Overcast","icon":"cloudy","precipIntensity":0.0049,"precipProbability":0.19,"precipType":"rain","temperature":50.11,"apparentTemperature":50.11,"dewPoint":45.49,"humidity":0.84,"pressure":1017.3,"windSpeed":7.64,"windGust":20.94,"windBearing":236,"cloudCover":0.99,"uvIndex":0,"visibility":10,"ozone":329.5},{"time":1584054000,"summary":"Possible Drizzle","icon":"rain","precipIntensity":0.009,"precipProbability":0.25,"precipType":"rain","temperature":48.98,"apparentTemperature":45.57,"dewPoint":45.44,"humidity":0.88,"pressure":1017.5,"windSpeed":7.9,"windGust":20.39,"windBearing":319,"cloudCover":0.99,"uvIndex":0,"visibility":10,"ozone":329},{"time":1584057600,"summary":"Possible Drizzle","icon":"rain","precipIntensity":0.0142,"precipProbability":0.38,"precipType":"rain","temperature":47.89,"apparentTemperature":44.17,"dewPoint":45.08,"humidity":0.9,"pressure":1017.6,"windSpeed":8.05,"windGust":20.28,"windBearing":302,"cloudCover":0.99,"uvIndex":0,"visibility":9.799,"ozone":328.4},{"time":1584061200,"summary":"Possible Light Rain","icon":"rain","precipIntensity":0.0183,"precipProbability":0.45,"precipType":"rain","temperature":46.6,"apparentTemperature":42.72,"dewPoint":44.01,"humidity":0.91,"pressure":1017.7,"windSpeed":7.79,"windGust":20.53,"windBearing":296,"cloudCover":1,"uvIndex":0,"visibility":9.372,"ozone":327.6},{"time":1584064800,"summary":"Possible Light Rain","icon":"rain","precipIntensity":0.0222,"precipProbability":0.48,"precipType":"rain","temperature":45.32,"apparentTemperature":41.33,"dewPoint":42.72,"humidity":0.91,"pressure":1017.7,"windSpeed":7.43,"windGust":21.18,"windBearing":296,"cloudCover":1,"uvIndex":0,"visibility":9.275,"ozone":326.7}]},"daily":{"summary":"Light rain today and Friday.","icon":"rain","data":[{"time":1583881200,"summary":"Possible drizzle in the morning.","icon":"rain","sunriseTime":1583904900,"sunsetTime":1583946900,"moonPhase":0.58,"precipIntensity":0.0019,"precipIntensityMax":0.0077,"precipIntensityMaxTime":1583895300,"precipProbability":0.47,"precipType":"rain","temperatureHigh":56.51,"temperatureHighTime":1583941860,"temperatureLow":48.6,"temperatureLowTime":1583988600,"apparentTemperatureHigh":56.01,"apparentTemperatureHighTime":1583941860,"apparentTemperatureLow":44.38,"apparentTemperatureLowTime":1583991300,"dewPoint":47.76,"humidity":0.86,"pressure":1018.1,"windSpeed":14.75,"windGust":38.98,"windGustTime":1583881200,"windBearing":255,"cloudCover":0.92,"uvIndex":3,"uvIndexTime":1583926020,"visibility":10,"ozone":316.1,"temperatureMin":48.24,"temperatureMinTime":1583881200,"temperatureMax":56.51,"temperatureMaxTime":1583941860,"apparentTemperatureMin":42.28,"apparentTemperatureMinTime":1583881200,"apparentTemperatureMax":56.01,"apparentTemperatureMaxTime":1583941860},{"time":1583967600,"summary":"Possible light rain overnight.","icon":"cloudy","sunriseTime":1583991180,"sunsetTime":1584033360,"moonPhase":0.62,"precipIntensity":0.001,"precipIntensityMax":0.009,"precipIntensityMaxTime":1584054000,"precipProbability":0.25,"precipType":"rain","temperatureHigh":59.82,"temperatureHighTime":1584019320,"temperatureLow":40.93,"temperatureLowTime":1584081300,"apparentTemperatureHigh":59.32,"apparentTemperatureHighTime":1584019320,"apparentTemperatureLow":35.31,"apparentTemperatureLowTime":1584082800,"dewPoint":46.9,"humidity":0.79,"pressure":1016.7,"windSpeed":12.28,"windGust":35.16,"windGustTime":1584014100,"windBearing":253,"cloudCover":0.84,"uvIndex":3,"uvIndexTime":1584012420,"visibility":10,"ozone":315.7,"temperatureMin":48.49,"temperatureMinTime":1584054000,"temperatureMax":59.82,"temperatureMaxTime":1584019320,"apparentTemperatureMin":44.38,"apparentTemperatureMinTime":1583991300,"apparentTemperatureMax":59.32,"apparentTemperatureMaxTime":1584019320},{"time":1584054000,"summary":"Light rain in the morning.","icon":"rain","sunriseTime":1584077460,"sunsetTime":1584119880,"moonPhase":0.66,"precipIntensity":0.01,"precipIntensityMax":0.0387,"precipIntensityMaxTime":1584077460,"precipProbability":0.72,"precipType":"rain","temperatureHigh":50.95,"temperatureHighTime":1584109440,"temperatureLow":31.42,"temperatureLowTime":1584163320,"apparentTemperatureHigh":51.12,"apparentTemperatureHighTime":1584109680,"apparentTemperatureLow":29.1,"apparentTemperatureLowTime":1584157440,"dewPoint":36.56,"humidity":0.76,"pressure":1020.8,"windSpeed":10.13,"windGust":32.92,"windGustTime":1584091500,"windBearing":280,"cloudCover":0.61,"uvIndex":3,"uvIndexTime":1584099120,"visibility":9.719,"ozone":354.1,"temperatureMin":35.7,"temperatureMinTime":1584140400,"temperatureMax":50.95,"temperatureMaxTime":1584109440,"apparentTemperatureMin":32.3,"apparentTemperatureMinTime":1584140400,"apparentTemperatureMax":51.12,"apparentTemperatureMaxTime":1584109680},{"time":1584140400,"summary":"Mostly cloudy throughout the day.","icon":"partly-cloudy-day","sunriseTime":1584163740,"sunsetTime":1584206340,"moonPhase":0.69,"precipIntensity":0.0002,"precipIntensityMax":0.0006,"precipIntensityMaxTime":1584165780,"precipProbability":0.12,"precipType":"rain","temperatureHigh":47.84,"temperatureHighTime":1584196380,"temperatureLow":26.97,"temperatureLowTime":1584250140,"apparentTemperatureHigh":44.74,"apparentTemperatureHighTime":1584196140,"apparentTemperatureLow":22.65,"apparentTemperatureLowTime":1584250380,"dewPoint":30.59,"humidity":0.76,"pressure":1025.2,"windSpeed":4.1,"windGust":16.98,"windGustTime":1584140400,"windBearing":88,"cloudCover":0.5,"uvIndex":2,"uvIndexTime":1584184260,"visibility":9.992,"ozone":395.7,"temperatureMin":31.42,"temperatureMinTime":1584163320,"temperatureMax":47.84,"temperatureMaxTime":1584196380,"apparentTemperatureMin":28.05,"apparentTemperatureMinTime":1584226800,"apparentTemperatureMax":44.74,"apparentTemperatureMaxTime":1584196140},{"time":1584226800,"summary":"Clear throughout the day.","icon":"clear-day","sunriseTime":1584250020,"sunsetTime":1584292800,"moonPhase":0.73,"precipIntensity":0,"precipIntensityMax":0.0002,"precipIntensityMaxTime":1584228600,"precipProbability":0.01,"temperatureHigh":58.15,"temperatureHighTime":1584281700,"temperatureLow":30.31,"temperatureLowTime":1584334920,"apparentTemperatureHigh":57.65,"apparentTemperatureHighTime":1584281700,"apparentTemperatureLow":26.22,"apparentTemperatureLowTime":1584334800,"dewPoint":32.5,"humidity":0.74,"pressure":1021.5,"windSpeed":5.24,"windGust":12.46,"windGustTime":1584282720,"windBearing":107,"cloudCover":0.04,"uvIndex":3,"uvIndexTime":1584271320,"visibility":10,"ozone":377.8,"temperatureMin":26.97,"temperatureMinTime":1584250140,"temperatureMax":58.15,"temperatureMaxTime":1584281700,"apparentTemperatureMin":22.65,"apparentTemperatureMinTime":1584250380,"apparentTemperatureMax":57.65,"apparentTemperatureMaxTime":1584281700},{"time":1584313200,"summary":"Clear throughout the day.","icon":"clear-day","sunriseTime":1584336300,"sunsetTime":1584379320,"moonPhase":0.76,"precipIntensity":0.0002,"precipIntensityMax":0.0004,"precipIntensityMaxTime":1584381600,"precipProbability":0.03,"precipType":"rain","temperatureHigh":61.73,"temperatureHighTime":1584366480,"temperatureLow":37.27,"temperatureLowTime":1584421620,"apparentTemperatureHigh":61.23,"apparentTemperatureHighTime":1584366480,"apparentTemperatureLow":34.61,"apparentTemperatureLowTime":1584421500,"dewPoint":36.54,"humidity":0.73,"pressure":1020.3,"windSpeed":3.56,"windGust":6.82,"windGustTime":1584327000,"windBearing":191,"cloudCover":0.26,"uvIndex":3,"uvIndexTime":1584356940,"visibility":10,"ozone":351.2,"temperatureMin":30.31,"temperatureMinTime":1584334920,"temperatureMax":61.73,"temperatureMaxTime":1584366480,"apparentTemperatureMin":26.22,"apparentTemperatureMinTime":1584334800,"apparentTemperatureMax":61.23,"apparentTemperatureMaxTime":1584366480},{"time":1584399600,"summary":"Mostly cloudy throughout the day.","icon":"partly-cloudy-day","sunriseTime":1584422580,"sunsetTime":1584465780,"moonPhase":0.8,"precipIntensity":0.0002,"precipIntensityMax":0.0003,"precipIntensityMaxTime":1584442800,"precipProbability":0.06,"precipType":"rain","temperatureHigh":62.56,"temperatureHighTime":1584453600,"temperatureLow":37.08,"temperatureLowTime":1584508980,"apparentTemperatureHigh":62.06,"apparentTemperatureHighTime":1584453600,"apparentTemperatureLow":34.71,"apparentTemperatureLowTime":1584509040,"dewPoint":42.04,"humidity":0.79,"pressure":1026.9,"windSpeed":3.71,"windGust":17.44,"windGustTime":1584486000,"windBearing":131,"cloudCover":0.6,"uvIndex":3,"uvIndexTime":1584444480,"visibility":10,"ozone":361.2,"temperatureMin":37.27,"temperatureMinTime":1584421620,"temperatureMax":62.56,"temperatureMaxTime":1584453600,"apparentTemperatureMin":34.61,"apparentTemperatureMinTime":1584421500,"apparentTemperatureMax":62.06,"apparentTemperatureMaxTime":1584453600},{"time":1584486000,"summary":"Clear throughout the day.","icon":"clear-day","sunriseTime":1584508860,"sunsetTime":1584552300,"moonPhase":0.83,"precipIntensity":0.0001,"precipIntensityMax":0.0004,"precipIntensityMaxTime":1584500400,"precipProbability":0.04,"precipType":"rain","temperatureHigh":63.11,"temperatureHighTime":1584539940,"temperatureLow":38.37,"temperatureLowTime":1584594420,"apparentTemperatureHigh":62.61,"apparentTemperatureHighTime":1584539940,"apparentTemperatureLow":38.86,"apparentTemperatureLowTime":1584594420,"dewPoint":44.27,"humidity":0.86,"pressure":1028.9,"windSpeed":5.03,"windGust":19.55,"windGustTime":1584490740,"windBearing":95,"cloudCover":0.02,"uvIndex":4,"uvIndexTime":1584530520,"visibility":10,"ozone":367.2,"temperatureMin":37.08,"temperatureMinTime":1584508980,"temperatureMax":63.11,"temperatureMaxTime":1584539940,"apparentTemperatureMin":34.71,"apparentTemperatureMinTime":1584509040,"apparentTemperatureMax":62.61,"apparentTemperatureMaxTime":1584539940}]},"flags":{"sources":["meteoalarm","cmc","gfs","icon","isd","madis"],"meteoalarm-license":"Based on data from EUMETNET - MeteoAlarm [https://www.meteoalarm.eu/]. Time delays between this website and the MeteoAlarm website are possible; for the most up to date information about alert levels as published by the participating National Meteorological Services please use the MeteoAlarm website.","nearest-station":4.123,"units":"us"},"offset":1},
    locationOptions: [],
    error: null
}

export default function(state = initState, action) {
    switch(action.type) {
        case("SET_WEATHER"):
            return {...state, weather: action.weather};
        case("CLEAR_WEATHER"):
            return {...state, weather: null}                    
        case("SET_ERROR"):
            return {...state, error: action.error};
        case("CLEAR_ERROR"):
            return {...state, error: null}
        default:
            return state
    }
}