
import Image from "next/image"
import Link from "next/link"


export default async function Article(props) {

 const response = await fetch(`https://hellotravelersblog.com/wp-json/wp/v2/media/${props.featured_media}`)
 const image = await response.json();
 return (
  <article className={`relative overflow-hidden rounded-lg shadow transition hover:shadow-lg ${props.classes}`}>
   <img
    fill
    alt={`Image de ${props.title.rendered}`}
    src={image.source_url}
    className="absolute inset-0 h-full w-full object-cover"
   />
   <div className="relative bg-gradient-to-t from-gray-900/90 to-gray-900/30 h-full pt-32 sm:pt-48 lg:pt-64">
    <div className="p-4 sm:p-6 h-full flex flex-col justify-end">
     <p className="text-sm text-white/70">{new Date(props.date).toLocaleDateString()}</p>

     <Link href={`/article/${props.slug}`} >
      <h3 className="mt-0.5 text-lg text-white">{props.title.rendered}</h3>

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
       {props.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "")}
      </p>
     </Link>
    </div>
   </div>
  </article>
 )
}
