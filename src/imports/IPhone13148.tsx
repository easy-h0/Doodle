import svgPaths from "./svg-5haz31rudk";
import imgGeminiGeneratedImage2A8Kog2A8Kog2A8K2 from "figma:asset/787c6e7e15be880eb00917540163584fade607ec.png";

function StatusBarTime() {
  return (
    <div className="h-[21.217px] relative rounded-[24.248px] shrink-0 w-[54.557px]" data-name="_StatusBar-time">
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] h-[20.206px] leading-[21.217px] left-[27.28px] not-italic text-[16.165px] text-black text-center top-[1.01px] tracking-[-0.3233px] w-[54.557px]">9:41</p>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left Side">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[3.031px] pl-[10.103px] relative size-full">
          <StatusBarTime />
        </div>
      </div>
    </div>
  );
}

function TrueDepthCamera() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-black h-[37.382px] left-[calc(50%-23.29px)] rounded-[101.032px] top-[calc(50%-0.15px)] w-[80.826px]" data-name="TrueDepth camera" />;
}

function FaceTimeCamera() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-black left-[calc(50%+43.9px)] rounded-[101.032px] size-[37.382px] top-[calc(50%-0.15px)]" data-name="FaceTime camera" />;
}

function StatusBarDynamicIsland() {
  return (
    <div className="bg-black h-[37.382px] relative rounded-[101.032px] shrink-0 w-[126.29px]" data-name="StatusBar-dynamicIsland">
      <TrueDepthCamera />
      <FaceTimeCamera />
    </div>
  );
}

function DynamicIsland() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Dynamic Island">
      <StatusBarDynamicIsland />
    </div>
  );
}

