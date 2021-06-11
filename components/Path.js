import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink = () => {
  const getpath = useRouter();
  const path = getpath.pathname;
  const words = path.split("/");
  const paths = words.filter((word) => word !== "posts" && word !== "");

  return (
    <div className=" mb-3">
      {paths.map((item, index) => (
        <div className="flex items-center justify-center" key={index}>
          <div className="">
            <Link href="/">
              <a>
                <object
                  type="image/svg+xml"
                  data="/ambee-logo-orange.svg"
                  className="fill-current text-yellow-500 h-8 w-8 mr-2"
                />
              </a>
            </Link>
          </div>
          <div>
            <object
              type="image/svg+xml"
              data="/images/icon/arrow.svg"
              className="fill-current h-8 w-8 mr-2"
            />
          </div>
          <div>
            <Link href={path}>
              <div>{item}</div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActiveLink;
