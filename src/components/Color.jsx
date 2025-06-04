export default function Color(props) {
    return (
        <button 
            className={`cursor-pointer ${props.backgroundColor} h-[30px] w-[30px] ${props.bg === props.backgroundColor ? 'h-[40px] w-[40px]': 'h-[30px] w-[30px]'} rounded-full`} 
            onClick={() => {
                props.setBg(props.backgroundColor)
                props.handleTodoBgChange(props.backgroundColor)
            }}
        ></button>
    )
}