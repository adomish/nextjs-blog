import Image from "next/image";

const tips_img = [20, 32, 40, 52, 70];
const vlies_img = [
  701, 704, 705, 706, 707, 712, 715, 716, 717, 718, 719, 734, 741,
];
const test = 20;

const RunaType = () => {
  return (
    <div>
      <div className="pt-14 mx-8 text-center">
        <h3 className="text-3xl font-bold mt-2">材料を比較する</h3>
      </div>
      <div className="mt-3 mb-5 flex items-center justify-around">
        <h4>チップス</h4>
        <h4 className="flex justify-center">
          フリース{" "}
          <button>
            <object
              className="fill-current"
              type="image/svg+xml"
              data="/images/icon/arrow.svg"
            />
          </button>
        </h4>
      </div>
      <div></div>
      <div className="flex">
        <div className="w-1/2 h-96 flex flex-wrap justify-around">
          {tips_img.map((item, index) => (
            <div key={index} className="text-center mb-5">
              <button className="focus:outline-none">
                <img
                  src={`/images/tips/${item}.jpeg`}
                  width="100"
                  height="100"
                  className="rounded-full h-24 w-24 border-4 hover:border-green-400"
                />
              </button>
              <div className="mt-1">No.{item}</div>
            </div>
          ))}
        </div>
        <div className="w-1/2 flex flex-wrap justify-around">
          {vlies_img.map((item, index) => (
            <div key={index} className="text-center mb-5">
              <button className="focus:outline-none">
                <img
                  src={`/images/vlies/${item}.jpeg`}
                  className="rounded-full h-24 w-24 border-4 hover:border-green-400"
                />
              </button>
              <div className="mt-1">No.{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RunaType;
