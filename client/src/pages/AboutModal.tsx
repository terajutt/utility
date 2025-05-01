interface AboutModalProps {
  onClose: () => void;
}

export default function AboutModal({ onClose }: AboutModalProps) {
  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">About UtilityX</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="prose prose-sm">
          <p>UtilityX is a collection of free online calculators and utilities designed to help with everyday tasks and conversions.</p>
          <p>All tools are designed to work offline where possible (except API-dependent features like the Link Shortener), and no user data is collected or stored.</p>
          <p className="font-medium mt-4">Features:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>GST Calculator</li>
            <li>Standard Calculator</li>
            <li>BMI Calculator</li>
            <li>Age Calculator</li>
            <li>QR Code Generator</li>
            <li>Link Shortener</li>
            <li>Text Tools</li>
            <li>Unit Converter</li>
          </ul>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-200 text-center text-gray-500 text-sm">
          Made with <i className="fas fa-heart text-red-500"></i> by Haiwan
        </div>
      </div>
    </div>
  );
}
