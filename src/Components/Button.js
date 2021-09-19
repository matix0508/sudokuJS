export default function Button(props) {
    const colors = {
        green: "from-green-300 to-green-600",
        blue: "from-blue-300 to-blue-600",
        indigo: "from-indigo-300 to-indigo-600"
    }
    return (
        <button onClick={props.onClick} className={" w-25 block my-2 mx-4 px-4 py-2 rounded-md text-center bg-gradient-to-br " + colors[props.color]} >
            {props.children}
        </button>
    )
}