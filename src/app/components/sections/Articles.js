import Article from "../Article";
import Titlesub from "../Titlesub";

export default async function Articles() {


  return (
    <div className="mt-36">
      <Titlesub
        title="Nos derniers Articles"
        sub="on est passionné et on adore le montrer, retrouvez tous nos derniers articles!"
        classes="text-center flex flex-col items-center"
      />
      <div className="grid grid-cols-12 gap-8 mt-16 ">
        
      </div>
    </div>
  );
}
