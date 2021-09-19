export default function Container(props) {
    return (
        <div className="container  py-8 px-4 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <div class='p-2 py-2 max-w-sm mx-auto bg-white shadow-md space-y-2 sm:py-1'>
                {props.children}
            </div>
        </div>
    )
}