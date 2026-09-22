"use client"
import { useRef, useEffect, useState } from "react"

export default function RichEditor({ value, onChange }: { value: string; onChange: (html: string) => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const initial = useRef(value)
  const [words, setWords] = useState(0)

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = initial.current
      const w = ref.current.innerText.trim().split(/\s+/).filter(Boolean).length
      setWords(w)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const input = () => {
    if (!ref.current) return
    onChange(ref.current.innerHTML)
    setWords(ref.current.innerText.trim().split(/\s+/).filter(Boolean).length)
  }

  const cmd = (c: string, v?: string) => {
    ref.current?.focus()
    document.execCommand(c, false, v)
    input()
  }

  const link = () => {
    const url = window.prompt("Link URL (https://…)")
    if (url) cmd("createLink", url)
  }

  const btn = "h-8 min-w-[32px] px-2 rounded-lg border border-zinc-200 text-xs font-bold text-zinc-700 hover:bg-zinc-50 inline-flex items-center justify-center gap-1"

  return (
    <div className="rounded-xl border border-zinc-300 overflow-hidden bg-white">
      <div className="flex flex-wrap gap-1 p-2 border-b border-zinc-200 bg-zinc-50">
        <button type="button" onClick={() => cmd("bold")} className={btn} title="Bold"><b>B</b></button>
        <button type="button" onClick={() => cmd("italic")} className={btn} title="Italic"><i>I</i></button>
        <button type="button" onClick={() => cmd("underline")} className={btn} title="Underline"><u>U</u></button>
        <button type="button" onClick={() => cmd("formatBlock", "h2")} className={btn} title="Heading">H2</button>
        <button type="button" onClick={() => cmd("formatBlock", "h3")} className={btn} title="Subheading">H3</button>
        <button type="button" onClick={() => cmd("formatBlock", "p")} className={btn} title="Paragraph">¶</button>
        <button type="button" onClick={() => cmd("insertUnorderedList")} className={btn} title="Bullet list">• List</button>
        <button type="button" onClick={() => cmd("insertOrderedList")} className={btn} title="Numbered list">1. List</button>
        <button type="button" onClick={() => cmd("formatBlock", "blockquote")} className={btn} title="Quote">❝</button>
        <button type="button" onClick={link} className={btn} title="Insert link">🔗 Link</button>
        <button type="button" onClick={() => cmd("removeFormat")} className={btn} title="Clear formatting">✕ Clear</button>
        <span className="ml-auto self-center text-[11px] text-zinc-500 font-semibold">{words} words</span>
      </div>
      <div
        ref={ref}
        contentEditable
        onInput={input}
        className="min-h-[280px] max-h-[480px] overflow-auto p-4 text-[15px] leading-7 text-zinc-800 outline-none prose prose-zinc max-w-none"
      />
    </div>
  )
}
