const Footer = () => {
  return (
    <footer className="bg-yellow-500 p-5 space-y-3 text-ss lg:flex justify-around">
      <div className="border-t-2 flex justify-between lg:border-none">
        <div className="pt-3">会社案内</div>
        <p className="pt-3 pr-1 lg:hidden">+</p>
      </div>
      <div className="border-t-2 flex justify-between lg:border-none">
        <div className="pt-3 lg:pt-0">業務紹介</div>
        <p className="pt-3 pr-1 lg:hidden">+</p>
      </div>
      <div className="border-t-2 flex justify-between lg:border-none">
        <div className="pt-3 lg:pt-0">事例紹介</div>
        <p className="pt-3 pr-1 lg:hidden">+</p>
      </div>
      <div className="border-t-2 flex justify-between lg:border-none">
        <div className="pt-3 lg:pt-0">採用情報</div>
        <p className="pt-3 pr-1 lg:hidden">+</p>
      </div>
      <div className="border-t-2 flex justify-between lg:border-none">
        <div className="pt-3 lg:pt-0">お問い合わせ</div>
        <p className="pt-3 pr-1 lg:hidden">+</p>
      </div>
      <div className="border-t-2 lg:hidden" />
    </footer>
  );
};
// 業務内容　事例紹介　採用情報　お問い合わせ
export default Footer;
