import { useState } from 'react';
import { Link } from 'wouter';

export default function QrCodeGenerator() {
  const [qrText, setQrText] = useState<string>('');
  const [qrCodeURL, setQrCodeURL] = useState<string>('');

  const generateQRCode = () => {
    if (!qrText) return;
    
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrText)}`;
    setQrCodeURL(apiUrl);
  };

  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-6">
        <Link href="/">
          <a className="text-gray-600 hover:text-primary mr-3">
            <i className="fas fa-arrow-left"></i>
          </a>
        </Link>
        <h2 className="text-2xl font-bold">QR Code Generator</h2>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
        <p className="text-gray-600 mb-6">Generate a QR code from text or URL that can be scanned with a smartphone.</p>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="qr-text" className="block text-sm font-medium text-gray-700 mb-1">Text or URL</label>
            <input 
              type="text" 
              id="qr-text"
              value={qrText}
              onChange={(e) => setQrText(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
              placeholder="Enter text or paste URL"
            />
          </div>
          
          <button 
            onClick={generateQRCode}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition w-full md:w-auto"
          >
            Generate QR Code
          </button>
          
          {qrCodeURL && (
            <div className="mt-6 border-t border-gray-100 pt-6">
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                  <img src={qrCodeURL} alt="Generated QR Code" className="w-48 h-48" />
                </div>
                <a 
                  href={qrCodeURL} 
                  download="qrcode.png" 
                  className="mt-4 text-primary hover:underline flex items-center"
                >
                  <i className="fas fa-download mr-2"></i> Download QR Code
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
