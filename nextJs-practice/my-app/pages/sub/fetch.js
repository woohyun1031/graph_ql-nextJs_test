import React, { useEffect } from "react";

export default function Fetch() {
  const [user, setUser] = React.useState({ name: null });

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_ARI_URL + "api/hello")
      .then((type) => {
        return type.json();
      })
      .then((result) => {
        setUser((prev) => (prev.name = result));
      });
  }, []);

  return (
    <>
      <h1>/pages/sub/fetch.js</h1>
      <h3>{user.name}</h3>
      <a href="/"> home index.js</a>
    </>
  );
}
