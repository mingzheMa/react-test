import Head from "next/head";
import { useRouter } from "next/router";

export default function FirstPost() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First Post</h1>
      {/* <img src="/images/wuyanzu.jpeg" /> */}

      <h3
        onClick={() => {
          router.push("/");
        }}>
        back to home
      </h3>

      <style jsx>
        {`
          h1 {
            color: red;
          }

          .compA {
            font-size: 20px;
          }
        `}
      </style>
    </>
  );
}
