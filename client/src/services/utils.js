export function shortenText(text, maxLength = 100, preserveWords = true) {
    if (!text || text.length <= maxLength) {
        return text;
    }

    const trimmed = text.trim();

    if (!preserveWords) {
        return trimmed.substring(0, maxLength) + "...";
    }

    let shortened = trimmed.substring(0, maxLength);

    if (trimmed[maxLength] && trimmed[maxLength] !== " ") {
        shortened = shortened.substring(0, shortened.lastIndexOf(" "));
    }

    return shortened + "...";
}

export function getRandomObjects(list) {
  const shuffled = [...list].sort(() => Math.random() - .4);
  return shuffled.slice(0, 4);
}
