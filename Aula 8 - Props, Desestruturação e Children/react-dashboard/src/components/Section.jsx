export default function Section({ titulo, children }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{titulo}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {children}
      </div>
    </div>
  );
}
