import { Outlet, Link, useNavigate, Navigate } from "react-router-dom"
// import Login from "./Login"

const PrivateRouter = () => {
  //? Context, Redux, Mobx, Zustang (Global State management, Local Staroge, session)
  const isLogged = true
  //   const navigate = useNavigate()
  return <div> {isLogged ? <Outlet /> : <Navigate to={"/login"} />} </div>
}

export default PrivateRouter

//? useNavigate (Hook) ile Navigate(Component) aslında aynı işi yapar. Yani yönlendirme işlemini gerçekleştirir.
//? Aralarindaki fark kullanım yerleridir. Hook olan bir event ya da useEefect hook'u nun içerisi gibi yerlerde kullanılır. (Fonkisyionların kullanıldığı yerler)

//? Diğeri ise bir component olduğu için JSX içeriside yönlendirme yapmak gerektiği durumlarda kullanılır.

//? Link ise kullanıcıdan bir girdi beklenildiği durumlarda kullanılaiblir.
