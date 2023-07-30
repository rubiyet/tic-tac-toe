function GameLayout({ status, boardComponent }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-1">
      <div className="status">{status}</div>
      {boardComponent}
    </div>
  );
}

export default GameLayout;