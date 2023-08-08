import pets from  '../assets/images/pets.jpg'

function Home() {
  return (
    <div style={{ backgroundImage: `url(${ pets })`}}  className='flex justify-center  bg-cover bg-fixed'>
      <div className='flex place-items-center h-screen'>
        <h3 className='p-5 bg-black bg-opacity-50 text-white rounded-xl text-3xl font-bold'>Gather Your Animals on PinAnimal</h3>
      </div>
  </div>
  )
}

export default Home
