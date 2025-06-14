import { useEffect, useRef } from "react"

export default function AutoResizeTextarea(props) {
  const textareaRef = useRef(null)

  useEffect(() => {
    if(textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [props.value])

  return (
    <textarea
      ref={textareaRef}
      value={props.value}
      rows="1"
      className={props.className}
    />
  )
}
