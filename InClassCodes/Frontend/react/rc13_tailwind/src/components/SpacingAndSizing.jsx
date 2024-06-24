const SpacingAndSizing = () => {
  return (
    <>
     <div>
      <h1 className=" text-2xl text-center">Spacing And Sizing</h1>
      <button className=" bg-blue-600 text-white p-2 m-1">Tıkla</button>
      <button className=" bg-red-600 text-white px-2">Tıkla</button>
      <button className=" bg-green-600 text-white px-3 ms-4">Tıkla</button>
      <button className=" bg-green-600 text-white px-3 ml-4">Tıkla</button>
      <button className=" bg-green-600 text-white px-3 py-3 mx-4">Tıkla</button>
    </div>
    <div>
        <button className=" bg-green-500 text-white mx-4 px-4 py-2 rounded-md border border-red-500">Click</button>
        <button className=" bg-green-500 text-white mx-4 px-4 py-2 rounded-[10px] border-[3px] border-red-500">Click</button>
        <button className=" bg-green-500 text-white mx-4 px-6 py-6 rounded-full w-20 h-20">Click</button>
        <button className=" bg-green-500 text-white mx-4 px-6 py-6 rounded-[50%] w-20 h-20">Click</button>
    </div>

    <div>
        <button className=" bg-indigo-300 rounded-full py-2 mx-1 w-20">Press</button>
        <button className=" bg-indigo-300 rounded-full py-2 mx-1 w-[15%]">Press</button>
        <button className=" bg-indigo-300 rounded-full py-2 mx-1 w-1/4">Press</button>
    </div>
    </>
   
  );
};

export default SpacingAndSizing;
