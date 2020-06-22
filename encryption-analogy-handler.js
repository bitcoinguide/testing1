// TODO: Set up click handlers that listen on the "Encrypt" buttons, e.g.:
// <button id="encrypt1" onclick="handleFirstEncryptionClick()">Encrypt</button>
// <button id="encrypt2" onclick="handleSecondEncryptionClick()">Encrypt</button>

/**
 * Handles clicks of the first Encrypt button by updating the phrase UI based on
 * the given guess.
 */
function handleFirstEncryptionClick() {
    // TODO: Read in the guess from the input box instead of hardcoding.
    const guess = 1234;
    // TODO: (optional) One optimization we could do if page load is slow is to
    // defer permutation generation/loading until this point.
    const encryptedPhrase = FIRST_MAPPING[guess];
    // TODO: Update the UI to show encryptedPhrase.
    if (encryptedPhrase === CANONICAL) {
        // Optional TODO: Generally, when the user "accomplishes" an action, we
        // disable the input box.
        // TODO: Show some success message?
    }
}

/**
 * Handles clicks of the second Encrypt button by updating the phrase UI based on
 * the given guess.
 */
function handleSecondEncryptionClick() {
    // TODO: Read in the guess from the input box instead of hardcoding.
    const guess = 1234;
    // TODO: (optional) One optimization we could do if page load is slow is to
    // defer permutation generation/loading until this point.
    const encryptedPhrase = SECOND_MAPPING[guess];
    // TODO: Update the UI to show encryptedPhrase.
    if (encryptedPhrase === CANONICAL) {
        // Optional TODO: Generally, when the user "accomplishes" an action, we
        // disable the input box.
        // TODO: Show some success message?
    }
}