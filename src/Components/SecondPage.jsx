import Content1 from '../Components/Content1'
import Im3 from '../images/Together.png'
import Im4 from '../images/User.png'
import Im5 from '../images/conversation.png'

export default function SecondPage() {
  return (
    <div>
      <Content1 img={Im3} headline = "Grow Together" text="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. "/>
      <Content1 img={Im4} headline="Flowing Conversations" text="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."/>
      <Content1 img={Im5} rel = "absolute"headline="Your Users" text="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."/>
    </div>
  )
}
