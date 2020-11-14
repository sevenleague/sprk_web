import Layout from '../components/Layout'

export default function Reporting() {
  return (
    <Layout>
       <div className="py-20 px-12 md:px-32">
        <div className="text-6xl text-center font-bold text-white find__your">
          <h1>
            Reporting policy
          </h1>
        </div>
        <div className="blurb">
          <h4 className="font-bold text-4xl text-white mb-4">The safety and respect of our users are extremely important to us. If someone has violated community guidelines online or offline, please report them. You may report users you have matched with as well as users you have not.</h4>
          <p>We strongly encourage you to block users exhibiting suspicious behavior or who makes you uncomfortable.</p>
          <p>Any users who believe they have been a victim of a crime or their match has committed a crime, please report it to law enforcement.</p>
          <p>Reporting is an anonymous and permanent action.
You will not see their profile again, nor will they see yours.
When you report a profile, you will immediately disappear from that user’s account and the both of you will not be able to view or retrieve the conversation or match.
</p>
        <span className="text-black font-bold text-2xl">How to report someone: </span>
            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li>To report someone go to the user’s profile </li>
              <li>Choose a reason for reporting or write in your own </li>
              <li>Agree to our team checking your message with that user (This allows us to take appropriate action) (If you do not agree, you will still be able to submit your report)</li>
              <li>Submit your report </li>
            </ul>

        <p>
We take reporting very seriously. Our team works to promptly investigate on-line reportings, assess and take appropriate action. In the event where law enforcement is brought in, we will fully cooperate with them in any investigation.
</p>
        </div>
      </div>
    </Layout>
  )
}
