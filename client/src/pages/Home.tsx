import ToolCard from '@/components/ToolCard';

export default function Home() {
  const tools = [
    {
      title: 'GST Calculator',
      description: 'Calculate GST amount and total price based on original value.',
      icon: 'fa-percent',
      path: '/gst-calculator',
      delay: 0
    },
    {
      title: 'Calculator',
      description: 'Standard calculator with basic arithmetic operations.',
      icon: 'fa-calculator',
      path: '/calculator',
      delay: 50
    },
    {
      title: 'BMI Calculator',
      description: 'Calculate your Body Mass Index and weight category.',
      icon: 'fa-weight',
      path: '/bmi-calculator',
      delay: 100
    },
    {
      title: 'Age Calculator',
      description: 'Calculate your exact age in years, months, and days.',
      icon: 'fa-calendar-alt',
      path: '/age-calculator',
      delay: 150
    },
    {
      title: 'QR Code Generator',
      description: 'Generate QR codes from text or URLs.',
      icon: 'fa-qrcode',
      path: '/qr-code-generator',
      delay: 200
    },
    {
      title: 'Link Shortener',
      description: 'Shorten long URLs for easier sharing.',
      icon: 'fa-link',
      path: '/link-shortener',
      delay: 250
    },
    {
      title: 'Text Tools',
      description: 'Convert case, remove spaces, count words, and more.',
      icon: 'fa-font',
      path: '/text-tools',
      delay: 300
    },
    {
      title: 'Unit Converter',
      description: 'Convert between various units of measurement.',
      icon: 'fa-exchange-alt',
      path: '/unit-converter',
      delay: 350
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">All-in-One Utility Tools</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">A collection of free online calculators and utilities to help with everyday tasks and conversions.</p>
      </div>

      {/* Tool Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tools.map((tool, index) => (
          <ToolCard
            key={index}
            title={tool.title}
            description={tool.description}
            icon={tool.icon}
            path={tool.path}
            delay={tool.delay}
          />
        ))}
      </div>
    </div>
  );
}
