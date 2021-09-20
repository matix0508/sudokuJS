export default function Space(props) {
    const colorClicked = (props.clicked && props.changable) ? ' bg-yellow-200' : '';
    const colorFixed = !props.changable ? ' bg-gray-200': '';

    return (
        <div className={""}>
            <button
                className={"p-2 border-2 h-10 w-10 text-black" + colorClicked + colorFixed} 
                value={props.value}
                onKeyDown={props.onKeyDown}
                onClick={props.changable && props.onClick}
                >{props.value}</button>
        </div>
    )
}

