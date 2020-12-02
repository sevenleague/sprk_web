import Layout from '../components/Layout'

export default function Team() {
  return (
    <Layout>
      <div className="py-20 flex flex-col content-center items-center justify-center">
        <div className="text-6xl text-center font-bold text-white find__your">
          <h1 className="text-5xl md:text6xl mb-2 md:mb-0">
            Our team
          </h1>
        </div>
        <div className="flex flex-col md:flex-row">
        <div class="max-w-md w-full lg:flex mb-8 mr-0 md:mr-8">
          <div class="h-56 lg:w-56 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url('/hans.png')`}}>
          </div>
          <div class="w-64 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <div class="text-gray-900 font-bold text-xl mb-2">Hans Breiter</div>
              <p class="text-gray-700 text-base">Founder/Scientist</p>
            </div>
          </div>
        </div>

        <div class="max-w-md w-full lg:flex mb-8">
          <div class="h-56 lg:w-56 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url('/christina.png')`}}>
          </div>
          <div class="w-64 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <div class="text-gray-900 font-bold text-xl mb-2">Christina Breiter</div>
              <p class="text-gray-700 text-base">CEO</p>
            </div>
          </div>
        </div>
        </div>

        <div className="flex flex-col md:flex-row">
        <div class="max-w-md w-full lg:flex mb-8 mr-0 md:mr-8">
          <div class="h-56 lg:w-56 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url('/leanna.jpg')`}}>
          </div>
          <div class="w-64 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <div class="text-gray-900 font-bold text-xl mb-2">Leanne Chiang</div>
              <p class="text-gray-700 text-base">COO</p>
            </div>
          </div>
        </div>

        <div class="max-w-md w-full lg:flex mb-8">
          <div class="h-56 lg:w-56 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url('/celine.jpg')`}}>
          </div>
          <div class="w-64 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <div class="text-gray-900 font-bold text-xl mb-2">Celine Christory</div>
              <p class="text-gray-700 text-base">CFO</p>
            </div>
          </div>
        </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div class="max-w-md w-full lg:flex mb-8 mr-0 md:mr-8">
            <div class="h-56 lg:w-56 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url('/olivia.jpg')`}}>
            </div>
            <div class="w-64 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div class="mb-8">
                <div class="text-gray-900 font-bold text-xl mb-2">Olivia Sewell</div>
                <p class="text-gray-700 text-base">CMO</p>
              </div>
            </div>
          </div>

          <div class="max-w-md w-full lg:flex mb-8">
            <div class="h-56 lg:w-56 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url('/7l.png')`}}>
            </div>
            <div class="w-64 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div class="mb-8">
                <div class="text-gray-900 font-bold text-xl mb-2">Jim Wagner</div>
                <p class="text-gray-700 text-base">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
