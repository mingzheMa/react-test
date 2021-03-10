import Link from "next/link";

export default () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>index</a>
        </Link>
      </li>

      <li>
        <Link href="/posts/first-post">
          <a>first-post</a>
        </Link>
      </li>

      <li>
        <Link href="/news">
          <a>news</a>
        </Link>
      </li>

      <li>
        <Link href="/user/[id]" as="/user/mmz">
          <a>user</a>
        </Link>
      </li>
    </ul>
  );
};
