function addCallback(a, b, callback) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    callback(new Error('Arguments must be integers'));
  } else {
    callback(null, a + b);
  }
}

function addAsync(a, b) {
  return new Promise((resolve, reject) => {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
      reject(new Error('Arguments must be integers'));
    } else {
      resolve(a + b);
    }
  });
}

// 🦉 Los alle oefeningen hieronder op zonder gebruik te maken van callbacks, 🦉
// 🦉 then of catch - tenzij door ons aan aangegeven                          🦉
// 🦉 Als je écht uitdaging wil, vermijd GitHub Copilot, e.d.                 🦉
// 🦉 Verwijder eventuele lege return-statements                              🦉
// 🦉 Voer `yarn test` uit om jouw resultaten te controleren                  🦉

/**
 * Gebruik de functie `addCallback` om de twee gegeven getallen op te tellen.
 * Deze functie verwacht een callbackfunctie als laatste argument. Deze
 * functie wordt aangeroepen met een error als eerste argument en het resultaat
 * als tweede argument.
 * 
 * Bereken de som van de twee getallen en roep de meegegeven callbackfunctie
 * aan met het dubbel van het resultaat.
 *
 * @param {number} getal1 - Het eerste getal
 * @param {number} getal2 - Het tweede getal
 * @param {function} callback - De callbackfunctie
 *
 * @returns {void} Retourneer niets
 */
function oefening21(getal1, getal2, callback) {
  addCallback(getal1, getal2, (err, result) => {
    callback(result * 2);
  });
}

/**
 * Doe hetzelfde als in oefening21, maar zorg ervoor dat de callbackfunctie
 * een error als eerste argument krijgt als er een error optreedt en het
 * resultaat als tweede argument.
 *
 * @param {number} getal1 - Het eerste getal
 * @param {number} getal2 - Het tweede getal
 * @param {function} callback - De callbackfunctie (parameters: error, result)
 *
 * @returns {void} Retourneer niets
 */
function oefening22(getal1, getal2, callback) {
  addCallback(getal1, getal2, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result * 2);
    }
  });
}

/**
 * Doe hetzelfde maar nu met `addAsync`. Deze functie geeft een Promise terug,
 * gebruik `then` en `catch` om de meegegeven callbackfunctie aan te roepen.
 *
 * @param {number} getal1 - Het eerste getal
 * @param {number} getal2 - Het tweede getal
 * @param {function} callback - De callbackfunctie (parameters: error, result)
 *
 * @returns {void} Retourneer niets
 */
function oefening22(getal1, getal2, callback) {
  addAsync(getal1, getal2)
    .then((result) => callback(null, result * 2))
    .catch((err) => callback(err));
}

/**
 * Callbacks en then/catch worden niet meer aangeraden in moderne JavaScript.
 * In plaats daarvan kan je `async` en `await` gebruiken.
 * Doe hetzelfde als in oefening21 maar nu met `async` en `await`. Retourneer
 * het resultaat van de optelling.
 * 
 * @param {number} getal1 - Het eerste getal
 * @param {number} getal2 - Het tweede getal
 *
 * @returns {Promise<number>} Het resultaat van de optelling
 */
async function oefening23(getal1, getal2) {
  return await addAsync(getal1, getal2) * 2;
}

/**
 * Doe hetzelfde als in oefening24 maar zorg ervoor dat de message van een eventuele
 * error wordt geretourneerd.
 *
 * @param {number} getal1 - Het eerste getal
 * @param {number} getal2 - Het tweede getal
 * 
 * @returns {Promise<number | string>} Het resultaat of de error message
 */
async function oefening24(getal1, getal2) {
  try {
    return await addAsync(getal1, getal2) * 2;
  } catch (err) {
    return err.message;
  }
}

/**
 * Maak een functie die een Promise teruggeeft (je kan kijken naar bv. `addAsync`).
 * Deze Promise moet een error gooien als het meegegeven getal kleiner is dan 0.
 * De verwachte error is 'Getal moet groter of gelijk zijn aan 0'. Als het getal
 * groter of gelijk is aan 0, moet de Promise het getal teruggeven.
 *
 * @param {Promise<number>} getal - Het getal
 */
async function oefening25(getal) {
  return new Promise((resolve, reject) => {
    if (getal < 0) {
      reject(new Error('Getal moet groter of gelijk zijn aan 0'));
    } else {
      resolve(getal);
    }
  });
}

module.exports = {
  oefening21,
  oefening22,
  oefening23,
  oefening24,
  oefening25,
};
