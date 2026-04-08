import svgPaths from "../../imports/svg-5haz31rudk";
import svgPathsTimeline from "../../imports/svg-xrj4tg1unl";
import imgGeminiGeneratedImage2A8Kog2A8Kog2A8K2 from "../../assets/787c6e7e15be880eb00917540163584fade607ec.png";
import { ArrowLeft, Download, Undo2, Redo2, Trash2, Save, Palette, Brush, Wrench, Clock, Send, X, ChevronDown, ChevronUp, Menu } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useIsMobile } from "./ui/use-mobile";

const BRUSH_SIZES = [2, 4, 8, 14];
const COLORS = [
  '#5EBDF7', '#333340', '#B3BFCC', '#E68C80', '#FFB84D',
  '#A78BFA', '#FB7185', '#34D399', '#F472B6', '#FBBF24',
];

interface SidebarProps {
  brushSize: number;
  onBrushSizeChange: (size: number) => void;
  color: string;
  onColorChange: (color: string) => void;
  isEraser: boolean;
  onEraserToggle: () => void;
  onSave: () => void;
  onDownload: () => void;
}

function Sidebar({ brushSize, onBrushSizeChange, color, onColorChange, isEraser, onEraserToggle, onSave, onDownload }: SidebarProps) {
  const dotSizes = ['size-1.5', 'size-2.5', 'size-3.5', 'size-5'];

  return (
    <div className="w-72 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="size-5 text-gray-600" />
          </button>
          <h1 className="font-['Pretendard'] text-xl font-semibold text-gray-900">감정 낙서장</h1>
        </div>
      </div>

      {/* Tools Section */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-6">
          {/* Brush Size */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Brush className="size-4 text-gray-600" />
              <h3 className="font-['Pretendard'] font-medium text-sm text-gray-900">브러시 크기</h3>
            </div>
            <div className="flex items-center gap-4">
              {BRUSH_SIZES.map((size, i) => (
                <button
                  key={size}
                  onClick={() => { onBrushSizeChange(size); if (isEraser) onEraserToggle(); }}
                  className={`size-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors border-2 ${brushSize === size && !isEraser ? 'border-[#65C2FB]' : 'border-gray-300'}`}
                >
                  <div className={`${dotSizes[i]} rounded-full bg-gray-900`} />
                </button>
              ))}
            </div>
          </div>

          {/* Color Palette */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Palette className="size-4 text-gray-600" />
              <h3 className="font-['Pretendard'] font-medium text-sm text-gray-900">색상 팔레트</h3>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {COLORS.map((c) => (
                <button
                  key={c}
                  onClick={() => { onColorChange(c); if (isEraser) onEraserToggle(); }}
                  className={`size-10 rounded-lg hover:scale-105 transition-transform ${color === c && !isEraser ? 'ring-2 ring-offset-2' : ''}`}
                  style={{ backgroundColor: c, ringColor: c }}
                />
              ))}
            </div>
          </div>

          {/* Eraser */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Wrench className="size-4 text-gray-600" />
              <h3 className="font-['Pretendard'] font-medium text-sm text-gray-900">도구</h3>
            </div>
            <button
              onClick={onEraserToggle}
              className={`w-full p-3 rounded-lg border-2 transition-colors flex items-center gap-3 ${isEraser ? 'border-[#65C2FB] bg-[#E6F5FF]' : 'border-gray-200 hover:border-[#65C2FB] hover:bg-[#E6F5FF]'}`}
            >
              <svg className="size-5" fill="none" viewBox="0 0 21.7 20.2414">
                <path d={svgPaths.p1c565ac0} stroke="#65C2FB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </svg>
              <span className="font-['Pretendard'] text-sm text-gray-700">지우개</span>
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 pt-6" />

          {/* Today's Flow - Compact */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="size-4 text-gray-600" />
              <h3 className="font-['Pretendard'] font-medium text-sm text-gray-900">오늘 마음의 흐름</h3>
            </div>
            <div className="space-y-3 py-2">
              {/* Timeline Item 1 */}
              <div className="flex gap-2">
                <div className="flex flex-col items-center">
                  <svg className="size-2.5" fill="none" viewBox="0 0 11.25 11.25">
                    <path d={svgPathsTimeline.p37692df0} fill="#65C2FB" />
                  </svg>
                  <div className="w-px h-full bg-[#65C2FB] opacity-15 my-1" />
                </div>
                <div className="flex-1 -mt-0.5">
                  <p className="font-['Noto_Sans_KR'] text-xs text-gray-900">감정 표현</p>
                  <p className="font-['Noto_Sans_KR'] text-[11px] text-gray-400 mt-0.5">애매한 기분이었어요</p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex gap-2">
                <div className="flex flex-col items-center">
                  <svg className="size-2.5" fill="none" viewBox="0 0 11.25 11.25">
                    <path d={svgPathsTimeline.p37692df0} fill="#171728" />
                  </svg>
                  <div className="w-px h-full bg-[#65C2FB] opacity-15 my-1" />
                </div>
                <div className="flex-1 -mt-0.5">
                  <p className="font-['Noto_Sans_KR'] text-xs text-gray-900">기억 구체화</p>
                  <p className="font-['Noto_Sans_KR'] text-[11px] text-gray-400 mt-0.5">오후가 길게 느껴졌어요</p>
                </div>
              </div>

              {/* Timeline Item 3 - Current */}
              <div className="flex gap-2">
                <div className="relative flex flex-col items-center">
                  <svg className="size-5" fill="none" viewBox="0 0 22.5 22.5">
                    <path d={svgPathsTimeline.pe5bd000} fill="#65C2FB" fillOpacity="0.1" />
                  </svg>
                  <svg className="absolute size-2.5 top-1.5" fill="none" viewBox="0 0 11.25 11.25">
                    <path d={svgPathsTimeline.p37692df0} fill="#65C2FB" />
                  </svg>
                </div>
                <div className="flex-1 -mt-0.5">
                  <p className="font-['Noto_Sans_KR'] text-xs text-gray-900">감정 정리</p>
                  <p className="font-['Noto_Sans_KR'] text-[11px] text-[#65C2FB] mt-0.5">낙서로 남겨볼까요?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="p-6 border-t border-gray-200 space-y-2">
        <button onClick={onSave} className="w-full py-3 px-4 bg-[#65C2FB] hover:bg-[#4DB3F5] text-white rounded-lg font-['Pretendard'] font-medium transition-colors flex items-center justify-center gap-2">
          낙서완료
        </button>
        <button onClick={onDownload} className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-['Pretendard'] font-medium transition-colors flex items-center justify-center gap-2">
          <Download className="size-4" />
          다운로드
        </button>
      </div>
    </div>
  );
}

interface ToolbarProps {
  onUndo: () => void;
  onRedo: () => void;
  onClear: () => void;
  canUndo: boolean;
  canRedo: boolean;
  isMobile?: boolean;
  onMenuToggle?: () => void;
}

function Toolbar({ onUndo, onRedo, onClear, canUndo, canRedo, isMobile, onMenuToggle }: ToolbarProps) {
  return (
    <div className="h-12 sm:h-16 bg-white border-b border-gray-200 flex items-center justify-between px-3 sm:px-6">
      <div className="flex items-center gap-1 sm:gap-2">
        {isMobile && (
          <button onClick={onMenuToggle} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Menu className="size-5 text-gray-600" />
          </button>
        )}
        <button onClick={onUndo} disabled={!canUndo} className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-30">
          <Undo2 className="size-5 text-gray-600" />
        </button>
        <button onClick={onRedo} disabled={!canRedo} className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-30">
          <Redo2 className="size-5 text-gray-600" />
        </button>
        <div className="w-px h-6 bg-gray-200 mx-1 sm:mx-2" />
        <button onClick={onClear} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Trash2 className="size-5 text-gray-600" />
        </button>
      </div>

      <div className="text-center">
        <h2 className="font-['Pretendard'] font-medium text-base sm:text-lg text-gray-900">
          낙서하기
        </h2>
      </div>

      <div className="w-[60px] sm:w-[120px]" />
    </div>
  );
}

const AI_TITLES = [
  "머무름과 기다림의 형태",
  "흩어진 마음의 조각들",
  "오늘의 색이 말해주는 것",
  "조용한 파도의 흔적",
  "마음이 그린 풍경",
  "감정의 온도를 담아서",
  "말 대신 남긴 흔적",
  "천천히 흐르는 감정선",
];

const AI_QUESTIONS = [
  "이 낙서는 오늘의 어떤 부분처럼 느껴지나요?",
  "그릴 때 어떤 감정이 가장 먼저 떠올랐나요?",
  "이 색은 오늘의 어떤 순간을 닮았나요?",
  "다시 본다면, 어떤 기분이 드나요?",
  "이 낙서에 제목을 붙인다면 뭐라고 할까요?",
];

const EMOTION_CHIPS = [
  { label: "기분이 좋아요!", color: "#5EBDF7" },
  { label: "잔잔한 톤", color: "#64C8C8" },
  { label: "복잡한 마음", color: "#A78BFA" },
  { label: "따뜻한 느낌", color: "#FFB84D" },
  { label: "조금 무거워요", color: "#E68C80" },
  { label: "편안한 하루", color: "#34D399" },
];

interface CardContentProps {
  canvasImage: string;
  title: string;
  question: string;
  chips: { label: string; color: string }[];
  intensity: number;
  animate?: boolean;
}

const CardContent = ({ canvasImage, title, question, chips, intensity, animate = true }: CardContentProps) => (
  <>
    {/* Doodle Image */}
    <div className="bg-[#f8fafe] h-[230px] overflow-hidden relative">
      <img src={canvasImage} alt="내 낙서" className="absolute inset-0 w-full h-full object-contain" />
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col gap-0">
      <p className="font-['Pretendard'] font-bold text-[13px] text-[#65C2FB] tracking-[1px] uppercase">
        TODAY'S DOODLE
      </p>
      <div className="h-1" />

      <p className="font-['Pretendard'] text-[21px] text-[#3f3f3f] leading-[1.7]">
        {title}
      </p>
      <div className="h-5" />

      <div className="flex gap-2">
        {chips.map((chip) => (
          <div
            key={chip.label}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full border"
            style={{ borderColor: chip.color + '40', backgroundColor: chip.color + '10' }}
          >
            <div className="size-2.5 rounded-full" style={{ backgroundColor: chip.color }} />
            <span className="font-['Pretendard'] font-bold text-[11px]" style={{ color: chip.color }}>
              {chip.label}
            </span>
          </div>
        ))}
      </div>
      <div className="h-4" />

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="font-['Pretendard'] text-[15px] text-[#9ca3af] tracking-[1px]">INTENSITY</span>
          <span className="font-['DM_Sans'] font-medium text-[15px] text-[#1a1a2e]">{intensity}%</span>
        </div>
        <div className="h-[3px] bg-[#f5f7fa] rounded-sm overflow-hidden">
          {animate ? (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${intensity}%` }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
              className="h-full bg-[#65C2FB] rounded-sm"
            />
          ) : (
            <div className="h-full bg-[#65C2FB] rounded-sm" style={{ width: `${intensity}%` }} />
          )}
        </div>
      </div>
      <div className="h-5" />

      <div className="h-px bg-[#f0f2f5]" />
      <div className="h-5" />

      <div className="bg-[#f8fafe] rounded-xl px-5 py-4">
        <p className="font-['Pretendard'] font-medium text-[16px] text-[#1a1a2e] leading-[1.6]">
          {question}
        </p>
      </div>
    </div>
  </>
);

interface DoodleResultCardProps {
  canvasImage: string;
  aiMessage: string;
  onClose: () => void;
}

function DoodleResultCard({ canvasImage, aiMessage, onClose }: DoodleResultCardProps) {
  const [title] = useState(() => AI_TITLES[Math.floor(Math.random() * AI_TITLES.length)]);
  const [question] = useState(() => AI_QUESTIONS[Math.floor(Math.random() * AI_QUESTIONS.length)]);
  const [chips] = useState(() => {
    const shuffled = [...EMOTION_CHIPS].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 2);
  });
  const [intensity] = useState(() => Math.floor(Math.random() * 40) + 45);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white rounded-[20px] shadow-[0px_3px_19px_rgba(0,0,0,0.08),0px_3px_17px_rgba(0,0,0,0.03)] border border-[#eaecef] overflow-hidden w-[calc(100%-32px)] sm:w-[385px] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <CardContent canvasImage={canvasImage} title={title} question={question} chips={chips} intensity={intensity} />

          {/* Button */}
          <div className="px-6 pb-6">
            <button
              onClick={onClose}
              className="w-full py-3.5 bg-[#003759] hover:bg-[#00294a] text-white rounded-[10px] font-['Pretendard'] font-medium text-[19px] transition-colors"
            >
              자세한 기록 보기
            </button>
          </div>
      </motion.div>
    </motion.div>
  );
}

const AI_RESPONSES_DRAW = [
  "부드러운 선이네요! 마음이 차분한가요?",
  "강한 터치네요. 무언가 강렬한 감정이 있으신가요?",
  "색상이 점점 밝아지고 있어요. 기분이 조금 나아지고 있나요?",
  "여러 색이 섞이고 있네요. 복잡한 감정이시군요.",
  "천천히 그리고 계시네요. 집중하고 계신가요?",
  "빠르게 움직이시네요! 급한 감정이 있나요?",
  "원을 그리고 계시네요. 순환하는 생각이 있으신가요?",
  "어두운 색을 선택하셨네요. 무거운 마음이 있으신가요?",
  "밝은 색이에요! 좋은 감정이 떠오르시나요?",
  "자유롭게 그리시는 모습이 좋아요. 계속해보세요!",
];

const AI_RESPONSES_ERASE = [
  "지우고 싶은 감정이 있나요?",
  "다시 시작하고 싶은 마음이 드나봐요.",
  "비워내는 것도 용기예요.",
  "지우면서 마음도 정리되고 있나요?",
  "때로는 내려놓는 게 필요하죠.",
  "깨끗해지는 느낌, 시원한가요?",
  "지운 자리에 새로운 감정을 채워볼까요?",
  "천천히 지워도 괜찮아요. 서두르지 마세요.",
  "무엇을 지우고 계신지 궁금해요.",
  "지우개를 드셨군요. 마음 정리 중인가요?",
];

interface MainCanvasProps {
  aiMessage: string;
  isAiTyping: boolean;
  onDrawing: () => void;
  isChatOpen: boolean;
  onChatToggle: () => void;
  chatMessages: Array<{ role: 'user' | 'ai'; text: string }>;
  onSendMessage: (message: string) => void;
  brushSize: number;
  color: string;
  isEraser: boolean;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  isMobile?: boolean;
}

function MainCanvas({ aiMessage, isAiTyping, onDrawing, isChatOpen, onChatToggle, chatMessages, onSendMessage, brushSize, color, isEraser, canvasRef, isMobile }: MainCanvasProps) {
  const isDrawingRef = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  // Initialize canvas size
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      tempCanvas.getContext('2d')!.drawImage(canvas, 0, 0);
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.drawImage(tempCanvas, 0, 0, tempCanvas.width, tempCanvas.height, 0, 0, rect.width, rect.height);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [canvasRef]);

  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    if ('touches' in e) {
      return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
    }
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const drawLine = (from: {x: number, y: number}, to: {x: number, y: number}) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.globalCompositeOperation = isEraser ? 'destination-out' : 'source-over';
    ctx.strokeStyle = isEraser ? 'rgba(0,0,0,1)' : color;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  };

  const [hasDrawn, setHasDrawn] = useState(false);

  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    isDrawingRef.current = true;
    if (!hasDrawn) setHasDrawn(true);
    const pos = getPos(e);
    lastPos.current = pos;
    drawLine(pos, pos);
    onDrawing();
  };

  const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawingRef.current) return;
    const pos = getPos(e);
    drawLine(lastPos.current, pos);
    lastPos.current = pos;
  };

  const handlePointerUp = () => {
    isDrawingRef.current = false;
  };

  return (
    <div className="flex-1 bg-[#f8f9fa] flex items-center justify-center p-2 sm:p-8">
      <div className="relative bg-white rounded-2xl shadow-lg w-full h-full max-w-[1200px] overflow-hidden">
        {/* Corner decorations */}
        <div className="absolute border-[#d1d5dc] border-l-2 border-solid border-t-2 left-2 sm:left-4 rounded-tl-[10px] size-3 sm:size-[16px] top-2 sm:top-4 z-20 pointer-events-none" />
        <div className="absolute border-[#d1d5dc] border-r-2 border-solid border-t-2 right-2 sm:right-4 rounded-tr-[10px] size-3 sm:size-[16px] top-2 sm:top-4 z-20 pointer-events-none" />
        <div className="absolute border-[#d1d5dc] border-b-2 border-l-2 border-solid left-2 sm:left-4 rounded-bl-[10px] size-3 sm:size-[16px] bottom-2 sm:bottom-4 z-20 pointer-events-none" />
        <div className="absolute border-[#d1d5dc] border-b-2 border-r-2 border-solid right-2 sm:right-4 rounded-br-[10px] size-3 sm:size-[16px] bottom-2 sm:bottom-4 z-20 pointer-events-none" />

        {/* AI Real-time Response / Chat */}
        <motion.div
          animate={{
            width: isChatOpen ? (isMobile ? 'calc(100% - 16px)' : 360) : 'auto',
            boxShadow: isAiTyping ? '0 0 12px 4px rgba(101,194,251,0.25)' : '0 0 8px 0px rgba(101,194,251,0.1)',
          }}
          transition={{ width: { type: 'spring', damping: 30, stiffness: 200 }, boxShadow: { duration: 1.5, ease: 'easeOut' } }}
          className="absolute left-1/2 -translate-x-1/2 top-4 sm:top-8 bg-white/95 backdrop-blur-sm border border-[#65C2FB] rounded-2xl z-30 overflow-hidden max-w-[calc(100%-16px)] sm:max-w-none"
        >
          {/* Header - Always Visible */}
          <motion.button
            onClick={onChatToggle}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-4 py-2.5 transition-all duration-300 cursor-pointer hover:bg-gray-50/50"
          >
            <div className="flex items-center gap-2 justify-start flex-nowrap">
              {/* AI Badge */}
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <div className="relative">
                  <div className="size-2 rounded-full bg-[#65C2FB] animate-pulse" />
                  <div className="absolute inset-0 size-2 rounded-full bg-[#65C2FB] animate-ping" />
                </div>
                <span className="font-['Pretendard'] text-[10px] font-medium text-[#65C2FB] uppercase tracking-wider whitespace-nowrap">AI 실시간</span>
              </div>
              {/* Divider */}
              <div className="w-px h-3 bg-[#e5e7eb] flex-shrink-0" />
              {/* Message */}
              <p className="font-['Noto_Sans_KR'] text-[14px] text-[#6a7282] text-left whitespace-nowrap overflow-hidden text-ellipsis min-w-0">
                {isAiTyping ? (
                  <span className="inline-flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-[#65C2FB] animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="size-1.5 rounded-full bg-[#65C2FB] animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="size-1.5 rounded-full bg-[#65C2FB] animate-bounce" style={{ animationDelay: '300ms' }} />
                  </span>
                ) : aiMessage}
              </p>
              {isChatOpen ? (
                <ChevronUp className="size-4 text-[#65C2FB] flex-shrink-0 ml-auto" />
              ) : (
                <ChevronDown className="size-4 text-[#65C2FB] flex-shrink-0 ml-auto" />
              )}
            </div>
          </motion.button>

          {/* Expanded Chat Content */}
          <AnimatePresence>
            {isChatOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                className="border-t border-gray-100"
              >
                {/* Chat Messages */}
                <div className="h-[200px] sm:h-[280px] overflow-y-auto p-3 sm:p-4 space-y-3 bg-gradient-to-b from-white/50 to-gray-50/50">
                  {chatMessages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="size-14 rounded-full bg-gradient-to-br from-[#65C2FB]/20 to-[#4DB3F5]/20 flex items-center justify-center mb-3"
                      >
                        <div className="size-9 rounded-full bg-gradient-to-br from-[#65C2FB] to-[#4DB3F5] animate-pulse" />
                      </motion.div>
                      <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="font-['Pretendard'] font-medium text-gray-800 text-sm mb-1"
                      >
                        지금 어떤 감정이신가요?
                      </motion.p>
                      <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="font-['Noto_Sans_KR'] text-xs text-gray-400"
                      >
                        편하게 말씀해 주세요
                      </motion.p>
                    </div>
                  ) : (
                    chatMessages.map((msg, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: idx * 0.03, type: "spring", damping: 25, stiffness: 400 }}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {msg.role === 'ai' && (
                          <div className="size-6 rounded-full bg-gradient-to-br from-[#65C2FB] to-[#4DB3F5] flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                            <div className="size-1.5 rounded-full bg-white" />
                          </div>
                        )}
                        <div
                          className={`max-w-[75%] px-3 py-2 ${
                            msg.role === 'user'
                              ? 'bg-gradient-to-br from-[#65C2FB] to-[#4DB3F5] text-white rounded-[16px] rounded-tr-[4px] shadow-md shadow-[#65C2FB]/20'
                              : 'bg-white text-gray-800 rounded-[16px] rounded-tl-[4px] shadow-sm border border-gray-100'
                          }`}
                        >
                          <p className="font-['Noto_Sans_KR'] text-[13px] leading-relaxed">{msg.text}</p>
                        </div>
                      </motion.div>
                    ))
                  )}
                  {isAiTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="size-6 rounded-full bg-gradient-to-br from-[#65C2FB] to-[#4DB3F5] flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                        <div className="size-1.5 rounded-full bg-white" />
                      </div>
                      <div className="px-3 py-2.5 rounded-[16px] rounded-tl-[4px] bg-white border border-gray-100 shadow-sm">
                        <div className="flex gap-1.5">
                          <div className="size-2 rounded-full bg-[#65C2FB] animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="size-2 rounded-full bg-[#65C2FB] animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="size-2 rounded-full bg-[#65C2FB] animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Chat Input */}
                <div className="p-3 bg-white/80 border-t border-gray-100/50">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const input = e.currentTarget.elements.namedItem('message') as HTMLInputElement;
                      if (input.value.trim()) {
                        onSendMessage(input.value.trim());
                        input.value = '';
                      }
                    }}
                    className="flex gap-2"
                  >
                    <input
                      type="text"
                      name="message"
                      placeholder="감정을 표현해보세요..."
                      className="flex-1 px-3 py-2 rounded-full bg-gray-50 border border-gray-200 focus:border-[#65C2FB] focus:outline-none focus:ring-2 focus:ring-[#65C2FB]/20 font-['Noto_Sans_KR'] text-sm transition-all duration-200 placeholder:text-gray-400"
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-gradient-to-br from-[#65C2FB] to-[#4DB3F5] hover:shadow-lg hover:shadow-[#65C2FB]/30 rounded-full transition-all duration-200 flex-shrink-0"
                    >
                      <Send className="size-4 text-white" />
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Bottom right guide text */}
        <div className="absolute bottom-3 right-3 sm:bottom-8 sm:right-8 bg-[rgba(255,255,255,0.9)] border border-[#e5e7eb] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] px-2 py-1.5 sm:px-4 sm:py-2 z-20 pointer-events-none">
          <p className="font-['Noto_Sans_KR'] text-[10px] sm:text-[12px] text-[#6a7282] whitespace-nowrap">
            {isMobile ? '드래그하여 그리기' : '드래그하여 그리기 • 지우개는 왼쪽에서 선택'}
          </p>
        </div>

        {/* Canvas area */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Background character illustration */}
            {!hasDrawn && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500">
                <div className="relative w-[300px] h-[250px] sm:w-[600px] sm:h-[500px]">
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full opacity-20"
                    src={imgGeminiGeneratedImage2A8Kog2A8Kog2A8K2}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Canvas overlay for drawing */}
        <canvas
          ref={canvasRef}
          className={`absolute z-10 ${isEraser ? 'cursor-cell' : 'cursor-crosshair'}`}
          style={{ touchAction: 'none', top: 0, left: 0, width: '100%', height: '100%' }}
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={handlePointerUp}
          onMouseLeave={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerUp}
        />
      </div>
    </div>
  );
}

export default function EmotionDrawing() {
  const isMobile = useIsMobile();
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [canvasImage, setCanvasImage] = useState('');
  const [aiMessage, setAiMessage] = useState("아까 느꼈던 감정과 비슷한가요?");
  const [isAiTyping, setIsAiTyping] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'ai'; text: string }>>([]);
  const [brushSize, setBrushSize] = useState(4);
  const [color, setColor] = useState('#5EBDF7');
  const [isEraser, setIsEraser] = useState(false);
  const [undoStack, setUndoStack] = useState<ImageData[]>([]);
  const [redoStack, setRedoStack] = useState<ImageData[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const saveToUndoStack = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setUndoStack(prev => [...prev.slice(-30), imageData]);
    setRedoStack([]);
  }, []);

  const lastAiTime = useRef(0);
  const aiTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const handleDrawing = useCallback(() => {
    saveToUndoStack();
    const now = Date.now();
    if (now - lastAiTime.current < 3000) return;
    if (aiTimerRef.current) clearTimeout(aiTimerRef.current);
    lastAiTime.current = now;
    setIsAiTyping(true);
    aiTimerRef.current = setTimeout(() => {
      const responses = isEraser ? AI_RESPONSES_ERASE : AI_RESPONSES_DRAW;
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setAiMessage(randomResponse);
      setIsAiTyping(false);
    }, 1000);
  }, [saveToUndoStack, isEraser]);

  const handleUndo = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || undoStack.length === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const currentData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setRedoStack(prev => [...prev, currentData]);
    const prevData = undoStack[undoStack.length - 1];
    ctx.putImageData(prevData, 0, 0);
    setUndoStack(prev => prev.slice(0, -1));
  }, [undoStack]);

  const handleRedo = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || redoStack.length === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const currentData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setUndoStack(prev => [...prev, currentData]);
    const nextData = redoStack[redoStack.length - 1];
    ctx.putImageData(nextData, 0, 0);
    setRedoStack(prev => prev.slice(0, -1));
  }, [redoStack]);

  const handleClear = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    saveToUndoStack();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, [saveToUndoStack]);

  const handleSave = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    setCanvasImage(dataUrl);
    setShowResult(true);
  }, []);

  const handleDownload = useCallback(() => {
    const srcCanvas = canvasRef.current;
    if (!srcCanvas) return;

    const scale = 2;
    const W = 385 * scale;
    const pad = 24 * scale;
    const imgH = 230 * scale;

    const title = AI_TITLES[Math.floor(Math.random() * AI_TITLES.length)];
    const question = AI_QUESTIONS[Math.floor(Math.random() * AI_QUESTIONS.length)];
    const chips = [...EMOTION_CHIPS].sort(() => Math.random() - 0.5).slice(0, 2);
    const intensity = Math.floor(Math.random() * 40) + 45;

    // Pre-measure to get total height
    const measure = document.createElement('canvas').getContext('2d')!;
    measure.font = `${21 * scale}px Pretendard, sans-serif`;
    const titleLines: string[] = [];
    let tempLine = '';
    for (const ch of title) {
      if (measure.measureText(tempLine + ch).width > W - pad * 2) {
        titleLines.push(tempLine);
        tempLine = ch;
      } else tempLine += ch;
    }
    if (tempLine) titleLines.push(tempLine);

    measure.font = `500 ${16 * scale}px Pretendard, sans-serif`;
    const qLines: string[] = [];
    let qLine = '';
    for (const ch of question) {
      if (measure.measureText(qLine + ch).width > W - pad * 2 - 40 * scale) {
        qLines.push(qLine);
        qLine = ch;
      } else qLine += ch;
    }
    if (qLine) qLines.push(qLine);

    const s = (v: number) => v * scale;
    const chipH = s(32);
    const qBoxH = s(32) + qLines.length * s(24);
    const totalH = imgH + pad + s(16) + s(8) + titleLines.length * s(30) + s(24) + chipH + s(20) + s(20) + s(6) + s(10) + s(24) + s(1) + s(24) + qBoxH + pad;

    const c = document.createElement('canvas');
    c.width = W;
    c.height = totalH;
    const ctx = c.getContext('2d')!;

    // White background with rounded corners
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.roundRect(0, 0, W, totalH, s(20));
    ctx.fill();
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(0, 0, W, totalH, s(20));
    ctx.clip();

    // Image area
    ctx.fillStyle = '#f8fafe';
    ctx.fillRect(0, 0, W, imgH);
    ctx.drawImage(srcCanvas, 0, 0, W, imgH);

    let y = imgH + pad;

    // TODAY'S DOODLE
    ctx.font = `700 ${s(13)}px Pretendard, sans-serif`;
    ctx.fillStyle = '#65C2FB';
    ctx.textBaseline = 'top';
    ctx.fillText("TODAY'S DOODLE", pad, y);
    y += s(16) + s(8);

    // Title
    ctx.font = `400 ${s(21)}px Pretendard, sans-serif`;
    ctx.fillStyle = '#3f3f3f';
    for (const line of titleLines) {
      ctx.fillText(line, pad, y);
      y += s(30);
    }
    y += s(24);

    // Chips
    let chipX = pad;
    ctx.textBaseline = 'middle';
    for (const chip of chips) {
      ctx.font = `700 ${s(11)}px Pretendard, sans-serif`;
      const tw = ctx.measureText(chip.label).width;
      const dotR = s(5);
      const cPad = s(12);
      const gap = s(6);
      const chipW = cPad + dotR * 2 + gap + tw + cPad;

      ctx.fillStyle = chip.color + '15';
      ctx.strokeStyle = chip.color + '60';
      ctx.lineWidth = scale;
      ctx.beginPath();
      ctx.roundRect(chipX, y, chipW, chipH, chipH / 2);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = chip.color;
      ctx.beginPath();
      ctx.arc(chipX + cPad + dotR, y + chipH / 2, dotR, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = chip.color;
      ctx.fillText(chip.label, chipX + cPad + dotR * 2 + gap, y + chipH / 2);

      chipX += chipW + s(8);
    }
    y += chipH + s(20);
    ctx.textBaseline = 'top';

    // Intensity label
    ctx.font = `400 ${s(15)}px Pretendard, sans-serif`;
    ctx.fillStyle = '#9ca3af';
    ctx.fillText('INTENSITY', pad, y);
    ctx.font = `500 ${s(15)}px DM Sans, sans-serif`;
    ctx.fillStyle = '#1a1a2e';
    ctx.textAlign = 'right';
    ctx.fillText(`${intensity}%`, W - pad, y);
    ctx.textAlign = 'left';
    y += s(20);

    // Intensity bar
    const barH = s(3);
    ctx.fillStyle = '#f5f7fa';
    ctx.beginPath();
    ctx.roundRect(pad, y, W - pad * 2, barH, barH / 2);
    ctx.fill();
    ctx.fillStyle = '#65C2FB';
    ctx.beginPath();
    ctx.roundRect(pad, y, (W - pad * 2) * intensity / 100, barH, barH / 2);
    ctx.fill();
    y += barH + s(10) + s(24);

    // Divider
    ctx.fillStyle = '#f0f2f5';
    ctx.fillRect(pad, y, W - pad * 2, scale);
    y += scale + s(24);

    // AI Question box
    const qPadX = s(20);
    const qPadY = s(16);
    ctx.fillStyle = '#f8fafe';
    ctx.beginPath();
    ctx.roundRect(pad, y, W - pad * 2, qBoxH, s(12));
    ctx.fill();
    ctx.font = `500 ${s(16)}px Pretendard, sans-serif`;
    ctx.fillStyle = '#1a1a2e';
    let qY = y + qPadY;
    for (const ql of qLines) {
      ctx.fillText(ql, pad + qPadX, qY);
      qY += s(24);
    }

    ctx.restore();

    const link = document.createElement('a');
    link.download = `doodle-${new Date().toISOString().slice(0, 10)}.png`;
    link.href = c.toDataURL('image/png');
    link.click();
  }, []);

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = (message: string) => {
    const newUserMessage = { role: 'user' as const, text: message };
    setChatMessages(prev => [...prev, newUserMessage]);
    setIsAiTyping(true);
    setTimeout(() => {
      const randomResponse = AI_RESPONSES_DRAW[Math.floor(Math.random() * AI_RESPONSES_DRAW.length)];
      setAiMessage(randomResponse);
      const newAiMessage = { role: 'ai' as const, text: randomResponse };
      setChatMessages(prev => [...prev, newAiMessage]);
      setIsAiTyping(false);
    }, 1000);
  };

  return (
    <div className="h-dvh flex flex-col bg-gray-50">
      <Toolbar
        onUndo={handleUndo}
        onRedo={handleRedo}
        onClear={handleClear}
        canUndo={undoStack.length > 0}
        canRedo={redoStack.length > 0}
        isMobile={isMobile}
        onMenuToggle={() => setIsMobileMenuOpen(prev => !prev)}
      />
      <div className="flex-1 flex overflow-hidden min-h-0">
        {/* Desktop Sidebar */}
        {!isMobile && (
          <Sidebar
            brushSize={brushSize}
            onBrushSizeChange={setBrushSize}
            color={color}
            onColorChange={setColor}
            isEraser={isEraser}
            onEraserToggle={() => setIsEraser(prev => !prev)}
            onSave={handleSave}
            onDownload={handleDownload}
          />
        )}
        <MainCanvas
          aiMessage={aiMessage}
          isAiTyping={isAiTyping}
          onDrawing={handleDrawing}
          isChatOpen={isChatOpen}
          onChatToggle={handleChatToggle}
          chatMessages={chatMessages}
          onSendMessage={handleSendMessage}
          brushSize={brushSize}
          color={color}
          isEraser={isEraser}
          canvasRef={canvasRef}
          isMobile={isMobile}
        />
      </div>

      {/* Mobile Sidebar Drawer */}
      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/30"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed left-0 top-0 bottom-0 z-50 w-72"
            >
              <Sidebar
                brushSize={brushSize}
                onBrushSizeChange={setBrushSize}
                color={color}
                onColorChange={setColor}
                isEraser={isEraser}
                onEraserToggle={() => setIsEraser(prev => !prev)}
                onSave={() => { handleSave(); setIsMobileMenuOpen(false); }}
                onDownload={() => { handleDownload(); setIsMobileMenuOpen(false); }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Toolbar */}
      {isMobile && (
        <div className="bg-white border-t border-gray-200 px-3 py-2 flex flex-col gap-2">
          {/* Row 1: Brush sizes + Colors + Eraser */}
          <div className="flex items-center justify-center gap-1.5">
            {BRUSH_SIZES.map((size, i) => (
              <button
                key={size}
                onClick={() => { setBrushSize(size); if (isEraser) setIsEraser(false); }}
                className={`size-7 rounded-full flex items-center justify-center flex-shrink-0 border-2 ${brushSize === size && !isEraser ? 'border-[#65C2FB]' : 'border-gray-300'}`}
              >
                <div className={`${['size-1', 'size-1.5', 'size-2.5', 'size-3.5'][i]} rounded-full bg-gray-900`} />
              </button>
            ))}
            <div className="w-px h-6 bg-gray-200 mx-1.5 flex-shrink-0" />
            {COLORS.slice(0, 4).map((c) => (
              <button
                key={c}
                onClick={() => { setColor(c); if (isEraser) setIsEraser(false); }}
                className={`size-7 rounded-full flex-shrink-0 transition-transform ${color === c && !isEraser ? 'ring-2 ring-offset-1 scale-110' : ''}`}
                style={{ backgroundColor: c, ringColor: c }}
              />
            ))}
            <div className="w-px h-6 bg-gray-200 mx-1.5 flex-shrink-0" />
            <button
              onClick={() => setIsEraser(prev => !prev)}
              className={`p-1.5 rounded-lg flex-shrink-0 ${isEraser ? 'bg-[#E6F5FF] border border-[#65C2FB]' : 'hover:bg-gray-100'}`}
            >
              <svg className="size-5" fill="none" viewBox="0 0 21.7 20.2414">
                <path d={svgPaths.p1c565ac0} stroke={isEraser ? '#65C2FB' : '#6b7280'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </svg>
            </button>
          </div>
          {/* Row 2: Actions */}
          <div className="flex items-center gap-2">
            <button onClick={handleSave} className="flex-1 py-2 bg-[#65C2FB] hover:bg-[#4DB3F5] text-white rounded-lg font-['Pretendard'] font-medium text-sm transition-colors">
              낙서완료
            </button>
            <button onClick={handleDownload} className="py-2 px-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center gap-1.5">
              <Download className="size-4 text-gray-600" />
              <span className="font-['Pretendard'] text-sm text-gray-600">저장</span>
            </button>
          </div>
        </div>
      )}

      {/* Result Card Popup */}
      <AnimatePresence>
        {showResult && (
          <DoodleResultCard
            canvasImage={canvasImage}
            aiMessage={aiMessage}
            onClose={() => setShowResult(false)}
          />
        )}
      </AnimatePresence>

      {/* Onboarding Overlay */}
      <AnimatePresence>
        {showOnboarding && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px]"
            onClick={() => setShowOnboarding(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ delay: 0.1, type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 max-w-md mx-4 shadow-xl border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-8">
                <div className="size-14 rounded-full bg-gradient-to-br from-[#65C2FB]/20 to-[#4DB3F5]/20 flex items-center justify-center mx-auto mb-4">
                  <Brush className="size-7 text-[#65C2FB]" />
                </div>
                <h2 className="font-['Pretendard'] text-xl font-semibold text-gray-900 mb-2">이제, 느낀 대로 남겨볼까요?</h2>
                <p className="font-['Noto_Sans_KR'] text-sm text-gray-400">대화 속 감정을 낙서로 기록하는 시간이에요</p>
              </div>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="size-9 rounded-xl bg-[#65C2FB]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Palette className="size-4 text-[#65C2FB]" />
                  </div>
                  <div>
                    <p className="font-['Pretendard'] font-medium text-sm text-gray-900">손 가는 대로 그려보세요</p>
                    <p className="font-['Noto_Sans_KR'] text-xs text-gray-400 mt-1">색을 고르고 자유롭게 낙서해보세요. 잘 그리지 않아도 괜찮아요.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-9 rounded-xl bg-[#65C2FB]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Send className="size-4 text-[#65C2FB]" />
                  </div>
                  <div>
                    <p className="font-['Pretendard'] font-medium text-sm text-gray-900">AI가 조용히 곁에 있어요</p>
                    <p className="font-['Noto_Sans_KR'] text-xs text-gray-400 mt-1">상단의 <span className="text-[#65C2FB] font-medium">AI 실시간</span> 바를 눌러보세요. 낙서를 보며 한마디 건넬게요.</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowOnboarding(false)}
                className="w-full py-3 bg-gradient-to-r from-[#65C2FB] to-[#4DB3F5] text-white rounded-xl font-['Pretendard'] font-medium transition-all hover:shadow-lg hover:shadow-[#65C2FB]/25"
              >
                낙서 시작하기
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
