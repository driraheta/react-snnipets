const DataList = function ({ isOrdered, data }) {
    const list = data.map((val, i) => (
      //<li key={`${i}_${val}`}>{val}</li>
      <li key={i}>{val}</li>
    ));
    return isOrdered ? <ol>{list}</ol> : <ul>{list}</ul>;
   };

   const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);

const names = ['John', 'Paul', 'Mary'];
ReactDOM.render(<DataList data={names}/>, document.getElementById('root'));