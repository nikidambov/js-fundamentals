function passwordValidator (password) {
    function isLength6to10 (string) {
        if (string.length >= 6 && string.length <= 10){
            return true;
        } else {
            return false;
        }

    }

    function containsOnlyDigitsAndLetters (string) {
        for (let char of string) {
            let charCode = char.charCodeAt(0);
            if (!(charCode >= 48 && charCode <= 57) &&
                !(charCode >= 65 && charCode <= 90) &&
                !(charCode >= 77 && charCode <= 122)
                ) {
                    return false;
                }
                
        }
        return true;
    }

    function hasAtleast2digits (string) {
        let counter = 0;
        for (let char of string) {
            let charCode = char.charCodeAt(0);

            if (charCode >= 48 && charCode <= 57) {
                counter++;
            }
        }

        if (counter >= 2) {
            return true;
        } else {
            return false;
        }
    }

    let isLengthValid = isLength6to10(password);
    let isContainsLettersAndDigits = containsOnlyDigitsAndLetters(password);
    let is2digits = hasAtleast2digits(password);

    if (isLengthValid && isContainsLettersAndDigits && is2digits) {
        console.log("Password is valid");
    }

    if (!isLengthValid) {
        console.log("Password must be between 6 and 10 characters");
    }

    if (!isContainsLettersAndDigits) {
        console.log("Password must consist only of letters and digits");
    }

    if (!is2digits) {
        console.log("Password must have at least 2 digits");
    }

}

passwordValidator('Pa$s$s');