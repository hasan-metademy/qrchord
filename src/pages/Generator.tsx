import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { HexColorPicker } from 'react-colorful';
import { Upload, Download, Image as ImageIcon, AlertCircle } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

const Generator: React.FC = () => {
  const [qrContent, setQrContent] = useState('');
  const [qrType, setQrType] = useState('url');
  const [fgColor, setFgColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [logo, setLogo] = useState<string | null>(null);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [activeColor, setActiveColor] = useState<'fg' | 'bg'>('fg');
  const [error, setError] = useState<string | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setLogo(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: { 'image/*': [] }, maxFiles: 1 });

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const content = e.target.value;
    setQrContent(content);
    if (content.length > 2953) {
      setError('Content is too long for QR code generation. Please reduce the length.');
    } else {
      setError(null);
    }
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQrType(e.target.value);
  };

  const handleColorClick = (colorType: 'fg' | 'bg') => {
    setActiveColor(colorType);
    setShowColorPicker(true);
  };

  const handleColorChange = (color: string) => {
    if (activeColor === 'fg') {
      setFgColor(color);
    } else {
      setBgColor(color);
    }
  };

  const downloadQRCode = () => {
    const canvas = document.getElementById('qr-code') as HTMLCanvasElement;
    if (canvas) {
      const pngUrl = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      let downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = 'qrcode.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">QR Code Generator</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="card">
          <div className="mb-6">
            <label htmlFor="qr-type" className="label">QR Code Type</label>
            <select
              id="qr-type"
              className="input"
              value={qrType}
              onChange={handleTypeChange}
            >
              <option value="url">URL</option>
              <option value="text">Text</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="wifi">WiFi</option>
              <option value="sms">SMS</option>
              <option value="vcard">vCard</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="qr-content" className="label">Content</label>
            {qrType === 'text' ? (
              <textarea
                id="qr-content"
                className="input"
                rows={4}
                value={qrContent}
                onChange={handleContentChange}
                placeholder="Enter your text here"
              />
            ) : (
              <input
                type="text"
                id="qr-content"
                className="input"
                value={qrContent}
                onChange={handleContentChange}
                placeholder={`Enter ${qrType} here`}
              />
            )}
            {error && (
              <div className="mt-2 text-red-500 flex items-center">
                <AlertCircle className="mr-1" size={16} />
                <span>{error}</span>
              </div>
            )}
          </div>
          <div className="mb-6">
            <label className="label">Colors</label>
            <div className="flex space-x-4">
              <button
                className="flex-1 py-2 px-3 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-300"
                onClick={() => handleColorClick('fg')}
              >
                Foreground
                <div
                  className="w-6 h-6 ml-2 rounded-full inline-block align-middle"
                  style={{ backgroundColor: fgColor }}
                />
              </button>
              <button
                className="flex-1 py-2 px-3 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-300"
                onClick={() => handleColorClick('bg')}
              >
                Background
                <div
                  className="w-6 h-6 ml-2 rounded-full inline-block align-middle"
                  style={{ backgroundColor: bgColor }}
                />
              </button>
            </div>
            {showColorPicker && (
              <div className="mt-4">
                <HexColorPicker
                  color={activeColor === 'fg' ? fgColor : bgColor}
                  onChange={handleColorChange}
                />
                <button
                  className="mt-2 px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-300"
                  onClick={() => setShowColorPicker(false)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
          <div className="mb-6">
            <label className="label">Logo (optional)</label>
            <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer hover:border-primary transition duration-300">
              <input {...getInputProps()} />
              {logo ? (
                <div className="flex items-center justify-center">
                  <img src={logo} alt="Logo" className="max-w-full max-h-24" />
                  <button
                    className="ml-2 text-red-500 hover:text-red-600 transition duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLogo(null);
                    }}
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <Upload className="mb-2 text-gray-400" />
                  <p className="text-gray-500">Drag & drop a logo here, or click to select one</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="card mb-6">
            {error ? (
              <div className="flex items-center justify-center h-64 text-red-500">
                <AlertCircle className="mr-2" size={24} />
                <span>Unable to generate QR code: Content is too long</span>
              </div>
            ) : (
              <div className="flex justify-center">
                <QRCodeSVG
                  id="qr-code"
                  value={qrContent || 'https://example.com'}
                  size={256}
                  fgColor={fgColor}
                  bgColor={bgColor}
                  level="H"
                  includeMargin
                  imageSettings={
                    logo
                      ? {
                          src: logo,
                          x: undefined,
                          y: undefined,
                          height: 24,
                          width: 24,
                          excavate: true,
                        }
                      : undefined
                  }
                />
              </div>
            )}
          </div>
          <button
            className="btn-primary w-full flex items-center justify-center"
            onClick={downloadQRCode}
            disabled={!!error}
          >
            <Download className="mr-2" />
            Download QR Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default Generator;