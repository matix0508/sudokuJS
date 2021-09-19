export default function Square(props) {
    return (
        <div className="grid grid-cols-3 border-4">
            {props.children}
        </div>
    )
}