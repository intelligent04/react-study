import './Hello.css';
export default function Hello() {
  function showName() {
    console.log('Mike');
  }
  function showText(txt) {
    console.log(txt);
  }

  return (
    <div>
      <h1>Hello!</h1>
      <button onClick={showName}>Show name</button>
      <button>Show age</button>
      <input
        type="text"
        onChange={(a) => {
          console.log(a.target.value);
        }}
      />
    </div>
  );
}
