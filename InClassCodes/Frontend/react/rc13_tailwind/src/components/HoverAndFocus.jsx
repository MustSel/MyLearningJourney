

const HoverAndFocus = () => {
  return (
    <>
    <div>
        <h1 className=" text-center font-bold">Hover And Focus</h1>

        <button className=" w-40 bg-sky-300 hover:bg-sky-400 hover:shadow-md shadow-slate-200 text-slate-100 rounded-full py-2 mx-1">Save</button>
        <button className=" text-white bg-yellow-400 px-5 py-2.5 rounded-lg hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-300 ml-2">Sarı</button>
    </div>

    <div>
        <input type="email" className=" border border-gray-300 my-3 mx-4 text-gray-900 focus:outline-red-500 block w-1/2 p-3 rounded-lg peer" />
        <p className=" mt-2 text-red-600 text-sm invisible peer-invalid:visible">Please input a valid email</p>
    </div>
    </>
    
  )
}

export default HoverAndFocus