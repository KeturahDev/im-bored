import { ipsum1 } from "./utils/ipsums"

export default function Home() {
  return (
   <main className='flex flex-col items-center'>
    <h1 className='font-bold'>What is This</h1>
    <div className='flex flex-col items-center my-1 mx-36 gap-2'>
      <p>Welcome to an over-engineered to-do app, inspired by The Bored Api.</p>
      <p>This is essentially just one of those apps a dev makes to experiment with technology, but its also kinda useful. Add your todos as usual, but if you want inspiration theres a page where you can generate things to do, and you can adjust the settings for what type of suggestions you'd like.</p>

      <p>Everything else will now be cat-ipsum (for now...)</p>

      <p>
        {ipsum1}
      </p>
      <p>
        {ipsum1}
      </p>
    </div>
    <p></p>
   </main>
  )
}
