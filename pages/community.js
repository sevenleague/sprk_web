import Layout from '../components/Layout'

export default function Community() {
  return (
    <Layout>
      <div className="py-20 px-12 md:px-32">
        <div className="text-6xl text-center font-bold text-white find__your">
          <h1>
            Community Guidelines
          </h1>
        </div>
        <div className="blurb">
          <p>Welcome to Sprk’s community; a community built upon </p>
          <h4 className="font-bold text-4xl text-white mb-4">respect, mindfulness and genuineness. </h4>
          <p>We have a zero-tolerance policy for any content or behavior that violates these guidelines. Our member support team reserves the right to exercise their judgment in all cases.</p>
          <h4 className="font-bold text-white text-2xl mb-4">Dos:</h4>
          <div className="pl-4">
            <span className="text-black font-bold text-xl">Respect all users</span>
            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li>Sprk is a diverse community. It is fundamental that people’s beliefs, interests, property and identity are all respected. Hate speech, abusive or intrusive behavior, bullying, rudeness, misogyny, discrimination, racism, transphobia and homophobia will <span className="font-bold">NOT</span> be tolerated. We encourage users to report anyone who has violated these guidelines.</li>
            </ul>
            <span className="text-black font-bold text-xl">Be kind and authentic</span>
            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li>While Sprk uses eAI and neuroscience to recommend matches to you, not all your matches will be your ‘type’ or ‘the one’. However, every person you interact with deserves to be treated with kindness and respect.</li>
              <li>Don’t pretend to be someone you’re not. Don’t sacrifice your authenticity for someone else. Instead, find someone who accepts you for who you truly are!</li>
            </ul>
            <span className="text-black font-bold text-xl">Be Mindful</span>
            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li>Be careful when giving out personal information that may compromise your safety</li>
            </ul>
          </div>
          <h4 className="font-bold text-white text-2xl mb-4">Don'ts:</h4>
          <div className="pl-4">
            <span className="text-black font-bold text-xl">Profile regulations</span>
            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li>No overt sexual content </li>
              <li>Keep it respectful and appropriate!</li>
            </ul>
            <span className="text-black font-bold text-xl">Photos regulations</span>
            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li>No nudity</li>
              <li>Swimwear photos (i.e. at the beach or pool) are allowed, but provocative undergarment photos are not permitted</li>
              <li>Face must be clearly visible in at least one photo</li>
              <li>No pornographic material</li>
              <li>No offensive photos</li>
              <li>No graphic hunting photos</li>
              <li>No guns</li>
              <li>No watermarks or text overlaid</li>
            </ul>
            <span className="text-black font-bold text-xl">Harassment</span>
            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li>Do not engage or encourage others to harass and/or deliberately target another user. This includes (but not limited to) stalking, bullying, intimidation, inappropriate photos/texts, wrongfully reporting others.</li>
            </ul>
            <span className="text-black font-bold text-xl">Hate Speech</span>
            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li>Any content that promotes, advocates for, or condones racism, bigotry, hatred, or violence against individuals or groups based on factors like (but not limited to) race, ethnicity, religious affiliation, disability, gender, age, national origin, sexual orientation, or gender identity is strictly prohibited.</li>
            </ul>
            <span className="text-black font-bold text-xl">Solicitations</span>
            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li>Sprk is not a marketplace, please refrain from creating accounts to sell, advertise or promote things.</li>
            </ul>
            <span className="text-black font-bold text-xl">Scams/Impersonation</span>
            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li>Sprk has a zero-tolerance policy on predatory behavior of any kind. Any account attempting to obtain other users' private information for fraudulent/illegal activities will be banned and reported to authorities.</li>
              <li>Users caught sharing their own financial information with the intent of receiving money will be banned from Sprk.</li>
              <li>Be yourself! Pretending to be someone else, regardless of the reason, may lead to being banned.</li>
            </ul>
            <span className="text-black font-bold text-xl">Illegal usage</span>
            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li>Using Sprk for illegality is not tolerated and will subsequently lead to being banned and reported to authorities.</li>
            </ul>
            <span className="text-black font-bold text-xl">Minors</span>
            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li>Sprk is for 18+ users, any accounts pretending to be older will be banned.</li>
              <li>If minors are included in any photos they MUST be appropriately clothed (i.e. no bare stomach pictures). This is safer for both the minors and users.</li>
            </ul>
          </div>
          <h4 className="font-bold text-white text-2xl mb-4">Reporting is an anonymous and permanent action.
            You will not see their profile again, nor will they see yours.
            When you report a profile, you will immediately disappear from that member's view and they will not be able to view or retrieve the conversation or match. 
          </h4>
        </div>
      </div>
    </Layout>
  )
}
