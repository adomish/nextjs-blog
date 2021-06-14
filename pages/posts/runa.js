import Image from "next/image";
import Layout from "../../components/layout";
import RunaType from "./RunaType";

const Runa = () => {
  return (
    <Layout>
      <div className="mt-8">
        <div className="w-56 mx-auto mt-6 max-w-md">
          <Image
            src="/images/tips_roll.jpeg"
            height={200}
            width={500}
            layout="responsive"
          />
        </div>
        <div className="pt-14 mx-8 lg:text-center">
          <h3 className="text-lg">ルナファーザー・チップス</h3>
          <h2 className="text-3xl font-bold mt-2">シンプルでソフトな美しさ</h2>
          <p className="mt-5">
            塗装下地壁紙ルナファーザーチップスは、天然素材で製造された「呼吸する壁紙」です。
            <br />
            通気性・吸湿性に優れています。
            <br />
            材料となる紙は再生紙を、木片は端材や間伐材を利用しており、資源の有効活用にも貢献しています。
          </p>
        </div>
      </div>
      <div className="relative w-auto h-80 mt-5">
        <Image src="/images/runa_images/01_t70.jpeg" layout="fill" />
        <div className="absolute mt-10">
          <div className="mx-8 lg:text-center">
            <h2 className="text-white font-bold text-2xl">化学物質、不使用</h2>
            <p className="mt-5">
              ホルムアルデヒドなどの人体に有害な物質が発生しません。
              <br />
              結露やカビの発生も抑えるので、小さなお子様や、アレルギーをお持ちのご家庭にも安心です。
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="w-56 mx-auto mt-6 max-w-md">
          <Image
            src="/images/vlies_roll.jpeg"
            height={200}
            width={500}
            layout="responsive"
          />
        </div>
        <div className="pt-14 mx-8 lg:text-center">
          <h3 className="text-lg">ルナファーザー・フリーズ</h3>
          <h2 className="text-3xl font-bold mt-2">非常に強靭でしなやかな紙</h2>
          <p className="mt-5">
            塗装下地壁紙ルナファーザーフリーズは、摩擦や衝撃に強く耐久性に富んでいます。
            <br />
            塗装作業においては、はけムラが出にくくどなたでも美しく仕上げることができます。
            <br />
            手垢などの汚れは、雑巾で拭き取ることができ、小さな傷は残しておいた塗料でタッチアップでき、メンテナンスが用意です。
          </p>
        </div>
        <RunaType />
      </div>
    </Layout>
  );
};

export default Runa;
