import Article from "../Article";
import Titlesub from "../Titlesub";

export default async function Articles() {
  const response = await fetch(`https://hellotravelersblog.com/wp-json/wp/v2/posts?per_page=6&_fields=id,slug,title,featured_media,date,excerpt`);
  const articlesData = await response.json();


  return (
    <div className="mt-36">
      <Titlesub
        title="Nos derniers Articles"
        sub="on est passionné et on adore le montrer, retrouvez tous nos derniers articles!"
        classes="text-center flex flex-col items-center"
      />
      <div className="grid grid-cols-12 gap-8 mt-16 ">
        {articlesData.map((el, i) => <Article {...el} classes="col-span-12 sm:col-span-6 md:col-span-4" key={i} />)}

      </div>
    </div>
  );
}


