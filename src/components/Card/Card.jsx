export default function Card() {
  return (
    <div className="card">
      <img
        src="src\assets\img\placeholder.png"
        alt="example"
        className="card-img-top"
      />
      <div className="card-body">
        <h2 className="card-title h4 py-2">Titolo del post</h2>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptatem
          facilis, debitis eum eveniet eligendi dolore velit, accusamus, veniam
          omnis harum? Incidunt, similique! Tempore perspiciatis voluptatem
          quod, minus numquam repudiandae!
        </p>
        <button type="button" className="btn btn-warning py-2 px-3 mt-3">
          LEGGI DI PIÙ
        </button>
      </div>
    </div>
  );
}
