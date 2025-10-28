export default function Tooltip({text}:{text:string}) {
  return (
    <span
      title={text}
      className="inline-flex items-center justify-center w-4 h-4 text-[10px] border rounded-full align-middle cursor-help"
    >
      i
    </span>
  );
}
