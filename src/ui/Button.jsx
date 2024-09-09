function Button({ Text }) {
  return (
    <button className="hover:bg-gray-200 p-2">
      <span className="mr-2 "></span>
      <span className="font-semibold text-Darkgray text-xl">{Text}</span>
    </button>
  );
}

export default Button;
