import Layout from '../components/Layout'

export default function IndexPage() {
  return (
    <Layout>
      <div className="py-20 flex flex-col md:flex-row items-center justify-center">
        <img src="/iphone.png" />
        <div className="text-6xl text-center font-bold text-white find__your">
          <h1>
            Find
          </h1>
          <h1>
            Your
          </h1>
          <h1>
            Sprk
          </h1>
        </div>
      </div>
    </Layout>
  )
}
