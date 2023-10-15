import { programsList } from "../constants"

const ProgramsOffered = () => {
  const programsEl = programsList.map(x => {
    return (
      <div key={programsList.indexOf(x)} className="basis-[30%] rounded-lg p-5 bg-lime-200 hover:shadow-lg duration-300 box-border select-none cursor-pointer">
        <h3 className="text-md font-bold pb-3 text-green-900 uppercase">{x.title}</h3>
        <p className="text-emerald-900">{x.about}</p>
      </div>
    );
  });

  return (
    <section className="container mx-auto text-center md:my-24 my-12">
        <h1 className="md:text-5xl text-3xl font-semibold sm:font-bold leading-[1.15] mt-16 text-lime-900">Our Programs</h1>
        <p className="text-lime-800 p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="flex md:flex-row md:gap-0 gap-12 flex-col justify-between my-6 px-6">
          {programsEl}
        </div>
    </section>
  )
}
export default ProgramsOffered