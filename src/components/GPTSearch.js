
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BACKGROUND } from '../utils/constant'


const GPTSearch = () => {

 
  return (
    <div className="relative pt-28 px-4 min-h-screen text-white">

      <div className="fixed inset-0 -z-10">
        <img
          src={BACKGROUND}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="fixed inset-0 bg-black/70 -z-10"></div>

      <div className="max-w-4xl mx-auto">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  )
}

export default GPTSearch
