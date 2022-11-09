import { useRouter } from "next/router";

export default function INdexjdfio() {
  const router = useRouter();
  console.log(router);
  const id = +router.query.id;
  return (
    <>
      <h1>{`/pages/sub/${id}.js`}</h1>
      <a href="/">/pages/index.js</a>
    </>
  );
}
