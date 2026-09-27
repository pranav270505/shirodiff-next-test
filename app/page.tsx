export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-8">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-10 shadow-2xl">
        <div className="mb-8">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            ShiroDiff Test
          </span>

          <h1 className="mt-6 text-5xl font-bold text-slate-900">
            RAG Study Assistant Pro
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Upload your study material and ask questions directly from your
            documents.
          </p>
        </div>

        <div className="rounded-xl border-2 border-dashed border-slate-300 p-10 text-center">
          <div className="text-5xl">📄</div>

          <h2 className="mt-4 text-2xl font-semibold text-slate-800">
            Upload a document
          </h2>

          <p className="mt-2 text-slate-500">
            Supported formats: PDF, DOCX, PPTX, TXT
          </p>

          <button className="mt-6 rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white">
            Choose File
          </button>
        </div>
      </div>
    </main>
  );
}
// ShiroDiff webhook test