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

        {/* Animated checkmark */}
        <div className="relative flex justify-center mb-8">
          <div
            className="w-28 h-28 rounded-full flex items-center justify-center shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)' }}
          >
            <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="absolute inset-0 w-28 h-28 mx-auto rounded-full border-4 border-orange-300 animate-ping opacity-25" />
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-3 font-limelight text-orange-500 drop-shadow-sm">
          Thank You!
        </h1>

        <p className="text-lg text-gray-600 mb-2 leading-relaxed">
          You&apos;re just one step away from your dream trip! 🌍
        </p>
        <p className="text-sm text-gray-400 mb-10">
          Click the button below to send your details to us on WhatsApp.
        </p>

        {/* Steps card */}
        <div className="bg-white border border-orange-100 rounded-2xl p-6 mb-8 text-left shadow-lg">
          <h2 className="text-base font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold">i</span>
            What happens next?
          </h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
              <span>Click the button below to open WhatsApp</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <span>Send the pre-filled message with your requirements</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
              <span>Our travel experts will get back to you with a personalized plan!</span>
            </li>
          </ul>
        </div>

        {/* CTA button */}
        <div className="flex justify-center">
          {/* Opens WhatsApp with the pre-filled message from the form */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 active:scale-95 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            Send Details on WhatsApp
          </a>
        </div>

        {/* Branding footer */}
        <p className="mt-10 text-xs text-gray-300">
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
