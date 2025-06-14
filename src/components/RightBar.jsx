export default function RightBar(props) {
    return (
        <div className={`bg-gray-300 h-screen w-[400px] absolute top-[0px] right-[0px] transition duration-500 ease-in-out flex flex-col ${props.rightBarShow ? 'translate-x-[0px]' : 'translate-x-[100%]'}`}>
            <button 
                className="cursor-pointer"
                onClick={() => props.setRightBarShow(false)}
            >Close</button>
            <textarea
                value={props.rightBarTitle}
                className="resize-none overflow-hidden text-2xl font-semibold" 
                onChange={(e) => props.setRightBarTitle(e.target.value)}
            ></textarea>
            <textarea 
                value={props.rightBarContent}
                className="resize-none overflow-hidden" 
                onChange={(e) => props.setRightBarContent(e.target.value)}
            ></textarea>
            {
                props.updatingCreating === 'creating'
                ?
                <button 
                    className="cursor-pointer" 
                    onClick={(e) => {
                        props.newTodo(e, props.rightBarTitle, props.rightBarContent)
                        props.setRightBarTitle('Title')
                        props.setRightBarContent('Content')
                        props.setRightBarShow(false)
                    }}
                >Create</button>
                :
                <div>
                    <button 
                        className="cursor-pointer" 
                        onClick={() => {
                            props.update()
                            props.setRightBarShow(false)
                        }}
                    >Update</button>
                    <button
                        className="cursor-pointer" 
                        onClick={() => {
                            props.handleDelete()
                            props.setRightBarShow(false)
                        }}
                    >Delete</button>
                </div>
            }
        </div>
    )
}