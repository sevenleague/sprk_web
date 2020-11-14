import Layout from '../components/Layout'

export default function Dictionary() {
  return (
    <Layout>
       <div className="py-20 px-12 md:px-32">
        <div className="text-6xl text-center font-bold text-white find__your">
          <h1>
            Dictionary
          </h1>
        </div>
        <div className="blurb">
          <h4 className="font-bold text-4xl text-white mb-4">5 Categories</h4>
          <p><span className="text-sprk-blue font-bold">Preservers </span>are private, more reserved partners, tend to have deeply held convictions that believe in defending. They believe the past has much to teach us, they like the idea of chivalry although what they defend can range from free love to older norms. </p>
          
          <p><span className="text-sprk-blue font-bold">Mediators </span>are the gentle partners, the introvert, negotiators, who defend conviction but will adapt in the right circumstances. They do accept change as long as the other is principled in their suggestions. </p>
          <p><span className="text-sprk-blue font-bold">Thinkers </span>are the inquisitive partner, the omnivore who likes to consider other viewpoints and balance them with theirs. They can overthink things yet jump into something new with both feet once they have come to a decision. </p>
          <p><span className="text-sprk-blue font-bold">Seekers </span>can be the extroverts, active partner, who like spontaneity above what is custom; they still accept older concepts about relationships, but can rapidly adapt for the right person. They are more likely to try something new in a spontaneous way, but can step back and accept that maybe it doesn’t work for them. </p>
          <p><span className="text-sprk-blue font-bold">Adventurers </span>are bold, audacious partner, who can be focused on making something new happen, or be willing to try what is new in the world; they can be rebellious, and willing to walk away from older norms without looking back. </p>

          <h4 className="font-bold text-4xl text-white mb-4">Sprk patterns</h4>

        
            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li><span className="text-sprk-blue font-bold">Bounce:</span>     This gets at how high a person's resilience to losses may be. When this is high, it means a person can bounce back from bad outcomes more quickly than others. This tends to increase with age as people experience more loss and have to adapt to it. </li>
            </ul>

            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li><span className="text-sprk-blue font-bold">Conservation: </span>  This quantifies how much a person looks at the balance of positive and negative things in their life, and gives more weight to the bad things and prioritizes avoidance responses. This is called “loss aversion” in the behavioral economics world; its discovery is part of the effort to understand why we make irrational decisions. Putting more weight on bad outcomes relative to good ones is an irrational process, but it does have survival value in the context that it is better to avoid being eaten than to eat. </li>
            </ul>

            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li><span className="text-sprk-blue font-bold">Assurance:</span>  When things have more and more value, they also tend to have more and more risk. This trait gets at how rapidly you start to feel the uncertainty or risk associated with decisions as they have more value. This means that the value something has to us may be less than the objective measure of that value, and this difference relates to our aversion to risk. This tends to be low when we are teenagers, and increase with age. As the cost of something goes up for instance, we may have the finances to make the investment, but will consider the risk of having less money in our accounts more seriously. </li>
            </ul>

            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li><span className="text-sprk-blue font-bold">Ante:    </span>   This trait is very similar to the idea of an “ante” in poker, which gets at how much you are willing to put into the betting pool to enter a poker game. Another way to say this is that the ante reflects how much you are willing to pay to invest in something that has an uncertain positive outcome. </li>
            </ul>

            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li><span className="text-sprk-blue font-bold">Insurance: </span>    This measure reflects how much an individual is willing to pay to reduce a potentially bad outcome from occurring. It thus, is analogous to an insurance premium. It relates to how much a person is willing to lose to avoid a bad result. </li>
            </ul>

            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li><span className="text-sprk-blue font-bold">The Hilltop:</span>      This trait gets at how much what is unknown about a positive situation gets in the way of you getting involved or acquiring it. It specifically reflects the maximum amount of uncertainty you have to overcome before making an action like buying something at a store. We all experience this before we approach someone we like when we worry about rejection. </li>
            </ul>

            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li><span className="text-sprk-blue font-bold">The Ravine: </span>    his measure reflects how much what is unknown about a negative thing gets in the way of you taking a defensive action like locking a door or calling someone for help. It is the counterpoint to “Peak Risk” but in the avoidance domain, where you make a decision to avoid something. An example might be that of deciding to lug a raincoat along for an important meeting when you are wearing good clothes and the weather forecast says there is a 50% chance of rain.  </li>
            </ul>

            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li><span className="text-sprk-blue font-bold">Good Tipping Point:   </span>    This quantifies how many positive features or monetary value something must have before you decide to be involved with it or acquire it. Once something is past this value, the “Peak Risk” will have less effect on what you decide to do, and you are more likely to approach the thing, event or person under consideration. </li>
            </ul>

            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li><span className="text-sprk-blue font-bold">Bad Tipping Point:  </span>   This measure is like the “enticement” but in the area of avoidance. It reflects the negative value an event or thing has to have before you begin to avoid or seek some type of security against such a negative outcome. Once something is past this negative threshold, the “trepidation” will have less effect on what you decide to do, and you are more likely to avoid the thing, event or person under consideration. </li>
            </ul>

            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li><span className="text-sprk-blue font-bold">Estate:  </span>  This reflects the amount of territory or space mapped out by your measure of “The Hilltop” and “Good Tipping Point”, and might be analogous to the area of land in a country. In this case, the area reflects how your experience of what is unknown about a positive situation and the monetary value of something (or its positive features) interact in your mind. Some of us have big estates and others have very modest ones, and the bigger the positive area, the more complexity a person must manage in deciding how they approach things.</li>
            </ul>

            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li><span className="text-sprk-blue font-bold">Debt: </span>  This reflects the amount of territory or space mapped out by your measure of “The Ravine” and “Bad Tipping Point”, and is analogous to the “Estate” but in the negative domain of what you wish to avoid and consider potential threats. In this case, the negative area reflects the interaction between your experience of what is unknown about a negative situation and the losses related to that negative situation. High values of debt indicate you have greater complexity to manage with regard to how you avoid things. </li>
            </ul>

            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li><span className="text-sprk-blue font-bold">Balance:     </span>    This measure is like an old-fashioned scale, with one side holding negative preferences and the other holding positive preferences. If the scale is more tipped toward the positive, the scale tilts in that direction and you tend to approach events more than avoid them. This represents a sort of emotional balance you feel between things and events and people you wish to approach versus those you wish to avoid. </li>
            </ul>

            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li><span className="text-sprk-blue font-bold">Swing:     </span>    Your “Balance” measure will vary a bit for many different reasons, such as being hungry for some foods at a particular time, or not, given you have just eaten. This range, in the balance between positive preferences and negative preferences is important as it gets at your capacity to adapt to different circumstances. Sometimes, having a low range can be very important such as when you need to judge your consistency of response under specific circumstances (e.g., “she’s calm and efficient during an emergency”). </li>
            </ul>

            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li><span className="text-sprk-blue font-bold">Compatibility:   </span>Sometimes people can have strong preferences (i.e., biases) for the same thing, reflecting conflict, or having low preferences for something, reflecting indifference. This gets at the consistency or compatibility of approach and avoidance, and how you can both like and dislike something, or be indifferent to both its positive and negative features. We all have examples of this, for instance, strongly liking strong chocolate cake, but strongly disliking how much effort you must then put into exercise to work off the calories. </li>
            </ul>

            <ul class="list-disc text-white text-lg pl-8 mb-4">
              <li><span className="text-sprk-blue font-bold">Distance:    </span>The “Compatibility” measure will vary for many reasons, just like the “Balance” measure. In this case, the range will reflect how much you go between having conflicting preferences, and having indifferent ones. “Most” preferences tend to have no conflict or indifference – how much you like something will be balanced by how much you don’t dislike it, or how much you don’t like something will be balanced by how much you dislike it. The term “most” is like the percentage of people voting across many candidates for an election – “most” may just be 25% of the population voting for the winning candidate. </li>
            </ul>
        </div>
      </div>
    </Layout>
  )
}
