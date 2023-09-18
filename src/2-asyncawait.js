//-------------------------------------------------------------------
//  🛑 NIETS WIJZIGEN 🛑
//
//  Deze twee functies heb je verderop in de oefeningen nodig.
//
//-------------------------------------------------------------------

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
 * Gebruik de functie `addAsync` om twee getallen op te tellen. Deze functie
 * geeft een Promise terug. Gebruik `then` en `catch` om de meegegeven
 * callbackfunctie aan te roepen. De callbackfunctie wordt aangeroepen met
 * een error als eerste argument en het resultaat als tweede argument. Indien
 * er geen error is, verwacht de callback null als eerste argument.
 *
 * @param {number} getal1 - Het eerste getal
 * @param {number} getal2 - Het tweede getal
 * @param {function} callback - De callbackfunctie (parameters: error, result)
 *
 * @returns {void} Retourneer niets
 */
function oefening21(getal1, getal2, callback) {
  callback(null, 0);
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
async function oefening22(getal1, getal2) {
  return null;
}

/**
 * Doe hetzelfde als in oefening22 maar zorg ervoor dat de message van een eventuele
 * error wordt geretourneerd.
 *
 * @param {number} getal1 - Het eerste getal
 * @param {number} getal2 - Het tweede getal
 * 
 * @returns {Promise<number | string>} Het resultaat of de error message
 */
async function oefening23(getal1, getal2) {
  return null;
}

/**
 * Maak een functie die een Promise teruggeeft (je kan kijken naar bv. `addAsync`).
 * Deze Promise moet een error gooien als het meegegeven getal kleiner is dan 0.
 * De verwachte error is 'Getal moet groter of gelijk zijn aan 0'. Als het getal
 * groter of gelijk is aan 0, moet de Promise het getal teruggeven.
 *
 * @param {Promise<number>} getal - Het getal
 */
async function oefening24(getal) {
  return null;
}

module.exports = {
  oefening21,
  oefening22,
  oefening23,
  oefening24,
};
