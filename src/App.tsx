import "./App.css";

import avatarJessica from "/avatar-jessica.jpeg";

function App() {
  const buttonText = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];
  return (
    <main className={"bg-grey-900 grid min-h-screen w-full place-items-center antialiased"}>
      <div className={"bg-grey-800 h-[579px] w-[327px] rounded-[12px] md:h-[611px] md:w-[384px]"}>
        <div className={"flex flex-col items-center pt-[24px] md:pt-[40px]"}>
          <img alt="Jessica's Avatar" className={"size-[88px] rounded-full"} src={avatarJessica} />
          <h1 className={"text-preset-1 pt-6 text-white"}>Jessica Randall</h1>
          <p className={"text-preset-2-bold text-green pt-1"}>London, United Kingdom</p>
          <p className={"text-preset-2 pt-6 text-white"}>"Front-end developer and avid reader."</p>
        </div>

        <div className={"mx-[24px] flex flex-col items-center gap-y-[16px] pt-[24px] md:mx-[40px]"}>
          {buttonText.map((text, index) => (
            <button className={"bg-grey-700 hover:bg-green hover:text-grey-700 group grid w-full cursor-pointer place-items-center rounded-[8px] py-[12px]"} key={index}>
              <span className={"text-preset-2-bold group-hover:text-grey-700 text-white"}>{text}</span>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
