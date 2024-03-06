// const esc_pattern = sequence => {
const escapePattern = sequence => {
    return sequence.replace(/[\-\[\]{}()*+?.,\\$\^|#\s]/g, '\\$&');
};

// const parse_pattern = (sequence, advanced) => {
const parsePattern = (sequence, advanced) => {
    if (!advanced) {
        // return esc_pattern(sequence);
        return escapePattern(sequence);
    }

    if (sequence.substr(0, 3) === 're:') {
        return sequence.substr(3);
    }

    return sequence.trim().split(/\s+/).map(part => {
        // return part.split('').map(char => esc_pattern(char)).join('.*?');
        return part.split('').map(char => escapePattern(char)).join('.*?');
    }).join('|');
};

module.exports = {
    // parsePattern: parse_pattern
    parsePattern
};
