import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink = ({ home }) => {
  const getpath = useRouter();
  const path = getpath.pathname;
  const words = path.split("/");
  const paths = words.filter((word) => word !== "posts" && word !== "");
  console.log(paths);

  return (
    <div className="">
      {paths.map((item, index) => (
        <div className="flex items-center justify-center" key={index}>
          <div className="">
            <Link href="/">
              <object
                type="image/svg+xml"
                data="/ambee-logo-orange.svg"
                className="fill-current text-yellow-500 h-8 w-8 mr-2"
              />
            </Link>
          </div>
          <div className="">
            <object
              type="image/svg+xml"
              data="/images/icon/arrow.svg"
              className="fill-current text-yellow-500 h-8 w-8 mr-2"
            />
          </div>
          <div className="">
            <Link href={path}>
              <div className="">{item}</div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActiveLink;
