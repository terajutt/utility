import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { 
  convertToUpperCase, 
  convertToLowerCase, 
  convertToTitleCase, 
  convertToSentenceCase,
  removeExtraSpaces,
  removeAllSpaces,
  analyzeText
} from '@/utils/textTools';

interface TextStats {
  characters: number;
  charactersNoSpaces: number;
  words: number;
  lines: number;
}

export default function TextTools() {
  const [textInput, setTextInput] = useState<string>('');
  const [textStats, setTextStats] = useState<TextStats>({
    characters: 0,
    charactersNoSpaces: 0,
    words: 0,
    lines: 0
  });

  useEffect(() => {
    setTextStats(analyzeText(textInput));
  }, [textInput]);

  const handleConvertCase = (type: string) => {
    if (!textInput) return;
    
    switch (type) {
      case 'upper':
        setTextInput(convertToUpperCase(textInput));
        break;
      case 'lower':
        setTextInput(convertToLowerCase(textInput));
        break;
      case 'title':
        setTextInput(convertToTitleCase(textInput));
        break;
      case 'sentence':
        setTextInput(convertToSentenceCase(textInput));
        break;
    }
  };

  const handleRemoveExtraSpaces = () => {
    setTextInput(removeExtraSpaces(textInput));
  };

  const handleRemoveAllSpaces = () => {
    setTextInput(removeAllSpaces(textInput));
  };

  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-6">
        <Link href="/">
          <a className="text-gray-600 hover:text-primary mr-3">
            <i className="fas fa-arrow-left"></i>
          </a>
        </Link>
        <h2 className="text-2xl font-bold">Text Tools</h2>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 max-w-4xl mx-auto">
        <p className="text-gray-600 mb-6">Tools for manipulating and analyzing text content. Convert case, remove spaces, count words, and more.</p>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="text-input" className="block text-sm font-medium text-gray-700 mb-1">Input Text</label>
            <textarea 
              id="text-input"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
              placeholder="Enter or paste your text here..."
            ></textarea>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            <button 
              onClick={() => handleConvertCase('upper')}
              className="text-sm px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition"
            >
              UPPERCASE
            </button>
            <button 
              onClick={() => handleConvertCase('lower')}
              className="text-sm px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition"
            >
              lowercase
            </button>
            <button 
              onClick={() => handleConvertCase('title')}
              className="text-sm px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition"
            >
              Title Case
            </button>
            <button 
              onClick={() => handleConvertCase('sentence')}
              className="text-sm px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition"
            >
              Sentence case
            </button>
            <button 
              onClick={handleRemoveExtraSpaces}
              className="text-sm px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition"
            >
              Remove Spaces
            </button>
            <button 
              onClick={handleRemoveAllSpaces}
              className="text-sm px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition"
            >
              No Spaces
            </button>
          </div>
          
          {textInput.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Characters</p>
                <p className="text-xl font-semibold">{textStats.characters}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Characters (no spaces)</p>
                <p className="text-xl font-semibold">{textStats.charactersNoSpaces}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Words</p>
                <p className="text-xl font-semibold">{textStats.words}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Lines</p>
                <p className="text-xl font-semibold">{textStats.lines}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
