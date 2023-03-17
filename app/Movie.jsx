import Link from "next/link";
import Image from 'next/image';


export default function Movie({ title, id, poster_path, releace_date }) {

    const imagePath = 'https://image/tmdb.org/t/p/original'
    console.log(poster_path)

    return(
        <div>
            <h1>{title}</h1>
            <h2>Release date</h2>
            <Link href={`/asd`}>
                <Image src={imagePath + poster_path} alt={title} width="800" height="800"/>
            </Link>
        </div>
    )
}

