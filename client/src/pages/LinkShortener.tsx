import { useState } from 'react';
import { Link } from 'wouter';
import { useClipboard } from '@/hooks/use-clipboard';

export default function LinkShortener() {
  const [longUrl, setLongUrl] = useState<string>('');
  const [shortUrl, setShortUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  
  const { copy } = useClipboard();

  const shortenURL = async () => {
    if (!longUrl) {
      setError('Please enter a URL to shorten');
      return;
    }
    
    // Validate URL format
    if (!isValidUrl(longUrl)) {
      setError('Please enter a valid URL (e.g., https://example.com)');
      return;
    }
    
    setLoading(true);
    setError('');
    setShortUrl('');
    
    try {
      // Using TinyURL API as an alternative to shrtco.de
      const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`);
      
      if (!response.ok) {
        throw new Error('API request failed');
      }
      
      const data = await response.text();
      
      if (data) {
        setShortUrl(data);
      } else {
        setError('Could not generate a shortened URL. Please try again.');
      }
    } catch (error) {
      setError('Network error. Please check your connection and try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };
  
  // Helper function to validate URL format
  const isValidUrl = (urlString: string): boolean => {
    try {
      new URL(urlString);
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleCopy = () => {
    if (shortUrl) {
      copy(shortUrl);
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-6">
        <Link href="/">
          <div className="text-gray-600 hover:text-primary mr-3 cursor-pointer">
            <i className="fas fa-arrow-left"></i>
          </div>
        </Link>
        <h2 className="text-2xl font-bold">Link Shortener</h2>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
        <p className="text-gray-600 mb-6">Shorten long URLs for easier sharing on social media and messaging.</p>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="long-url" className="block text-sm font-medium text-gray-700 mb-1">Long URL</label>
            <input 
              type="url" 
              id="long-url"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
              placeholder="Paste your long URL here"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={shortenURL}
              disabled={loading}
              className={`px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition flex-1 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {!loading ? (
                <span>Shorten URL</span>
              ) : (
                <span className="flex items-center justify-center">
                  <i className="fas fa-spinner fa-spin mr-2"></i> Processing...
                </span>
              )}
            </button>
          </div>
          
          {shortUrl && (
            <div className="mt-6 pt-6 border-t border-gray-100">
              <h3 className="text-lg font-medium mb-3">Your Shortened URL</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="text" 
                  value={shortUrl}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-gray-50"
                />
                <button 
                  onClick={handleCopy}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition flex items-center justify-center gap-2"
                >
                  <i className="fas fa-copy"></i>
                  <span>Copy</span>
                </button>
              </div>
            </div>
          )}
          
          {error && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
