function About() {
  return (
    <div className="bg-green-700 h-screen flex justify-center">
      <div className="w-10/12 h-5/6 bg-green-500 self-center border-green-300 border-2 rounded-2xl p-10 overflow-y-auto ">
       <h1 className="text-center text-white text-3xl">This app works using a secondary server for backend. This server can take 20-30 seconds to wake up. Sitting in dashboard or My Images should wake it up (only needs to be done on initializing)<br />
       <br />Each user gets their own 'My Images' page, so be sure to login unless you want to contribute to the public page <br /> <br />
       There are the Major elements in this: <br /> <br />
       1: Dog/Cat/Fox <br />
       These pages will on 'Add Url' put an image into your dash and images pages, with priority 100. <br />
       These utilize thecatapi.com, randomfox.ca and random.dog for the random images. <br /> <br />
       2: Dashboard <br />
       This page allows you to add, change, and delete images via url and a numeric prio (no decimals).
       <br /> It's worth noting that anything compatable with the 'img' type of html will work in this (as long as it's just that element), thus many things can get crammed into your 'My Images' page. 
       <br />This is also why some things won't work (including some dog images, as they don't work with the html img type). 
       <br /> <br /> 3: The My Images page <br />
       This contains all the images you've added, sorted first by priority, then secondly by each items 'hidden id'.
       <br /> You can also delete and get urls here.
       </h1>
      </div>
    </div>
  )
}

export default About
