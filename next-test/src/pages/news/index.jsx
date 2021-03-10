import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  return (
    <div>
      <h1>news</h1>
      <ul>
        <li
          onClick={() => {
            router.push("/news/[id]?title=new1", "/news/1");
          }}>
          <a>1</a>
        </li>
        <li
          onClick={() => {
            router.push("/news/[id]?title=new2", "/news/2");
          }}>
          <a>2</a>
        </li>
        <li
          onClick={() => {
            router.push("/news/[id]?title=new3", "/news/3");
          }}>
          <a>3</a>
        </li>
      </ul>
    </div>
  );
};
