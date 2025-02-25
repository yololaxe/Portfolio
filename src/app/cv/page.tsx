"use client"; // Next.js nécessite ça pour l'iframe

export default function CVPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      <h1 className="text-4xl font-extrabold mb-6">Mon CV</h1>
      <iframe
        src="/cv.pdf"
        className="w-full max-w-4xl h-[80vh] border-2 border-white rounded-lg shadow-lg"
      ></iframe>
      <a
        href="/cv.pdf"
        download="CV_Alban_Moragny.pdf"
        className="mt-4 px-6 py-3 bg-blue-600 rounded-lg text-white font-bold hover:bg-blue-700 transition"
      >
        Télécharger le CV
      </a>
    </div>
  );
}
