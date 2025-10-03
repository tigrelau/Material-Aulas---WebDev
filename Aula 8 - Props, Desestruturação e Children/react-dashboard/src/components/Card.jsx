export default function Card({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center p-6 w-48 rounded-lg shadow-md bg-white hover:bg-amber-100 duration-300 hover:shadow-lg transition ease-in-out hover:scale-110 hover:cursor-pointer">
      <Icon className="text-4xl text-amber-300 mb-3" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 text-center">{description}</p>
    </div>
  );
}
