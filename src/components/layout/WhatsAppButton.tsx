// ============================================================
// FILE: src/components/layout/WhatsAppButton.tsx
// ============================================================
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/97145488762"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-green-500 focus-visible:outline-offset-2"
      aria-label="Chat with Global High Trend on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.82.74 5.47 2.03 7.77L.5 31.5l8-2.03A15.47 15.47 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.1a12.56 12.56 0 01-6.38-1.74l-.45-.27-4.75 1.2 1.24-4.63-.3-.47A12.52 12.52 0 013.4 16C3.4 9.6 9.6 3.4 16 3.4S28.6 9.6 28.6 16 22.4 28.6 16 28.6zm6.9-9.37c-.38-.19-2.23-1.1-2.58-1.23-.34-.12-.59-.19-.84.19-.25.38-.96 1.23-1.17 1.48-.21.25-.42.28-.8.1-.38-.19-1.6-.59-3.05-1.88-1.13-1-1.89-2.23-2.11-2.61-.22-.38-.02-.58.17-.77.17-.17.38-.44.57-.66.19-.22.25-.38.38-.63.12-.25.06-.47-.03-.66-.1-.19-.84-2.02-1.15-2.77-.3-.73-.61-.63-.84-.64h-.71c-.25 0-.66.09-1.01.47-.34.38-1.3 1.27-1.3 3.1s1.33 3.6 1.52 3.85c.19.25 2.63 4.02 6.37 5.64.89.38 1.58.61 2.12.78.89.28 1.7.24 2.34.15.71-.11 2.19-.9 2.5-1.76.31-.87.31-1.6.22-1.76-.1-.16-.34-.25-.72-.44z" />
      </svg>
    </a>
  )
}
