var Users = ["Admin", "Eric", "Taha", "Munir", "Shoukat"];
for (var _i = 0, Users_1 = Users; _i < Users_1.length; _i++) {
    var individualUsers = Users_1[_i];
    if (individualUsers == 'Admin') {
        console.log("Hello ".concat(individualUsers, " would you like to see report "));
    }
    else {
        console.log("Hello ".concat(individualUsers, " thanks for logging in again"));
    }
}
;
