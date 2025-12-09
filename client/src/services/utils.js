export function shortenText(text, maxLength = 100, preserveWords = true) {
    if (!text || text.length <= maxLength) {
        return text;
    }

    const trimmed = text.trim();

    if (!preserveWords) {
        return trimmed.substring(0, maxLength) + "...";
    }

    // Preserve whole words
    let shortened = trimmed.substring(0, maxLength);

    // If the next character continues a word, remove partial word
    if (trimmed[maxLength] && trimmed[maxLength] !== " ") {
        shortened = shortened.substring(0, shortened.lastIndexOf(" "));
    }

    return shortened + "...";
}

export function getRandomObjects(list) {
  const shuffled = [...list].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 5);
}
