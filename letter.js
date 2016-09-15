var Letter = function(letter) {
    this.char = letter;
    this.letterRender = function() {
        if (this.appear) {
            return this.char;
        } else {
            var space = " _ ";
            return space;
        }
    }
};
module.exports = Letter;
