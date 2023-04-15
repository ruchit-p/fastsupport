export default function Card({ imageUrl, title, text }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-4">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{text}</p>
      </div>
    </div>
  );
}