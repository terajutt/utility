// Text Case Conversions
export function convertToUpperCase(text: string): string {
  return text.toUpperCase();
}

export function convertToLowerCase(text: string): string {
  return text.toLowerCase();
}

export function convertToTitleCase(text: string): string {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function convertToSentenceCase(text: string): string {
  return text.toLowerCase()
    .replace(/(^\s*\w|[.!?]\s*\w)/g, function(c) {
      return c.toUpperCase();
    });
}

// Space Handling
export function removeExtraSpaces(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

export function removeAllSpaces(text: string): string {
  return text.replace(/\s+/g, '');
}

// Text Analysis
export function analyzeText(text: string) {
  return {
    characters: text.length,
    charactersNoSpaces: text.replace(/\s/g, '').length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
    lines: text.split(/\r\n|\r|\n/).length
  };
}
