import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <section className=" min-h-screen w-full header-image relative">
      <Navbar/>
      <div className="lg:w-3/5 w-11/12 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="md:text-6xl sm:text-4xl text-3xl font-semibold sm:font-bold leading-[1.15] mt-16">A non-profitable school<br/> run by NDHCN</h1>
        <p className="sm:text-lg text-md py-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non id veniam earum quod et tempore recusandae, atque blanditiis voluptatum necessitatibus dolor cupiditate doloremque at, alias aliquid voluptas dolores asperiores soluta!</p>
        <a className="border uppercase font-semibold rounded-sm border-white py-4 px-8 mt-4 inline-block hover:bg-lime-500 hover:border-lime-500 duration-300" href="/">Tell Me More</a>
      </div>
    </section>
  )
}
export default Home