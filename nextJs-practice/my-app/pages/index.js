export default function Home() {
  const d1 = 1;
  const d2 = 2;

  return (
    <div>
      <h1>/pages/index.js</h1>
      <ul>
        <li>
          <a href="/sub">/pages/sub/index.js</a>
        </li>
        <li>
          <a href="/sub/about">/pages/sub/index.js</a>
        </li>
        <li>
          <a href="/sub/ids">/pages/sub/idsjs</a>
        </li>
        <li>
          <a href={`/sub/ids?id=${d1}`}>/pages/sub/ids/2.js</a>
        </li>
        <li>
          <a href={`/sub/ids?id=${d2}`}>/pages/sub/ids.js</a>
        </li>
        <li>
          <a href="/sub/fetch">/pages/sub/fetch.js</a>
        </li>
      </ul>
    </div>
  );
}
