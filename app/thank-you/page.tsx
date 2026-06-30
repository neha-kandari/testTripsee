'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const ThankYouContent = () => {
  const searchParams = useSearchParams();
  const waParam = searchParams.get('wa');
  const whatsappUrl = waParam
    ? decodeURIComponent(waParam)
    : 'https://wa.me/918595682910';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 via-white to-pink-50 px-4 py-12">

      {/* Glow blob background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-200 rounded-full opacity-20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full text-center">

        {/* Important notice */}
        <div className="mb-8 p-5 bg-orange-100 border-2 border-orange-400 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105">
          <h2 className="text-xl font-bold text-orange-600 mb-2 flex items-center justify-center gap-2">
            <span>⚠️</span> Action Required!
          </h2>
          <p className="text-md text-orange-700 font-medium">
            Your details are <span className="font-bold underline">not sent yet</span>! You must click the button below to confirm and send your details to us on WhatsApp.
          </p>
        </div>

        {/* CTA button */}
        <div className="flex justify-center mb-12 relative z-20">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 active:scale-95 text-white font-bold px-10 py-5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.6)] hover:shadow-[0_0_30px_rgba(34,197,94,0.8)] transform hover:scale-110 text-lg group"
          >
            <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            Click Here to Confirm & Send Details
          </a>
        </div>

        {/* Steps card */}
        <div className="bg-white border border-orange-100 rounded-2xl p-6 mb-12 text-left shadow-lg">
          <h2 className="text-base font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold">i</span>
            What happens next?
          </h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
              <span>Click the green button above to open WhatsApp</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <span>Hit send on the pre-filled message with your requirements</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
              <span>Our travel experts will get back to you with a personalized plan!</span>
            </li>
          </ul>
        </div>

        {/* Thank You section moved to bottom */}
        <div className="pt-8 border-t border-orange-100">
          <div className="relative flex justify-center mb-6">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
              style={{ background: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)' }}
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-3 font-limelight text-orange-500 drop-shadow-sm">
            Thank You!
          </h1>
          <p className="text-md text-gray-600 leading-relaxed">
            We look forward to helping you plan your dream trip. 🌍
          </p>
        </div>

        {/* Branding footer */}
        <p className="mt-8 text-xs text-gray-400">
          © Tripsee Travels · Your perfect trip awaits 🌴
        </p>
      </div>
    </div>
  );
};

const ThankYouPage = () => (
  <Suspense
    fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    }
  >
    <ThankYouContent />
  </Suspense>
);

export default ThankYouPage;
