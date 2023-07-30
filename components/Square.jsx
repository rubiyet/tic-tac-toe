function Square({ value, onSquareClick }) {
  return (
    <button className="w-5 h-5 border border-black" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;