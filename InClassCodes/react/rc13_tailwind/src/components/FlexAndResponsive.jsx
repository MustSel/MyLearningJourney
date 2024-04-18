

const FlexAndResponsive = () => {
  const arr = [1,2,3,4,5,6,7,8]
  return (
    <>
     <div>
        <h1 className=" text-center font-bold">Flex And Responsive</h1>
    </div>

    <div className=" flex flex-wrap">
        <div className=" basis-1/4 bg-red-200">01</div>
        <div className="basis-1/4 bg-red-300">02</div>
        <div className="basis-1/4 bg-red-400">03</div>
        <div className="basis-1/4 bg-red-500">04</div>
        <div className="basis-1/2 bg-red-600">05</div>
        <div className="basis-1/2 bg-red-700">06</div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {arr.map((item,i)=>(
        <div key={i} className=" bg-teal-500">
          {item}
        </div>
      ))}
    </div>
    </>
   
  )
}

export default FlexAndResponsive