function SignalWifiBattery() {
  return (
    <div className="content-stretch flex gap-[8.083px] items-start relative shrink-0" data-name="Signal, Wifi, Battery">
      <div className="h-[12.124px] relative shrink-0 w-[18.186px]" data-name="Icon / Mobile Signal">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1858 12.1239">
          <g id="Icon / Mobile Signal">
            <path d={svgPaths.p2fc6d2c0} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1e97fff0} fill="var(--fill-0, black)" />
            <path d={svgPaths.pbf0bc80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3479be80} fill="var(--fill-0, black)" />
          </g>
        </svg>
      </div>
      <div className="h-[11.957px] relative shrink-0 w-[17.176px]" data-name="Wifi">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1758 11.9571">
          <path d={svgPaths.peace200} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="h-[13.134px] relative shrink-0 w-[27.684px]" data-name="_StatusBar-battery">
        <div className="-translate-y-1/2 absolute h-[13.134px] left-0 right-[2.43px] top-1/2" data-name="Outline">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 13">
            <path d={svgPaths.p3f827980} id="Outline" opacity="0.35" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
        <div className="-translate-y-1/2 absolute h-[4.264px] right-0 top-[calc(50%+0.62px)] w-[1.416px]" data-name="Battery End">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.40119 4.22034">
            <path d={svgPaths.p237cb000} fill="var(--fill-0, black)" id="Battery End" opacity="0.4" />
          </svg>
        </div>
        <div className="-translate-y-1/2 absolute h-[9.093px] left-[2.02px] right-[4.45px] top-1/2" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 9">
            <path d={svgPaths.pa544c00} fill="var(--fill-0, black)" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Right Side">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[11.114px] relative size-full">
          <SignalWifiBattery />
        </div>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute content-stretch flex h-[60.619px] items-end justify-center left-0 top-0 w-[394.025px]" data-name="StatusBar">
      <LeftSide />
      <DynamicIsland />
      <RightSide />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[25px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Frame 2085668739">
          <rect fill="var(--fill-0, #65C2FB)" height="25" rx="12.5" width="25" />
          <path d={svgPaths.p11538e00} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function InputChat() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[48px] items-center left-[22px] overflow-clip pl-[18px] pr-[6px] py-[6px] rounded-[16px] shadow-[0px_4.073px_24.44px_0px_rgba(0,0,0,0.06)] top-[764px] w-[353px]" data-name="Input / Chat">
      <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px relative text-[#97a0ae] text-[14px]">감정을 알려주세요!</p>
      <Frame1 />
    </div>
  );
}

function Tabbar() {
  return (
    <div className="h-[60.532px] relative shrink-0 w-full" data-name="Tabbar">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="h-[34.302px] relative shrink-0 w-full" data-name="Home Indicator">
      <div className="-translate-x-1/2 absolute bg-white bottom-[8.07px] h-[5.044px] left-1/2 rounded-[100.887px] w-[135.189px]" data-name="Home Indicator" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bottom-[-0.13px] content-stretch flex flex-col items-start left-[2px] w-[393.459px]">
      <Tabbar />
      <HomeIndicator />
    </div>
  );
}

function DrawingCanvas() {
  return (
    <div className="absolute bg-[#fcfcff] h-[439px] left-[21px] overflow-clip rounded-[20px] top-[259px] w-[353px]" data-name="DrawingCanvas">
      <p className="-translate-x-1/2 absolute font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[177.5px] text-[#b2b8bf] text-[13px] text-center top-[22px] whitespace-nowrap">아까 느낀 감정과 비슷한가요?</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[21px] top-[259px]">
      <DrawingCanvas />
    </div>
  );
}

export default function IPhone() {
  return (
    <div className="bg-[#f3f4f6] overflow-clip relative rounded-[47.616px] size-full" data-name="iPhone 13 & 14 - 8">
      <div className="absolute bg-[#fcfcff] h-[47px] left-[21px] rounded-[15px] top-[198px] w-[353px]" />
      <StatusBar />
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] left-[16px] text-[#5f6774] text-[22px] top-[52px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{`← `}</p>
      <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[normal] left-[calc(50%+0.49px)] not-italic text-[#5f6774] text-[18px] text-center top-[56px] whitespace-nowrap">낙서하기</p>
      <InputChat />
      <Frame />
      <Group />
      <div className="absolute h-[294px] left-[21px] top-[333px] w-[353px]" data-name="Gemini_Generated_Image_2a8kog2a8kog2a8k 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[138.98%] left-[-7.82%] max-w-none top-[-19.64%] w-[115.64%]" src={imgGeminiGeneratedImage2A8Kog2A8Kog2A8K2} />
        </div>
      </div>
      <div className="absolute left-[38px] size-[6px] top-[219px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #333340)" id="Ellipse" r="3" />
        </svg>
      </div>
      <div className="absolute left-[63px] size-[10px] top-[217px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #333340)" id="Ellipse" r="5" />
        </svg>
      </div>
      <div className="absolute left-[calc(20%+13.19px)] size-[14px] top-[215px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="var(--fill-0, #333340)" id="Ellipse" r="7" />
        </svg>
      </div>
      <div className="absolute bg-[#d9dee5] h-[24px] left-[calc(20%+43.19px)] top-[210px] w-px" data-name="Rectangle" />
      <div className="absolute left-[calc(20%+58.69px)] size-[24px] top-[210px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #5EBDF7)" id="Ellipse" r="12" />
        </svg>
      </div>
      <div className="absolute left-[calc(40%+23.89px)] size-[24px] top-[210px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #333340)" id="Ellipse" r="12" />
        </svg>
      </div>
      <div className="absolute left-[calc(40%+67.89px)] size-[24px] top-[210px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #B3BFCC)" id="Ellipse" r="12" />
        </svg>
      </div>
      <div className="absolute left-[calc(60%+33.08px)] size-[24px] top-[210px]" data-name="Ellipse">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #E68C80)" id="Ellipse" r="12" />
        </svg>
      </div>
      <div className="absolute bg-[#d9dee5] h-[24px] left-[calc(80%-1.72px)] top-[210px] w-px" data-name="Rectangle" />
      <div className="absolute inset-[25.12%_9.35%_72.78%_85.78%]" data-name="Icon">
        <div className="absolute inset-[-7.05%_-6.51%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.7 20.2414">
            <path d={svgPaths.p1c565ac0} id="Icon" stroke="var(--stroke-0, #5EBDF7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </svg>
        </div>
      </div>
      <div className="absolute font-['Pretendard:Medium',sans-serif] leading-[0] left-[25px] not-italic text-[#262729] text-[25.133px] top-[106.9px] whitespace-nowrap">
        <p className="leading-[normal] mb-0 whitespace-pre">{`아까 느꼈던 `}</p>
        <p className="leading-[normal] whitespace-pre">색의 감정을 여기에 담아보세요!</p>
      </div>
    </div>
  );
}