import React, { useState } from 'react'

const UseStateObject = () => {
    // const [ad, setAd] = useState("Mehmet")
    // const [soyad, setSoyad] = useState("Yilmaz")
    // const [meslek, setMeslek] = useState("Tester")
    // const [maas, setMaas] = useState(25000)

    const [kisi, setKisi] = useState({
        ad:"Mehmet",
        soyad:"Yılmaz",
        meslek:"Tester",
        maas: 20000,
        mood: "Happy",
    })

    const [toggle, setToggle] = useState(true)
    const handleMood = () => {
        setKisi({...kisi, mood: toggle? "Sad" : "Happy"})
        setToggle(!toggle)
    }
    // const adDegistir= ()=> {
    //     setAd("Ahmet")
    // }
  return (
    <>
        <h1>UseState Object Example</h1>

        <h2>AD:{kisi.ad}</h2>
        <h2>SOYAD:{kisi.soyad}</h2>
        <h2>MESLEK:{kisi.meslek}</h2>
        <h2>MAAS:{kisi.maas}</h2>

        <h2>MADDIYAT:{kisi.mood}</h2>

        <button onClick={()=> setKisi({...kisi, ad:"Ahmet"})}>ad degistir</button>
        <button onClick={()=> setKisi({...kisi, soyad:"Ozturk"})}>soyad degistir</button>
        <button onClick={()=> setKisi({...kisi, meslek:"Developer"})}>meslek degistir</button>
        <button onClick={()=>setKisi({...kisi, maas: kisi.maas+5000})}>maas arttir</button>
        <button onClick={()=>setKisi({...kisi, maas: kisi.maas-5000})}>maas azalt</button> 
        <button onClick={handleMood}>Happy/Sad</button>
    </>
  )
}

export default UseStateObject