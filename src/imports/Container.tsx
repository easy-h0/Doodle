import imgImage from "figma:asset/787c6e7e15be880eb00917540163584fade607ec.png";
import imgCanvas from "figma:asset/51d4953c87f1877720b332c4f3900bac33f85eba.png";

function Image() {
  return (
    <div className="h-[694.492px] opacity-10 relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[499.711px] items-start left-[200px] overflow-clip pl-[-46.914px] pr-[-46.922px] pt-[-98.141px] top-[86.64px] w-[600px]" data-name="Container">
      <Image />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[673px] left-0 top-0 w-[1000px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Canvas() {
  return (
    <div className="absolute h-[150px] left-0 rounded-[16px] top-0 w-[300px]" data-name="Canvas">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[16px] size-full" src={imgCanvas} />
    </div>
  );
}

function Container5() {
  return <div className="absolute border-[#d1d5dc] border-l-2 border-solid border-t-2 left-0 rounded-tl-[10px] size-[16px] top-0" data-name="Container" />;
}

function Container6() {
  return <div className="absolute border-[#d1d5dc] border-r-2 border-solid border-t-2 left-[984px] rounded-tr-[10px] size-[16px] top-0" data-name="Container" />;
}

function Container7() {
  return <div className="absolute border-[#d1d5dc] border-b-2 border-l-2 border-solid left-0 rounded-bl-[10px] size-[16px] top-[657px]" data-name="Container" />;
}

function Container8() {
  return <div className="absolute border-[#d1d5dc] border-b-2 border-r-2 border-solid left-[984px] rounded-br-[10px] size-[16px] top-[657px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="absolute h-[673px] left-[65.5px] top-[64px] w-[1000px]" data-name="Container">
      <Container3 />
      <Canvas />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[801px] left-0 top-0 w-[1131px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-2px] whitespace-nowrap">드래그하여 그리기 • 우클릭으로 지우기</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col h-[34px] items-start left-[878.84px] pb-px pt-[9px] px-[17px] rounded-[10px] top-[743px] w-[228.156px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">아까 느꼈던 감정과 비슷한가요?</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col h-[38px] items-start left-[447.57px] pb-px pt-[9px] px-[25px] rounded-[16777200px] top-[40px] w-[235.859px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16777200px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Paragraph1 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid overflow-clip relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Container">
      <Container1 />
      <Container9 />
      <Container10 />
    </div>
  );
}