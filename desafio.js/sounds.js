export function sounds() {
    const soundForest = new Audio ('./desafio.js/audio.js/Floresta.wav');

    const soundRain = new Audio ('./desafio.js/audio.js/Chuva.wav');

    const soundCoffeshop = new Audio('./desafio.js/audio.js/Cafeteria.wav');

    const soundFirePlace = new Audio('./desafio.js/audio.js/Lareira.wav');

    soundCoffeshop.loop;
    soundFirePlace.loop;
    soundRain.loop;
    soundForest.loop;

    return {
        soundCoffeshop,
        soundFirePlace,
        soundForest,
        soundRain,
    };
    }