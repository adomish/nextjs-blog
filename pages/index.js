import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { getPostsAndPortfolios } from "../lib/data";
import styles from "../pages/style.module.css";

export const getStaticProps = async () => {
  const data = await getPostsAndPortfolios();

  return {
    props: {
      data,
    },
  };
};

const Home = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Head>
        <title>Ambee</title>
        <meta
          name="description"
          content="リンクを開くならこちらをタップ！！！"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.bgWrap}>
        <img src="images/plaster_bg.jpeg" alt="runa" />
        <div className={styles.bg}>
          <h1 className={styles.bgText1}>ルナファーザー</h1>
          <h2 className="text-center mb-2 mt-2">
            通気性、吸湿性に優れた天然素材の壁紙
          </h2>
          <div className="flex justify-evenly">
            <Link href="posts/runa">
              <a>詳しく見る</a>
            </Link>
            <Link href="/">
              <a>見積もる</a>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.bgWrap}>
        <img src="images/tips_pict1.jpeg" alt="runa" />
        <div className={styles.bg}>
          <h1 className={styles.bgText1}>ルナしっくい</h1>
          <h2 className="text-center mb-2 mt-2">
            調湿、消臭、耐久性を備えたしっくい
          </h2>
          <div className="flex justify-evenly">
            <Link href="posts/runa">
              <a>詳しく見る</a>
            </Link>
            <Link href="/">
              <a>見積もる</a>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.bgWrap}>
        <img src="images/kurosumake.gif" alt="runa" />
        <div className={styles.bg}>
          <h1 className={styles.bgText1}>クロスメイク</h1>
          <h2 className="text-center mb-2 mt-2">超低価格で壁紙が蘇る</h2>
          <div className="flex justify-evenly">
            <Link href="posts/runa">
              <a>詳しく見る</a>
            </Link>
            <Link href="/">
              <a>見積もる</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10">
        {data?.posts?.map((post) => (
          <div key={post.slug}>
            <Link href={`posts/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
          </div>
        ))}
      </div>
      <div>
        {data?.portfolios?.map((item) => (
          <div key={item.slug}>
            <Link href={`portfolio/${item.slug}`}>
              <h3>{item.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
