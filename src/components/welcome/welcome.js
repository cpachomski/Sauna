const sentences = [
    "In the beginning, the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.",
    "There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable. There is another theory which states that this has already happened.",
    "A common mistake that people make when trying to design something completely foolproof is to underestiate the ingenuity of compelete fools.",
    "Time is an illusion. Lunchtime doubly so."
];

export default sentences[Math.floor(Math.random() * sentences.length)];
