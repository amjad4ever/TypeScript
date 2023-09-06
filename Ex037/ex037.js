function make_ashirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("".concat(size, " ").concat(message));
}
;
make_ashirt();
make_ashirt("Small");
make_ashirt("Medium", "I love Pakistan");
