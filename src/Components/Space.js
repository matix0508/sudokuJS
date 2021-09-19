import React, {useState} from "react";



export default function Space(props) {
    const [value, setValue] = useState("")
    const [changable, setChangable] = useState(true);
    const colorClicked = (props.clicked && props.changable) ? ' bg-yellow-200' : '';
    const colorFixed = !props.changable ? ' bg-gray-200': '';

    return (
        <div className={""}>
            <button
                className={"p-2 border-2 h-10 w-10 text-black" + colorClicked + colorFixed} 
                value={value}
                onKeyDown={props.onKeyDown}
                onClick={changable && props.onClick}
                >{value}</button>
        </div>
    )
}

