import { MdOutlineDarkMode } from "react-icons/md"
import { PiSunBold } from "react-icons/pi"
import Color from "./Color";

export default function Sidebar(props) {
    const colors = ['bg-red-300', 'bg-green-200', 'bg-blue-300', 'bg-purple-300', 'bg-orange-200']
    const colorPalettes = colors.map(color => {
        return <Color
            key={color}
            backgroundColor={color}
            bg={props.bg}
            setBg={props.setBg}
            handleTodoBgChange={props.handleTodoBgChange}
        />
    })


    return (
        <div className="md:h-screen w-max flex flex-col justify-center items-center gap-y-[10px] md:gap-y-[50px] rounded-full p-[50px]">
            <div className="bg-gray-600 flex md:flex-col items-center gap-[15px] rounded-full p-[15px]">
                <button 
                    className="cursor-pointer bg-gray-500 text-gray-100 h-[50px] min-w-[50px] text-3xl font-light rounded-[100px]" 
                    onClick={props.newTodo}
                >+</button>
                <div className="flex md:flex-col items-center gap-[10px]">{colorPalettes}</div>
            </div>
            <div className="flex md:flex-col items-center gap-x-[10px] gap-y-[50px]">
                <div className="bg-gray-600 flex md:flex-col rounded-full p-[10px]">
                    <MdOutlineDarkMode 
                        id='darkModeIcon'
                        className={`cursor-pointer ${props.mode === 'dark' ? 'bg-gray-500' : ''} text-4xl text-gray-100 rounded-full p-[10px]`} 
                        onClick={(e) => props.handleMode(e)}            
                    />
                    <PiSunBold 
                        className={`cursor-pointer ${props.mode === 'light' ? 'bg-gray-500' : ''} text-4xl text-gray-100 rounded-full p-[10px]`}
                        onClick={(e) => props.handleMode(e)}  
                    />
                </div>
                <div>
                    <p 
                        className={`cursor-pointer ${props.mode === 'dark' ? 'text-gray-100' : 'text-gray-600'}`}
                        onClick={props.handleDelete}
                    >Remove</p>
                    <p 
                        className={`cursor-pointer ${props.mode === 'dark' ? 'text-gray-100' : 'text-gray-600'}`}
                        onClick={props.handleDeleteAll}
                    >Remove All</p>
                </div>
            </div>
        </div>
    )
}