import { FaEyeDropper } from "react-icons/fa6"
import { GiPin } from "react-icons/gi"
import { IoMdColorFill } from "react-icons/io"
import AutoResizeTextarea from "./autoResizeTextarea.jsx"
import { useState } from "react"

export default function Todo(props) {
    return (
        <div 
            draggable
            // style={{ left: props.todo.x, top: props.todo.y, position: 'absolute' }} 
            className={`cursor-grab ${props.todo.bgColor} min-h-[350px] max-h-[350px] min-w-[350px] max-w-[350px] overflow-y-scroll hide-scrollbar flex flex-col justify-between ${props.todo.isSelected ? 'border-[5px] border-green-300' : ''} p-[25px]`} 
            onClick={() => props.handleSelect(props.todo.id)}
        >
            <div className="flex flex-col">
                <AutoResizeTextarea
                    value={props.todo.title}
                    onChange={(e) => props.updateTitle(e, props.todo.id)}
                    className="resize-none overflow-hidden text-2xl font-semibold outline-none"
                />
                <AutoResizeTextarea
                    value={props.todo.content}
                    onChange={(e) => props.updateContent(e, props.todo.id)}
                    className="resize-none overflow-hidden outline-none"
                />
            </div>
            <div className="flex justify-between items-end pt-[25px]">
                <div className="flex items-center gap-x-[5px]">
                    <GiPin 
                        className="cursor-pointer" 
                        onClick={() => props.pin(props.todo.id)} 
                    />
                </div>
                <p className="cursor-default text-sm">{props.todo.date}</p>
            </div>
        </div>
    )
}   