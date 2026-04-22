import React, { useState, useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';
import { motion } from 'framer-motion';
import { Download, Copy, Printer, Trash2, History, Settings, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const QRGeneratorPage = () => {
  const [url, setUrl] = useState('https://google.com');
  const [qrCode, setQrCode] = useState(null);
  const containerRef = useRef(null);
  const [options, setOptions] = useState({
    width: 300,
    height: 300,
    type: 'svg',
    dotsOptions: { color: '#000000', type: 'square' },
    backgroundOptions: { color: '#ffffff' },
    cornersSquareOptions: { type: 'square', color: '#000000' },
    cornersDotOptions: { type: 'dot', color: '#000000' },
    qrOptions: { errorCorrectionLevel: 'H' }
  });

  useEffect(() => {
    const qr = new QRCodeStyling({
      ...options,
      data: url || ' '
    });
    setQrCode(qr);

    if (containerRef.current) {
      qr.append(containerRef.current);
    }
  }, []);

  useEffect(() => {
    if (qrCode) {
      qrCode.update({ ...options, data: url || ' ' });
    }
  }, [url, options, qrCode]);

  const handleGenerate = () => {
    if (!url) {
      alert('Please enter some content first!');
      return;
    }
    if (qrCode) {
      qrCode.update({ data: url });
    }
  };

  const onShare = async () => {
    if (!url || url.trim() === '') {
      alert('Please enter some content first!');
      return;
    }
    if (qrCode) {
      try {
        const blob = await qrCode.getRawData("png");
        if (!blob) throw new Error("Failed to get blob");
        
        const file = new File([blob], "qr-code.png", { type: "image/png" });
        
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: "QR Code",
            text: "Check out my QR code generated with ZingQR!"
          });
        } else {
          // Fallback: copy to clipboard or just inform user
          alert("Native sharing is not supported in this browser for files. You can download the image instead.");
        }
      } catch (error) {
        console.error('Sharing failed:', error);
        alert('An error occurred while sharing the QR code.');
      }
    }
  };

  const onDownload = async (ext) => {
    if (!url || url.trim() === '') {
      alert('Please enter some content first!');
      return;
    }
    if (qrCode) {
      try {
        await qrCode.download({ extension: ext });
      } catch (error) {
        console.error('Download failed:', error);
        alert('An error occurred while downloading the QR code.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <Link to="/" className="flex items-center text-primary-600 font-bold text-2xl">
            <ArrowLeft className="mr-2" /> Back to Home
          </Link>
          <h1 className="text-2xl font-bold dark:text-white">ZingQR - Free QR Code Generator</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Your Content (URL or Text)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                  placeholder="Enter URL or text here..."
                />
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col items-center">
              <div ref={containerRef} className="bg-white p-4 rounded-lg shadow-inner">
                {/* qr-code-styling attaches here */}
              </div>
              <div className="mt-6 flex gap-3">
                <button onClick={() => onDownload('png')} className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all shadow-sm">
                  <Download className="w-4 h-4 mr-2" /> PNG
                </button>
                <button onClick={() => onDownload('svg')} className="flex items-center px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-all shadow-sm">
                  <Download className="w-4 h-4 mr-2" /> SVG
                </button>
                <button onClick={onShare} className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all shadow-sm">
                  <Share2 className="w-4 h-4 mr-2" /> Share
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 space-y-8 overflow-y-auto max-h-[80vh] custom-scrollbar">
            <div className="flex items-center gap-2 mb-2">
              <Settings className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-semibold dark:text-white">Customization</h2>
            </div>

            {/* Dots Style */}
            <section className="space-y-4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Dots Style</h3>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-3">Pattern Type</label>
                <div className="grid grid-cols-3 gap-2">
                  {['square', 'dots', 'rounded', 'extra-rounded', 'classy', 'classy-rounded'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setOptions({ ...options, dotsOptions: { ...options.dotsOptions, type } })}
                      className={`py-2 px-1 text-[10px] font-bold rounded-lg border transition-all ${options.dotsOptions.type === type
                        ? 'bg-primary-50 border-primary-500 text-primary-700 shadow-sm'
                        : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-primary-300'
                        }`}
                    >
                      {type.replace('-', ' ').toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">QR Color</label>
                <input
                  type="color"
                  value={options.dotsOptions.color}
                  onChange={(e) => {
                    const newColor = e.target.value;
                    setOptions({
                      ...options,
                      dotsOptions: { ...options.dotsOptions, color: newColor },
                      cornersSquareOptions: { ...options.cornersSquareOptions, color: newColor },
                      cornersDotOptions: { ...options.cornersDotOptions, color: newColor }
                    });
                  }}
                  className="w-full h-10 rounded cursor-pointer"
                />
              </div>
            </section>

            {/* Corners Style */}
            <section className="space-y-4 border-t border-slate-100 dark:border-slate-700 pt-6">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Corners Style</h3>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-3">Square Type</label>
                <div className="grid grid-cols-3 gap-2">
                  {['square', 'dot', 'extra-rounded'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setOptions({ ...options, cornersSquareOptions: { ...options.cornersSquareOptions, type } })}
                      className={`py-2 px-1 text-[10px] font-bold rounded-lg border transition-all ${options.cornersSquareOptions.type === type
                        ? 'bg-primary-50 border-primary-500 text-primary-700 shadow-sm'
                        : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-primary-300'
                        }`}
                    >
                      {type.replace('-', ' ').toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-3">Dot Type</label>
                <div className="grid grid-cols-2 gap-2">
                  {['square', 'dot'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setOptions({ ...options, cornersDotOptions: { ...options.cornersDotOptions, type } })}
                      className={`py-2 px-1 text-[10px] font-bold rounded-lg border transition-all ${options.cornersDotOptions.type === type
                        ? 'bg-primary-50 border-primary-500 text-primary-700 shadow-sm'
                        : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-primary-300'
                        }`}
                    >
                      {type.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>


            </section>

            {/* Advanced */}
            <section className="space-y-4 border-t border-slate-100 dark:border-slate-700 pt-6">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Advanced</h3>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Background Color</label>
                <input
                  type="color"
                  value={options.backgroundOptions.color}
                  onChange={(e) => setOptions({ ...options, backgroundOptions: { ...options.backgroundOptions, color: e.target.value } })}
                  className="w-full h-10 rounded cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Error Correction</label>
                <div className="grid grid-cols-4 gap-2">
                  {['L', 'M', 'Q', 'H'].map((level) => (
                    <button
                      key={level}
                      onClick={() => setOptions({ ...options, qrOptions: { ...options.qrOptions, errorCorrectionLevel: level } })}
                      className={`py-2 rounded-lg border font-bold transition-all ${options.qrOptions.errorCorrectionLevel === level
                        ? 'bg-primary-50 border-primary-500 text-primary-700 shadow-sm'
                        : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300'
                        }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRGeneratorPage;
